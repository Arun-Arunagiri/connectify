import React, { useState, useEffect } from "react";
import "./Admin.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(""); // State for new message
  const [messages, setMessages] = useState([]); // State for fetched messages

  // Fetch token from localStorage
  const token = localStorage.getItem('jwtToken'); 

  // Fetch recent messages from backend on component mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://192.168.137.1:3000/messages/recent', {
          headers: {
            Authorization: 'Bearer ' + token // Attach JWT token in headers
          }
        });
        
        // Set the fetched messages to state
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [token]);

  // Handle message post
  const handlePostMessage = async () => {
    if (!message) {
      alert("Please write a message");
      return;
    }

    try {
      // Send POST request to save message
      const response = await axios.post(
        'http://192.168.137.1:3000/message',
        { message },
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      );

      if (response.status === 201) {
        alert('Message posted successfully');
        setMessage(""); // Clear the input after posting

        // Fetch messages again after posting
        const updatedMessages = await axios.get('http://192.168.137.1:3000/messages/recent', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        });
        setMessages(updatedMessages.data);
      }
    } catch (error) {
      console.error('Error posting message:', error);
      alert('Failed to post message');
    }
  };

  // Navigation handlers
  const handleAnalysisClick = () => {
    navigate("/analysis");
  };

  const handleMessageClick = () => {
    navigate("/message");
  };

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
          <h2>Recent Messages</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Message</th>
                <th>Yes Count</th>
                <th>No Count</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr key={index}>
                  <td>{msg.message}</td>
                  <td>{msg.yes_count}</td>
                  <td>{msg.no_count}</td>
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
