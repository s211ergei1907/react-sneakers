import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import React, { useState, useEffect } from "react";
import { fetchApi } from "./fetchApi/fetchApi";
import { Routes, Route } from "react-router-dom";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import {AppContext} from "./context";


//передаем в компонету 2 строки qwiestion и answer в answer правильный ответ, моя компонента разобьет на слова перемешает
//* Реализовать чтобы показывала с каокго слова неправильно пошло предложение 


export const App = () => {
  const [items, setItems] = useState([]); 
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);  
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDataFromOnServer = async () => {
      async function fetchData() {
        const cart = await fetchApi.get("cart");
        const favorites = await fetchApi.get("favorites");
        const result = await fetchApi.get("items");

        setIsLoading(false); //Перед отправкой запросов поставь setIsLoading(true)
        setCartItems(cart.data);
        setFavorites(favorites.data);
        setItems(result.data);
      }
      fetchData();
    };

    getDataFromOnServer();
  }, []);

  const onAddToCart = async (sneakers) => {
    console.log(sneakers);
    try {
      if (cartItems.find((item) => Number(item.id) === Number(sneakers.id))) {
        await fetchApi.delete(`cart/${sneakers.id}`);
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(sneakers.id))
        ); //Берем предыдущие значение
      } else {
        await fetchApi.post("cart", sneakers);
        setCartItems((prev) => [...prev, sneakers]);
      }
    } catch (error) {
      alert("Не удалось добавить в корзину");
    }
  };

  const onRemoveItem = async (id) => {
    await fetchApi.delete(`cart/${id}`);
    setCartItems((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (sneakers) => {
    if (favorites.find((sneakersObj) => Number(sneakersObj.id) === Number(sneakers.id))) {
      await fetchApi.delete(`favorites/${sneakers.id}`);
      setFavorites((prev) => [
        ...prev.filter((item) => item.id !== sneakers.id),
      ]);
    } else {
      await fetchApi.post("favorites", sneakers);
      setFavorites((prev) => [...prev, sneakers]);
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }

  return (
    //  Теперь эти переменные доступны в компонентах: Drawer, Header, Home, Favorites  и нам теперь не нужна прокидывать их в пропсы
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems}}>   
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onCloseCart={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}

        <Header sneakers={cartItems} onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
                
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <Favorites/>
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};
