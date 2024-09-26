import Link from 'next/link'
import React from 'react'

function BigHero() {
  return (
    <section className="bg-[url('../asset/image/banner1.jpg')] h-[350px] md:h-[600px] bg-center bg-no-repeat bg-cover">
      <div className='bg-black/70 h-full w-full flex items-center text-white'>
      <div className='p-10 md:pl-[100px]'>
       <p className='text-lg md:text-xl'>Welcome to Zabap</p>
       <h2 className='font-bold text-2xl md:text-3xl lg:text-5xl md:w-[500px]'>We are the best consulting Agency</h2>
       <p className='mt-3 md:w-[350px]'>Uncovering the stories behind the numbers to transform the world</p>
       <div className="flex  justify-start mt-5">
          <Link
            href="/service"
            className="shadow-lg shadow-[#bf6335]/50 flex items-center bg-[#bf6335] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-[#bf6335] hover:shadow-md"
          >
            Our service
          </Link>
        </div>
      </div>
      </div>
    </section>
  )
}

export default BigHero