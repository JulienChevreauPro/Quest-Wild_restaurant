import React, { useState } from "react";

function MenuItem({foodItem}) {
    const {isFavorite, itemName, foodImage, description, price } = foodItem;
    const [isFavourite, setIsFavourite] = useState(foodItem.isFavorite);

   const handleClick =(isFavourite) =>setIsFavourite (!isFavourite);
  
  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        <img src={foodImage} alt={itemName} />
        <figcaption>
          <h2>{itemName}</h2>
          <p>{description}</p>
        </figcaption>
      </figure>
      <span>{price} EUR</span>
        <button type="button"
                onClick={()=> handleClick(isFavourite)}>
                {isFavourite?"❤️":"🖤"}
        </button>
    </section>
  );
}

export default MenuItem;