import React from "react";
import "./About.css"; // Import CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        At <strong>Nova Automata</strong>,Nova Automata transforms ideas into reality with advanced software solutions built for the digital age.
      </p>

      <h2 className="about-mission">Our Mission</h2>
      <p className="about-text">
        Founded in <strong>2024</strong>, we have been helping businesses propel into the future with unmatched reliability and precision.
      </p>

      <h2 className="about-team">Our Team</h2>
      <div className="team">
        <div className="team-member">
          <h3>Dr. Rajasekhar</h3>
          <p>COO & Co-Founder</p>
        </div>
        <div className="team-member">
          <h3>Rohith</h3>
          <p>CEO & Co-Founder</p>
        </div>
        <div className="team-member">
          <h3>Manjunath</h3>
          <p>CEO & Co-Founder</p>
        </div>
      </div>

      <h2 className="about-location">Our Location</h2>
      <p className="about-text">
        #43 ITL Layout, Mathikere, Bangalore North,<br />
        Bangalore-560054, Karnataka
      </p>
      <p className="about-text"><strong>Email:</strong> rajashekar@novautomata.in</p>

      <footer className="about-footer">© 2024 Nova Automata. All rights reserved.</footer>
    </div>
  );
};

export default About;
