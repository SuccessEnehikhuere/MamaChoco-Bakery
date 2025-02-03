'use client'

import React from 'react'
import FormInput from '../Forms/FormInput'
import { useLoaderData } from 'react-router-dom'
import FormSelect from '../Forms/FormSelect'
import Link from 'next/link'

const Filters = () => {
  // const { meta, params } = useLoaderData()
  return (
    <form className="rounded-md grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 px-8 gap-x-4 gap-y-8 bg-blue-100">
      <FormInput
        type="search"
        name="search"
        label="search cakes"
        size="input-sm"
        // defaultValue={search}
      />

      {/*CATEGORIES*/}
      <FormSelect
        label="select cake by Type"
        name="company"
        // list={meta.companies}
        size="select-sm"
        // defaultValue={company}
      />

      {/*COMPANIES*/}
      <FormSelect
        label="select cake by Flavour"
        name="category"
        // list={meta.categories}
        size="select-sm"
        // defaultValue={category}
      />

      {/*ORDERS*/}
      <FormSelect
        label="Select Cake by Occasion"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
        // defaultValue={order}
      />

      {/*BUTTONS*/}
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-950 rounded-md text-sm hover:bg-gray-700 transition"
      >
        Search
      </button>
      <button className="px-4 py-2 text-white bg-blue-600 rounded-md text-sm hover:bg-blue-700 transition">
        <Link href="/cakes">Reset</Link>
      </button>
    </form>
  )
}

export default Filters
