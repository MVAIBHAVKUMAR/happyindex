import React from "react";

interface Props {
  section: number;
  totalSections: number;
  question: String;
  options: String[];
  currentQuestion: number;
  totalQuestions: number;
  onSelectedOption: (selectedOption: String) => void;
}

const Question = ({
  section,
  totalSections,
  question,
  options,
  currentQuestion,
  totalQuestions,
  onSelectedOption,
}: Props) => {
  return (
    <>
      <div className="sectionA">
        <div className="question-section">
          <div className="question-count">
            Section {section}/{totalSections}
            <br />
            <span> Question {currentQuestion}</span>/{totalQuestions}
          </div>
          <div className="question-text">{question}</div>
        </div>

        <div className="answer-section">
          {options.map((answerOption) => (
            <button onClick={() => onSelectedOption(answerOption)}>
              {answerOption}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
