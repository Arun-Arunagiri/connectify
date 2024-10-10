import React, { useState, useEffect } from 'react';
import './Mainpage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';

const Mainpage = () => {
  const [selectedMsg, setSelectedMsg] = useState(null);
  const [messages, setMessages] = useState([]); // State to store messages

  // Fetch token from localStorage
  const token = localStorage.getItem('jwtToken');

  // Fetch messages from backend when the component mounts
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://192.168.137.1:3000/messages/recent', {
          headers: {
            Authorization: 'Bearer ' + token // Attach the JWT token to the request
          }
        });
        setMessages(response.data); // Set the retrieved messages to the state
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [token]);

  // Handle message click to display in the right section
  const handleMsgClick = (msg) => {
    setSelectedMsg(msg);
  };

  return (
    <div className="mainpage">
      <h1>User Dashboard</h1>
      {/* <Navbar /> */}
      <div className="userpage">
        <div className="left">
          <div className="msg">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <p key={index} onClick={() => handleMsgClick(msg)}>
                  {msg.message} {/* Show the message content */}
                </p>
              ))
            ) : (
              <p>No messages available</p>
            )}
          </div>
        </div>

        <div className="right">
          {selectedMsg ? (
            <div className="selected-msg">
              <p>{selectedMsg.message}</p> {/* Display selected message */}

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
      {/* <Footer /> */}
    </div>
  );
};

export default Mainpage;
