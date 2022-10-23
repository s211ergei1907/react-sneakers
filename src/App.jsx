import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import { useState, useEffect } from "react";
import { Sneakers } from "./components/Sneakers";
import { fetchApi } from "./fetchApi/fetchApi";
//4 урок пересмотреть
export const App = () => {
  const [items, setItems] = useState([]);
  const [сartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getDataFromOnServer = async () => {
      const result = await fetchApi.get(
        "items"
      );
      setItems(result.data);

      const cart = await fetchApi.get(
        "cart"
      );
      setCartItems(cart.data);
    };

    getDataFromOnServer();
  }, []);



  const onAddToCart = async (sneakers) => {
    await fetchApi.post("cart", sneakers);
    setCartItems((prev) => [...prev, sneakers]);
  };

  const onRemoveItem = async (id) => {
    console.log(id);
    await fetchApi.delete(`cart/${id}`);
    setCartItems((prev) => [...prev.filter(item => item.id !== id)]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (sneakers) => {
    await fetchApi.post("favorites", sneakers);
    setFavorites((prev) => [...prev, sneakers]);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && ( 
        <Drawer items={сartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem} />
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
          onAddToFavorite={onAddToFavorite}
        />
      </div>
    </div>
  );
};
