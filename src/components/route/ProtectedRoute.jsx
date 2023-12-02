import React from 'react'
import { isAuthenicated } from '../../store'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    if (isAuthenicated) {
        return <Navigate to={"/register"} replace />
    }
  return <Outlet />
}

export default ProtectedRoute