import { Button } from "@/components/ui/button";
import React from "react";


const MobileContact = () => {
  return (
    <div className="w-full p-5">
      <h2 className="scroll-m-20 border-b border-blue-500 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-gray-900">
        ContactUs
      </h2>
      <div>
          <div className="container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="scroll-m-20 text-sm font-semibold tracking-tight"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="scroll-m-20 text-sm font-semibold tracking-tigh"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="scroll-m-20 text-sm font-semibold tracking-tigh"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-blue-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
              <Button className="bg-black text-white">Send</Button>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default MobileContact;
