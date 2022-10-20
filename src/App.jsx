import {Drawer} from "./components/Drawer";
import {Header} from "./components/Header";
import { Card } from "./components/Card";
import { useState } from "react";

const arr = [
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 14909,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 14909,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12309,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 10909,
    imageUrl: "/img/sneakers/4.jpg",
  },
];

export const App = () => {
  const [cartOpened, setCartOpened] = useState(false);
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onCloseCart={() => setCartOpened(false)}/> }
      <Header onClickCart={() => setCartOpened(true)} onCloseCart={() => (false)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">Все кроссовки</h1>
          <div className="searh-block d-flex">
            <img src="img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск" />
          </div>
        </div>

        <div className="sneakers d-flex">
          {arr.map(({obj}) => {
            return (
              <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite={() => console.log("Добавили закладки")}
                onPlus={() => console.log("Нажали плюс")}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}


