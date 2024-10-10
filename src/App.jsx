import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Homepage/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Mainpage from "./Pages/Mainpage/Mainpage";
import Navbar from "./Components/Navbar/Navbar"; // Assuming you have a Navbar component
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import AdminPage from "./Pages/Admin/Admin";
import Analysis from "./Pages/Analysis/Analysis";
import Messages from "./Pages/Messages/Messages";

const App = () => {
  return (
    <Router>
      <div>
        {/* Add Navbar here if you want consistent navigation */}
        <Navbar />

        {/* Define Routes for your pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userpage" element={<Mainpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/analysis" element={<Analysis/>} />
          <Route path="/message" element={<Messages/>} />


        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
