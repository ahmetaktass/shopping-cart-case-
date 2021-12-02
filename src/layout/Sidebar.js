import React from 'react'
import MultiSelectAll from '../components/MultiSelectAll'
import SortingFilter from '../components/SortingFilter'

const Sidebar = () => {
  return (
    <div className="w-layout-width mt-9 ">
      <SortingFilter />
      <MultiSelectAll />
    </div>
  )
}

export default Sidebar
