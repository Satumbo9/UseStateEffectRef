"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import car1 from "./img/car1.webp";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Flip from "gsap-trial/Flip";

// const FlipCard: React.FC = () => {};

export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const [isFlipped1, setisFlipped1] = useState<boolean>(false);
  const [isFlipped2, setisFlipped2] = useState<boolean>(false);
  const [isScaled, setisScaled] = useState<boolean>(false);

  const handleFlip = () => {
    if (cardRef.current) {
      setisScaled((prev) => !prev);
      gsap.to(cardRef.current, {
        // rotationY: isFlipped1 ? 0 : 180,
        duration: 0.6,

        scale: isScaled ? 1 : 1.4,

        // transformOrigin: "50% 50%",
        ease: "power1.inOut",
      });
      gsap.to(backRef.current, {});
    }
  };
  return (
    <main className="flex h-screen items-center justify-center bg-sky-300">
      <div
        ref={cardRef}
        onClick={handleFlip}
        className="cursor-pointer bg-red-500"
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
    </main>
  );
}
