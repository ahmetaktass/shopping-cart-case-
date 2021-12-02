import React, { Component } from 'react'

export default class SortingFilter extends Component {
  render() {
    return (
      <div>
        <h1 className="text-gray-color font-semibold  text-sm leading-18">
          Sorting
        </h1>
        <div className="flex flex-col gap-y-2 mt-2 p-6 text-secondary-color  font-normal text-sm tracking-widest ">
          <label htmlFor="" className="flex items-center ">
            <input type="radio" value="short" className="mr-3" />
            Price low to high
          </label>
          <label htmlFor="" className="flex items-center ">
            <input type="radio" value="short" className="mr-3" />
            Price high to low
          </label>
          <label htmlFor="" className="flex items-center ">
            <input type="radio" value="short" className="mr-3" />
            New to old
          </label>
          <label htmlFor="" className="flex items-center ">
            <input type="radio" value="short" className="mr-3" />
            Old to new
          </label>
        </div>
      </div>
    )
  }
}
