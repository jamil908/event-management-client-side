import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
  
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                Swal.fire({
                    title: 'Google Login Successful!',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                });
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Login Successful!',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center pt-20 justify-center  p-6">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-xl">
                <h1 className="text-3xl font-bold text-center text-gray-700">Welcome Back!</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name='email' placeholder="Enter your email" className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name='password' placeholder="Enter your password" className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="text-right">
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>
                    <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition">Login</button>
                </form>
                <div className="relative mt-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">Or</span>
                    </div>
                </div>
                <button onClick={handleGoogleLogin} className='w-full flex items-center justify-center gap-2 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition'>
                    <FaGoogle className='text-lg' /> Login with Google
                </button>
                <p className='text-center text-sm text-gray-600 mt-4'>
                    New Here? <Link to='/register' className='text-blue-600 hover:underline'>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
