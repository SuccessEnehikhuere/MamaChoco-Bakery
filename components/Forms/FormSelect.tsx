import React from 'react'
interface formProps {
  name: string
  label: string
  size: string
  defaultValue?: string | number | readonly string[] | undefined
  list?: string[]
}

const FormSelect = ({ name, label, defaultValue, size, list }:formProps) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="mb-1 text-sm font-medium capitalize cursor-pointer"
      >
        {label}
      </label>

      <select
        className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${size}`}
        name={name}
        id={name}
        defaultValue={defaultValue}
      >
        {/* {list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))} */}
      </select>
    </div>
  )
}

export default FormSelect
