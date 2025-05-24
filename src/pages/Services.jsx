import {
  FaUserMd,
  FaClipboardCheck,
  FaUsers,
  FaWhatsapp,
  FaChalkboardTeacher,
  FaPhoneAlt,
  FaVideo,
  FaFileAlt,
  FaHeart,
  FaChild,
  FaBrain,
  FaHandHoldingHeart,
} from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: <FaUserMd />,
      title: "Online Counseling",
      description:
        "Professional therapy sessions from the comfort of your home. Connect with experienced therapists through secure video calls.",
      features: [
        "Flexible scheduling",
        "Secure video calls",
        "Professional therapists",
        "Confidential sessions",
      ],
    },
    {
      icon: <FaClipboardCheck />,
      title: "Self-Assessment",
      description:
        "Evaluate your mental well-being with our comprehensive assessment tools. Get personalized insights and recommendations.",
      features: [
        "Comprehensive questionnaires",
        "Instant results",
        "Personalized recommendations",
        "Progress tracking",
      ],
    },
    {
      icon: <FaUsers />,
      title: "Mental Health Workshops",
      description:
        "Join educational sessions and workshops led by mental health experts. Learn practical strategies for managing stress and anxiety.",
      features: [
        "Expert-led sessions",
        "Interactive learning",
        "Practical strategies",
        "Group discussions",
      ],
    },
    {
      icon: <FaWhatsapp />,
      title: "24/7 WhatsApp Support",
      description:
        "Get immediate assistance from our trained support team. Available around the clock for crisis intervention and guidance.",
      features: [
        "Immediate response",
        "Crisis intervention",
        "Professional guidance",
        "Confidential support",
      ],
    },
    {
      icon: <FaHeart />,
      title: "Couples Therapy",
      description:
        "Professional counseling for couples to improve relationships and communication. Work together towards a healthier partnership.",
      features: [
        "Relationship counseling",
        "Communication skills",
        "Conflict resolution",
        "Marriage guidance",
      ],
    },
    {
      icon: <FaChild />,
      title: "Child Counseling",
      description:
        "Specialized therapy for children and adolescents. Age-appropriate approaches to help young minds grow and heal.",
      features: [
        "Child-friendly sessions",
        "Play therapy",
        "Behavioral support",
        "Parent guidance",
      ],
    },
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive mental health support tailored to your needs</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features?.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Take the first step towards better mental health with our professional
          support.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Book a Session</button>
          <button className="secondary-btn">Take Assessment</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
