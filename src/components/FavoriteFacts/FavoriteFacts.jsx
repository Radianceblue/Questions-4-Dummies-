import { useGame } from '../../context/GameLogic';
import filledStar from '../../assets/filled_star.png';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './FavoriteFacts.css';

function FavoriteFacts() {
  const { favorites } = useGame();

  return (
    <div className="favorite-facts">
      <h3>
        Your saved random true facts</h3>
      {favorites.map((fact) => (
        <div key={fact.id} className="favorite-fact">
          <p>{fact.text}</p>
          <FavoriteButton fact={fact} />
        </div>
      ))}
    </div>
  );
}

export default FavoriteFacts;
