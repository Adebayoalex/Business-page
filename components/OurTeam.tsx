import Image from "next/image";
import React from "react";
import { FaAsterisk, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import teamMemberImage from "@/asset/image/image1.jpg";
import ceo from "../asset/image/image4.jpg";

function OurTeam() {
  const teams = [1, 2, 3, 4];
  return (
    <section className="p-6 md:p-16 text-center mt-10">
      <div className="items-center drop-shadow text-orange-950">
        <h3 className="underline underline-offset-4">Our Team</h3>
      </div>

      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl my-4 text-center">
        Meet our team of proffessionals
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:p-10">
        {teams.map((item) => (
          <div className="relative bg-white shadow-md rounded overflow-hidden transition-transform duration-500 hover:-translate-y-2 group">
            {/* Team member image */}
            <Image
              src={teamMemberImage}
              alt="Team Member"
              className="w-full h-full object-cover"
            />

            {/* Social media overlay (hidden initially, fade in on hover) */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex space-x-4 text-white">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebook className="text-2xl hover:text-[#4267B2] transition-colors duration-300" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaTwitter className="text-2xl hover:text-[#1DA1F2] transition-colors duration-300" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedin className="text-2xl hover:text-[#0077B5] transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Team member info */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-90">
              <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
              <p className="text-sm text-gray-600">Frontend Developer</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
