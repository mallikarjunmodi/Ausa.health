
// pages/login.js
// pages/login.js
import {useNavigate} from "react-router-dom";
import { Helmet } from 'react-helmet';

import React, { useState, useEffect } from 'react';
const SESSION_TIMEOUT_HOURS = 2; // Set the session timeout limit here

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
      // Simulate an async operation like fetching data
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // 3 seconds delay for demonstration
    }, []);
  

    const handleSessionTimeout = () => {
        const storedTime = localStorage.getItem('loginTime');
        if (storedTime) {
            const currentTime = new Date().getTime();
            const timeElapsed = (currentTime - parseInt(storedTime)) / (1000 * 60 * 60); // Convert to hours

            if (timeElapsed > SESSION_TIMEOUT_HOURS) {
                localStorage.removeItem('userToken');
                localStorage.removeItem('loginTime');
                navigate('/login'); // Redirect to login page
            }
        }
    };

    useEffect(() => {
        handleSessionTimeout();
    }, []); // Run on component mount


    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if username and password match 'ausahealth'
        if (username === 'ausahealth' && password === 'ausahealth') {
            localStorage.setItem('userToken', 'your-auth-token'); // Set token on successful login
            localStorage.setItem('loginTime', new Date().getTime().toString()); // Store the current time
            navigate('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };


    if (isLoading) {
        return <div className='h-screen flex items-center justify-center'> <img src="/loading.gif" alt="Loading..." /></div>; // Replace with your loading animation
      }
    

    return (
        <>
              <Helmet>
        <link rel="preload" href="url('assets/back.jpg')" as="image" />
      </Helmet>
        <div className="flex justify-center items-center min-h-screen bg-cover  overflow-hidden bg-main-pattern text-manrope">
                    <div className=' flex justify-center items-center min-h-screen bg-[#010101]/50 w-full h-full'>

        <div className="p-6 max-w-sm w-full bg-white/75 rounded-[20px] border border-gray-200 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input 
                        className="shadow appearance-none border rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username"
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="password">
                        Password
                    </label>
                    <input 
                        className="shadow appearance-none border rounded-[10px] w-full p-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="**********"
                    />
                </div>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-[8px] focus:outline-none focus:shadow-outline" 
                    type="submit"
                >
                    Sign In
                </button>
            </form>
        </div>
        </div>
    </div>

    </>
    );
};

export default Login;

