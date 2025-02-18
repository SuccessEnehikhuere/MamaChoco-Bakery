import React, { ReactNode } from 'react'



function layout({children}:{children:ReactNode}) {
  return (
      <div className="lg:col-span-4">
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
  )
}

export default layout
