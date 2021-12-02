import React from 'react'
import Basketİcon from '../İcons/basket.svg'
import Logo from '../İcons/Logo.svg'
const Header = () => {
  return (
    <div className=" w-full h-header-height bg-primary-brand-color ">
      <div className="container mx-auto h-full flex items-center justify-between ">
        <div className=" none w-32   bg-red-500"></div>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex items-center justify-center w-32 gap-2 h-header-height bg-secondary-brand-color">
          <img src={Basketİcon} alt="Basketİcon" />
          <span className="text-white-color font-semibold">₺ 39.99</span>
        </div>
      </div>
    </div>
  )
}

export default Header
