import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoutes = ({isAuthenicated}) => {
  if(isAuthenicated){
    return <Navigate to={"/"} replace/>
  }
  return <Outlet />
}

export default AuthRoutes