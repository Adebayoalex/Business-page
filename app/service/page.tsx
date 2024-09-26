import CardGrid from '@/components/CardGrid'
import SmallHero from '@/components/SmallHero'
import Specializations from '@/components/Specializarion'
import React from 'react'

function page() {
  return (
    <div>
        <SmallHero type="service" heading="Our core service includes:" writeup=""/>
        <section className='p-6 md:p-14'>
           
            <CardGrid/>

            <Specializations/>
        </section>
    </div>
  )
}

export default page