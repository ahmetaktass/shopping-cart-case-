import React, { useState, useEffect } from 'react'
import Buttons from '../components/Buttons/Buttons'

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
    <div className="flex-1">
      <div>
        <h1 className="text-xl text-text-title font-extralight mt-9">
          Proucts
        </h1>
      </div>
      <Buttons />
      <div>
        {products.length &&
          products.map((product, index) => (
            <div key={index}>{product.name} </div>
          ))}
      </div>
    </div>
  )
}

export default Content
