import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import sprinkleSvg from '../assets/Sprinkle.svg';
import wbackGif from '../assets/wback.gif';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      sessionStorage.setItem('userEmail', email); // Store the email in session storage
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-wrapper flex justify-center items-center w-full h-[100vh]"
         style={{ backgroundImage: `url(${sprinkleSvg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <img src={wbackGif} alt="Character Animation" style={{ width: '400px', position: 'absolute', bottom: '0px', left: '0px' }} /> 
      {/* Background applied to the entire page */}
      <div className="left bg-blue-500 w-80 h-[24rem] shadow-md flex items-center justify-center relative z-10 rounded-lg">
        <img src={logo} alt="Logo" className="w-60 z-20 relative" />
      </div>

      <form className="right bg-white w-80 h-[24rem] shadow-md flex flex-col items-center relative z-10 rounded-lg" onSubmit={onLogin}>
        <div className="heading text-2xl font-bold mt-10">
          LOGIN
        </div>
        <div className="username mt-4">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="username" required className="border border-black rounded-sm h-8 w-60 p-2" />
        </div>
        <div className="password mt-4 relative">
          <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" required className="border border-black rounded-sm h-8 w-60 p-2 pr-10" />
          <button type="button" className="absolute right-2 top-2 text-gray-500 cursor-pointer" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="flex justify-between gap-10 mt-4">
          <div className="forgot flex gap-2">
            <input type="checkbox" id="remember-me" className="border" />
            <label htmlFor="remember-me" className="text-blue-500 text-xs">Remember Me</label>
          </div>
          <Link to="/reset" className="text-blue-500 text-xs">Forgot Password</Link>
        </div>
        <button type="submit" className="submit mt-4 border bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500">
          Login
        </button>
        <div className="signUp mt-4">
          Don't have an account?{' '}
          <span className="font-medium">
            <Link to="/signup">Sign up</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
