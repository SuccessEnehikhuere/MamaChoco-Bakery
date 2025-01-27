import Link from 'next/link'
import React from 'react'
import SectionEnding from './SectionEnding'
import { FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'

const HomeFooter = () => {
  return (
    <main className='mt-4'>
      <SectionEnding />
      <main className="flex bg-dark text-white justify-between items-center py-8 mx-auto px-8 md:px-16 mt-8 text-left">
        <div className="flex flex-col">
          <h3 className="font-bold text-xl tracking-wide mb-8">
            MamaChoco Bakery
          </h3>
          <div className="mb-4">
            <p>9 Osanohen, Iduowina Benin-city </p>
            <p>enehikhueres@gmail.com</p>
          </div>

          <Link href="/about">
            <p className="underline tracking-wider leading-4 text-xl">About</p>
          </Link>
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold text-xl tracking-wide mb-8 ">
            Payment Option - Direct Transfer
          </h3>
          <div className="">
            <p>
              <strong>Bank Name:</strong> First Bank
            </p>
            <p>
              <strong>Account Name:</strong> Success Enehikhuere
            </p>
            <p>
              <strong>Account Numner:</strong> 3214599591
            </p>
          </div>
          <p>call/chat us up for details; 09157239802</p>
        </div>

        <div className=" hidden sm:flex flex-col">
          <div className="font-bold text-2xl mb-8">
            <div className="flex gap-4">
              <Link
                href="https://wa.me/+2349157239802"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="cursor-pointer hover:text-green-500" />
              </Link>
              <Link
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:text-pink-500" />
              </Link>
              <Link
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="cursor-pointer hover:text-blue-500" />
              </Link>
              <Link
                href="mailto:enehikhueres@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineEmail className="cursor-pointer hover:text-gray-500" />
              </Link>
            </div>
          </div>
          <Link href="/faq">
            <p className="underline tracking-wider leading-4 mt-4">FAQ</p>
          </Link>
          <Link href="/pickup">
            <p className="underline tracking-wider leading-4 mt-4">Pick Up</p>
          </Link>
        </div>
      </main>
      <div className="flex sm:hidden bg-dark text-white items-center justify-center gap-6">
        <div className="flex gap-2 text-2xl">
          <FaWhatsapp />
          <FaInstagram />
          <FaFacebookF />
          <MdOutlineEmail />
        </div>
        <p>FAQ</p>
        <p>Pick Up</p>
      </div>
    </main>
  )
}

export default HomeFooter
