import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { useState, useEffect } from "react";
//4 урок пересмотреть
export const App = () => {
  const [items, setItems] = useState([]);
  const [сartItems, setCartItems] = useState([
 
  ]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {                                            //useEffect нужен в данной ситуации из-за того что функция будет вызываться  большое кол-во раз(запрос на сервер будет отправляться много раз)
    fetch("https://6351b3109d64d7c71306ec79.mockapi.io/items") // Чтобы это избежать, мы будем вызывать fetch только при первом рендере
      .then((res) => {                                         //fetch отправь запрос на бэк
        return res.json();                                     // Преврати мне ответ в json   
      })
      .then((json) => {                                       // вытащи его из переменной json
        setItems(json);                                       // Пердай его в useStates в items
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);                        // Означает, что мы добавляем obj в конец  cartItems (в реакт нельзя пушить методом push, могут быть проблемы)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items = {сartItems} onCloseCart={() => setCartOpened(false)} />}
      <Header
        onClickCart={() => setCartOpened(true)}
        onCloseCart={() => setCartOpened(false)}
      />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">Все кроссовки</h1>
          <div className="searh-block d-flex">
            <img src="img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск" />
          </div>
        </div>

        <div className="sneakers d-flex flex-wrap">
          {items.map((item) => {
            return (
              <Card
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log("Добавили закладки")}
                onPlus={(obj) => onAddToCart(obj)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
