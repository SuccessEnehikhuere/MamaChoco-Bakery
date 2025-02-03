import CakeList from '@/components/Products/CakeList'
import Filters from '@/components/Products/Filters'
import Pagination from '@/components/Products/Pagination'
import React from 'react'

const Cakes = () => {
  return (
    <section>
      <Filters />
      <CakeList />
      <Pagination />
    </section>
  )
}

export default Cakes
