import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

const user = null; //{email : "probir"}

if(!user){
    return <Navigate to="/login" />
}

    return children;
};

export default PrivateRoute;