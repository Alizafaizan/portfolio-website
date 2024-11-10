import React from "react";

const MobileEducation = () => {
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
            field: "I.COM",
            details: "I.Com is an academic degree awarded for a course or program in Commerce. The duration of the I.Com degree is 2 years in Goverment Collage, divided into six distinct semesters. The I.Com degree list includes Marketing, accounting, entrepreneurship, various taxation and industrial laws etc."
        },
        {
          uniName: "Karachi University",
          date: "12 Jun 2016",
          field: "B.COM",
          details: "B.Com is an undergraduate academic degree awarded for a course or program in Commerce. The duration of the B.Com Course is 3 years in Karachi University, divided into six distinct semesters. The B.Com course list includes Marketing, accounting, entrepreneurship, various taxation and industrial laws etc."
      },
       
    ];
  return (
    <div className="w-full p-5">
         <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-gray-900">
        Education
      </h2> 
      <div className="mt-4 divide-y-2 divide-blue-200">
        {/* Bachelors */}
        {education.map((item, i) => (
          <div key={i} className="py-4 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700 uppercase">
                {item.field}
              </span>
              <span className="mt-1 text-blue-500 text-sm">{item.date}</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium-bold text-gray-800 title-font mb-2 uppercase">
                {item.uniName}
              </h2>
              <p className="leading-relaxed text-gray-600">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileEducation;
