import React from "react";
import { Card } from "../components/Card";

export const Favorites = ({favorites, onAddToFavorite}) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1 className="">Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((favorite, index) => {
          return (
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...favorite}
            />
          );
        })}
      </div>
  

    </div>
  );
};
