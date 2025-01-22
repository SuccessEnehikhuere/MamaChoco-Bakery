'use client'
import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { FiLogIn } from 'react-icons/fi'

const NavHeader = () => {
  return (
    <div className="flex items-center bg-dark justify-end p-2">
      <div className='flex items-center gap-6 pr-6'>
        <div className="flex gap-2 items-center text-white">
          <FiLogIn className="text-2xl" />
          <p>Login/Register</p>
        </div>
        <TiShoppingCart className="text-white text-3xl" />
      </div>
    </div>
  )
}

export default NavHeader
