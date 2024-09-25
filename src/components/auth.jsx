import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const savedToken = localStorage.getItem('token');
    return savedToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
