"use client"
import Image from "next/image";
import { TfiTime } from "react-icons/tfi";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import logo from "@/asset/logo/ZaBap_LogoName_Colored.png";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import Drawer from "./Drawer";
import { useEffect, useRef, useState } from "react";



const Header = () => {

  const headerRef = useRef<HTMLElement>(null);
  const [isSticky, setIsSticky] = useState(false)
  const [open, setOpen] = useState<boolean>(false)


  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {

        const sticky = headerRef.current.offsetTop;

        if (window.scrollY > sticky) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header ref={headerRef} className="fixed w-full top-0 z-20">
        <div className={`bg-black transition-all duration-500 ease-in-out text-white justify-between  w-full px-10 hidden md:flex ${isSticky?'max-h-0 overflow-y-hidden py-0':'max-h-20 py-2'}`}>
          <div className="flex ">
            <div className="flex items-center space-x-4 px-6 border-white/50 border-r">
              <TfiTime /> <div>Mon: 8.00 – 18.00</div>
            </div>
            <div className="flex items-center space-x-4 px-6 border-white/50 border-r">
              <TfiTime /> <div>Fri: 8.00 – 18.00</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 px-6 hover:text-[#bf6335] transition-all duration-300">
            <FaRegEnvelope />
            <Link href="mailto:info@zabapconsulting.com">info@zabapconsulting.com</Link>
          </div>
        </div>

        <nav className='flex justify-between bg-white px-5 md:px-20 py-5 shadow-lg items-center w-full'>
          <div className="basis-1/4">
            <Image src={logo} alt="logo" width={110} />
          </div>
          <div className="basis-2/4 space-x-12 font-medium hidden lg:flex">
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
          <div className="basis-1/4 hidden lg:flex">
            <Link
              href="tel:+2349127572618"
              className="group flex shadow-lg shadow-[#bf6335]/50 space-x-2 items-center bg-[#bf6335] justify-center lg:w-5/6 p-2 rounded text-white hover:text-black transition-all duration-300"
            >
              <FiPhone />
              <div>+234 912 7572 618</div>
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={()=>setOpen(true)} className="border-2 p-2 rounded">
              <CiMenuBurger size={25} color="#bf6335" />
            </button>
          </div>
        </nav>
      </header>
      <Drawer handleClose={()=>setOpen(false)} open={open}/>
    </>
  );
};

export default Header;