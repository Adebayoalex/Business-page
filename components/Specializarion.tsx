import React from 'react';
import { Shield, BookOpen, Droplet, Heart, PieChart } from 'lucide-react';

const SpecializationCard = ({ title, description, icon: Icon }:{title:string, description:string, icon: any}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <div className="p-6">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Specializations = () => {
  const specializations = [
    {
      title: "Health",
      description: "Assessing healthcare initiatives' effectiveness and accessibility.",
      icon: Heart
    },
    {
      title: "Education",
      description: "Evaluating educational programs' impact on learning outcomes.",
      icon: BookOpen
    },
    {
      title: "WASH",
      description: "Analysing water supply and sanitation projects for community health benefits.",
      icon: Droplet
    },
    {
      title: "Protection",
      description: "Measuring the efficacy of protection services for vulnerable populations.",
      icon: Shield
    },
    {
      title: "Political and Opinion Poll",
      description: "Conducting needs assessments and analyzing opinion polls for clients.",
      icon: PieChart
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 text-center mb-6 md:mb-12">
          Our Specializations
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We specialize in evaluating programs across various sectors:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <SpecializationCard key={index} {...spec} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specializations;