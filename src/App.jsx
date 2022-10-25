import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import { useState, useEffect } from "react";
import { Sneakers } from "./components/Sneakers";
import { fetchApi } from "./fetchApi/fetchApi";
import { Routes, Route, Link } from "react-router-dom";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";

//4 урок пересмотреть
export const App = () => {
  const [items, setItems] = useState([]);
  const [сartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getDataFromOnServer = async () => {
      const result = await fetchApi.get("items");
      setItems(result.data);

      const cart = await fetchApi.get("cart");
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
    setCartItems((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (sneakers) => {
    await fetchApi.post("favorites", sneakers);
    setFavorites((prev) => [...prev, sneakers]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={сartItems}
          onCloseCart={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}

      <Header
        onClickCart={() => setCartOpened(true)}
        onCloseCart={() => setCartOpened(false)}
      />

      <Routes>
        <Route path="/f" element={<App />}></Route>
        
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
      <Home
        items={items}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onChangeSearchInput={onChangeSearchInput}
        onAddToFavorite={onAddToFavorite}
        onAddToCart={onAddToCart}
        Sneakers={Sneakers}
      />
    </div>
  );
};
