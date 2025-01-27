'use client'
import React from 'react'

interface sectionTitleProps {
  text: string
}

const SectionTitle: React.FC<sectionTitleProps> = ({text}) => {
  return (
    <section>
      <h2 className="font-bold text-3xl capitalize">{text}</h2>
      <div className="h-1 w-24 mt-2 bg-text" />
    </section>
  )
}

export default SectionTitle