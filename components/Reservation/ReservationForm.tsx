import React from 'react'
import { GrRestaurant } from 'react-icons/gr'

const ReservationForm = () => {
  return (
    <div className="bg-green-700 p-6 rounded-lg">
      <GrRestaurant className="w-[5rem] h-[5rem] text-white mt-[2rem] mx-auto " />
      <h1 className="text-center font-bold uppercase text-[30px] md:text-[40px] lg:text-[50px] mt-[0.5rem] text-white">
        Reservation
      </h1>
      <p className="uppercase text-[20px] md:text-[25px] text-white font-semibold text-center">
        Book your Cake
      </p>
      {/* inputs */}
      <div className="mt-[2rem]">
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center  mx-auto justify-between space-x-4">
          <select
            className="px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100"
            name="wedding"
            id="wedding"
          >
            <option value="trad" className="text-black">
              Trad Wedding
            </option>
            <option value="white" className="text-black">
              White Wedding
            </option>
          </select>
          <input
            type="date"
            className="px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100"
          />
        </div>
        <input
          type="text"
          className="px-10 py-2.5 bg-transparent block w-full mx-auto mt-[1rem] rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100"
          placeholder="Tell Us The Occcasion"
        />
        <div className="mt-[2rem]  text-center mx-auto">
          {/* wrap this with a link that sends details to whatsapp and email */}
          <a
            href="https://wa.me/+2349157239802?text=I%20want%20to%20book%20a%20cake"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 rounded-lg mb-[3rem] text-[16px] w-full bg-blue-950 transition-all duration-200 hover:bg-red-600 text-white">
              Book Now
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ReservationForm
