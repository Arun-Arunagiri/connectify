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
                <div className="right">
                    <div className="content">
                    <p>&emsp;This React.js project facilitates communication between an admin and a group of listeners. The admin can post messages and share images with the group, while listeners can react and provide feedback through comments or reactions. It creates an interactive environment where the admin's posts are central, and listener responses are encouraged. The platform supports image sharing to make the messages more engaging and visually appealing. This project is ideal for scenarios like team collaborations or group discussions, where the admin manages content and listeners actively participate with feedback.</p>
                    </div>
                </div>
                <div className="left">
                    <img src={img2} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
