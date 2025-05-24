import { useState } from "react";
import {
  FaBrain,
  FaHeart,
  FaHeartbeat,
  FaChild,
  FaMoon,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaQuestionCircle,
  FaUserFriends,
  FaUserMd,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaUserLock,
} from "react-icons/fa";
import GeneralAssessment from "../components/GeneralAssessment";
import "./Assessment.css";

const Assessment = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [showGeneralTest, setShowGeneralTest] = useState(true);
  const [showTest, setShowTest] = useState(false);

  const generalTest = {
    icon: <FaBrain />,
    title: "General Mental Health Assessment",
    description: "A comprehensive evaluation of your overall mental well-being",
    duration: "15-20 minutes",
    questions: "15",
    topics: [
      "Emotional well-being",
      "Daily functioning",
      "Social relationships",
      "Stress levels",
      "Sleep quality",
      "Energy levels",
      "Self-esteem",
      "Decision-making",
      "Work/Study satisfaction",
      "Future outlook",
    ],
  };

  const assessments = [
    {
      id: 1,
      title: "Anxiety Assessment",
      icon: <FaBrain />,
      description:
        "Evaluate your anxiety levels using validated Indian mental health screening tools",
      duration: "10-15 minutes",
      questions: "20 questions",
      topics: [
        "Physical symptoms",
        "Social anxiety",
        "Panic attacks",
        "Daily functioning",
      ],
    },
    {
      id: 2,
      title: "Depression Screening",
      icon: <FaHeart />,
      description:
        "Comprehensive assessment based on validated Indian mental health scales",
      duration: "15-20 minutes",
      questions: "25 questions",
      topics: [
        "Mood patterns",
        "Sleep quality",
        "Energy levels",
        "Social engagement",
      ],
    },
    {
      id: 3,
      title: "ADHD Evaluation",
      icon: <FaBrain />,
      description:
        "Based on Indian clinical guidelines for ADHD assessment in adults",
      duration: "20-25 minutes",
      questions: "30 questions",
      topics: [
        "Attention span",
        "Hyperactivity",
        "Impulsivity",
        "Organization skills",
      ],
    },
    {
      id: 4,
      title: "Stress Assessment",
      icon: <FaHeartbeat />,
      description:
        "Evaluate stress levels incorporating traditional Indian stress management perspectives",
      duration: "10-15 minutes",
      questions: "15 questions",
      topics: [
        "Work stress",
        "Family pressure",
        "Physical symptoms",
        "Coping mechanisms",
      ],
    },
    {
      id: 5,
      title: "Sleep Quality Check",
      icon: <FaMoon />,
      description: "Based on Indian sleep medicine guidelines and research",
      duration: "10-15 minutes",
      questions: "15 questions",
      topics: [
        "Sleep patterns",
        "Sleep hygiene",
        "Daytime fatigue",
        "Sleep environment",
      ],
    },
    {
      id: 6,
      title: "Relationship Assessment",
      icon: <FaUsers />,
      description:
        "Evaluate relationship dynamics considering Indian family values and modern challenges",
      duration: "15-20 minutes",
      questions: "20 questions",
      topics: [
        "Communication",
        "Trust issues",
        "Family dynamics",
        "Cultural factors",
      ],
    },
    {
      id: 7,
      title: "Child Development Check",
      icon: <FaChild />,
      description:
        "Comprehensive assessment for children based on Indian developmental milestones",
      duration: "20-25 minutes",
      questions: "25 questions",
      topics: [
        "Physical development",
        "Social skills",
        "Learning abilities",
        "Behavioral patterns",
      ],
    },
    {
      id: 8,
      title: "Academic Stress Test",
      icon: <FaGraduationCap />,
      description:
        "Evaluate academic pressure and performance anxiety in Indian education context",
      duration: "15-20 minutes",
      questions: "20 questions",
      topics: [
        "Exam anxiety",
        "Study habits",
        "Peer pressure",
        "Parental expectations",
      ],
    },
    {
      id: 9,
      title: "Social Anxiety Scale",
      icon: <FaUserFriends />,
      description:
        "Assess social interaction challenges in Indian cultural context",
      duration: "10-15 minutes",
      questions: "15 questions",
      topics: [
        "Social gatherings",
        "Public speaking",
        "Cultural events",
        "Social media impact",
      ],
    },
    {
      id: 10,
      title: "Emotional Intelligence Test",
      icon: <FaHandHoldingHeart />,
      description:
        "Measure emotional awareness and management skills with Indian cultural perspective",
      duration: "15-20 minutes",
      questions: "20 questions",
      topics: [
        "Self-awareness",
        "Emotion regulation",
        "Empathy",
        "Social awareness",
      ],
    },
    {
      id: 11,
      title: "Self-Esteem Assessment",
      icon: <FaUserLock />,
      description:
        "Evaluate self-worth and confidence levels in Indian societal context",
      duration: "10-15 minutes",
      questions: "15 questions",
      topics: [
        "Body image",
        "Career confidence",
        "Social acceptance",
        "Personal achievements",
      ],
    },
    {
      id: 12,
      title: "Work-Life Balance Check",
      icon: <FaCheckCircle />,
      description:
        "Assess work-life harmony considering Indian professional and family dynamics",
      duration: "15-20 minutes",
      questions: "20 questions",
      topics: [
        "Work pressure",
        "Family time",
        "Personal space",
        "Career satisfaction",
      ],
    },
  ];

  const startTest = (test) => {
    setSelectedTest(test);
    setShowGeneralTest(false);
  };

  const startGeneralTest = () => {
    setSelectedTest(generalTest);
    setShowGeneralTest(false);
  };

  const beginAssessment = () => {
    setShowTest(true);
  };

  const handleBack = () => {
    setShowTest(false);
    setShowGeneralTest(true);
  };

  if (showTest) {
    return <GeneralAssessment onBack={handleBack} />;
  }

  return (
    <div className="assessment-page">
      <div className="assessment-hero">
        <h1>Mental Health Assessments</h1>
        <p>
          Take a comprehensive evaluation to understand your mental well-being
        </p>
      </div>

      {showGeneralTest ? (
        <div className="general-test-section">
          <div className="general-test-card">
            <div className="general-test-icon">{generalTest.icon}</div>
            <h2>{generalTest.title}</h2>
            <p>{generalTest.description}</p>
            <div className="test-details">
              <span>
                <FaClock /> {generalTest.duration}
              </span>
              <span>
                <FaQuestionCircle /> {generalTest.questions} questions
              </span>
            </div>
            <div className="test-topics">
              <h3>Topics Covered:</h3>
              <ul>
                {generalTest.topics.map((topic, index) => (
                  <li key={index}>
                    <FaCheckCircle /> {topic}
                  </li>
                ))}
              </ul>
            </div>
            <button className="start-test-btn" onClick={startGeneralTest}>
              Start General Assessment <FaArrowRight />
            </button>
          </div>
        </div>
      ) : (
        <div className="test-section">
          <div className="test-header">
            <h2>{selectedTest.title}</h2>
            <button
              className="back-btn"
              onClick={() => setShowGeneralTest(true)}
            >
              Back to Assessments
            </button>
          </div>
          <div className="test-content">
            <div className="test-info">
              <div className="test-icon">{selectedTest.icon}</div>
              <p className="test-description">{selectedTest.description}</p>
              <div className="test-details">
                <span>
                  <FaClock /> {selectedTest.duration}
                </span>
                <span>
                  <FaQuestionCircle /> {selectedTest.questions} questions
                </span>
              </div>
              <div className="test-topics">
                <h3>Topics Covered:</h3>
                <ul>
                  {selectedTest.topics.map((topic, index) => (
                    <li key={index}>
                      <FaCheckCircle /> {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="test-instructions">
              <h3>Before You Begin:</h3>
              <ul>
                <li>Find a quiet, comfortable space</li>
                <li>Set aside uninterrupted time</li>
                <li>Answer honestly for accurate results</li>
                <li>Take breaks if needed</li>
              </ul>
              <button className="begin-test-btn" onClick={beginAssessment}>
                Begin Assessment <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assessment;
