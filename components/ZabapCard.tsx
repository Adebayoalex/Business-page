"use client";
import Image from "next/image";
import Link from "next/link";
import image from "@/asset/image/image3.jpg";
import image1 from "@/asset/image/image1.jpg";

const ZabapCard = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-4 md:px-8 lg:px-16">
      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Image with Experience Info */}
        <div className="space-y-4">
          <div className="rounded-t-lg overflow-hidden">
            <Image 
              src={image} 
              alt="Company Image" 
              className="rounded-t-lg w-full h-auto object-cover sm:max-w-xs md:max-w-sm lg:max-w-md" 
            />
          </div>
          <div className="bg-[#bf6335] text-white p-4 rounded-b-lg text-center">
            <p className="font-extrabold text-4xl md:text-5xl lg:text-6xl">20+ </p>
            <p className="font-bold text-lg md:text-xl">Years Experience</p>
          </div>
        </div>

        {/* Second Image */}
        <div className="hidden md:flex items-center justify-center">
          <Image
            src={image1}
            alt="Another Company Image"
            className="rounded-lg w-full h-auto object-cover sm:max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center">
        <div>
          <h3 className="text-orange-900 underline underline-offset-4">Know Our Company</h3>
        </div>
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl my-4">
          Company Overview
        </h2>
        <p className="">
          We are a private research firm dedicated to providing comprehensive survey services for government entities, non-governmental organizations (NGOs), and the public sector. Our expertise lies in evaluating various social interventions, focusing on critical areas such as health, education, energy, water, sanitation, and hygiene (WASH), Politics, livelihood, and more.
        </p>

        <div className="flex  justify-start">
          <Link
            href="/about"
            className="mt-5 shadow-lg shadow-[#bf6335]/50 flex items-center bg-[#bf6335] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#bf6335] hover:shadow-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ZabapCard;
