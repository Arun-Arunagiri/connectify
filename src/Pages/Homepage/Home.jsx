import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import img2 from "../../assets/img2.svg";
import './Home.css';



const Home = () => {
    return (
        <div className="home">
            <Navbar />

            <div className="main">

                <div className="right">

                </div>
                <div className="left">
                    <img src={img2} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Home;
