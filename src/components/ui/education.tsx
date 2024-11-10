import { Button } from "@/components/ui/button"

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Education = () => {

    // My Education here
    let education = [
        {
            uniName: "Karachi City School",
            date: "12 Jun 2011",
            field: "Science",
            details: "Medical Science is an academic degree awarded for a program in SSC. The duration of the SSC is 2 years in Karachi City chool, divided into six distinct semesters. The SSC list includes Math, Biology, Physics, Chemistry various taxation and Medical laws etc."
        },
        {
            uniName: "Goverment Girls Collage",
            date: "12 Jun 2014",
            field: "Introduction Of Commerce",
            details: "I.Com is an academic degree awarded for a course or program in Commerce. The duration of the I.Com degree is 2 years in Goverment Collage, divided into six distinct semesters. The I.Com degree list includes Marketing, accounting, entrepreneurship, various taxation and industrial laws etc."
        },
        {
          uniName: "Karachi University",
          date: "12 Jun 2016",
          field: "Bechlors Of Commerce",
          details: "B.Com is an undergraduate academic degree awarded for a course or program in Commerce. The duration of the B.Com Course is 3 years in Karachi University, divided into six distinct semesters. The B.Com course list includes Marketing, accounting, entrepreneurship, various taxation and industrial laws etc."
      },
       
    ];
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
    <CardHeader>
      <CardTitle  className="text-2xl font-semibold tracking-tight uppercase">Education</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
    <div className="-my-8 divide-y-2 divide-gray-100">
        {/* Bachelors */}
      {education.map((item, i) => (
        <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 uppercase">
            {item.field}
          </span>
          <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-xl font-medium-bold text-gray-800 title-font mb-2 uppercase">
            {item.uniName}
          </h2>
          <p className="leading-relaxed">
            {item.details}
          </p>
        </div>
      </div>
      ))}
       
    </div>
 
    </CardContent>
  </Card>
  )
}

export default Education;