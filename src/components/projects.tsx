import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const Projects = () => {
  let projects = [
    {
      name: "Rental Car Website",
      detail:
     "Discover flexible and affordable car rentals with our easy-to-use website. Book your perfect ride anytime, anywhere, and hit the road with confidence!",
      link: "https://figma-heckathon-2.vercel.app/",
      image: "RentalCar.png",
    },
    {
      name: "Resume Builder",
      detail:
       "Create professional resumes effortlessly with our intuitive resume builder application. Customize templates to showcase your skills and land your dream job in minutes!",
      link: "https://resume-builder-sigma-tawny",
      image: "R.png",
    },
    {
      name: "Job Application Web",
      detail:
        "Find your dream job with ease on our job application website. Explore opportunities, submit applications, and kick-start your career journey today!",
      link: "#",
      image: "webApp.png",
    },
    {
      name: "Ecommerce Website",
      detail:
        "Explore our e-commerce website for a wide range of high-quality products at unbeatable prices. Enjoy a seamless shopping experience with secure payments and fast delivery!",
      link: "#",
      image: "landing.png",
    },
    
  ];
  // My Education here
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap -m-4">
          {/* My projects here */}
          {projects.map((item, i) => (
            <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative h-64">
                <Image
                  alt="gallery"
                  width={1000}
                  height={1000}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={`/projects/${item.image}`}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
                  <h2 className="text-lg font-bold tracking-tight">
                    {item.name}
                  </h2>
                  <p className=" mt-3 leading-relaxed line-clamp-3">
                     {item.detail}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className=" text-sm font-medium tracking-tight hover:text-blue-500 hover:underline"
                  >
                    <p className="mt-3">View Project</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
