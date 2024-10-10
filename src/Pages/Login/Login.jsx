import React from "react";
import "./Login.css";
import img2 from "../../assets/img2.svg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

async function login(username, password) {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (response.ok) {
    const data = await response.json();
    return data.token;  // JWT token
  } else {
    const error = await response.text();
    throw new Error('Login failed: ' + error);
  }
}


const clear = () => {
  document.getElementById("user").value = "";
  document.getElementById("pass").value = "";
}
const submit = () => {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
}
const Login = () => {
  return (
    <div className="login">
      {/* <Navbar /> */}

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

          <div className="buttons">
            <button type='button' onClick={clear} className="clear-btn">Clear</button>
            <button type='button' onClick={submit} className="submit-btn">Login</button>
          </div>
          <p>Don't have an account?<Link to="/signup">Signup</Link></p>
        </div>

      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
