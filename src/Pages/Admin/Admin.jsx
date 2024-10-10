import React, { useState } from "react";
import "./Admin.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(""); // State for message
  const token = localStorage.getItem('jwtToken'); // Get the token from localStorage

  const handleAnalysisClick = () => {
    navigate("/analysis");
  };

  const handleMessageClick = () => {
    navigate("/message");
  };

  // Handle message post
  const handlePostMessage = async () => {
    if (!message) {
      alert("Please write a message");
      return;
    }

    try {

      const token = localStorage.getItem('jwtToken');
      
      // Send the POST request with the token in the Authorization header
      const response = await axios.post(
        'http://192.168.137.1:3000/message',
        { message },
        {
          headers: {
            Authorization: 'Bearer '+token // Attach the JWT token
          }
        }
      );

      if (response.status === 201) {
        alert('Message posted successfully');
        setMessage(""); // Clear the message field after successful post
      }
    } catch (error) {
      console.error('Error posting message:', error);
      alert('Failed to post message');
    }
  };

  const messageData = [
    { message: "Hello World", yesCount: 100, noCount: 50 },
    { message: "Message 2", yesCount: 100, noCount: 50 },
    { message: "Message 3", yesCount: 50, noCount: 10 },
    { message: "Message 4", yesCount: 20, noCount: 30 },
    { message: "Message 5", yesCount: 30, noCount: 20 },
    { message: "Message 6", yesCount: 100, noCount: 50 },
    { message: "Message 7", yesCount: 50, noCount: 10 },
    { message: "Message 8", yesCount: 20, noCount: 30 },
    { message: "Message 9", yesCount: 30, noCount: 20 },
  ];

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div className="dashboard">
        <div className="left-side">
          <h2>Post a New Message</h2>
          <textarea
            className="admin-textarea"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="admin-submit-btn" onClick={handlePostMessage}>
            Post Message
          </button>
          <button onClick={handleAnalysisClick} className="admin-analysis-btn">
            Analysis Page
          </button>
          <button onClick={handleMessageClick} className="admin-message-btn">
            Message Page
          </button>
        </div>

        <div className="right-side">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Message</th>
                <th>Yes Count</th>
                <th>No Count</th>
              </tr>
            </thead>
            <tbody>
              {messageData.map((msg, index) => (
                <tr key={index}>
                  <td>{msg.message}</td>
                  <td>{msg.yesCount}</td>
                  <td>{msg.noCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
