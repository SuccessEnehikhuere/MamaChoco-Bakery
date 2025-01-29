'use client'
import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { FiLogIn } from 'react-icons/fi'

const NavHeader = () => {
  return (
    <div className="flex items-center bg-blue-950 justify-end p-3">
      <div className='flex items-center gap-6 pr-4'>
        <div className="flex gap-2 items-center text-white">
          <FiLogIn className="text-2xl" />
          <p>Login/Register</p>
        </div>
      </div>
    </div>
  )
}

export default NavHeader
