import { useGame } from "../../context/GameLogic";

import filledStar from "../../assets/filled_star.png"
import './FavoriteFacts.css'

function FavoriteFacts() {
    const {favorites} = useGame();

    return (
        <div className="favorite-facts">
            <h3>Your saved random true facts <img src={filledStar} alt="a star"/></h3>
            {favorites.map((fact) => (
                <div class="card-text" key={fact.id}>
                    <p>{fact.text}</p>
                </div>
            ))}
        </div>
    )
}

export default FavoriteFacts