import Link from 'next/link'
import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";


function HomeContactUs() {
  return (
    <section className="bg-[url('../asset/image/image2.jpg')] bg-no-repeat bg-cover bg-fixed">
      <div className='lg:flex bg-black/90 md:py-10'>
      <div className='basis-1/2 text-white p-6 md:p-16'>
        <h3 className='font-bold text-2xl md:text-3xl lg:text-4xl my-4'>Experience The Evolution Of Your Business</h3>
        <p>
        Uncovering the stories behind the numbers to transform the world 
        </p>
        <div className='mt-5'>
          <Link href='' className='flex items-center space-x-2'>
          <IoPhonePortraitOutline size={20}/>
            <div>
              <p>+234 912 7572 618</p>
            </div>
          </Link>
        </div>

        <div className='mt-5'>
          <Link href='' className='flex items-center space-x-2'>
          <IoMailOutline size={20}/>
            <div>
              <p>info@zabapconsulting.com</p>
            </div>
          </Link>
        </div>
      </div>
      <div  className='basis-1/2 p-6 md:p-16'>
       
        <div className="items-center drop-shadow text-white">
          <h3 className="underline underline-offset-4"> Get in touch</h3>
        </div>
          <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl my-4 text-white'>Free Consultation</h2>
          <input placeholder='Name' className='border w-full p-3 my-3 focus:outline-none'/>
          <input placeholder='Email' className='border w-full p-3 my-3 focus:outline-none'/>
          <input placeholder='Subject' className='border w-full p-3 my-3 focus:outline-none'/>

          <textarea placeholder='message' className='border w-full p-4 my-3  focus:outline-none'>

          </textarea>

          <div className="flex mt-4  justify-start">
          <button
            className="mt-5 shadow-lg shadow-[#bf6335]/50 flex items-center bg-[#bf6335] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#bf6335] hover:shadow-md"
          >
            Submit
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContactUs