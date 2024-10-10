import React, { useState } from 'react';
import './Signup.css';
import img2 from "../../assets/img2.svg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios'; // Import Axios for making HTTP requests

const Signup = () => {
  // State to manage form inputs
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Clear form fields
  const clear = () => {
    setUser('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  // Submit form data to the server
  const submit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Send form data to the backend via POST request
      const response = await axios.post('http://localhost:5000/register', {
        username: user,
        email: email,
        password: password,
        role: 'user', // Specify the role or get it dynamically
      });

      if (response.status === 201) {
        alert('User registered successfully');
        clear(); // Clear the form on successful registration
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert('User registration failed');
    }
  };

  return (
    <div className="signup">
      {/* <Navbar /> */}
      <div className="main">
        <div className="right-signup">
          <h1>SIGNUP</h1>
          <div className="inputs">
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Enter Username"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>

          <div className="buttons">
            <button type="button" onClick={clear} className="clear-btn">
              Clear
            </button>
            <button type="button" onClick={submit} className="submit-btn">
              Signup
            </button>
          </div>
          <p>
            Already have an account?{' '}
            <Link to="/login">Login</Link>
          </p>
        </div>
        <div className="left-signup">
          <img src={img2} alt="" />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Signup;
