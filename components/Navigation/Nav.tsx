'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiCycling } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { TiShoppingCart } from 'react-icons/ti'
import logo from '@/public/images/logo.png'

interface props {
  openNav: () => void
}

const Nav = ({openNav}:props) => {
  return (
    <div className="bg-white">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
        {/* logo */}
        <div>
          <Image src={logo} alt="logo" width={160} height={50} />
        </div>

        {/* nav links */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li className="text-xl font-medium hover:text-red-600">
            <Link href="/">Home</Link>
          </li>
          <li className="text-xl font-medium hover:text-red-600">
            <Link href="/cakes">Cakes</Link>
          </li>
          <li className="text-xl font-medium hover:text-red-600">
            <Link href="/">Valentine</Link>
          </li>
          <li className="text-xl font-medium hover:text-red-600">
            <Link href="/">Combos</Link>
          </li>
          <li className="text-xl font-medium hover:text-red-600">
            <Link href="/">Cupcakes</Link>
          </li>
          <li className="text-xl font-medium hover:text-red-600">
            <Link href="/">Contact</Link>
          </li>
          <li className="text-xl font-medium hover:text-red-600">
            <Link href="/">Login</Link>
          </li>
        </ul>

        {/* buttons */}
        <div className="flex items-center space-x-4">
          <Link href='/cakes' className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950 transition-all duration-200 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white">
            <span>
              <BiCycling className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
            </span>
            <span className="font-bold">Order Now</span>
          </Link>
          <button className="sm:px-6 sm:py-3 px-4 py-2 bg-brown transition-all duration-200 hover:bg-green-700 flex items-center rounded-md text-white">
            <span>
              <TiShoppingCart className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
            </span>
          </button>
          <HiBars3BottomRight
            className="lg:hidden w-[2rem] h-[2rem] text-black"
            onClick={openNav}
          />
        </div>
      </div>
    </div>
  )
}

export default Nav
