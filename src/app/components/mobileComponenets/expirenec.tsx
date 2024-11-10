import React from 'react'

const MobileExpeirence = () => {
    let experience = [
        {
            companyName: "Company Name Here",
            dateStart: "12 Jun 2019",
            dateEnd: "12 Jun 2022",
            position: "Frontend Developer",
            details: "B.Com is an undergraduate academic degree awarded for a course or program in Commerce. The duration of the B.Com course is 3 years in Karachi University, divided into six distinct semesters. The B.Com courses list includes Marketing, accounting, entrepreneurship, various taxation and industrial laws etc.",
            work:
               [
              "Develop there official website.",
               "maked-e=commerce website.",
               "Have contributed on the team task."]
        },

       {
            companyName: "SGFA",
            dateStart: "12 Jun 2019",
            dateEnd: "12 Jun 2022",
            position: "Social Media Managment dprt",
            details: "is an undergraduate academic degree awarded for a course or program in Commerce. The duration of the B.Com course is 3 years in Karachi University, divided into six distinct semesters. The B.Com courses list includes Marketing, accounting, entrepreneurship, various taxation and industrial laws etc.",
            work:
               [
              "Mange there official Accounts.",]
        },
        {
          companyName: "Pecific Grammer School",
          dateStart: "12 Jun 2019",
          dateEnd: "12 Jun 2022",
          position: "Teacher Incharge",
          details: "undergraduate academic degree awarded for a course or program in Commerce. The duration of the B.Com course is 3 years in Karachi University, divided into six distinct semesters. The B.Com courses list includes Marketing, accounting, entrepreneurship, various taxation and industrial laws etc.",
          work:
             [
            "Good at as A Team Managment.",
             ]
      },
     
    ];
  return (
    <div className='w-full p-5'> 
        <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Expirence
        </h2>
        <div className="mt-4 divide-y-2 divide-blue-300">
        {/* information here */}
      {experience.map((item, i) => (
        <div key={i} className="py-4 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 uppercase">
            {item.position}
          </span>
          <span className="mt-1 text-blue-500 text-sm">{`${item.dateStart} - ${item.dateEnd}`}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
            {item.companyName}
          </h2>
          <p className="leading-relaxed">
          </p>
          <ul className=" ml-4 list-disc text-gray-600 mr-1">
            {item.work.map((workItem, i) => (
            <li key={i}>{workItem}</li>
            ))}
          </ul>
        </div>
      </div>
      ))}
       
    </div>

    </div>
  )
}

export default MobileExpeirence