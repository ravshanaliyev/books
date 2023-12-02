import React from 'react'

const Button = ({children, type = 'button', onClick, className = ''}) => {
  return <button className={`default-btn ${className}`} type={type} onClick={() => onClick?.()}  >{children}</button>
}

export default Button