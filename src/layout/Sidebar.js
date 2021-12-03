import React from 'react'
import BrandFilter from '../components/BrandFilter'
import SortingFilter from '../components/SortingFilter'
import TagsFilter from '../components/TagsFilter'

const Sidebar = () => {
  return (
    <div className="w-layout-width mt-9 ">
      <SortingFilter />
      <div className="  h-1/3 overflow-hidden  ">
        <h1 className="text-gray-color font-semibold  text-sm leading-18">
          Brands
        </h1>
        <BrandFilter />
      </div>
      <div className="  h-1/3 overflow-hidden -mt-12  ">
        <h1 className="text-gray-color font-semibold mb-9 text-sm leading-18">
          Tags
        </h1>
        <TagsFilter />
      </div>
    </div>
  )
}

export default Sidebar
