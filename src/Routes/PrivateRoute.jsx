import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext)

    // for back after login/register
    const location = useLocation();
    // console.log(location.pathname);
    
    if(loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(!user) {
        return<Navigate to='/login' state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoute;