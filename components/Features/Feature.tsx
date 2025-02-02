import Image from 'next/image'
import React from 'react'
import img1 from '@/public/images/cupcake1.jpeg'
import img2 from '@/public/images/cream1.jpg'
import img3 from '@/public/images/cupcake2.jpeg'

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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              corporis suscipit laudantium laboriosam ab natus, architecto
              recusandae reiciendis esse dolores cupiditate soluta velit tenetur
              sapiente, perferendis numquam nisi vero ex!
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              corporis suscipit laudantium laboriosam ab natus, architecto
              recusandae reiciendis esse dolores cupiditate soluta velit tenetur
              sapiente, perferendis numquam nisi vero ex!
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              corporis suscipit laudantium laboriosam ab natus, architecto
              recusandae reiciendis esse dolores cupiditate soluta velit tenetur
              sapiente, perferendis numquam nisi vero ex!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature 