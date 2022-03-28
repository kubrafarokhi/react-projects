// functional component that accepts as a prop an array of question objects and renders a quiz. The quiz displays one question at a time in the order that they appear in the questions array, and it only advances to the next question when the user selects an answer choice.

import { questions } from "./data";
import React, { useState } from "react";

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (currentQuestion, index) => {
    if (questions[currentQuestion].correct == index) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div style={{ margin: "auto", width: "30%" }}>
      {currentQuestion < questions.length && (
        <>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].answers.map((answer, index) => (
            <p onClick={() => handleAnswer(currentQuestion, index)}>{answer}</p>
          ))}
        </>
      )}
      {currentQuestion >= questions.length && (
        <p>{`You scored ${(score / questions.length) * 100}%`}</p>
      )}
    </div>
  );
};

export default Quiz;
