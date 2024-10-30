import BigHero from "@/components/BigHero";
import HomeContactUs from "@/components/HomeContactUs";
import LeadClient from "@/components/LeadClient";
import OurTeam from "@/components/OurTeam";
import ZabapCard from "@/components/ZabapCard";



export default function Home() {
  return (
    <div className="pt-20">
      <BigHero/>
      <ZabapCard/>
      <HomeContactUs/>
      {/* <OurTeam/> */}
      <LeadClient/>
    </div>
  );
}
