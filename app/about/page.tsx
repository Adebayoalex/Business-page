import OurTeam from "@/components/OurTeam";
import SmallHero from "@/components/SmallHero";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import img from "../../asset/image/image2.jpg";

function page() {
  return (
    <div>
      <SmallHero type="about" heading="Who are we" writeup="Uncovering the stories behind the numbers to transform the world"/>
      <section className="lg:flex justify-between">
        <div className="basis-1/2 p-10 flex items-center">
          <Image src={img} alt="" />
        </div>
        <div className="basis-1/2 p-10">
          <h4 className="font-bold my-2 text-lg">Company Overview</h4>
          <div className="my-2">
            <p>
              We are a private research firm dedicated to providing
              comprehensive survey services for government entities,
              non-governmental organizations (NGOs), and the public sector. Our
              expertise lies in evaluating various social interventions,
              focusing on critical areas such as health, education, energy,
              water, sanitation, and hygiene (WASH), Politics, livelihood, and
              more.
            </p>
          </div>

          <div className="my-2">
            <h4 className="font-bold my-2 text-lg">Our Vision</h4>
            <p className="my-2">
              To be a global leader in social research and data management,
              empowering organizations and communities with accurate insights
              and innovative solutions that drive impactful social change and
              sustainable development.
            </p>
          </div>

          <div className="my-2">
            <h4 className="font-bold my-2 text-lg">Our Mission</h4>
            <p>
              Our mission is to empower communities and organizations with
              insightful, data-driven solutions that foster informed
              decision-making and drive positive social change. We are committed
              to delivering high-quality research and data management services
              that prioritize accuracy, integrity, and the meaningful
              interpretation of data. Through our innovative approaches and
              dedicated team, we aim to uncover the stories behind the numbers,
              enabling our clients to understand, engage, and transform the
              world around them.
            </p>
          </div>

          <div className="my-2">
            <h4 className="font-bold my-2 text-lg">Our Expertise</h4>
            <p>
              Our team employs both qualitative and quantitative research
              methodologies to ensure robust data collection and analysis. We
              understand the complexities of social interventions and tailor our
              approaches to meet the unique needs of each project. Our expertise
              spans across multiple domains, allowing us to deliver nuanced
              insights that drive effective program implementation.
            </p>
          </div>

          <div className="mt-5">
            <Link href="" className="flex items-center space-x-2">
              <IoPhonePortraitOutline size={30} />
              <div>
                <p className="font-semibold">Call us on:</p>
                <p className="font-semibold">09127572618</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* <OurTeam /> */}
    </div>
  );
}

export default page;
