import SectionTitle from '@/components/SectionTitle'
import React from 'react'

const page = () => {
  return (
    <section className=" py-8">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          {/* <img
            src={image}
            className="object-cover  h-full rounded-lg shadow-md "
          /> */}
        </div>

        <div>
          <SectionTitle text="our journey" />
          <p className="text-base capitalize mt-8 leading-8 tracking-wide md:leading-6 md:tracking-wider lg:leading-8 lg:tracking wide">
            At Mamachoco Bakery, we don’t just bake cakes—we craft edible
            stories, turning your sweetest dreams into reality. Every early
            morning start, every swirl of buttercream, and every delicate detail
            is a testament to the love and creativity poured into each creation.
            Baking isn’t just a job for me; it’s where my heart feels most at
            home.<br/> It all began in January 2018, with nothing but a kitchen, a
            handful of ingredients, and a big dream. No formal training, no
            fancy equipment—just a passion for creating joy through cakes. What
            started as a little hobby for friends and family soon grew into
            something far greater than I could have imagined. At Mamachoco
            Bakery, every cake is personal. Whether it’s a whimsical birthday
            cake, an elegant wedding centerpiece, or a playful cupcake tower for
            any occasion, I believe that your celebration deserves something
            truly special.<br/> Every design is made with care, and every flavor is
            crafted to surprise and delight. My journey so far has been nothing
            short of magical. From that first cake to where I am today, I’ve
            learned that the secret ingredient in every recipe is the love and
            gratitude I feel for this incredible adventure. So here’s to
            creating more memories, one cake at a time. Let’s make your next
            celebration as unique and unforgettable as you are!
          </p>
        </div>
      </div>
    </section>
  )
}

export default page