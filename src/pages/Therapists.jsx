import { useState } from "react";
import { FaStar, FaClock, FaVideo, FaUserMd } from "react-icons/fa";
import "./Therapists.css";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t4.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t5.jpg";
import t5 from "../assets/t8.jpg";
import t6 from "../assets/t6.jpg";

const Therapists = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const specialties = [
    "all",
    "Anxiety",
    "Depression",
    "Stress Management",
    "Relationship Issues",
    "Trauma",
    "Addiction",
    "Self-esteem",
  ];

  const therapists = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Clinical Psychologist",
      rating: 4.8,
      experience: "8 years",
      image: t1,
      description:
        "Specialized in anxiety and depression treatment with a focus on cognitive behavioral therapy.",
      availability: "Available Today",
      price: "₹1200/session",
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialty: "Psychiatrist",
      rating: 4.9,
      experience: "12 years",
      image: t2,
      description:
        "Expert in mood disorders and medication management with a holistic approach to treatment.",
      availability: "Next Available: Tomorrow",
      price: "₹1500/session",
    },
    {
      id: 3,
      name: "Dr. Anjali Patel",
      specialty: "Counseling Psychologist",
      rating: 4.7,
      experience: "6 years",
      image: t3,
      description:
        "Specialized in relationship counseling and family therapy with a focus on communication.",
      availability: "Available Today",
      price: "₹1000/session",
    },
    {
      id: 4,
      name: "Dr. Amit Singh",
      specialty: "Clinical Psychologist",
      rating: 4.9,
      experience: "10 years",
      image: t4,
      description:
        "Expert in trauma therapy and PTSD treatment with specialized EMDR certification.",
      availability: "Available Today",
      price: "₹1300/session",
    },
    {
      id: 5,
      name: "Dr. Neha Gupta",
      specialty: "Child Psychologist",
      rating: 4.8,
      experience: "7 years",
      image: t5,
      description:
        "Specialized in child and adolescent psychology with expertise in behavioral therapy.",
      availability: "Next Available: Tomorrow",
      price: "₹1100/session",
    },
    {
      id: 6,
      name: "Dr. Vikram Malhotra",
      specialty: "Career Counselor",
      rating: 4.7,
      experience: "9 years",
      image: t6,
      description:
        "Expert in career guidance, workplace stress management, and professional development.",
      availability: "Available Today",
      price: "₹900/session",
    },
  ];

  const filteredTherapists =
    selectedSpecialty === "all"
      ? therapists
      : therapists.filter(
          (therapist) => therapist.specialty === selectedSpecialty
        );

  return (
    <div className="therapists-page">
      <div className="therapists-hero">
        <h1>Our Therapists</h1>
        <p>Connect with experienced mental health professionals</p>
      </div>

      <div className="therapists-filter">
        <h2>Filter by Specialty</h2>
        <div className="specialty-buttons">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              className={`specialty-btn ${
                selectedSpecialty === specialty ? "active" : ""
              }`}
              onClick={() => setSelectedSpecialty(specialty)}
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>

      <div className="therapists-grid">
        {filteredTherapists.map((therapist) => (
          <div key={therapist.id} className="therapist-card">
            <div className="therapist-image">
              <img src={therapist.image} alt={therapist.name} />
            </div>
            <div className="therapist-info">
              <h3>{therapist.name}</h3>
              <div className="therapist-specialty">
                <FaUserMd /> {therapist.specialty}
              </div>
              <div className="therapist-rating">
                <FaStar /> {therapist.rating}
              </div>
              <div className="therapist-experience">
                <FaClock /> {therapist.experience} experience
              </div>
              <p>{therapist.description}</p>
              <div className="therapist-availability">
                <FaVideo /> {therapist.availability}
              </div>
              <div className="therapist-price">{therapist.price}</div>
              <button className="book-session-btn">Book a Session</button>
            </div>
          </div>
        ))}
      </div>

      <div className="therapists-cta">
        <h2>Need Help Finding the Right Therapist?</h2>
        <p>
          Our team can help you match with the perfect therapist for your needs.
        </p>
        <button className="contact-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default Therapists;
