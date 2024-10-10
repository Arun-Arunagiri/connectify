import React, { useState } from "react";
import "./Login.css";
import img2 from "../../assets/img2.svg";
import { Link, useNavigate } from 'react-router-dom';  // For navigation after login

const clear = () => {
  document.getElementById("user").value = "";
  document.getElementById("pass").value = "";
}

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');  // State to handle error messages
  const navigate = useNavigate();  // React Router hook to redirect user

  const submit = async () => {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
  
    if (!user || !pass) {
      setErrorMessage('Username and password are required.');
      return;
    }
  
    try {
      const response = await fetch('http://192.168.137.1:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: user, password: pass })
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        const role = data.role;  // 'admin' or 'user'
  
        // Store the token in localStorage (or secure cookie)
        localStorage.setItem('jwtToken', token);
  
        // Redirect based on role
        if (role === 'admin') {
          navigate('/admin');  // Admin dashboard route
        } else {
          navigate('/userpage');  // User dashboard route
        }
  
      } else {
        const error = await response.text();
        setErrorMessage(error);
      }
  
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login">
      <div className="main">
        <div className="left-login">
          <img src={img2} alt="" />
        </div>
        <div className="right-login">
          <h1>LOGIN</h1>
          <div className="inputs">
            <input type="text" id='user' placeholder="Username" required />
            <input type="password" id='pass' placeholder="Password" required />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}  {/* Display error message */}

          <div className="buttons">
            <button type='button' onClick={clear} className="clear-btn">Clear</button>
            <button type='button' onClick={submit} className="submit-btn">Login</button>
          </div>
          <p>Don't have an account?<Link to="/signup">Signup</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
