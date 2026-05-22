type Props = {
  score: number;
  total: number;
  onRestart: () => void;
};

export default function ResultCard({ score, total, onRestart }: Props) {
  const percentage = Math.round((score / total) * 100);

  function getResultTitle() {
    if (percentage <= 30) return "Casual Listener";
    if (percentage <= 60) return "True Fan";
    if (percentage <= 80) return "Moonwalker";
    return "King of Pop Expert";
  }

  function getResultMessage() {
    if (percentage <= 30) {
      return "Você conhece o básico, mas ainda tem muito legado para explorar.";
    }

    if (percentage <= 60) {
      return "Você já conhece bons momentos da carreira dele.";
    }

    if (percentage <= 80) {
      return "Você conhece bem o universo do Michael Jackson.";
    }

    return "Você realmente domina o legado do King of Pop.";
  }

  return (
    <div className="result-card">
      <span className="section-label">Resultado Final</span>

      <h3>{getResultTitle()}</h3>

      <div className="score-circle">
        <strong>{percentage}%</strong>
        <span>
          {score}/{total}
        </span>
      </div>

      <p>{getResultMessage()}</p>

      <button onClick={onRestart}>Refazer quiz</button>
    </div>
  );
}