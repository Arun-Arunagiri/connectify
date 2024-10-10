import React from "react";
import "./Login.css";
import img2 from "../../assets/img2.svg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';

const clear = () => {
  document.getElementById("user").value = "";
  document.getElementById("pass").value = "";
}
const Login = () => {
  return (
    <div className="login">
      <Navbar />

      <div className="main">
        <div className="right-login">
          <h1>LOGIN</h1>
          <div className="inputs">
            <input type="text" id='user' placeholder="Username" />
            <input type="password" id='pass' placeholder="Password" />
          </div>

          <div className="buttons">
            <button type='button' onClick={clear} className="clear-btn">Clear</button>
            <button className="submit-btn">Login</button>
          </div>
          <p>Don't have an account?<a href="#"> Signup</a></p>
        </div>
        <div className="left-login">
          <img src={img2} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
