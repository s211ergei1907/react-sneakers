import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";
// import { PanelTab } from "./components/PanelTab";

//!метод Map не меняет старый массив, а создает новый

//Вёрстки у нас сегодня практически не будет, онли RectJS и его базовая часть.

// А если быть точней, то:
// 1. Научимся выводить список React-компонентов с помощью массива
// 2. Что такое пропсы и стейт?
// 4. Узнаем как отловить клик с помощью ReactJS на кнопку
// 5. Что такое глупые и умные компоненты?
// 6. Будем ситилизировать компоненты с помощью CSS Module

// К примеру у нас есть компонента Card, мы с бэка получаем данные для новой карточки card(к примеру объектом), и  с помощью массива передаем эти данные
//задача заключается в том, чтобы массив объектов превраить в реакторские элементы

//Компонента принимают произвольные входные данные (называемые «props» или свойствами) и возвращают React-элементы,
// описывающие, что должно появиться на экране.
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
function App() {
  return (
    <div className="wrapper clear">
      {/* <PanelTab /> */}
      <Drawer />

      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">Все кроссовки</h1>
          <div className="searh-block d-flex">
            <img src="img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск" />
          </div>
        </div>

        <div className="sneakers d-flex">
          {/* Из массива arr взяли все объекты, превратили их в реакторские элементы и отобразили их на странице */}
          {/* Реакт работает таким образом что, он берет массив объектов и преобразовывает их в virtual DOM элементы */}
          {/* Virtual Dom позволяет оптимизировать, уменьшает нагрузку каких-то данных */}
          {arr.map((obj) => {
            return (
              <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onClick={() => console.log(obj)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
