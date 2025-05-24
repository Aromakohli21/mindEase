import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./GeneralAssessment.css";

const GeneralAssessment = ({ onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "How would you rate your overall mood in the past week?",
      options: [
        { value: 1, text: "Very poor" },
        { value: 2, text: "Poor" },
        { value: 3, text: "Fair" },
        { value: 4, text: "Good" },
        { value: 5, text: "Very good" },
      ],
    },
    {
      id: 2,
      question: "How well have you been sleeping lately?",
      options: [
        { value: 1, text: "Very poorly" },
        { value: 2, text: "Poorly" },
        { value: 3, text: "Fairly well" },
        { value: 4, text: "Well" },
        { value: 5, text: "Very well" },
      ],
    },
    {
      id: 3,
      question: "How would you describe your energy levels?",
      options: [
        { value: 1, text: "Extremely low" },
        { value: 2, text: "Low" },
        { value: 3, text: "Moderate" },
        { value: 4, text: "High" },
        { value: 5, text: "Very high" },
      ],
    },
    {
      id: 4,
      question: "How well can you concentrate on tasks?",
      options: [
        { value: 1, text: "Very poorly" },
        { value: 2, text: "Poorly" },
        { value: 3, text: "Moderately" },
        { value: 4, text: "Well" },
        { value: 5, text: "Very well" },
      ],
    },
    {
      id: 5,
      question: "How would you rate your stress levels?",
      options: [
        { value: 1, text: "Extremely high" },
        { value: 2, text: "High" },
        { value: 3, text: "Moderate" },
        { value: 4, text: "Low" },
        { value: 5, text: "Very low" },
      ],
    },
    {
      id: 6,
      question: "How satisfied are you with your social relationships?",
      options: [
        { value: 1, text: "Very dissatisfied" },
        { value: 2, text: "Dissatisfied" },
        { value: 3, text: "Neutral" },
        { value: 4, text: "Satisfied" },
        { value: 5, text: "Very satisfied" },
      ],
    },
    {
      id: 7,
      question: "How often do you feel anxious or worried?",
      options: [
        { value: 1, text: "Almost always" },
        { value: 2, text: "Often" },
        { value: 3, text: "Sometimes" },
        { value: 4, text: "Rarely" },
        { value: 5, text: "Almost never" },
      ],
    },
    {
      id: 8,
      question: "How would you rate your self-esteem?",
      options: [
        { value: 1, text: "Very low" },
        { value: 2, text: "Low" },
        { value: 3, text: "Moderate" },
        { value: 4, text: "High" },
        { value: 5, text: "Very high" },
      ],
    },
    {
      id: 9,
      question: "How well are you able to handle daily responsibilities?",
      options: [
        { value: 1, text: "Very poorly" },
        { value: 2, text: "Poorly" },
        { value: 3, text: "Moderately" },
        { value: 4, text: "Well" },
        { value: 5, text: "Very well" },
      ],
    },
    {
      id: 10,
      question: "How often do you feel overwhelmed by your emotions?",
      options: [
        { value: 1, text: "Almost always" },
        { value: 2, text: "Often" },
        { value: 3, text: "Sometimes" },
        { value: 4, text: "Rarely" },
        { value: 5, text: "Almost never" },
      ],
    },
    {
      id: 11,
      question: "How would you rate your physical health?",
      options: [
        { value: 1, text: "Very poor" },
        { value: 2, text: "Poor" },
        { value: 3, text: "Fair" },
        { value: 4, text: "Good" },
        { value: 5, text: "Very good" },
      ],
    },
    {
      id: 12,
      question: "How well are you able to make decisions?",
      options: [
        { value: 1, text: "Very poorly" },
        { value: 2, text: "Poorly" },
        { value: 3, text: "Moderately" },
        { value: 4, text: "Well" },
        { value: 5, text: "Very well" },
      ],
    },
    {
      id: 13,
      question: "How satisfied are you with your work or studies?",
      options: [
        { value: 1, text: "Very dissatisfied" },
        { value: 2, text: "Dissatisfied" },
        { value: 3, text: "Neutral" },
        { value: 4, text: "Satisfied" },
        { value: 5, text: "Very satisfied" },
      ],
    },
    {
      id: 14,
      question: "How often do you feel hopeful about the future?",
      options: [
        { value: 1, text: "Almost never" },
        { value: 2, text: "Rarely" },
        { value: 3, text: "Sometimes" },
        { value: 4, text: "Often" },
        { value: 5, text: "Almost always" },
      ],
    },
    {
      id: 15,
      question: "How well are you able to enjoy activities you used to like?",
      options: [
        { value: 1, text: "Very poorly" },
        { value: 2, text: "Poorly" },
        { value: 3, text: "Moderately" },
        { value: 4, text: "Well" },
        { value: 5, text: "Very well" },
      ],
    },
  ];

  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: value,
    }));
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce(
      (sum, score) => sum + score,
      0
    );
    const maxScore = questions.length * 5;
    const percentage = (totalScore / maxScore) * 100;
    return percentage;
  };

  const getResultMessage = (score) => {
    if (score >= 80)
      return "Your mental health appears to be in good condition.";
    if (score >= 60)
      return "Your mental health is fair, but there's room for improvement.";
    if (score >= 40)
      return "You might be experiencing some mental health challenges.";
    return "You may be experiencing significant mental health challenges.";
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="assessment-results">
        <h2>Your Assessment Results</h2>
        <div className="score-circle">
          <div className="score-value">{Math.round(score)}%</div>
        </div>
        <p className="result-message">{getResultMessage(score)}</p>
        <div className="result-actions">
          <button className="back-btn" onClick={onBack}>
            <FaArrowLeft /> Back to Assessments
          </button>
          <button
            className="retake-btn"
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers({});
              setShowResults(false);
            }}
          >
            Take Test Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="assessment-test">
      <div className="question-header">
        <button className="back-btn" onClick={onBack}>
          <FaArrowLeft /> Back to Assessments
        </button>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="question-content">
        <h2>
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        <p className="question-text">{questions[currentQuestion].question}</p>

        <div className="options-container">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${
                answers[currentQuestion] === option.value ? "selected" : ""
              }`}
              onClick={() => handleAnswer(option.value)}
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="navigation-buttons">
          <button
            className="nav-btn prev-btn"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <FaArrowLeft /> Previous
          </button>
          <button
            className="nav-btn next-btn"
            onClick={handleNext}
            disabled={!answers[currentQuestion]}
          >
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}{" "}
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralAssessment;
