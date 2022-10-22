import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import { useState, useEffect } from "react";
import { Sneakers } from "./components/Sneakers";
import { fetchApi } from "./fetchApi/fetchApi";
//4 урок пересмотреть
export const App = () => {
  const [items, setItems] = useState([]);
  const [сartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getDataFromOnServer = async () => {
      const result = await fetchApi.get(
        "items"
      );
      setItems(result.data);
    };

    getDataFromOnServer();
  }, []);

  const onAddToCart = (sneakers) => {
    setCartItems((prev) => [...prev, sneakers]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={сartItems} onCloseCart={() => setCartOpened(false)} />
      )}

      <Header
        onClickCart={() => setCartOpened(true)}
        onCloseCart={() => setCartOpened(false)}
      />

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
        />
      </div>
    </div>
  );
};
