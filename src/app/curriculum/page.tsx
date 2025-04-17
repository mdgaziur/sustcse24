"use client";

import Link from "next/link";
import {useEffect} from "react";

export default function CurriculumPage() {
  useEffect(() => {
    document.body.style.overflowY = "auto";
  });

  return (
    <div className="min-h-screen flex flex-col items-center">
      <nav className="p-5 flex sm:justify-end justify-center w-full font-semibold text-foreground-secondary gap-5">
        <Link className="md:text-lg text-[12px]" href="/">Home</Link>
        <Link className="md:text-lg text-[12px]" href="/coming-soon">Books and References</Link>
        <Link className="md:text-lg text-[12px]" href="/coming-soon">Events</Link>
      </nav>
      <h1 className="p-5 text-center font-mono">Curriculum</h1>
      <div className="flex-1 flex flex-col items-center gap-5 p-5 w-full">
        <a className="p-2 text-xl font-semibold border-1 rounded-sm hover:bg-[#e0e0e0] hover:text-[#0e0e0e] transition-all" href={"./curriculum_19-20.pdf"} target="_blank" download={true}>Download</a>
        <iframe className={"w-full rounded-lg"} height="1024px" src={"./curriculum_19-20.pdf"}></iframe>
      </div>
    </div>
  )
}