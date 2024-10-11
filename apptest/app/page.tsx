"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import car1 from "./img/car1.webp";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const [width, setWidth] = useState("100px");
  const [height, setHeight] = useState("100px");
  const imgRef = useRef(null);

  const handleClick = () => {
    console.log("Image Clicked!!!!");

    if (imgRef.current) {
      console.log("Styled being applied");

      // It's possible to change styles and properties through useRef

      // setWidth((imgRef.current.style.width = "900px"));
      // setWidth((imgRef.current.style.height = "auto"));
    }
  };

  useEffect(() => {
    console.log("Component Loaded " + imgRef.current);
  });

  return (
    <div
      className="cursor-pointer"
      ref={imgRef}
      onClick={handleClick}
      // style={{ display: "inline-block" }}
    >
      <p>Hello my name is Eddie</p>
      <Image
        priority
        src={car1}
        width={500}
        height={500}
        alt="image of my dream card"
      />
    </div>
  );
}
