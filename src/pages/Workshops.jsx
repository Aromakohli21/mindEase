import {
  FaCalendarAlt,
  FaClock,
  FaUserGraduate,
  FaVideo,
} from "react-icons/fa";
import "./Workshops.css";
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpeg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpeg";

const Workshops = () => {
  const workshops = [
    {
      id: 1,
      title: "Stress Management & Meditation",
      instructor: "Dr. Priya Sharma",
      date: "15th May 2024",
      time: "10:00 AM - 12:00 PM",
      price: "₹999",
      description:
        "Learn ancient Indian meditation techniques and stress management practices. Discover the power of mindfulness and breathing exercises.",
      topics: [
        "Pranayama techniques",
        "Mindfulness meditation",
        "Stress reduction methods",
        "Yoga basics",
      ],
      image: p1,
    },
    {
      id: 2,
      title: "Anxiety & Depression Management",
      instructor: "Dr. Rajesh Kumar",
      date: "20th May 2024",
      time: "2:00 PM - 4:00 PM",
      price: "₹1299",
      description:
        "Understanding and managing anxiety and depression through traditional and modern approaches. Learn practical coping strategies.",
      topics: [
        "Understanding anxiety",
        "Depression management",
        "Coping mechanisms",
        "Lifestyle changes",
      ],
      image: p2,
    },
    {
      id: 3,
      title: "Parent-Child Relationship",
      instructor: "Dr. Anjali Patel",
      date: "25th May 2024",
      time: "11:00 AM - 1:00 PM",
      price: "₹1499",
      description:
        "Strengthen your bond with your child through effective communication and understanding. Learn Indian parenting wisdom.",
      topics: [
        "Effective communication",
        "Understanding child psychology",
        "Positive parenting",
        "Family harmony",
      ],
      image: p3,
    },
    {
      id: 4,
      title: "Mindfulness & Emotional Intelligence",
      instructor: "Dr. Vikram Malhotra",
      date: "30th May 2024",
      time: "3:00 PM - 5:00 PM",
      price: "₹1299",
      description:
        "Develop emotional intelligence and mindfulness practices to enhance personal and professional relationships. Learn practical techniques for emotional awareness and regulation.",
      topics: [
        "Emotional awareness",
        "Mindfulness meditation",
        "Stress management",
        "Relationship building",
      ],
      image: p4,
    },
    {
      id: 5,
      title: "Career Stress & Work-Life Balance",
      instructor: "Dr. Neha Gupta",
      date: "5th June 2024",
      time: "2:00 PM - 4:00 PM",
      price: "₹1199",
      description:
        "Learn effective strategies to manage workplace stress and achieve a healthy work-life balance. Discover techniques for career growth while maintaining mental well-being.",
      topics: [
        "Workplace stress management",
        "Time management",
        "Career planning",
        "Work-life integration",
      ],
      image: p5,
    },
    {
      id: 6,
      title: "Sleep & Mental Health",
      instructor: "Dr. Amit Singh",
      date: "10th June 2024",
      time: "7:00 PM - 9:00 PM",
      price: "₹999",
      description:
        "Discover the crucial connection between sleep and mental health. Learn evidence-based techniques to improve sleep quality and enhance your overall well-being.",
      topics: [
        "Sleep hygiene practices",
        "Insomnia management",
        "Sleep cycle optimization",
        "Relaxation techniques",
      ],
      image: p6,
    },
  ];

  return (
    <div className="workshops-page">
      <div className="workshops-hero">
        <h1>Mental Health Workshops</h1>
        <p>
          Join our expert-led workshops to learn practical strategies for better
          mental health
        </p>
      </div>

      <div className="workshops-grid">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="workshop-card">
            <div className="workshop-image">
              <img src={workshop.image} alt={workshop.title} />
            </div>
            <div className="workshop-content">
              <h3>{workshop.title}</h3>
              <div className="workshop-instructor">
                <FaUserGraduate /> {workshop.instructor}
              </div>
              <div className="workshop-details">
                <div className="workshop-date">
                  <FaCalendarAlt /> {workshop.date}
                </div>
                <div className="workshop-time">
                  <FaClock /> {workshop.time}
                </div>
                <div className="workshop-format">
                  <FaVideo /> Online Workshop
                </div>
              </div>
              <p>{workshop.description}</p>
              <div className="workshop-topics">
                <h4>Topics Covered:</h4>
                <ul>
                  {workshop.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>
              <div className="workshop-price">{workshop.price}</div>
              <button className="register-btn">Register Now</button>
            </div>
          </div>
        ))}
      </div>

      <div className="workshops-cta">
        <h2>Want to Learn More?</h2>
        <p>
          Subscribe to our newsletter to receive updates about upcoming
          workshops and mental health resources.
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
