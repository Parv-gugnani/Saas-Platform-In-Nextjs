"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Ref } from "react";
import { useScroll } from "framer-motion";
import React from "react";
import { Card } from "@/components/ui/scroll-anim";
import { CardContent } from "@/components/ui/card";

const BlogPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl text-center mt-5">
        Blogs
      </h1>
      This is a blog BlogPage
      <CardContent>This is my blog click to open</CardContent>
    </div>
  );
};

export default BlogPage;
