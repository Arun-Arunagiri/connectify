import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import img2 from "../../assets/img2.svg";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <Navbar />

            <div className="main">
                <div className="right"></div>
                <div className="left">
                    <img src={img2} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
