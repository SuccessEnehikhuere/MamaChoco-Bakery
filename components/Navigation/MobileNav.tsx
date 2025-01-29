import Link from 'next/link'
import React from 'react'
import { ImCross } from 'react-icons/im'

interface props {
  showNav: boolean,
  closeNav: ()=>void
}

const MobileNav = ({showNav, closeNav}: props) => {
  const navStyle= showNav ? 'translate-x-0' : 'translate-x-[-100%]'

//  when showNav is true, translate-x-0 makes the navigation visible.
// When showNav is false, translate-x-[-100%]

  return (
    <div
      className={`flex lg:hidden fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}
    >
      <ImCross onClick={closeNav} className="absolute top-[2rem] right-[2rem] w-[2rem] text-white" />
      
      <div className={`bg-choco  ${navStyle} transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%]`}>
        {/* nav links */}
        <ul className="space-y-10">
          <li className="text-[35px] font-medium hover:text-text text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-text text-white">
            <Link href="/cakes">Cakes</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-text text-white">
            <Link href="/">Valentine - Feb 14th</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-text text-white">
            <Link href="/">Combos</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-text text-white">
            <Link href="/">Occasion</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-text text-white">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav