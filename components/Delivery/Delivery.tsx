import React from 'react'
import Image from 'next/image'
import img from '@/public/images/delivery.svg'
import { RiEBike2Fill } from 'react-icons/ri'
import { IoFastFood } from 'react-icons/io5'
import { BsDoorOpen } from 'react-icons/bs'

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[2rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {/* image */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image src={img} alt="delievery image" />
        </div>
        {/* text content */}
        <div>
          <h1 className="text-[30px] uppercase md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]">
            your <span className="text-red-600">Favorite Cake</span> on the way
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            Craving something wholesome? Your favorite cake is on the way! Baked
            with love and delivered fresh, we ensure every bite is pure delight.
          </p>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              {' '}
               Delivery or Pickup options
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              {' '}
              delivery on your door step
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              {' '}
              Order now and enjoy a slice of happiness!
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery
