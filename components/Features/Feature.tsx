import Image from 'next/image'
import React from 'react'
import img1 from '@/public/images/s1.jpg'
import img2 from '@/public/images/s2.jpg'
import img3 from '@/public/images/s3.jpg'

const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      {/* heading */}
      <h1 className="heading">
        Cakes made with <br /> love and
        <span className="text-red-600"> Care</span>
      </h1>
      {/* cards*/}
      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        {/*first card*/}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={img1} alt="cake-image" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Our Cake
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              At MamaChoco, we create delicious, freshly baked cakes for every
              occasion. From rich chocolate to fluffy vanilla, our cakes are
              made with the finest ingredients. Need something special? Our
              custom designs bring your vision to life. Whether it's a birthday,
              wedding, or just a sweet treat, we’ve got you covered. Explore our
              flavors and make every moment unforgettable!
            </p>
          </div>
        </div>

        {/*second card*/}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200">
            <Image src={img2} alt="cake-image" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Your Opinion is Important
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              We value your feedback and strive to make every experience better.
              Your thoughts help us improve and create even more delightful
              moments for you. Whether it’s a suggestion, compliment, or review,
              we’d love to hear from you! Share your experience and let us know
              how we can serve you better.
            </p>
          </div>
        </div>

        {/*third card*/}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
            <Image src={img3} alt="cake-image" className="rounded-3xl" />
            <h1 className="mt-[1.5rem] text-center text-[24px] text-black font-semibold">
              Chocolate Cakes
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Rich, moist, and irresistibly decadent, our chocolate cakes are a
              chocoholic’s dream. Made with the finest cocoa and premium
              ingredients, each bite melts in your mouth with pure bliss.
              Whether for a celebration or a sweet craving, our chocolate cakes
              are the perfect treat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature 