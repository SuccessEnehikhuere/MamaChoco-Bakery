import React from 'react'
import SectionTitle from './SectionTitle'
import FeaturedCakesList from './FeaturedCakesList'

const FeaturedCakes = () => {
  return (
    <div className="pt-24 py-20 mx-auto px-8 md:px-16  mt-8">
      <SectionTitle text="featured cakes" />
      <FeaturedCakesList />
    </div>
  )
}
  


export default FeaturedCakes