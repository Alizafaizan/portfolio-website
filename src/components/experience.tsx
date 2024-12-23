

import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Experience = () => {

    // My Experience here
    let experience = [
       {
            companyName: "SGFA",
            dateStart: "12 Jun 2019",
            dateEnd: "12 Jun 2022",
            position: "Social Media Managment",
            details: "is an undergraduate academic degree awarded for a course or program in Commerce. The duration of the B.Com course is 3 years in Karachi University, divided into six distinct semesters. The B.Com courses list includes Marketing, accounting, entrepreneurship, various taxation and industrial laws etc.",
            work:
               [
              "Manage there official Accounts.",]
        },
        {
          companyName: "Pecific Grammer School",
          dateStart: "12 Jun 2019",
          dateEnd: "12 Jun 2022",
          position: "Teacher Incharge",
          details: " undergraduate academic degree awarded for a course or program in Commerce. The duration of the B.Com course is 3 years in Karachi University, divided into six distinct semesters. The B.Com courses list includes Marketing, accounting, entrepreneurship, various taxation and industrial laws etc.",
          work:
             [
            "Good at as a Team Mangment.",
             ]
      },
      {
        companyName: " Student of GIAIC",
        dateStart: "6-feb-2024",
        dateEnd: "Continue.....",
        position: "As a Student",
        details: "trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.",
        work:
           [
          "Command Line Calcualtor",
          "Age Calculator",
          "Weather App.",
          "Resume Builder.",
          "E-Commerce Website.",
          "Portfolio Website",
          "Rental Car Application",
          "To be Continue..."]
    },
     
    ];
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
    <CardHeader>
      <CardTitle  className="text-2xl font-semibold tracking-tight uppercase">Experience</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
    <div className="-my-8 divide-y-2 divide-gray-100">
        {/* information here */}
      {experience.map((item, i) => (
        <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 uppercase">
            {item.position}
          </span>
          <span className="mt-1 text-gray-500 text-sm">{`${item.dateStart} - ${item.dateEnd}`}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
            {item.companyName}
          </h2>
          <p className="leading-relaxed">
          </p>
          <ul className=" ml-4 list-disc mr-1">
            {item.work.map((workItem, i) => (
            <li key={i}>{workItem}</li>
            ))}
          </ul>
        </div>
      </div>
      ))}
       
    </div>
 
    </CardContent>
  </Card>
  )
}
export default Experience;