import React from "react";
import { Card } from "../components/Card";

export const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading
}) => {

 const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1 className="">Все кроссовки</h1>
        <div className="searh-block d-flex">
          <img src="img/search.svg" alt="search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="Поиск"
          />

          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p "
              src="img/sneakers/btn-remove.svg"
              alt="clear"
            />
          )}
        </div>
      </div>

      {renderItems()}

    </div>
  );
};
