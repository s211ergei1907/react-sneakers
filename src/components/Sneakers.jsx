import React, { useTransition } from "react";
import { Card } from "./Card";

export const Sneakers = ({ sneakers, onAddToCart, onAddToFavorite, cartItems }) => {
  return (
    <div className="sneakers d-flex flex-wrap">
      {sneakers.map((item, index) => {
        return (
          <Card
            key={index}
            onFavorite={(sneaker) => onAddToFavorite(sneaker)}
            onPlus={(sneaker) => onAddToCart(sneaker)}
            added={cartItems.some(obj => Number(obj.id) === Number(sneakers.id))}
            {...item}
          />
        );
      })}
    </div>
  );
};
