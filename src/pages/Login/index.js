import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { loading, loggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Add your authentication logic here
        // For demonstration purposes, let's assume the correct email is "user" and password is "password"
        if (email === 'user' && password === 'password') {
            // Successful login logic
            setErrorMessage('');
            alert('Login successful!');
            // Redirect to the HOME page
            navigate('/home');
        } else {
            // Display error message for incorrect password
            setErrorMessage('Incorrect email or password');
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-gray-800 p-10 rounded-lg w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-5 text-white'>Login</h2>
                <form className='space-y-4' onSubmit={handleLogin}>
                    <div>
                        <label className='block text-white'>Username</label>
                        <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full p-2 border rounded'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div>
                        <label className='block text-white'>Password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full p-2 border rounded'
                            placeholder='Enter your password'
                        />
                    </div>
                    {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                    <button
                        type='submit'
                        className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
