import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Connectify</h1>
      <p>
        Connectify is a collaborative platform designed to facilitate
        communication between admins and their audience. It allows admins to
        post messages, share images, and create an interactive environment
        where users can react and provide feedback.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to enhance communication and engagement through a
        user-friendly interface that encourages interaction and feedback.
        We strive to make group discussions more effective and enjoyable.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Real-time messaging</li>
        <li>Image sharing</li>
        <li>Feedback reactions</li>
        <li>User-friendly interface</li>
      </ul>
      <h2>Join Us!</h2>
      <p>
        Become part of our community and start connecting today. Together, we
        can create a more engaging environment for discussions and
        collaborations.
      </p>
    </div>
  );
};

export default About;
