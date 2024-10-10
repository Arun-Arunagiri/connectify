import React from 'react';
import BarChart from './BarChart'; // Adjust the path as necessary
import './Analysis.css'

const App = () => {
  const messageData = [
    {
      message:
        "Hello world",
      yesCount: 100,
      noCount: 50,
    },
    { message: "Message 2", yesCount: 100, noCount: 50 },
    { message: "Message 3", yesCount: 50, noCount: 10 },
    { message: "Message 4", yesCount: 20, noCount: 30 },
    { message: "Message 5", yesCount: 30, noCount: 20 },
    { message: "Message 6", yesCount: 100, noCount: 50 },
    { message: "Message 7", yesCount: 50, noCount: 10 },
    { message: "Message 8", yesCount: 20, noCount: 30 },
    { message: "Message 9", yesCount: 30, noCount: 20 },
    { message: "Message 10", yesCount: 100, noCount: 50 },
    { message: "Message 11", yesCount: 50, noCount: 10 },
    { message: "Message 12", yesCount: 20, noCount: 30 },
    { message: "Message 13", yesCount: 30, noCount: 20 },
  ];

  return (
    <div className='barchart'>
      <h1>Bar Chart Example</h1>
      <BarChart messageData={messageData} />
    </div>
  );
};

export default App;
