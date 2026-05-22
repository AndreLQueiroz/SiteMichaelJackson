import type { QuizQuestion } from "../data/quiz";

type Props = {
  question: QuizQuestion;
  options: string[];
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer: string | null;
  showFeedback: boolean;
  onSelectAnswer: (answer: string) => void;
};

export default function QuestionCard({
  question,
  options,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  showFeedback,
  onSelectAnswer,
}: Props) {
  const progress = (currentQuestion / totalQuestions) * 100;

  function getOptionClass(option: string) {
    if (!showFeedback) {
      return selectedAnswer === option
        ? "option-button selected"
        : "option-button";
    }

    if (option === question.answer) {
      return "option-button correct";
    }

    if (option === selectedAnswer && option !== question.answer) {
      return "option-button wrong";
    }

    return "option-button disabled";
  }

  return (
    <div className="question-card">
      <div className="quiz-top">
        <span>
          Pergunta {currentQuestion} de {totalQuestions}
        </span>

        <strong>{Math.round(progress)}%</strong>
      </div>

      <div className="progress-bar">
        <div style={{ width: `${progress}%` }} />
      </div>

      <h3>{question.question}</h3>

      <div className="options-grid">
        {options.map((option) => (
          <button
            key={option}
            className={getOptionClass(option)}
            onClick={() => onSelectAnswer(option)}
            disabled={showFeedback}
          >
            {option}
          </button>
        ))}
      </div>

      {showFeedback && (
        <p className="feedback-text">
          {selectedAnswer === question.answer
            ? "Acertou! Mandou bem."
            : `Errou. A resposta certa era: ${question.answer}`}
        </p>
      )}
    </div>
  );
}

export type { QuizQuestion };