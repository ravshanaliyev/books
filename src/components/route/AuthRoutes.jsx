import React from 'react'
import { isAuthenicated } from '../../store'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoutes = () => {
  if(isAuthenicated){
    return <Navigate to={"/"} replace/>
  }
  return <Outlet />
}

export default AuthRoutes