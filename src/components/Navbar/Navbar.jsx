import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="/assets/logos/BUSEit..svg"
              alt="BUSEit Logo"
              className="logo-image"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <button
            className="nav-link"
            onClick={() => scrollToSection('how-it-works')}
          >
            How It Works
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection('for-busy-users')}
          >
            For Busy Users
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection('features')}
          >
            Features
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection('faqs')}
          >
            FAQs
          </button>
        </div>

        {/* Contact Button */}
        <Link to="/join-waitlist" className="contact-button">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
