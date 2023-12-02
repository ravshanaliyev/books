import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../components/route/AuthRoutes'
import ProtectedRoute from '../components/route/ProtectedRoute'
import { authRoutes, protectedRoutes } from '../configs/routes'
import AppRoute from '../components/route/AppRoute'
import CheckAuth from '../components/route/CheckAuth'
import { useSelector } from 'react-redux'

const AllPages = () => {
    const { signedIn } = useSelector((state) => state.session);
    const { role } = useSelector((state) => state.user);
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route  path='/' element={<ProtectedRoute isAuthenicated={signedIn}/>}>
                {
                    protectedRoutes.map((route) => (
                        <Route
                            key={route.key}
                            path={route.path}
                            element={
                                <CheckAuth
                                    userRole={role}
                                    role={route.role}
                                >
                                    <AppRoute component={route.component}/>
                                </CheckAuth>
                            }
                        />
                    ))
                }
            </Route>
            <Route  path='/' element={<AuthRoutes isAuthenicated={signedIn}/>}>
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
    </Suspense>
  )
}

export default AllPages