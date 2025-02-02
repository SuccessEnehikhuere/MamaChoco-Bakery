import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/MC.svg'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start">
        <div>
          <div className="mb-[2rem]">
            <Image src={logo} alt="logo" width={160} height={10} />
          </div>
          <p className="text-white text-opacity-60 mt-[0.4rem]">
            9 Osanohen street, Iduowina road, ugbowo, Benin-city
          </p>
          <p className="mt-[1rem] text-white">enehikhueres@gmail.com</p>
          <p className="text-red-300 text-[19px] font-bold">
            +(234) 9157 239 802
          </p>
        </div>
        {/* second */}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Payment Option -  <br/>Direct Transfer
          </h1>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            <strong>Bank Name:</strong> <br/> First Bank
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            <strong>Account Name:</strong> <br/> Success Enehikhuere
          </p>
          <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
            <strong>Account Numner:</strong> <br/> 3214599591
          </p>
        </div>

        {/* third */}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white">
            Quick Link
          </h1>
          <Link href="/">
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
              About
            </p>
          </Link>
          <Link href="/cakes">
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
              Cakes
            </p>
          </Link>
          <Link href="/faq">
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
              FAQ
            </p>
          </Link>
          <Link href="/pickup">
            <p className="mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit">
              Pickup
            </p>
          </Link>
        </div>

        {/* fourth */}
        <div>
          <h1 className="text-[23px] font-semibold mb-[2rem] text-white uppercase">
            opening hours
          </h1>
          <p className="text-white text-[18px]">
            Monday - friday :<span className="text-yellow-300">8am - 6pm</span>
          </p>
          <p className="text-white text-[18px]">
            Saturday : <span className="text-yellow-300"> 8am - 12am</span>
          </p>
          <div className="flex mt-[2rem] items-center space-x-6">
            <FaFacebook className="w-[1.5rem] h-[1.5rem] text-blue-400" />
            <FaInstagram className="w-[1.5rem] h-[1.5rem] text-red-400" />
            <FaTwitter className="w-[1.5rem] h-[1.5rem] text-blue-300" />
          </div>
        </div>
      </div>
      {/* {copyright text} */}
      <p className='text-center text-white opacity-50 mt-[1.5rem]'>
        Copyright © <span className='text-yellow-300'>MamaChoco Bakery</span> - Cakes, and Pastries shop in
        Benin, Nigeria
      </p>
    </div>
  )
}

export default Footer
