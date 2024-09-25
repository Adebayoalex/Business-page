import SmallHero from "@/components/SmallHero";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
            <SmallHero type="contact" heading="Reach us on:" writeup=""/>
      <section className="lg:flex p-10">
        <div className="basis-1/2 flex items-center">
          
            <iframe
                className="w-full h-[500px]"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=24%20Toyin%20Olatunji%20Street,%20Ipaja%20Command%20Lagos.%20Nigeria+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              
            >
            </iframe>
      
        </div>

        <div className="basis-1/2 p-5 md:p-16">
          <div className="items-center drop-shadow">
            <h3 className="underline underline-offset-4"> Get in touch</h3>
          </div>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl my-4">
            Free Consultation
          </h2>
          <input
            placeholder="Name"
            className="border border-gray-400 rounded w-full p-3 my-3 focus:outline-none bg-transparent"
          />
          <input
            placeholder="Email"
            className="border border-gray-400 rounded w-full p-3 my-3 focus:outline-none bg-transparent"
          />
          <input
            placeholder="Subject"
            className="border border-gray-400 rounded w-full p-3 my-3 focus:outline-none bg-transparent"
          />

          <textarea
            placeholder="message"
            className="border border-gray-400 rounded w-full p-4 my-3 focus:outline-none bg-transparent"
          ></textarea>

          <div className="flex mt-4  justify-start">
            <button className="mt-5 shadow-lg shadow-[#bf6335]/50 flex items-center bg-[#bf6335] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#bf6335] hover:shadow-md">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;