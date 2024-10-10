import React from 'react'
import './Messages.css'


const Messages = () => {

    const messageData = [
        {

            username:"user1",
          message:
            "Hello World",
          response:"Yes"
        },
        { username:"user1",message: "Message 2", response:"Yes" },
        { username:"user9",message: "Message 3",response:"Yes" },
        { username:"user1",message: "Message 4",response:"No" },
        { username:"user8",message: "Message 5", response:"Yes"},
        { username:"user5",message: "Message 6", response:"Yes" },
        { username:"user7",message: "Message 7",response:"No" },
        { username:"user1",message: "Message 8", response:"Yes" },
        { username:"user1",message: "Message 9", response:"No" },
        { username:"user5",message: "Message 6", response:"Yes" },
        { username:"user1",message: "Message 7", response:"No" },
        { username:"user3",message: "Message 8", response:"Yes" },
        { username:"user1",message: "Message 9", response:"Yes" },
      ];
    
  return (
    <div className='message-main'>

    <div className="right-side">
            <table className="admin-table">
                <thead>
                <tr>
                    <th>Message</th>
                    <th>User</th>
                    <th>Responce</th>
                    
                </tr>
                </thead>
                <tbody>
                {messageData.map((msg, index) => (
                    <tr key={index}>
                    
                    <td>{msg.message}</td>
                    <td>{msg.username}</td>
                    <td>{msg.response}</td>
                    
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

    </div>
  )
}

export default Messages