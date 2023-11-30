import React, { useContext } from 'react'
import { userData } from '../App'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    let { uid } = useContext(userData);
    if (uid) {
        return children;
    } else {
        return <Navigate to='/login' />
    }
}

export default ProtectedRoute