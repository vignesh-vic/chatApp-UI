import React, { useState } from 'react'
import BackgroundImage from "../images/bg-image.png";
import '../App.css';
import IconButton from '@mui/material/IconButton';

import { Button, CircularProgress, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axiosInstance from '../config/axiosConfig';
import { useDispatch } from 'react-redux';
import loginLogo from '../images/chatApplogo1.png'


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => (
            {
                ...prev,
                [name]: value
            }
        )
        )
    }



    const handleLogin = async () => {
        const { email, password } = loginData

        if (!email && !password) return toast.error('All is required');

        try {
            setIsLoading(true)

            const response = await axiosInstance.post('/auth/login', { email, password }, { withCredentials: true })
            if (response?.data?.token) {
                const now = new Date();
                const expiryTime = now.getTime() + 24 * 60 * 60 * 1000; // 24 hours in milliseconds

                localStorage.setItem("token", JSON.stringify(response?.data?.token), expiryTime);
                localStorage.setItem('tokenExpiry', expiryTime);  // Store the expiration time
                navigate('/chatapp ')
            }
            if (response?.data?.status === "success") {
                setIsLoading(false)
            }
        } catch (error) {

            if (error.response && error.response.data.message) {
                setIsLoading(false)
                toast.error(error.response.data.message);
            }
        }
    }

    return (
        <div className="sign-in__wrapper" >
            <div className='login-container'>
                <div className='login-card'>
                    Login
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ margin: "20px " }}>
                        <TextField size="small" sx={{ width: "90%" }} id="outlined-basic" label="Email" name='email' onChange={handleChange} variant="outlined" />
                    </div>
                    <FormControl sx={{ width: "81%" }} variant="outlined" >
                        <InputLabel size="small" fullWidth htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            name='password' onChange={handleChange}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            size="small"

                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Button variant="contained" sx={{ width: "82%", marginTop: "40px" }} onClick={handleLogin} fullWidth>

                        {
                            isLoading ?
                                <CircularProgress sx={{ color: "white" }} size={25} color="white" />
                                : "Login"
                        }
                    </Button>
                    <div >
                        <p className='footer-text'>Don't have an account? <span onClick={() => { navigate('/register') }}>Register</span> </p>

                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    className: 'custom-toast',
                }}
            />
        </div >
    )
}
