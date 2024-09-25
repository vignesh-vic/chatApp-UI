import React, { useState } from 'react'
import BackgroundImage from "../images/bg-image.png";
import '../App.css';
import IconButton from '@mui/material/IconButton';

import { Button, CircularProgress, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../config/axiosConfig';
import toast, { Toaster } from 'react-hot-toast'; // Import React Hot Toast

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [registerData, setRegisterData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData((prev) => (
            {
                ...prev,
                [name]: value
            }
        )
        )
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex pattern
        return emailRegex.test(email);
    };

    const handleRegister = async () => {
        const { fullName, email, password, confirmPassword } = registerData;
        if (!fullName && !email && !password && !confirmPassword) {
            toast.error('All is required');
            return;
        }

        if (!validateEmail(email)) {
            toast.error('Invalid email format');
            return;
        }

        // Validate password length
        if (password.length < 5) {
            toast.error('Password must be at least 5 char');
            return;
        }

        // Validate confirm password
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        try {

            axiosInstance.post('/auth/register', {
                fullName, email, password, confirmPassword
            })
            navigate('/login')
        } catch (error) {
            toast.error(error)
        }
    }

    return (

        <div className="sign-in__wrapper" >
            <div className='Register-container'>
                <div className='login-card'>
                    Register
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ margin: "20px " }}>
                        <TextField size="small" sx={{ width: "90%" }} id="outlined-basic" label="FullName" variant="outlined" name='fullName' value={registerData.fullName} onChange={handleChange} />
                    </div>
                    <div style={{ margin: "20px " }}>
                        <TextField size="small" sx={{ width: "90%" }} id="outlined-basic" label="Email" variant="outlined" name='email' value={registerData.email} onChange={handleChange} />
                    </div>
                    {/* Password Field */}
                    <FormControl sx={{ width: "81%" }} variant="outlined">
                        <InputLabel size="small" fullWidth htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            size="small"
                            name='password'
                            value={registerData.password}
                            onChange={handleChange}
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

                    {/* Confirm Password Field */}
                    <FormControl sx={{ width: "81%", marginTop: "20px" }} variant="outlined">
                        <InputLabel size="small" fullWidth htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-confirm-password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            size="small"
                            name='confirmPassword'
                            value={registerData.confirmPassword}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle confirm password visibility"
                                        onClick={handleClickShowConfirmPassword}

                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirm Password"
                        />
                    </FormControl>

                    <Button variant="contained" sx={{ width: "82%", marginTop: "40px" }} fullWidth onClick={handleRegister}>

                        {
                            isLoading ?
                                <CircularProgress sx={{ color: "white" }} size={25} color="white" />
                                : "Register"
                        }
                    </Button>
                    <div >
                        <p className='footer-text'>Do you have an account? <span onClick={() => { navigate('/login') }}>Login</span> </p>

                    </div>

                </div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    toastOptions={{
                        className: 'custom-toast',
                    }}
                />
            </div>
        </div >
    )
}

export default Register