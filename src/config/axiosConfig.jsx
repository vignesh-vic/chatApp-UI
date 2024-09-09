import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your API's base URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

export default axiosInstance;