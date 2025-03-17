import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import "./Home.css";

const Home = () => {
  const [section, setSection] = useState(0);

  const sections = [
    {
      title: "Welcome to Nova Automata",
      subtitle: "Innovate, Automate, Elevate",
      content: "At Nova Automata, we bring innovation and automation together to revolutionize industries. Join us in shaping the future.",
      background: "url('https://media.istockphoto.com/photos/business-partnership-meeting-in-office-picture-id1160000498?b=1&k=20&m=1160000498&s=170667a&w=0&h=TX_xtUGkE37bgQ3ml04V-GvKamcyDIhf9jj-DneVbDg=')",
    },
    {
      title: "Nova Automata",
      subtitle: "The Future of Automation",
      content: "Empowering businesses with cutting-edge technology.",
      background: "url('https://media.istockphoto.com/id/1340424095/vector/internet-of-things-tech-innovative-concept-background.jpg?s=612x612&w=0&k=20&c=xkMaGCyukgJDmeRzq4OK7Yrxzri41iOGJQcnJ94qsOM=')",
    },
    {
      title: "Great Team",
      subtitle: "Meet the Experts Behind Innovation",
      content: "A team of passionate professionals driving success.",
      background: "url('https://w0.peakpx.com/wallpaper/684/462/HD-wallpaper-business-team-business-people-thumbs-up-concepts-teamwork-business-concepts.jpg')",
    },
  ];

  const nextSection = () => {
    setSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <div className="home-container" style={{ backgroundImage: sections[section].background }}>
      <h1 className="home-title">{sections[section].title}</h1>

      <div className="home-content">
        <h2 className="home-subtitle">{sections[section].subtitle}</h2>
        <p className="home-text">{sections[section].content}</p>
      </div>

      {/* Navigation Arrows */}
      <div className="nav-arrows">
        <button className="arrow left" onClick={prevSection}>&lt;</button>
        <button className="arrow right" onClick={nextSection}>&gt;</button>
      </div>

      {/* LinkedIn Icon with Link */}
      <a
        href="https://www.linkedin.com/company/nova-enigma/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-icon"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Home;
