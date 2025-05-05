"use client";

import React, {useState} from "react";
import NavBar from "../../components/nav";
import {CURRICULUM} from "./curriculum_19_20";

export const metadata = {
  title: "SUST CSE 24 - Curriculum"
};

export default function CurriculumPage() {
  type TableState = {
    [key: string]: boolean;
  }
  const [tableState, setTableState] = useState<TableState>({});

  return (
    <div className="min-h-screen flex flex-col items-center">
      <NavBar/>
      <div className="flex-1 flex flex-col items-center gap-5 p-5 w-full">
        <h2>Courses</h2>
        <span className={"text-sm"}><i>Click on the rows to expand them and see more details</i></span>
        <a
          className="p-1 text-md font-semibold border-1 rounded-sm hover:bg-[#e0e0e0] hover:text-[#0e0e0e] transition-all"
          href={"./curriculum_19-20.pdf"} target="_blank" download={true}>Download Curriculum</a>
        <div className={"max-w-full overflow-x-auto"}>
          {
            CURRICULUM.map((year, year_idx) => (
              <React.Fragment key={year_idx}>
                {
                  year.map((semester, semester_idx) => (
                    <React.Fragment key={semester_idx}>
                      <h3 className={"text-2xl font-semibold tracking-tighter mt-5 mb-5"}>Year {year_idx + 1} -
                        Semester {semester_idx + 1}</h3>
                      <table className={"max-w-2xl md:w-2xl w-auto sm:text-sm text-[12px]"}>
                        <thead>
                        <tr>
                          <td className={"p-5 border-1"}>Course Id</td>
                          <td className={"p-5 border-1"}>Course Title</td>
                          <td className={"p-5 border-1"}>Contact Hours</td>
                          <td className={"p-5 border-1"}>Credits</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                          semester.map((course, idx) => (
                            <React.Fragment key={idx}>
                              <tr className={"hover:bg-[#0e0e0e]"} onClick={() => {
                                tableState[`${year_idx}${semester_idx}${idx}`] = !tableState[`${year_idx}${semester_idx}${idx}`];
                                setTableState(JSON.parse(JSON.stringify(tableState)));
                              }}>
                                <td className={"p-5 border-1"}>
                                  {course.course_id}
                                  <h1>
                                    {tableState[`${year_idx}${semester_idx}${idx}`]}
                                  </h1>
                                </td>
                                <td className={"p-5 border-1"}>{course.course_title}</td>
                                <td className={"p-5 border-1"}>{course.contact_hours}</td>
                                <td className={"p-5 border-1"}>{course.credits}</td>
                              </tr>
                              {
                                (course.details !== "" || course.textbooks.length > 0 || course.references.length > 0
                                  || course.prerequisites.length > 0) && tableState[`${year_idx}${semester_idx}${idx}`] &&
                                  <tr>
                                      <td className={"p-5 border-1"} colSpan={5}>
                                          <div className="flex flex-col gap-5">
                                              <p dangerouslySetInnerHTML={{__html: course.details}}></p>
                                            {course.textbooks.length > 0 &&
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
                    </React.Fragment>
                  ))
                }
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </div>
  )
}