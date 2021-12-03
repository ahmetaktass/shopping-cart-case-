import React from 'react'
import Back from '../İcons/back.svg'
import Next from '../İcons/next.svg'
const Pagination = () => {
  return (
    <div className="flex items-center w-full h-10 px-2 justify-between ">
      <div className="flex items-center justify-center">
        <img src={Back} alt="Basketİcon" />
        <span className="text-primary-brand-color p-2">Prev</span>
      </div>
      <li className="list-none text-sm font-normal  text-gray-color  leading-4">
        1
      </li>
      <li className="list-none text-sm font-normal text-gray-color leading-4">
        2
      </li>
      <li className="list-none text-sm font-normal text-gray-color bg-primary-brand-color p-2 leading-4">
        4
      </li>
      <li className="list-none text-sm font-normal text-gray-color leading-4">
        ...
      </li>
      <li className="list-none text-sm font-normal text-gray-color leading-4">
        17
      </li>
      <li className="list-none text-sm font-normal text-gray-color leading-4">
        18
      </li>
      <li className="list-none text-sm font-normal text-gray-color leading-4">
        19
      </li>
      <li className="list-none text-sm font-normal text-gray-color leading-4">
        20
      </li>
      <li className="list-none text-sm font-normal text-gray-color leading-4"></li>
      <div className="flex items-center  justify-centers">
        {' '}
        <span className="p-2">Next</span>
        <img src={Next} alt="NExt" />
      </div>
    </div>
  )
}

export default Pagination
