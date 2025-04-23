"use client";

import {useEffect} from "react";
import NavBar from "@/components/nav";
import Head from "next/head";

export default function CurriculumPage() {
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
        <a className="p-1 text-md font-semibold border-1 rounded-sm hover:bg-[#e0e0e0] hover:text-[#0e0e0e] transition-all" href={"./curriculum_19-20.pdf"} target="_blank" download={true}>Download</a>
        <iframe className={"w-full rounded-lg"} height="1024px" src={"./curriculum_19-20.pdf"}></iframe>
      </div>
    </div>
  )
}