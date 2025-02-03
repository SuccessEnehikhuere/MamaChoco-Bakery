import React from 'react'

const PersonalizedCakes = () => {
  return (
    <div className="py-[5rem]">
      <div className="text-center">
        <h1 className="text-black font-bold uppercase text-[28px]  sm:text-[38px] md:text-[50px]">
          Need Something specific?
        </h1>
        <p className="text-opacity-70 text-black w-[85%] md:w-[60%] mx-auto text-[20px]">
          Need a cake that is very specific and unique?  Contact us at{' '}
          <strong>+234 (0) 7044874839</strong> or{' '}
          <strong>+234 (0) 9157239802 </strong> 
           to design your very own <strong>custom cake</strong>. We'll bring your
          vision to life, working within your budget, and tailoring the colors
          and flavors to make your special moments even sweeter.
        </p>
        <div className="mt-[3rem]">
          <button className="uppercase px-8 py-4 bg-green-700 hover:bg-green-900 transition-all duration-200 rounded-md text-white font-bold">
            contact us
          </button>
        </div>
      </div>
    </div>
  )
}

export default PersonalizedCakes