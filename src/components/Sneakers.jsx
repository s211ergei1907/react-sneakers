import React from "react";
import { Card } from "./Card";

//!Переписать через контекст


export const Sneakers = ({sneakers, onAddToCart}) => {
  return (
    <div className="sneakers d-flex flex-wrap">
      {
        sneakers.map(({ title, price, imageUrl }, index) => {
          return (
            <Card
              key={index}
              title={title}
              price={price}
              imageUrl={imageUrl}
              onFavorite={() => console.log("Добавили закладки")}
              onPlus={(sneaker) => onAddToCart(sneaker)}
            />
          );
        })}
    </div>
  );
};
