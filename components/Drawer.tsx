import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { TfiTime } from "react-icons/tfi";

const Drawer = () => {
  return (
    <aside className="fixed w-full h-full z-10 top-0 text-white bg-[#bf6335] transition-all duration-500">
      <div className="px-4 mt-5">
        <div className="mb-5">
          <MdOutlineCancel size={25} />
        </div>
        <div className="border-b py-2 font-medium">
          <Link href="">Home</Link>
        </div>
        <div className="border-b py-2 font-medium">
          <Link href="">About</Link>
        </div>
        <div className="border-b py-2 font-medium">
          <Link href="">Service</Link>
        </div>
        <div className="border-b py-2 font-medium">
          <Link href="">Contact</Link>
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
              <Link href="mailto:cayomike@gmail.com">cayomike@gmail.com</Link>
            </p>
          </div>
          <div className="my-5'">
            <Link
              href="tel:+2348140231279"
              className="group flex shadow-lg shadow-[#bf6335]/50 space-x-2 items-center bg-white justify-center p-2 rounded text-[#bf6335]"
            >
              <FiPhone />
              <div>+234 814 0231 279</div>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Drawer;
