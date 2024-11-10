import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Link from "next/link";

const MobileCard = () => {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center ">
      <div data-aos="zoom-in" className="card bg-blue-100 w-50 glass p-5 flex flex-col justify-center items-center mx-4 my-4">
        <Image
          src="/projects/pp.webp"
          alt="profile-pic"
          width={200}
          height={200}
          className="rounded mx-auto"
        />
        <div className="card-body">
          <h1 className="card-title text-lg items-center justify-center font-bold tracking-tight uppercase">
            Aliza Faizan
          </h1>
          <h2 className="text-md font-semibold text-blue-700 text-center">
            <Typewriter
              options={{
                strings: ["Web Developer", "UI/UX Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>{" "}
        </div>
        {/* Social Media */}
        <div className="grid grid-cols-2 gap-2 justify-center">
          {/*linkdin*/}
          <div className="mt-2">
            <Link
              href="#"
              target="_blank"
              className=" text-gray-600 hover:text-[#0762c8]"
            >
              <FaLinkedin className="text-3xl  text-gray-600" />
            </Link>
          </div>

          {/*github*/}
          <div className="mt-2">
            <Link
              href="#"
              target="_blank"
              className=" text-gray-600 hover:text-[#6e5494]"
            >
              <FaGithub className="text-3xl" />
            </Link>
          </div>
        </div>
        {/*Download CV Button*/}
        <Link href={"/assets/CV.pdf"} className="mt-3" target="_blank">
          <Button className="p-3 bg-black text-white hover:bg-blue-700 rounded-full">
            <FaCloudDownloadAlt className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileCard;
