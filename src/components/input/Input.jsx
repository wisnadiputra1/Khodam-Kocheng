import React from 'react'
import clsx from 'clsx'

const Input = ({ type, placeholder, className, value, onChange }) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      required 
      className={clsx('py-2 px-3 w-[250px]', 'placeholder:font-lancelot placeholder:text-black placeholder:text-xl', 'bg-custom-gray-100 rounded-lg', className)} 
      value={value} 
      onChange={onChange} 
    />
  )
}

export default Input
