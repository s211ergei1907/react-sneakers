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
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getDataFromOnServer = async () => {
      const result = await fetchApi.get("items");
      setItems(result.data);

      const cart = await fetchApi.get("cart");
      setCartItems(cart.data);

      const favorites = await fetchApi.get("favorites");
      setFavorites(favorites.data);
    };

    getDataFromOnServer();
  }, []);

  const onAddToCart = async (sneakers) => {
    await fetchApi.post("cart", sneakers);
    setCartItems((prev) => [...prev, sneakers]);
  };

  const onRemoveItem = async (id) => {
    await fetchApi.delete(`cart/${id}`);
    setCartItems((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (sneakers) => {
    if (favorites.find(sneakersObj => sneakersObj.id === sneakers.id)){
      await fetchApi.delete(`favorites/${sneakers.id}`);
      setFavorites((prev) =>  [...prev.filter((item) => item.id !== sneakers.id)]);
    }
    else{
      await fetchApi.post("favorites", sneakers);
      setFavorites((prev) => [...prev, sneakers]);
    }
  };  

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems} 
          onCloseCart={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}

      <Header sneakers={cartItems}
        onClickCart={() => setCartOpened(true)}
        
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              sneakers={Sneakers}
            />
          }
        />

        <Route path="/favorites" element={<Favorites favorites={favorites} onAddToFavorite={onAddToFavorite}/>}/>
        
      </Routes>
    </div>
  );
};
