import './SkeletonCard.css';

const SkeletonCard = () => {
  console.log('SkeletonCard renderas');

  return (
    <div className="question-card-container">
      <div className="quiz-skeleton-card"></div>
      <div className="quiz-skeleton-card"></div>
      <div className="quiz-skeleton-card"></div>
    </div>
  );
};

export default SkeletonCard;
