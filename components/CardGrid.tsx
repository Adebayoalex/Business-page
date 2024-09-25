import Image from "next/image";
import dataCollection from '../asset/image/datacollection.png'
import dataEntry from '../asset/image/dataentry.jpg'
import dataanalysis from '../asset/image/dataanalysis.png'
import dataInter from '../asset/image/dataInterpretation.png'
import reporting from '../asset/image/reporting.png'


const CardGrid = () => {
    return (
      <div className="container mx-auto py-8">
        {/* Responsive grid setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Individual card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="">
            <Image src={dataCollection} alt="" className="w-14 mb-3"/>
            <h3 className="font-bold text-lg flex items-center">Data Collection</h3>
            </div>
            <p>We utilize a variety of techniques to gather accurate and relevant data from diverse populations. This includes surveys, interviews, focus groups, and observational studies. Our team is skilled in designing surveys that capture essential information while adhering to ethical standards.</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="">
            <Image src={dataEntry} alt="" className="w-14 mb-3"/>
            <h3 className="font-bold text-lg flex items-center">Data Entry</h3>
            </div>
            <p>Our data entry processes are meticulous and efficient, ensuring that all collected data is accurately recorded and easily accessible for analysis.</p>
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-6">
  
            <div className="">
            <Image src={dataanalysis} alt="" className="w-14 mb-3"/>
            <h3 className="font-bold text-lg flex items-center">Data Analysis</h3>
            </div>
            <p>Utilizing advanced statistical tools and techniques, we analyze the collected data to extract meaningful insights. Our analysis helps stakeholders understand trends, measure impact, and evaluate the effectiveness of their interventions.</p>
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="">
            <Image src={dataInter} alt="" className="w-14 mb-3"/>
            <h3 className="font-bold text-lg flex items-center">Data Interpretation</h3>
            </div>
            <p>We go beyond mere numbers; our team interprets the results in context to provide actionable insights tailored to specific stakeholder needs.</p>
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="">
            <Image src={reporting} alt="" className="w-14 mb-3"/>
            <h3 className="font-bold text-lg flex items-center">Reporting</h3>
            </div>
            <p>Our comprehensive reports present findings in a clear and accessible format. We emphasize clarity in communication so that stakeholders can easily understand the implications of our research.</p>
          </div>
  
          
        </div>
      </div>
    );
  };
  
  export default CardGrid;


  