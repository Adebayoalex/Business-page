import Image from 'next/image'
import unicef from '@/asset/image/unicef.png'
import ipa from '@/asset/image/ipa.jpg'
import psi from '@/asset/image/psi.png'
import rti from '@/asset/image/rti.png'
import kantar from '@/asset/image/kantar.png'
import sfh from '@/asset/image/sfh.png'
import chart1 from '@/asset/image/chart1.jpeg'
import chart2 from '@/asset/image/chart2.jpeg'




function LeadClient() {
    const items = [
        {
            id:1,
            image: ipa
        },
        {
            id:2,
            image: unicef
        },
        {
            id:3,
            image: psi
        },
        {
            id:4,
            image: rti
        },
        {
            id:5,
            image: kantar
        },
        {
            id:6,
            image: sfh
        },
    ]

   


  return (
    <>
        {/* delete later */}

    <div className='my-24'>
        <div className='md:flex p-4 justify-center md:space-x-8'>
        <Image src={chart1} alt='' className='my-3'/>
        <Image src={chart2} alt='' className='my-3'/>
        </div>
        <div className='p-4 md:w-2/3 m-auto mt-5 md:mt-10'>
            <p className='text-center'>
                ZaBap Consulting’s team consists of more than 10 experts in research, technology, monitoring and evaluation, and international development. We have survey teams in all 36 States and the FCT in Nigeria, collaborating with other agencies across Africa.
            </p>  
        </div>
    </div>

    <section className='mt-6'>
        <div className="items-center drop-shadow text-orange-950">
          <h3 className="underline text-center underline-offset-4">Our portfolio</h3>
        </div>
        <div className='md:w-8/12 m-auto'>
            <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl my-4 md:text-center p-4'>Lead consultant’s client experience at Kantar and Verian</h2>
        </div>

        <div className="w-full inline-flex bg-gray-100 flex-nowrap py-2 overflow-hidden">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <Image src={kantar} alt='' className='w-16'/>
        </li>
        <li>
            <Image src={ipa} alt="" className='w-16'/>
        </li>
        <li>
            <Image src={unicef} alt="nuicef" className='w-16'/>
        </li>
        <li>
            <Image src={sfh} alt="" className='w-16'/>
        </li>
        <li>
            <Image src={rti} alt="" className='w-16'/>
        </li>
        <li>
            <Image src={psi} alt="" className='w-16'/>
        </li>

        <li>
            <Image src={kantar} alt='' className='w-16'/>
        </li>
        <li>
            <Image src={ipa} alt="" className='w-16'/>
        </li>
    </ul>             

    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
    <li>
            <Image src={kantar} alt='' className='w-16'/>
        </li>
        <li>
            <Image src={ipa} alt="" className='w-16'/>
        </li>
        <li>
            <Image src={unicef} alt="nuicef" className='w-16'/>
        </li>
        <li>
            <Image src={sfh} alt="" className='w-16'/>
        </li>
        <li>
            <Image src={rti} alt="" className='w-16'/>
        </li>
        <li>
            <Image src={psi} alt="" className='w-16'/>
        </li>
        <li>
            <Image src={kantar} alt='' className='w-16'/>
        </li>
        <li>
            <Image src={ipa} alt="" className='w-16'/>
        </li>
    </ul>                
    </div>
    </section>
    </>
  )
}

export default LeadClient