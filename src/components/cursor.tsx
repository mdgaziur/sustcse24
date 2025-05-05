"use client";
import {RefObject, useEffect, useRef} from "react";

let currentPosX = 0;
let currentPosY = 0;
let lastScrollPosX = 0;
let lastScrollPosY = 0;

// Safari fires both mousemove and mouseenter after any touch event. We want to ignore those
// events in order to hide the cursor on touchscreen without any pointer device.
// To make that work, the value is set to 2 every time a touch even is fired. Subsequent
// calls to mousemove and mouseenter decrements this by 1. When it reaches 0, mousemove and
// mouseenter are handled normally.
let ignoreMouse = 0;

function getRefInnerElement<T>(ref: RefObject<T>): RefObject<HTMLSpanElement> {
  return ref as RefObject<HTMLSpanElement>;
}

function mouseUp<T, A>(e: MouseEvent, cursorRef: RefObject<T>, cursorInnerRef: RefObject<A>) {
  if (ignoreMouse !== 0) {
    ignoreMouse -= 1;
    return;
  }

  getRefInnerElement(cursorRef).current.style.transform = "scale(1)";

  getRefInnerElement(cursorInnerRef).current.style.height = "20px";
  getRefInnerElement(cursorInnerRef).current.style.width = "20px";
}

function mouseDown<T, A>(e: MouseEvent, cursorRef: RefObject<T>, cursorInnerRef: RefObject<A>) {
  if (ignoreMouse !== 0) {
    ignoreMouse -= 1;
    return;
  }

  getRefInnerElement(cursorRef).current.style.transform = "scale(0.7)";

  const el = document.elementFromPoint(e.clientX, e.clientY);
  if (el!.getAttribute("onclick") != null || el!.getAttribute("href") != null) {
    getRefInnerElement(cursorInnerRef).current.style.height = "100%";
    getRefInnerElement(cursorInnerRef).current.style.width = "100%";
  }
}

function mouseMove<T, B>(e: MouseEvent, cursorRef: RefObject<T>, cursorInnerRef: RefObject<B>) {
  if (ignoreMouse !== 0) {
    ignoreMouse -= 1;
    return;
  }

  currentPosY = e.clientY + (document.body.scrollTop || document.documentElement.scrollTop);
  currentPosX = e.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft);

  getRefInnerElement(cursorRef).current.style.top = `${currentPosY}px`;
  getRefInnerElement(cursorRef).current.style.left = `${currentPosX}px`;

  if (getRefInnerElement(cursorRef).current.style.opacity == null
    || getRefInnerElement(cursorRef).current.style.opacity === "0"
    || getRefInnerElement(cursorRef).current.style.opacity === "") {
    getRefInnerElement(cursorRef).current.style.opacity = "1";
  }

  getRefInnerElement(cursorInnerRef).current.style.height = "20px";
  getRefInnerElement(cursorInnerRef).current.style.width = "20px";

  const el = document.elementFromPoint(e.clientX, e.clientY);
  if (el!.getAttribute("onclick") != null || el!.getAttribute("href") != null) {
    getRefInnerElement(cursorInnerRef).current.style.transform = "scale(1.5)";
  } else {
    getRefInnerElement(cursorInnerRef).current.style.transform = "scale(1)";
  }
}

function mouseEnter<T>(e: MouseEvent, cursorRef: RefObject<T>) {
  if (ignoreMouse !== 0) {
    ignoreMouse -= 1;
    return;
  }

  getRefInnerElement(cursorRef).current.style.top = `${e.y}px`;
  getRefInnerElement(cursorRef).current.style.left = `${e.x}px`;
  getRefInnerElement(cursorRef).current.style.opacity = "1";
}

function mouseOut<T>(e: MouseEvent, cursorRef: RefObject<T>) {
  if (ignoreMouse !== 0) {
    ignoreMouse -= 1;
    return;
  }

  getRefInnerElement(cursorRef).current.style.opacity = "0";
}

export default function Cursor() {
  const cursorRef = useRef(null);
  const cursorInnerRef = useRef(null);

  useEffect(() => {
    document.body.addEventListener("mousemove", e => mouseMove(e, cursorRef, cursorInnerRef));
    document.body.addEventListener("mousedown", e => mouseDown(e, cursorRef, cursorInnerRef));
    document.body.addEventListener("mouseup", e => mouseUp(e, cursorRef, cursorInnerRef));
    document.body.addEventListener("mouseleave", e => mouseOut(e, cursorRef));
    document.body.addEventListener("mouseenter", e => mouseEnter(e, cursorRef));
    document.body.addEventListener("touchend", () => {
      ignoreMouse = 2;
    });
    document.body.addEventListener("touchstart", () => {
      ignoreMouse = 2;
    });
    document.body.addEventListener("touchmove", () => {
      ignoreMouse = 2;
    });
    document.body.addEventListener("touchcancel", () => {
      ignoreMouse = 2;
    });
    document.addEventListener("scroll", () => {
      const scrollPosY = document.body.scrollTop || document.documentElement.scrollTop;
      const scrollPosX = document.body.scrollLeft || document.documentElement.scrollLeft;

      const scrollPosXDelta = scrollPosX - lastScrollPosX;
      const scrollPosYDelta = scrollPosY - lastScrollPosY;

      lastScrollPosX = scrollPosX;
      lastScrollPosY = scrollPosY;

      currentPosX += scrollPosXDelta;
      currentPosY += scrollPosYDelta;

      getRefInnerElement(cursorRef).current.style.top = `${currentPosY}px`;
      getRefInnerElement(cursorRef).current.style.left = `${currentPosX}px`;
    });
  }, []);

  return (
    <div className="relative">
      <div
        ref={cursorRef}
        className="opacity-0 absolute z-50 flex items-center justify-center w-20 h-20 -translate-1/2 pointer-events-none"
        style={{
          transition: "transform 250ms ease, opacity 250ms ease"
        }}
      >
        <div className="transition-all w-5 h-5 backdrop-invert-100 rounded-full" ref={cursorInnerRef}></div>
      </div>
    </div>
  )
}