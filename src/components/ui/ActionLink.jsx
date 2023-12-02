import React from 'react'
import { Link } from 'react-router-dom'

const ActionLink = ({path, children}) => {
  return <Link className='action-link' to={path}>{children}</Link>
}

export default ActionLink