import React, { useState } from 'react';
import './Signup.css';
import img2 from "../../assets/img2.svg"; // Import image
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios'; // Import Axios for HTTP requests

const Signup = () => {
  // State to manage form input values
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Clear input fields
  const clear = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');
    setSuccessMessage('');
  };

  // Submit form data to the server for registration
  const submit = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      // Send the POST request to the backend to register the user
      const response = await axios.post('http://localhost:3000/register', {
        username: username,
        email: email,
        password: password,
        role: 'user', // Setting the role as 'user', can be dynamic if needed
      });

      console.log(username,password,email);

      // If the registration is successful
      if (response.status === 201) {
        alert('User registered successfully');
        setSuccessMessage('User registered successfully');
        clear(); // Clear form inputs after successful signup
      }
    } catch (error) {
      // Handle registration failure
      console.error("Error during registration:", error);
      setErrorMessage('User registration failed. Please try again.');
    }
  };

  return (
    <div className="signup">
      {/* Form layout */}
      <div className="main">

        <div className="right-signup">
          <h1>SIGNUP</h1>

          {/* Display error message */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* Display success message */}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <div className="inputs">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
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
            Already have an account? <Link to="/login">Login</Link>
          </p>

          <p>{setSuccessMessage}</p>
        </div>
        <div className="left-signup">
          <img src={img2} alt="Signup Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
