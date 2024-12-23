import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export function Sidebar() {
  return (
    <div data-aos="fade-up" className="h-screen flex flex-col justify-center items-center p-3">
      {/* Image */}
      <Image
        src="/projects/pp.webp"
        alt="profile-pic"
        width={400}
        height={400}
        className="rounded-md "
      />

      {/* Name */}
      <div className="mt-2">
        <h1 className="text-lg font-bold tracking-tight uppercase">
          Aliza Faizan
        </h1>
        <h2 className="text-md font-semibold tracking-tight text-gray-600 text-center">
          <Typewriter
            options={{
              strings: ["Web Developer", "UI/UX Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
      {/* Social Media */}
      <div className="grid grid-cols-2 gap-2 justify-center">
        {/*linkdin*/}
        <div className="mt-3">
          <Link
            href="https://www.linkedin.com/in/alizafaizan/"
            target="_blank"
            className=" text-gray-600 hover:text-[#0762c8]"
          >
            <FaLinkedin className="text-3xl" />
          </Link>
        </div>

        {/*github*/}
        <div className="mt-3">
          <Link
            href="https://github.com/Alizafaizan"
            target="_blank"
            className=" text-gray-600 hover:text-[#6e5494]"
          >
            <FaGithub className="text-3xl" />
          </Link>
        </div>
      </div>

      {/*Download CV Button*/}
      <Link href={"/assets/Resume Builder Aliza Faizan.pdf"} className="mt-3" target="_blank">
        <Button className="p-3 bg-black text-white hover:bg-blue-700 rounded-full">
          <FaCloudDownloadAlt className="mr-2 h-4 w-4" />
          Download CV
        </Button>
      </Link>
    </div>
  );
}
