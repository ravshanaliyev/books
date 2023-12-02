import React from 'react'

const Input = ({placeholder = '', type = 'text', name = '', onChange, defaultValue = '', className = ''}) => {
  return <input className={`text-input ${className}`} type={type} placeholder={placeholder} name={name} onChange={e => onChange?.(e.target.value)}  defaultValue={defaultValue} />
}

export default Input