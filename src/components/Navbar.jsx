import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MindEase
        </Link>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/therapists"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Therapists
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/assessment"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Assessment
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/workshops"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Workshops
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/community"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
