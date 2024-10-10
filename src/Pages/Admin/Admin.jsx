import React from 'react';
import './Admin.css';

const AdminPage = () => {
  const messageData = [
    { message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, totam!", yesCount: 100, noCount: 50 },
    { message: "Message 2", yesCount: 100, noCount: 50 },
    { message: "Message 3", yesCount: 50, noCount: 10 },
    { message: "Message 4", yesCount: 20, noCount: 30 },
    { message: "Message 5", yesCount: 30, noCount: 20 },
    { message: "Message 2", yesCount: 100, noCount: 50 },
    { message: "Message 3", yesCount: 50, noCount: 10 },
    { message: "Message 4", yesCount: 20, noCount: 30 },
    { message: "Message 5", yesCount: 30, noCount: 20 },
  ];

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div className="dashboard">
        <div className="left-side">
          <h2>Post a New Message</h2>
          <textarea className="admin-textarea" placeholder="Write your message here..." />
          <button className="admin-submit-btn">Post Message</button>
          <button className="admin-analysis-btn">Analysis Page</button>
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
