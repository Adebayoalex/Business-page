import Link from 'next/link'
import React from 'react'
import { IoMailOutline, IoPhonePortraitOutline } from 'react-icons/io5'

function SmallHero({type, heading, writeup}:{type:string, heading:string, writeup:string}) {
  return (
    <section className="bg-[url('../asset/image/banner1.jpg')] h-[350px] md:h-[500px] bg-center bg-no-repeat bg-cover">
      <div className='bg-black/70 h-full w-full flex items-center px-6 pt-10 md:px-12 lg:px-16'>
      {
        type === 'contact' ?
        
        <div>
            <h2 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl'>{heading}</h2>
         
            <div className='mt-5 text-white'>
          <Link href='tel:+2349127572618' className='flex items-center space-x-'>
            <IoPhonePortraitOutline size={20}/>
            <p>+234 912 7572 618</p>
          </Link>
        </div>

        <div className='mt-5 text-white'>
          <Link href='mailto:info@zabapconsulting.com' className='flex items-center space-x-2'>
          <IoMailOutline size={20}/>
            <div>
              <p>info@zabapconsulting.com</p>
            </div>
          </Link>
        </div>
            
            
        </div>
            :
        <div>
        <h2 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl'>{heading}</h2>
        <p className='text-white text-lg'>{writeup}</p>
      </div>

      }
      
            
       </div>
    </section>
  )
}

export default SmallHero