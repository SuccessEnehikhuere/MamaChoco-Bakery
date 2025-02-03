'use client'
import React from 'react'

interface formProps {
  name: string,
  type:string,
  label: string,
  size: string,
  defaultValue?: string | number | readonly string[] | undefined;

}

const FormInput = ({ name, type, defaultValue, label, size }:formProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium capitalize">{label}</label>

      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${size}`}
      />
    </div>
  )
}

export default FormInput
