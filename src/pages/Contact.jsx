import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "support@mentalhealthindia.com",
      description: "24/7 email support for all your queries",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+91 98765 43210",
      description: "Call us for immediate assistance",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      details: "123, Health Street, Connaught Place, New Delhi - 110001",
      description: "Visit our center for in-person consultations",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      details: "+91 98765 43210",
      description: "24/7 WhatsApp support for urgent help",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 2:00 PM" },
  ];

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with our team of mental health professionals</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>How to Reach Us</h2>
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-method">
                <div className="contact-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p className="contact-details">{method.details}</p>
                <p className="contact-description">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="business-hours">
            <h2>Business Hours</h2>
            <ul>
              {businessHours.map((schedule, index) => (
                <li key={index}>
                  <span className="day">{schedule.day}</span>
                  <span className="hours">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number (optional)"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter message subject"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="contact-map">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.835567037543!2d77.2177!3d28.6327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d62b%3A0x37205b715389640!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1647856789012!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
