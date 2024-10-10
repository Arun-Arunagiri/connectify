import React, { useState } from 'react';
import './Mainpage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Mainpage = () => {
  const [selectedMsg, setSelectedMsg] = useState(null);

  const messages = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, totam!",
    "Message 2",
    "Message 3",
    "Message 4",
    "Message 5",
    "Message 6",
    "Message 7",
    // "Message 8",
    // "Message 9",
    // "Message 10",
    // "Message 11",
    // "Message 12",
    // "Message 13",
  ];

  const handleMsgClick = (msg) => {
    setSelectedMsg(msg);
  };

  return (
    <div className="mainpage">
      <Navbar />
      <div className="userpage">
        <div className="left">
          <div className="msg">
            {messages.map((msg, index) => (
              <p key={index} onClick={() => handleMsgClick(msg)}>
                {msg}
              </p>
            ))}
          </div>
        </div>

        <div className="right">
          {selectedMsg ? (
            <div className="selected-msg">
              <p>{selectedMsg}</p>

              <textarea id="user-msg" className='user-msg' placeholder='Enter Your Comment here..'></textarea>
              <div className="buttons">
                <button className='btn-submit'>Yes</button>
                <button className='btn-clear'>No</button>
              </div>
            </div>
          ) : (
            <p>Select a message to view here</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mainpage;
