import Image from "next/image";
import logo from "@/asset/logo/ZaBap_LogoName_Colored.png";
import Link from "next/link";
import { TfiLocationPin } from "react-icons/tfi";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <footer className="md:flex px-5 space-y-10 md:space-y-0 py-10 md:py-20 md:px-20 justify-between bg-black text-white">
      <div className="basis-1/3">
        <Image src={logo} alt="logo" width={150} />
        <p>
        With a strong foundation in social research and a commitment to excellence, we strive to be a trusted partner for those seeking reliable evaluations of their programs. Together, we can make informed decisions that lead to impactful outcomes.
        </p>
      </div>
      <div className="basis-1/3 md:text-center">
        <h3 className="text-xl font-semibold text-[#bf6335] space-y-3 mb-3">
          Quick Links
        </h3>
        <div>
          <Link
            href="/"
            className="hover:text-[#bf6335] transition-all duration-300"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            href="/about"
            className="hover:text-[#bf6335] transition-all duration-300"
          >
            About
          </Link>
        </div>
        <div>
          <Link
            href="/service"
            className="hover:text-[#bf6335] transition-all duration-300"
          >
            Service
          </Link>
        </div>
        <div>
          <Link
            href="/contactus"
            className="hover:text-[#bf6335] transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="basis-1/3 space-y-4">
        <h3 className="text-xl font-semibold text-[#bf6335] mb-3">Contacts</h3>
        <div className="flex space-x-2 items-center">
          <TfiLocationPin size={30} />
          <p>
          24 Toyin Olatunji Street, Ipaja Command Lagos. Nigeria
          </p>
        </div>
        <div className="flex space-x-2 items-center hover:text-[#bf6335] transition-all duration-300">
          <FiPhone />
          <p>
            <Link href="tel:+2349127572618">+234 912 7572 618</Link>
          </p>
        </div>
        <div className="flex space-x-2 items-center hover:text-[#bf6335] transition-all duration-300">
          <FaRegEnvelope />
          <p>
            <Link href="mailto:info@zabapconsulting.com">info@zabapconsulting.com</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
