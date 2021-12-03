import React from 'react'

const Footer = () => {
  return (
    <div className="w-full container mx-auto mt-28 mb-10 flex justify-center items-center gap-x-2 text-primary-brand-color font-semibold text-sm leading-3 ">
      <span>©2019 Market</span>
      <div className="w-1 h-1 flex justify-center items-center  bg-primary-brand-color rounded-full"></div>
      <span>Privacy Policy</span>
    </div>
  )
}

export default Footer
