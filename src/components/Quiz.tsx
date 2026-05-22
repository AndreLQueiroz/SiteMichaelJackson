import { useState } from "react";
import { quizQuestions } from "../data/quiz";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";

function shuffleArray(array: string[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const [shuffledOptions, setShuffledOptions] = useState<string[]>(
    shuffleArray(quizQuestions[0].options)
  );

  const currentQuestion = quizQuestions[currentIndex];

  function handleConfirmAnswer() {
    if (!selectedAnswer) return;

    if (!showFeedback) {
      if (selectedAnswer === currentQuestion.answer) {
        setScore((prevScore) => prevScore + 1);
      }

      setShowFeedback(true);
      return;
    }

    const nextQuestion = currentIndex + 1;

    if (nextQuestion < quizQuestions.length) {
      setCurrentIndex(nextQuestion);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setShuffledOptions(shuffleArray(quizQuestions[nextQuestion].options));
    } else {
      setFinished(true);
    }
  }

  function restartQuiz() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
    setShowFeedback(false);
    setShuffledOptions(shuffleArray(quizQuestions[0].options));
  }

  return (
    <section className="section quiz-section">
      <span className="section-label">Quiz</span>
      <h2>Você conhece o King of Pop?</h2>
      <div className="section-divider" />

      {!finished ? (
        <div className="quiz-container">
          <QuestionCard
            question={currentQuestion}
            options={shuffledOptions}
            currentQuestion={currentIndex + 1}
            totalQuestions={quizQuestions.length}
            selectedAnswer={selectedAnswer}
            showFeedback={showFeedback}
            onSelectAnswer={setSelectedAnswer}
          />

          <button
            className="next-button"
            onClick={handleConfirmAnswer}
            disabled={!selectedAnswer}
          >
            {!showFeedback
              ? "Confirmar resposta"
              : currentIndex === quizQuestions.length - 1
              ? "Ver resultado"
              : "Próxima pergunta"}
          </button>
        </div>
      ) : (
        <ResultCard
          score={score}
          total={quizQuestions.length}
          onRestart={restartQuiz}
        />
      )}
    </section>
  );
}
