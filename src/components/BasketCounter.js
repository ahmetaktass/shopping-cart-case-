import React from 'react'
import Minusİcon from '../İcons/minusİcon.svg'
import Plusİcon from '../İcons/plusİcon.svg'

const BasketCounter = () => {
  return (
    <div className="flex justify-between my-2">
      <div className="flex flex-col   ">
        <h1 className="text-sm text-primary-color  font-normal tracking-widest leading-4">
          Example Products
        </h1>
        <div className="text-sm leading-4 mt-1 tracking-widest font-semibold text-primary-brand-color">
          ₺ 14,99
        </div>
      </div>

      <div className="flex py-2 gap-x-2 ">
        <img src={Minusİcon} alt={'minusİcon'} />
        <div className="w-8 h-8 bg-primary-brand-color flex items-center justify-center">
          1
        </div>
        <img src={Plusİcon} alt={'Plusİcon'} />
      </div>
    </div>
  )
}

export default BasketCounter
