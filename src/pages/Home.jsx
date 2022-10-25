import React from "react";

export const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  Sneakers,
}) => {
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

      <Sneakers
        sneakers={items.filter(({ title }) =>
          title.toLowerCase().includes(searchValue.toLowerCase())
        )}
        onAddToCart={onAddToCart}
        onAddToFavorite={onAddToFavorite}
      />
    </div>
  );
};
