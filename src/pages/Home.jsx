import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaClock,
  FaUserMd,
  FaCheckCircle,
  FaWhatsapp,
  FaShieldAlt,
  FaUserCheck,
  FaHandHoldingHeart,
  FaUsers,
  FaPills,
  FaComments,
  FaBookOpen,
  FaUserShield,
  FaLock,
  FaUserGraduate,
  FaBox,
  FaChalkboardTeacher,
  FaPhoneAlt,
  FaVideo,
  FaFileAlt,
  FaUserLock,
  FaHeart,
  FaChild,
  FaBrain,
  FaQuestionCircle,
  FaArrowRight,
} from "react-icons/fa";
import "./Home.css";
import whatsapp from "../assets/whatsappSupport.png";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t4.jpg";
import t3 from "../assets/t3.jpg";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import GeneralAssessment from "../components/GeneralAssessment";
import RegistrationForm from "../components/RegistrationForm";

const Home = () => {
  const navigate = useNavigate();
  const [showWhatsApp, setShowWhatsApp] = useState(true);
  const [showAssessment, setShowAssessment] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const stats = [
    {
      icon: <FaWhatsapp />,
      number: "24/7",
      text: "WhatsApp Support",
    },
    {
      icon: <FaUserMd />,
      number: "50+",
      text: "Certified Therapists",
    },
    {
      icon: <FaClock />,
      number: "100%",
      text: "Online Sessions Available",
    },
    {
      icon: <FaStar />,
      number: "99%",
      text: "Client Satisfaction",
    },
  ];

  const services = [
    {
      icon: <FaUserMd />,
      title: "Individual Therapy",
      description:
        "One-on-one sessions with expert therapists for personalized care and support.",
    },
    {
      icon: <FaUsers />,
      title: "Group Therapy",
      description:
        "Supportive group sessions to share experiences and learn from others.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Workshops",
      description:
        "Educational workshops on mental health topics and coping strategies.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Crisis Support",
      description:
        "24/7 emergency support for immediate mental health assistance.",
    },
    {
      icon: <FaVideo />,
      title: "Online Sessions",
      description:
        "Convenient video consultations from the comfort of your home.",
    },
    {
      icon: <FaFileAlt />,
      title: "Assessment",
      description:
        "Comprehensive mental health assessments and personalized treatment plans.",
    },
  ];

  const recommendedTherapists = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialty: "Clinical Psychologist",
      rating: 4.8,
      experience: "12 years",
      description:
        "Specialized in anxiety, depression, and relationship counseling. Experienced in both individual and group therapy.",
      availability: "Mon-Fri, 10 AM - 7 PM",
      price: "₹1,500/session",
      image: t1,
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialty: "Psychiatrist",
      rating: 4.9,
      experience: "15 years",
      description:
        "Expert in mood disorders and medication management. Provides comprehensive mental health care.",
      availability: "Mon-Sat, 9 AM - 6 PM",
      price: "₹2,000/session",
      image: t2,
    },
    {
      id: 3,
      name: "Dr. Anjali Patel",
      specialty: "Counseling Psychologist",
      rating: 4.7,
      experience: "8 years",
      description:
        "Specialized in stress management and work-life balance. Offers both online and in-person sessions.",
      availability: "Mon-Fri, 11 AM - 8 PM",
      price: "₹1,200/session",
      image: t3,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rahul Verma",
      rating: 5,
      text: "The therapy sessions have been life-changing. I feel more confident and better equipped to handle life's challenges.",
      image: c1,
    },
    {
      id: 2,
      name: "Priya Singh",
      rating: 5,
      text: "Professional and compassionate therapists. The online sessions are convenient and effective.",
      image: c2,
    },
    {
      id: 3,
      name: "Amit Kumar",
      rating: 5,
      text: "Great platform for mental health support. The community features are helpful for connecting with others.",
      image: c3,
    },
  ];

  const privacyItems = [
    {
      icon: <FaUserCheck />,
      title: "Registered Psychiatrists & Therapists",
      description:
        "All our mental health professionals are verified and licensed",
    },
    {
      icon: <FaShieldAlt />,
      title: "Confidential Care",
      description: "Your privacy and data security are our top priorities",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Personalized Treatment",
      description: "Tailored care plans based on your unique needs",
    },
    {
      icon: <FaUsers />,
      title: "Men, Women, LGBTQ+",
      description: "Inclusive care for all individuals",
    },
    {
      icon: <FaUserMd />,
      title: "Made by Doctors",
      description: "Platform developed by mental health professionals",
    },
    {
      icon: <FaPills />,
      title: "Discreet Delivery of Medicines",
      description: "Confidential medication delivery service",
    },
  ];

  const quickAssessmentQuestions = [
    {
      id: 1,
      question: "How are you feeling today?",
      options: [
        { text: "Very Good", value: 4 },
        { text: "Good", value: 3 },
        { text: "Okay", value: 2 },
        { text: "Not Good", value: 1 },
      ],
    },
    {
      id: 2,
      question: "How well did you sleep last night?",
      options: [
        { text: "Very Well", value: 4 },
        { text: "Well", value: 3 },
        { text: "Fairly Well", value: 2 },
        { text: "Poorly", value: 1 },
      ],
    },
    {
      id: 3,
      question: "How would you rate your stress level?",
      options: [
        { text: "Very Low", value: 4 },
        { text: "Low", value: 3 },
        { text: "Moderate", value: 2 },
        { text: "High", value: 1 },
      ],
    },
    {
      id: 4,
      question: "How is your energy level?",
      options: [
        { text: "Very High", value: 4 },
        { text: "High", value: 3 },
        { text: "Moderate", value: 2 },
        { text: "Low", value: 1 },
      ],
    },
    {
      id: 5,
      question: "How is your appetite?",
      options: [
        { text: "Very Good", value: 4 },
        { text: "Good", value: 3 },
        { text: "Fair", value: 2 },
        { text: "Poor", value: 1 },
      ],
    },
    {
      id: 6,
      question: "How is your concentration?",
      options: [
        { text: "Very Good", value: 4 },
        { text: "Good", value: 3 },
        { text: "Fair", value: 2 },
        { text: "Poor", value: 1 },
      ],
    },
    {
      id: 7,
      question: "How is your social interaction?",
      options: [
        { text: "Very Active", value: 4 },
        { text: "Active", value: 3 },
        { text: "Limited", value: 2 },
        { text: "Minimal", value: 1 },
      ],
    },
    {
      id: 8,
      question: "How would you rate your overall mood?",
      options: [
        { text: "Very Positive", value: 4 },
        { text: "Positive", value: 3 },
        { text: "Neutral", value: 2 },
        { text: "Negative", value: 1 },
      ],
    },
  ];

  const handleStartTest = () => {
    setShowAssessment(true);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: value,
    }));

    if (currentQuestion < quickAssessmentQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce(
      (sum, value) => sum + value,
      0
    );
    const maxScore = quickAssessmentQuestions.length * 4;
    const percentage = (totalScore / maxScore) * 100;
    return percentage;
  };

  const getResultMessage = (percentage) => {
    if (percentage >= 75)
      return "Your mental well-being appears to be in good shape!";
    if (percentage >= 50)
      return "You're doing okay, but there's room for improvement.";
    if (percentage >= 25)
      return "You might be experiencing some challenges. Consider talking to a professional.";
    return "It would be beneficial to seek professional help and support.";
  };

  const handleBack = () => {
    setShowAssessment(false);
  };

  const handleBookSession = (therapist) => {
    setSelectedTherapist(therapist);
    setShowRegistrationForm(true);
  };

  const handleCloseRegistration = () => {
    setShowRegistrationForm(false);
    setSelectedTherapist(null);
  };

  const handleRegistrationSubmit = (formData) => {
    // Here you would typically send the form data to your backend
    console.log("Registration submitted:", formData);
    // Show success message or redirect
    alert("Session booked successfully! We will contact you shortly.");
    handleCloseRegistration();
  };

  if (showAssessment) {
    return <GeneralAssessment onBack={handleBack} />;
  }

  return (
    <div className="home-page">
      {showWhatsApp && (
        <a
          href="https://wa.me/919876543210"
          className="whatsapp-help"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> 24/7 Help
        </a>
      )}

      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Mental Health Matters</h1>
          <p>
            Connect with expert therapists and take the first step towards
            better mental well-being
          </p>
          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() =>
                document
                  .getElementById("recommended-therapists")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Book a Session
            </button>
            <button
              className="secondary-btn"
              onClick={() =>
                document
                  .getElementById("quick-assessment")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Take a Test
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-text">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Support Section */}
      <div className="whatsapp-support-section">
        <div className="whatsapp-support-content">
          <div className="whatsapp-support-image">
            <img src={whatsapp} alt="WhatsApp Support" />
          </div>
          <div className="whatsapp-support-text">
            <h2>24/7 WhatsApp Support</h2>
            <p>
              We understand that mental health challenges don't follow a
              schedule. That's why our trained support team is available around
              the clock to provide immediate assistance.
            </p>
            <ul className="support-features">
              <li>
                <FaShieldAlt /> Immediate response from trained professionals
              </li>
              <li>
                <FaShieldAlt /> Secure and confidential conversations
              </li>
              <li>
                <FaShieldAlt /> Crisis intervention and emotional support
              </li>
              <li>
                <FaShieldAlt /> Guidance on accessing additional resources
              </li>
            </ul>
            <a
              href="https://wa.me/919876543210"
              className="connect-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Connect on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <section className="features-section">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaUserMd className="feature-icon" />
            <h3>Expert Therapists</h3>
            <p>Licensed professionals with years of experience</p>
          </div>
          <div className="feature-card">
            <FaClock className="feature-icon" />
            <h3>Flexible Scheduling</h3>
            <p>Book sessions at your convenience</p>
          </div>
          <div className="feature-card">
            <FaStar className="feature-icon" />
            <h3>Evidence-Based Care</h3>
            <p>Proven therapeutic approaches</p>
          </div>
        </div>
      </section>

      <section className="recommended-therapists" id="recommended-therapists">
        <h2>Recommended Therapists</h2>
        <div className="therapists-grid">
          {recommendedTherapists.map((therapist) => (
            <div key={therapist.id} className="therapist-card">
              <img
                src={therapist.image}
                alt={therapist.name}
                className="therapist-image"
              />
              <div className="therapist-info">
                <h3>{therapist.name}</h3>
                <p className="specialty">{therapist.specialty}</p>
                <div className="rating">
                  <FaStar className="star-icon" />
                  <span>{therapist.rating}</span>
                </div>
                <p className="experience">{therapist.experience}</p>
                <p className="description">{therapist.description}</p>
                <div className="availability">
                  <FaClock /> {therapist.availability}
                </div>
                <p className="price">{therapist.price}</p>
                <button
                  className="book-btn"
                  onClick={() => handleBookSession(therapist)}
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-content">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <FaStar key={index} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <h4>{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="privacy-section">
        <h2>Your Privacy is Our Priority</h2>
        <div className="privacy-grid">
          {privacyItems.map((item, index) => (
            <div key={index} className="privacy-item">
              <div className="privacy-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Start Your Journey to Better Mental Health</h2>
        <p>Take the first step towards a healthier mind today</p>
        <button className="cta-btn">Get Started</button>
      </section>

      <section className="quick-assessment" id="quick-assessment">
        {!showAssessment ? (
          <div className="assessment-intro">
            <h2>Quick Mental Health Assessment</h2>
            <p>
              Take a brief 8-question assessment to understand your mental
              well-being
            </p>
            <div className="assessment-details">
              <div className="detail-item">
                <FaClock /> 5-10 minutes
              </div>
              <div className="detail-item">
                <FaQuestionCircle /> 8 questions
              </div>
              <div className="detail-item">
                <FaBrain /> Mental well-being check
              </div>
            </div>
            <button className="start-assessment-btn" onClick={handleStartTest}>
              Begin Assessment
            </button>
          </div>
        ) : !showResults ? (
          <div className="assessment-test">
            <div className="question-header">
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${
                      (currentQuestion / quickAssessmentQuestions.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <span className="question-number">
                Question {currentQuestion + 1} of{" "}
                {quickAssessmentQuestions.length}
              </span>
            </div>
            <div className="question-content">
              <h3>{quickAssessmentQuestions[currentQuestion].question}</h3>
              <div className="options">
                {quickAssessmentQuestions[currentQuestion].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      className="option-btn"
                      onClick={() => handleAnswer(option.value)}
                    >
                      {option.text}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="assessment-results">
            <h2>Assessment Results</h2>
            <div className="score-circle">
              <span className="score">{Math.round(calculateScore())}%</span>
            </div>
            <p className="result-message">
              {getResultMessage(calculateScore())}
            </p>
            <div className="result-actions">
              <button className="retry-btn" onClick={handleStartTest}>
                Take Assessment Again
              </button>
              <button
                className="detailed-assessment-btn"
                onClick={() => navigate("/assessment")}
              >
                Take Detailed Assessment
              </button>
            </div>
          </div>
        )}
      </section>

      {showRegistrationForm && selectedTherapist && (
        <RegistrationForm
          therapist={selectedTherapist}
          onClose={handleCloseRegistration}
          onSubmit={handleRegistrationSubmit}
        />
      )}
    </div>
  );
};

export default Home;
