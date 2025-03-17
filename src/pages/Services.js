import React from "react";
import "./Services.css"; // Import the CSS file

const servicesData = [
  {
    title: "Web Development",
    description:
      "We specialize in creating dynamic, responsive, and user-friendly websites that help businesses establish a strong online presence. Our team of expert developers and designers deliver top-notch web solutions tailored to meet your unique business needs.",
  },
  {
    title: "Product Consulting",
    description:
      "We guarantee robust, efficient, and high-performing software with our comprehensive QA and testing services to meet industry standards.",
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "We understand that delivering high-quality software is crucial for business success. Our comprehensive Quality Assurance (QA) and Testing services ensure that software is reliable, efficient, and meets the highest standards.",
  },
  {
    title: "Cloud Services",
    description:
      "We help businesses leverage cloud computing for faster innovation, seamless scalability, and cost-effective flexibility.",
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "We specialize in transforming your business through innovative IoT solutions. Our IoT services help you connect devices, collect valuable data, and optimize operations for smarter business processes.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "We harness the power of Artificial Intelligence (AI) to drive innovation, efficiency, and growth. Our AI services help businesses leverage cutting-edge technology for automation, insights, and intelligent solutions.",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {/* Title Section (Black Text on White Background) */}
      <div className="services-title-section">
        <h1>ALL SERVICES</h1>
        <h2>COMPREHENSIVE SOLUTIONS TAILORED FOR YOUR BUSINESS</h2>
      </div>

      {/* Background Image Section */}
      <div className="services-header"></div>

      {/* Service List */}
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className="service-section">
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
