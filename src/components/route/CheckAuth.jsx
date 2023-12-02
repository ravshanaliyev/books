import React from 'react'
import { userRole } from '../../store';

const CheckAuth = ({role, children}) => {
    console.log(role, userRole);
    return role.some(el => el === userRole) ? children : <h1>Not Found</h1>
}

export default CheckAuth