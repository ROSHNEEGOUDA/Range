import React, { useState } from "react";

// QuestionCard component
const QuestionCard = ({ question, options, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  return (
    <div className=" mx-auto mt-6 p-4 bg-blue-400 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">{question}</h2>
      <div>
        {options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="radio"
              id={`option-${index}`}
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              className="mr-2"
            />
            <label htmlFor={`option-${index}`} className="text-gray-700">
              {option}
            </label>
          </div>
        ))}
      </div>
      {showAnswer && (
        <div className="mt-2">
          {selectedOption === correctAnswer ? (
            <p className="text-green-600 font-semibold">
              Correct Answer: {correctAnswer}
            </p>
          ) : (
            <p className="text-red-600 font-semibold">
              Incorrect Answer. Correct Answer: {correctAnswer}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// Assessment component with pagination
const Assessment = () => {
  const questionsPerPage = 2; // Number of questions per page
  const [currentPage, setCurrentPage] = useState(1);

  // Array of questions with their options and correct answers
  const questions = [
    {
      question:
        "Q1. Which of the following is a key trend in the MOST RECENT developments in cybersecurity threats?",
      options: [
        "A. A return to simple viruses that cause minor disruptions",
        "B. Increased targeting of healthcare systems and data",
        "C. Hacking groups primarily motivated by political activism",
        "D. A decline in attacks focused on financial gain",
      ],
      correctAnswer: "B. Increased targeting of healthcare systems and data",
    },
    {
      question:
        "Q2. The first viruses mainly spread through:",
      options: [
        "A. Phishing emails",
                "B. Floppy disks",
                "C. Text Messages",
                "D. Social media posts",
      ],
      correctAnswer: "B. Floppy disks",
    },
    {
      question:
        "Q3. Which of the following is an example of the 'layered security' approach to cybersecurity?",
      options: [
        "A. Using strong passwords and enabling two-factor authentication on your accounts.",
        "B. Relying solely on your antivirus software for complete protection.",
        "C. Clicking on any link sent by a friend because you trust them.",
        "D. Sharing your birthday and hometown publicly on social media profiles.",
      ],
      correctAnswer: "A. Using strong passwords and enabling two-factor authentication on your accounts.",
    },
    {
      question:
        "Q4. You get a text that looks like it's from your bank. It says there's a problem with your account and you need to click a link to fix it. What should you do?",
      options: [
        "A. Click the link and log in right away.",
                "B. Ignore the text. It's probably fake.",
                "C. Go to your bank's website on your own or call their number.",
                "D. Text back with your account number to verify.",
      ],
      correctAnswer: "B. Ignore the text. It's probably fake.",
      explanation: "B. Correct: This is the safest way to check, without using any links from the suspicious message."
    },
    {
      question:
        "Q4. You get a text that looks like it's from your bank. It says there's a problem with your account and you need to click a link to fix it. What should you do?",
      options: [
        "A. Click the link and log in right away.",
                "B. Ignore the text. It's probably fake.",
                "C. Go to your bank's website on your own or call their number.",
                "D. Text back with your account number to verify.",
      ],
      correctAnswer: "B. Ignore the text. It's probably fake.",
      explanation: "B. Correct: This is the safest way to check, without using any links from the suspicious message."
    },
    {
      question:
        "Q4. You get a text that looks like it's from your bank. It says there's a problem with your account and you need to click a link to fix it. What should you do?",
      options: [
        "A. Click the link and log in right away.",
                "B. Ignore the text. It's probably fake.",
                "C. Go to your bank's website on your own or call their number.",
                "D. Text back with your account number to verify.",
      ],
      correctAnswer: "B. Ignore the text. It's probably fake.",
      explanation: "B. Correct: This is the safest way to check, without using any links from the suspicious message."
    },
    // Add more questions here...
  ];

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;

  // Function to handle navigation to the next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle navigation to the previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      {questions.slice(startIndex, endIndex).map((question, index) => (
        <QuestionCard key={index} {...question} />
      ))}
      <div className="flex justify-center mt-6">
        {currentPage > 1 && (
          <button
            onClick={prevPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Previous
          </button>
        )}
        {endIndex < questions.length && (
          <button
            onClick={nextPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Assessment;
