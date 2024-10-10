import React from "react";
import "./Login.css";
import img2 from "../../assets/img2.svg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';

const Login = () => {
  return (
    <div className="login">
      <Navbar />

      <div className="main">
        <div className="right-login">
          <h1>Login</h1>
          <div className="inputs">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          </div>

          <div className="buttons">
            <button className="clear-btn">Clear</button>
            <button className="submit-btn">Login</button>
          </div>
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
