import React, { useState, useEffect } from 'react'
import ProductItem from '../components/ui/ProductItem'

const Content = () => {
  const [products, setProducts] = useState([])

  const getData = () => {
    fetch('api/data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        console.log('myJson', myJson)
        setProducts(myJson)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="w-full mt-4  h-1400px overflow-hidden ">
      <div className="grid grid-cols-4    gap-2 bg-white rounded-lg overflow-hidden">
        {products.length &&
          products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
      </div>
    </div>
  )
}

export default Content
