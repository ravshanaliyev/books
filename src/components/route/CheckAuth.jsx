import React from 'react'

const CheckAuth = ({userRole, role, children}) => {
    console.log(role, userRole);
    return role.some(el => el === userRole) ? children : <h1>Not Found</h1>
}

export default CheckAuth