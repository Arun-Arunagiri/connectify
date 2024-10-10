import React from 'react'
import './Signup.css'
import img2 from "../../assets/img2.svg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';

const clear = () => {
  document.getElementById("user").value = "";
  document.getElementById("pass").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pass2").value = "";
}
const submit = () => {
  const user = document.getElementById("user").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const pass2 = document.getElementById("pass2").value;
  if (pass === pass2) {
    alert("Passwords match");
  }
  else {
    alert("Passwords do not match");
  }
}

const Signup = () => {
  return (
    <div className="signup">
      <Navbar />

      <div className="main">
        <div className="right-signup">
          <h1>SIGNUP</h1>
          <div className="inputs">
            <input type="text" id='user' placeholder="Enter Username" />
            <input type="email" id='email' placeholder="Enter Email id" />


            <input type="password" id='pass' placeholder="Enter Password" />
            <input type="password" id='pass2' placeholder="Enter confirm Password" />


          </div>

          <div className="buttons">
            <button type='button' onClick={clear} className="clear-btn">Clear</button>
            <button type='button' onClick={submit} className="submit-btn">Signup</button>
          </div>
          <p>Already have an account! <a href="#">Login</a></p>
        </div>
        <div className="left-signup">
          <img src={img2} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signup