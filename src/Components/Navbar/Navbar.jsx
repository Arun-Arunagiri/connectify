import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Navbar.css';
import img from '../../assets/logo.svg';

const Navbar = () => {
  const navigate = useNavigate(); // Create a navigate instance

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login route on button click
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home route
  };

  const handleAdminClick = () => {
    navigate('/admin'); // Navigate to the home route
  };

  

  const handleAboutClick = () => {
    navigate('/about'); // Navigate to the about route
  };
  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to the about route
  };

  return (
    <div className='navbar'>
      <div className="navbar-header">
        <img src={img} alt="Connectify Logo" />
        <h2>CONNECTIFY</h2>
      </div>
      <div className="navbar-right">
        <ul className='navbar-menu'>
          <li onClick={handleHomeClick}>Home</li> {/* Add onClick for Home */}
          <li onClick={handleAdminClick}>Admin</li> {/* Add onClick for Features */}
          <li onClick={handleAboutClick}>About</li> {/* Add onClick for About */}
          <li onClick={handleSignupClick}>Signup</li> {/* Add onClick for About */}


        </ul>
        <div className="navbar-button">
          <button onClick={handleLoginClick}>LOGIN</button> {/* Add onClick event */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
