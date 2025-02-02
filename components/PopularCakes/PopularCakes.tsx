import React from 'react'
import PopularCakesList from './PopularCakesList'


const PopularCakes = () => {
  return (
    <div className="pt-[3rem] pb-[3rem] mx-auto px-8 md:px-16 ">
      <h1 className="heading">
        Our Popular <span className="text-red-600"> Cakes</span>
      </h1>
      <PopularCakesList />
    </div>
  )
}

export default PopularCakes
