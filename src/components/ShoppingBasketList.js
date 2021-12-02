import React from 'react'
import BasketCounter from './BasketCounter'
import TotalPriceButton from './Buttons/TotalPriceButton'

const ShoppingBasketList = () => {
  return (
    <div className="w-full border-8 mt-9 relative h-96 max-h-80 pt-6 px-6   border-primary-brand-color ">
      <BasketCounter />
      <BasketCounter />
      <BasketCounter />
      <div className=" absolute  bottom-4 right-4 ">
        <TotalPriceButton />
      </div>
    </div>
  )
}

export default ShoppingBasketList
