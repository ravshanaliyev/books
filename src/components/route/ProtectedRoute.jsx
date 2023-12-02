import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ isAuthenicated }) => {
    if (isAuthenicated) {
        return <Navigate to={"/register"} replace />
    }
  return <Outlet />
}

export default ProtectedRoute