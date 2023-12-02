import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../components/route/AuthRoutes'
import ProtectedRoute from '../components/route/ProtectedRoute'
import { authRoutes, protectedRoutes } from '../configs/routes'
import AppRoute from '../components/route/AppRoute'
import CheckAuth from '../components/route/CheckAuth'

const AllPages = () => {
  return (
    <>
        <Routes>
            <Route  path='/' element={<ProtectedRoute/>}>
                {
                    protectedRoutes.map((route) => (
                        <Route
                            key={route.key}
                            path={route.path}
                            element={
                                <CheckAuth
                                    role={route.role}
                                >
                                    <AppRoute component={route.component}/>
                                </CheckAuth>
                            }
                        />
                    ))
                }
            </Route>
            <Route  path='/' element={<AuthRoutes/>}>
                {
                    authRoutes.map((route) => (
                        <Route
                            key={route.key}
                            path={route.path}
                            element={<AppRoute component={route.component}/>}
                        />
                    ))
                }
            </Route>
            <Route  path='*' element={<p>Not Found</p>}/>
        </Routes>
    </>
  )
}

export default AllPages