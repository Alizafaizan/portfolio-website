"use client";
import { useEffect } from "react";
// for animate to scroll library
import AOS from "aos";
import "aos/dist/aos.css";

import React from "react";
import { Deatail } from "./deatail";
import { Sidebar } from "./sideBar";
import MobileCard from "@/app/components/mobileComponenets/card";
import MobileEducation from "@/app/components/mobileComponenets/education";
import MobileExpeirence from "@/app/components/mobileComponenets/expirenec";
import MobileSkills from "@/app/components/mobileComponenets/skills";
import MobileProjects from "@/app/components/mobileComponenets/projects";
import MobileContact from "@/app/components/mobileComponenets/contact";

const MainPage = () => {
  // useeffects for AOS
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (

    <div>
      {/* mobile view */}
      <div className="overflow-x-hidden bg-white text-xl h-screen md:hidden">
          {/* Card */}
          <MobileCard/>
          {/* Education */}
          <MobileEducation/>
          {/* Experience */}
          <MobileExpeirence/>
          {/* Skills */}
          <MobileSkills/>
          {/* Projects */}
          <MobileProjects/>
          {/* Contact */}
          <MobileContact/>
      </div>
      {/* dekstop view */}
      <div className="hidden md:flex md:overflow-hidden md:h-screen">
        {/* side bar */}
        <div className="w-1/5">
          <Sidebar />
        </div>
        {/* main */}
        <div className="w-full">
          <Deatail />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
