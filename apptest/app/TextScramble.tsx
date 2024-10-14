"use client";

import React from "react";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import { pre } from "framer-motion/client";

const page = () => {
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (pRef.current) {
      const tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });
      tl.to(pRef.current, {
        duration: 1,

        scrambleText: {
          text: "This is new Text",
          chars: "$^%#$#@#@#@35220",
          revealDelay: 0.5,
          tweenLength: false,
        },
      });

      tl.to(pRef.current, {
        duration: 1,
        scrambleText: {
          text: "This is new Text",
          chars: "XO",
          revealDelay: 0.5,
          speed: 0.3,
          newClass: "myClass",
        },
      });
    }
  });
  return (
    <section className="h-screen flex items-center justify-center ">
      <div ref={pRef} className="text-3xl text-red-500"></div>
    </section>
  );
};

export default page;
