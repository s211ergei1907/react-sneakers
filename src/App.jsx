import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { useState, useEffect } from "react";

//4 урок пересмотреть
export const App = () => {
  const [items, setItems] = useState([]);
  const [сartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const getDataFromOnServer = async () => {
      const result = await fetch(
        "https://6351b3109d64d7c71306ec79.mockapi.io/items"
      );
      const data = await result.json();
      setItems(data);
    };

    getDataFromOnServer();
  }, []);

  const onAddToCart = (sneakers) => {
    setCartItems((prev) => [...prev, sneakers]); 
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={сartItems} onCloseCart={() => setCartOpened(false) } />
      )}

      <Header
        onClickCart={() => setCartOpened(true)}
        onCloseCart={() => setCartOpened(false)}
      />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">{searchValue ?  `Ищем:  ${searchValue}` : 'Все кроссовки'}</h1>
          <div className="searh-block d-flex">
            <img src="img/search.svg" alt="search" />
            <input onChange={onChangeSearchInput} type="text" placeholder="Поиск" />
          </div>
        </div>

        <div className="sneakers d-flex flex-wrap">
          {items.map(({ title, price, imageUrl }, index) => {
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
      </div>
    </div>
  );
};
