import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <span className="loading items-center text-center text-red-600  flex justify-center mx-auto loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;