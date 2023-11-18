import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/api'; // Import your API functions

const Login = () => {
    const { loading, loggedIn, isAuthenticated, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        // Dispatch login action using the API function
        await loginUser({ email, password }, dispatch); // Pass dispatch here

        // Check the authentication status after the login attempt
        if (isAuthenticated) {
            // Successful login logic
            setErrorMessage('');
            alert('Login successful!');
            // Redirect to the HOME page
            navigate('/home');
        } else {
            // Display error message for incorrect password
            setErrorMessage(error || 'Incorrect email or password');
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
