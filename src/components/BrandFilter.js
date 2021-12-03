import React, { useState, useEffect } from 'react'
import MySelect from './MySelect.js'
import { components } from 'react-select'
import '../index.css'

const Content = () => {
  const [optionSelected, setOptionSelected] = useState('')

  const [companies, setCompanies] = useState([])

  const getData = () => {
    fetch('api/companies.json', {
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
        setCompanies(myJson)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const MultiValue = (props) => (
    <components.MultiValue {...props}>
      <span>{props.data.label}</span>
    </components.MultiValue>
  )

  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{' '}
          <label>{props.label}</label>
        </components.Option>
      </div>
    )
  }

  const handleChange = (selected) => {
    setOptionSelected(selected)
  }
  // menuIsOpen / onMenuOpen / onMenuClose

  return (
    <MySelect
      options={companies}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{ Option, MultiValue }}
      onChange={handleChange}
      allowSelectAll={true}
      value={optionSelected}
      menuIsOpen={true}
      onMenuOpen={true}
      className="mt-3"
      placeholder="Search brand"
    />
  )
}

export default Content
