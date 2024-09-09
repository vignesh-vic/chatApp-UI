import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children }) => {
    const email = useSelector((state) => state.aurthReducer.email)
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true' || !!email
    if (isAuthenticated) {
        return children
    }
    return <Navigate to="/login" />
}

export default PrivateRoute
