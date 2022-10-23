import React from "react";
import { App } from "../App";
import { Card } from "./Card";



//!Переписать через контекст


export const Sneakers = ({sneakers, onAddToCart, onAddToFavorite}) => {
  return (
    <div className="sneakers d-flex flex-wrap">
      {
        sneakers.map(({ title, price, imageUrl}, index) => {
          return (
            <Card
              key={index}
              title={title}
              price={price}
              imageUrl={imageUrl}
              onFavorite={(sneaker) => onAddToFavorite(sneaker)}
              onPlus={(sneaker) => onAddToCart(sneaker)}
            />
          );
        })}
    </div>
  );
};
