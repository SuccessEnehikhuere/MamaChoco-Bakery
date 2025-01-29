'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FeaturedList } from '@/utils/FeaturedCakesList'

function FeaturedCakesList() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {FeaturedList.map((item) => {
        const isHovered = hoveredImage === item.id

        return (
          <Link
            key={item.id}
            href={`/cakes/${item.id}`}
            className="relative flex flex-col rounded-[var(--rounded-box,1rem)] focus:outline-none focus:outline-2 focus:outline-transparent focus:outline-offset-2 w-full shadow-xl transition-transform duration-500"
            onMouseEnter={() => setHoveredImage(item.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <figure className="relative w-full h-[300px] overflow-hidden rounded-xl">
              {/* Main Image */}
              <img
                src={item.image}
                alt={item.name}
                className={`w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out ${
                  isHovered ? 'opacity-0' : 'opacity-100'
                }`}
              />
              {/* Hover Image */}
              {item.image2 && (
                <img
                  src={item.image2}
                  alt={`${item.name} - Hover`}
                  className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              )}
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
  )
}

export default FeaturedCakesList
