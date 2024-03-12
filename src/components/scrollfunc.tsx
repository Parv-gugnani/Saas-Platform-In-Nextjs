"use client";
import React from "react";
import { ContainerScroll } from "./ui/scroll-anim";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll users={peaple} titleComponent={null} />
    </div>
  );
}

const peaple = [
  {
    name: "John Doe",
    designation: "Software Engineer",
    image: "",
    badge: "Gold",
  },
  {
    name: "Jane Smith",
    designation: "UI/UX Designer",
    image: "",
    badge: "Silver",
  },
];
