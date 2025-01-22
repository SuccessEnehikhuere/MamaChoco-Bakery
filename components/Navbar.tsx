'use client'
import React from 'react'
import Image from 'next/image'
import { MenuItems } from '@/utils/MenuList'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center mx-auto gap-6 justify-center bg-background">
      <div>
        <Image src="/images/logo.png" alt="logo" width={180} height={70} />
      </div>
      <div className="flex items-center relative text-xl text-text ">
        {MenuItems.map((item, index) => {
          return (
            <div key={index} className="relative group flex items-center ">
              <Link href={`${item?.href}`} className="px-4 py-2">
                {item?.name}
              </Link>
              {item?.icon && (
                <span className="ml-2">
                  <item.icon />
                </span>
              )}

              {/* Primary Submenu */}
              {item?.primarySubMenu && (
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-48">
                  {item.primarySubMenu.map((primarySubItem) => (
                    <li
                      key={primarySubItem.name}
                      className="relative group hover:bg-gray-100"
                    >
                      <Link
                        href={primarySubItem.href || '#'}
                        className="block px-4 py-2"
                      >
                        {primarySubItem.name}
                      </Link>

                      {/* Secondary Submenu - Only shown when hovering the individual primarySubItem */}
                      {primarySubItem?.secondarySubMenu && (
                        <ul className="absolute left-48 top-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-48">
                          {primarySubItem.secondarySubMenu.map(
                            (secondarySubItem) => (
                              <li
                                key={secondarySubItem.name}
                                className="hover:bg-gray-100"
                              >
                                <Link
                                  href={secondarySubItem.href || '#'}
                                  className="block px-4 py-2"
                                >
                                  {secondarySubItem.name}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
