import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { TfiTime } from "react-icons/tfi";

const Drawer = ({open, handleClose}:{open:boolean, handleClose:()=>void}) => {

  const drawer = useRef<HTMLElement>(null)

  useEffect(()=>{
    if(open){
      drawer.current?.classList.add('open')
      drawer.current?.classList.remove('close')
    }else{
      drawer.current?.classList.remove('open')
    }
  },[open])


  return (
    <aside ref={drawer} className="fixed w-full z-30 -left-[120%] overflow-hidden h-full top-0 text-white bg-[#bf6335] transition-all duration-500 ease-in-out">
      <div className="px-4 mt-5">
        <div className="mb-5">
          <button onClick={handleClose}>
           <MdOutlineCancel size={25} />
          </button>
        </div>
        <div className="border-b py-2 font-medium">
          <Link onClick={handleClose} href="/">Home</Link>
        </div>
        <div className="border-b py-2 font-medium">
          <Link onClick={handleClose} href="/about">About</Link>
        </div>
        <div className="border-b py-2 font-medium">
          <Link onClick={handleClose} href="/service">Service</Link>
        </div>
        <div className="border-b py-2 font-medium">
          <Link onClick={handleClose} href="/contactus">Contact</Link>
        </div>

        <div>
          <div className="my-5 font-semibold">Contact Info</div>
          <div className="flex my-4 items-center space-x-4 border-white/50 border-r">
            <TfiTime /> <div>Mon: 8.00 – 18.00</div>
          </div>
          <div className="flex my-4 items-center space-x-4 border-white/50 border-r">
            <TfiTime /> <div>Fri: 8.00 – 18.00</div>
          </div>
          <div className="flex space-x-2 items-center my-5">
            <FaRegEnvelope />
            <p>
              <Link href="mailto:info@zabapconsulting.com">info@zabapconsulting.com</Link>
            </p>
          </div>
          <div className="my-5'">
            <Link
              href="tel:+2349127572618"
              className="group flex shadow-lg shadow-[#bf6335]/50 space-x-2 items-center bg-white justify-center p-2 rounded text-[#bf6335]"
            >
              <FiPhone />
              <div>+234 912 7572 618</div>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Drawer;
