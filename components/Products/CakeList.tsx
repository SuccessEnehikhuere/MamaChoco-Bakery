import { FeaturedList } from '@/utils/FeaturedCakesList'
import Link from 'next/link'
import React from 'react'

const CakeList = () => {
  return (
    <main>
      <h1 className="heading pt-[2rem]  mx-auto px-8 md:px-16 ">
        Our wholesome <span className="text-red-600"> Cakes</span>
      </h1>
      <div
        className="border-b pb-3 border-gray-300 flex justify-between
      mt-8 items-center]"
      />
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {FeaturedList.map((item) => {
          return (
            <Link
              key={item.id}
              href={`/cakes/${item.id}`}
              className="relative flex flex-col rounded-[var(--rounded-box,1rem)] focus:outline-none focus:outline-2 focus:outline-transparent focus:outline-offset-2 w-full shadow-xl hover:scale-105 transition duration-300 "
            >
              <figure className="relative w-full h-[300px] overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out `}
                />
              </figure>

              <div className="flex flex-1 flex-col p-[var(--padding-card,2rem)] gap-2 items-center text-center">
                <h2 className="flex items-center gap-2 text-[1.25rem] leading-[1.75rem] font-semibold capitalize tracking-wider">
                  {item.name}
                </h2>
                <span>{item.price}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}

export default CakeList
