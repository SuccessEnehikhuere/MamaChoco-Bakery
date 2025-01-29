'use client'

import React, { useState, useEffect } from "react"


const SectionEnding = () => {

  const messages = [
    "Hand made craft cakes that are as delightful to the eyes as they are to the taste buds.",
    "Baking happiness, one cake at a time.",
    "A slice of joy in every bite.",
    "Crafted with love, served with smiles.",
    "Where taste meets artistry."
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [messages.length]);


  return (
    <div className="tracking-wider mx-auto px-8 md:px-16 mt-8 text-text text-center">
      <div>{/* <img src='/images/cheese.jpg'/> */}</div>
      <div className="pb-6">
        <h2 className="text-amber-600 font-bold text-2xl">
          Welcome to MamaChoco Bakery
        </h2>
        <p className="text-center">
          <strong className="font-bold text-3xl">
            {messages[currentMessageIndex]}
          </strong>
        </p>
      </div>
      <div className="text-xl">
        <p>
          Each creation is a masterpiece, baked with love and precision,
          offering a variety of flavors to suit every celebration—whether you're
          a fan of timeless classics or adventurous new tastes.
        </p>
        <br />
        <p>
          Looking for something truly unique? Contact us at{' '}
          <strong>+234 (0) 7044874839</strong> or{' '}
          <strong>+234 (0) 9157239802</strong>
          to design your very own <strong>custom cake</strong>. We'll bring your
          vision to life, working within your budget, and tailoring the colors
          and flavors to make your special moments even sweeter.
        </p>
      </div>
    </div>
  )
}

export default SectionEnding
