import React from 'react'

const Form = ({children, onSubmit, className}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit?.()
    }
  return <form action="" onSubmit={handleSubmit} className={className}>{children}</form>
}

export default Form