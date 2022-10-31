import React from "react";
import { Card } from "./Card";

export const Sneakers = ({ sneakers, onAddToCart, onAddToFavorite }) => {
  return (
    <div className="sneakers d-flex flex-wrap">
      {sneakers.map(({ title, price, imageUrl, id }, index) => {
        return (
          <Card
            key={index}
            title={title}
            price={price}
            id={id}
            imageUrl={imageUrl}
            onFavorite={(sneaker) => onAddToFavorite(sneaker)}
            onPlus={(sneaker) => onAddToCart(sneaker)}
          />
        );
      })}
    </div>
  );
};
