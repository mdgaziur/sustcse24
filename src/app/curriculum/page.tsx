"use client";

import {useEffect, useState} from "react";
import NavBar from "@/components/nav";
import Head from "next/head";
import {CURRICULUM} from "@/app/curriculum/curriculum_19_20";
import React from "react";

export default function CurriculumPage() {
  const [tableState, setTableState] = useState<boolean[]>(new Array(CURRICULUM.length).fill(false));

  useEffect(() => {
    document.body.style.overflowY = "auto";
  });

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>SUST CSE 24 - Curriculum</title>
      </Head>
      <NavBar />
      <h2 className="p-5 text-center">Curriculum</h2>
      <div className="flex-1 flex flex-col items-center gap-5 p-5 w-full">
        <a className="p-1 text-md font-semibold border-1 rounded-sm hover:bg-[#e0e0e0] hover:text-[#0e0e0e] transition-all" href={"./curriculum_19-20.pdf"} target="_blank" download={true}>Download PDF</a>
        <h2>Courses</h2>
        <span><i>Click on the rows to expand them and see more details</i></span>
        <div className={"md:w-5xl w-full overflow-x-auto flex justify-center"}>
          <table>
            <thead>
            <tr>
              <td className={"p-5 border-1"}>Year - Semester</td>
              <td className={"p-5 border-1"}>Course Id</td>
              <td className={"p-5 border-1"}>Course Title</td>
              <td className={"p-5 border-1"}>Contact Hours</td>
              <td className={"p-5 border-1"}>Credits</td>
            </tr>
            </thead>
            <tbody>
            {
              CURRICULUM.map((course, idx) => (
                <React.Fragment key={idx}>
                  <tr className={"hover:bg-[#0e0e0e]"} onClick={() => {
                    const state = tableState.map(s => s);
                    state[idx] = !state[idx];
                    setTableState(state);
                  }}>
                    <td className={"p-5 border-1"}>{course.year} - {course.semester}</td>
                    <td className={"p-5 border-1"}>{course.course_id}</td>
                    <td className={"p-5 border-1"}>{course.course_title}</td>
                    <td className={"p-5 border-1"}>{course.contact_hours}</td>
                    <td className={"p-5 border-1"}>{course.credits}</td>
                  </tr>
                  {
                    (course.details !== "" || course.textbooks.length > 0 || course.references.length > 0
                      || course.prerequisites.length > 0) && tableState[idx] &&
                      <tr>
                          <td className={"p-5 border-1"} colSpan={5}>
                              <div className="flex flex-col gap-5">
                                  <p dangerouslySetInnerHTML={{__html: course.details}}></p>
                                { course.textbooks.length > 0 &&
                                    <div>
                                      {course.textbooks.length !== 0 && <b>Textbooks:</b>}
                                        <ol className={"pl-2"}>
                                          {
                                            course.textbooks.map((textbook, idx) => (
                                              <li key={idx}>{textbook}</li>
                                            ))
                                          }
                                        </ol>
                                    </div>
                                }
                                {
                                  course.references.length > 0 &&
                                    <div>
                                        <b>References:</b>
                                        <ol className={"pl-2"}>
                                          {
                                            course.references.map((reference, idx) => (
                                              <li key={idx}>{reference}</li>
                                            ))
                                          }
                                        </ol>
                                    </div>
                                }
                                {
                                  course.prerequisites.length > 0 &&
                                    <div>
                                        <b>Prerequisite:</b>
                                        <ol className={"pl-2"}>
                                          {
                                            course.prerequisites.map((prerequisite, idx) => (
                                              <li key={idx}>{prerequisite}</li>
                                            ))
                                          }
                                        </ol>
                                    </div>
                                }
                              </div>
                          </td>
                      </tr>
                  }
                </React.Fragment>
              ))
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}