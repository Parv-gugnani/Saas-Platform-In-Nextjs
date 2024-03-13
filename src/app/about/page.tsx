import { HeroScrollDemo } from "@/components/scrollfunc";

import { ContainerScroll } from "@/components/ui/scroll-anim";
import Image from "next/image";
import React from "react";
import { BackgroundBeams } from "@/components/ui/backbeam";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <BackgroundBeams />
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our company About page! Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Ut varius nisi sit amet quam dictum
        suscipit. Duis aliquam facilisis nisi.
      </p>

      <h2 className="text-2xl font-bold my-10">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl">
          <div className="flex justify-center">
            <Image
              src="/parv.jpg"
              alt="parvimg"
              width="100"
              height="100"
              className="rounded-full"
            />
          </div>
          <h3 className="text-xl font-semibold mb-1">Parv Gugnani</h3>
          <p className="text-gray-400 mb-5">Full Stack Developer</p>
          <p className="text-gray-600 text-clip">
            I am a Full Stack developer and working on a few projects for my
            personal experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
