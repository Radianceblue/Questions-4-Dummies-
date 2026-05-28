import { useState } from "react";

import { useGame } from "../../context/GameLogic";

import filledStar from "../../assets/filled_star.png"
import starFrame from "../../assets/star_frame.png"

function FavoriteButton({ fact }) {
    const { favorites, favoriteFact } = useGame();

    const favorited = favorites.find(
        (favorite) => favorite.id === fact.id
    );

    let star;

    if (favorited) {
        star = filledStar;
    } else {
        star = starFrame;
    }
    
    return (
        <button onClick={() => favoriteFact(fact)}> {/* !favorited betyder motsatsen av det nuvarande tilståndet */} 
            <img src={star} alt="a star to like or unlike a fact"/>
        </button>
    )
}

export default FavoriteButton