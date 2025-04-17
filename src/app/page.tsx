"use client";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {EaselPlugin} from "gsap/EaselPlugin";
import {TextPlugin} from "gsap/TextPlugin";
import Link from "next/link";
import PageStyles from "./page.module.css";
import Image from "next/image";
import SustLogo from "./sust.png";

const GSAP_TIMESCALE = 1.75;

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin,MotionPathPlugin,EaselPlugin,TextPlugin);

export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const tl = gsap.timeline({
      id: "main_timeline"
    });

    tl.to(".title-container", {
      top: "0",
      duration: 1,
    });

    tl.to(".title", {
      text: "SUST CSE 2024",
      delay: 0.25,
      duration: 1,
    });

    tl.to(".stock-footage-container", {
      opacity: .9,
      duration: 1,
    });

    tl.to(document.body, {
      overflowY: "scroll"
    });

    tl.to(".title-container", {
      background: "transparent",
      duration: 0.5
    });

    tl.to(".title", {
      color: "#e0e0e0",
      duration: 0.5
    }, "<");

    const nav_links = document.querySelectorAll("nav > a");
    for (let i = nav_links.length - 1; i >= 0; i--) {
      const nav_link = nav_links[i];

      tl.to(nav_link, {
        opacity: 1,
        marginTop: 0,
        // Multiplying it by GSAP_TIMESCALE to keep the original speed.
        // Not doing so results in it being too fast.
        duration: 0.25 * GSAP_TIMESCALE,
      });
    }

    const motto_second_part = document.createElement("div");
    motto_second_part.textContent = "future";
    const motto_second_part_underline = document.createElement("div");
    motto_second_part_underline.classList.add(PageStyles["motto-second-part-underline"]);
    motto_second_part.appendChild(motto_second_part_underline);

    tl.to(".motto", {
      text: "Engineering our code for the future",
      duration: 2,
    }).call(() => {
      const motto = document.querySelector(".motto")!;
      const motto_first_part = document.createElement("span");
      motto_first_part.innerHTML = "Engineering our code for the&nbsp;";

      motto.textContent = "";
      motto.appendChild(motto_first_part);
      motto.appendChild(motto_second_part);
    });

    tl.to(motto_second_part, {
      color: "#fbbf18",
      duration: 1,
    });

    tl.to(motto_second_part_underline, {
      width: "100%",
      duration: 1,
    }, "<");

    tl.to(".skip-intro-button", {
      display: "none",
    }, "end");

/*    tl.to(".scroll-indicator-container", {
      opacity: 1,
      duration: 1,
    });*/

    tl.timeScale(GSAP_TIMESCALE);
  }, { scope: container });

/*  function skipIntro() {
    const timeline = gsap.getById("main_timeline");
    timeline!.seek("end");
  }*/

  return (
    <main ref={container}>
{/*      <button
        className="skip-intro-button absolute top-5 left-5 p-3 pl-5 pr-5 rounded-sm bg-[#0f0f0f] text-foreground-secondary z-20"
        onClick={skipIntro}>
        Skip Intro
      </button>*/}
      <header className="h-screen w-screen fixed top-0 left-0">
        <nav className="p-5 flex absolute right-0 top-0 z-20 sm:justify-end justify-center w-full font-semibold text-foreground-secondary gap-5">
          <Link className="-mt-14 opacity-0 md:text-lg text-[12px]" href="/curriculum">Curriculum</Link>
          <Link className="-mt-14 opacity-0 md:text-lg text-[12px]" href="/coming-soon">Books and References</Link>
          <Link className="-mt-14 opacity-0 md:text-lg text-[12px]" href="/coming-soon">Events</Link>
        </nav>
        <div className="stock-footage-container absolute h-screen w-screen opacity-0 z-0">
          <video className="stock-footage object-cover h-full w-full opacity-90" src="stock.mp4" loop={true} muted={true} autoPlay={true}></video>
        </div>
        <div className="title-container z-10 bg-white h-screen -top-full w-screen absolute sm:gap-10 gap-5 left-0 flex flex-col justify-center items-center">
          <Image className="md:w-50 w-25" src={SustLogo} alt="Logo of SUST" />
          <h1 className="title text-[#0e0e0e] font-mono">SUST</h1>
          <h2 className={`motto ${PageStyles['motto']} font-mono text-center`}></h2>
        </div>

{/*        <button
          className="scroll-indicator-container z-40 absolute opacity-0 bottom-10 left-1/2 w-15 h-15 border-1 border-[#aaaaaa] hover:border-[#ffffff] hover:bg-white hover:*:fill-black transition-colors rounded-full"
          onClick={() => document.querySelector(".students-list")!.scrollIntoView( {
            behavior: "smooth",
          })}>
           Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools
          <svg className={`${PageStyles["scrolldown-indicator"]} w-7 h-7 left-1/2 -translate-1/2 fill-[#aaaaaa] transition-colors`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 407.437 407.437">
            <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>
          </svg>
        </button>*/}
      </header>
    </main>
  );
}
