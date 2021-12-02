import React from 'react'

export default function ProductItem({ product }) {
  return (
    <div className=" flex flex-col w-124px h-225px     ">
      <div className="w-full flex justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-92px h-92px"
        />
      </div>
      <div className="flex  flex-col mt-2 items-stretch  h-full relative">
        <div className="text-sm text-primary-brand-color font-semibold  leading-5">
          {' '}
          ₺{product.price}{' '}
        </div>
        <div className="text-sm font-semibold mb-2 text-primary-color leading-5">
          {' '}
          {product.name}{' '}
        </div>
        <button className=" w-full flex items-center justify-center absolute bottom-0 text-white-color font-semibold text-xs leading-5 rounded-sm  bg-primary-brand-color   ">
          add
        </button>
      </div>
    </div>
  )
}
