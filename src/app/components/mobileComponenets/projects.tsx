import Link from 'next/link'
import Image from "next/image";

import React from 'react'
const MobileProjects = () => {
    let projects = [
        {
          name: "Ecommerce Website",
          detail:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quis, illo facere   quasi, quo quisquam ipsa cumque ea officiis illum ratione quae eligendi tempore nemo delectus veniam fuga saepe voluptatem!",
          link: "#",
          image: "landing.png",
        },
        {
          name: "Resume Builder",
          detail:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quis, illo facere   quasi, quo quisquam ipsa cumque ea officiis illum ratione quae eligendi tempore nemo delectus veniam fuga saepe voluptatem!",
          link: "#",
          image: "R.png",
        },
        {
          name: "Ecommerce Website",
          detail:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quis, illo facere   quasi, quo quisquam ipsa cumque ea officiis illum ratione quae eligendi tempore nemo delectus veniam fuga saepe voluptatem!",
          link: "#",
          image: "webApp.png",
        },
      ];
  return (
    <div className='w-full p-5'> 
        <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
         Projects
       </h2>
       <div className="flex flex-wrap mt-4 -m-4">
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
    </div>
  )
}

export default MobileProjects