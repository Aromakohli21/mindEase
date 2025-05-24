import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MindEase</h3>
          <p>
            Your journey to mental wellness starts here. Professional support,
            resources, and community to help you navigate life's challenges with
            confidence.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <FaFacebook />
            </a>
            <a href="#" className="social-link">
              <FaTwitter />
            </a>
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
            <a href="#" className="social-link">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/therapists">Therapists</Link>
            </li>
            <li>
              <Link to="/assessment">Assessment</Link>
            </li>
            <li>
              <Link to="/workshops">Workshops</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Online Counseling</li>
            <li>Self-Assessment</li>
            <li>Mental Health Workshops</li>
            <li>Community Support</li>
            <li>24/7 WhatsApp Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: support@mentalhealthindia.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>
              Address: 123, Health Street, Connaught Place, New Delhi - 110001
            </li>
            <li>
              <a
                href="https://wa.me/919876543210"
                className="whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MindEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
