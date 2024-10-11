"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import { Card } from "@/components/ui/scroll-anim";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl text-center mt-5">
        Blogs
      </h1>
      <p>This is a blog BlogPage</p>
      <CardContent>This is my blog click to open</CardContent>
    </div>
  );
};

export default BlogPage;
