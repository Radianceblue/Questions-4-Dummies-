import { useState } from "react";

import filledStar from "../../assets/filled_star.png"
import starFrame from "../../assets/star_frame.png"

function FavoriteButton() {
    const [favorited, setFavorited] = useState(false);

    let star;

    if (favorited) {
        star = filledStar;
    } else {
        star = starFrame;
    }
    
    return (
        <button onClick={() => setFavorited(!favorited)}> {/* !favorited betyder motsatsen av det nuvarande tilståndet */} 
            <img src={star} alt="a star to like or unlike a fact"/>
        </button>
    )
}

export default FavoriteButton