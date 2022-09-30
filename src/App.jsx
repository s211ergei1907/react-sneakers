function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Корзина
            <img
              className="removeBtn cu-p "
              src="img/sneakers/btn-remove.svg"
              alt="remove"
            />
          </h2>

          <div className="items">
            
            <div className="cartItem d-flex align-center">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="img/sneakers/1.jpg"
                alt="sneakers"
              />
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cardItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999р</b>
              </div>
              <img
                className="removeBtn"
                src="img/sneakers/btn-remove.svg"
                alt="remove"
              />
            </div>
             <div className="cartItem d-flex align-center">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="img/sneakers/1.jpg"
                alt="sneakers"
              />
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cardItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999р</b>
              </div>
              <img
                className="removeBtn"
                src="img/sneakers/btn-remove.svg"
                alt="remove"
              />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Итого: </span>
                <div></div>
                <b>21498 руб.</b>
              </li>
              <li className="d-flex">
                <span>Налог 5%</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="headerRight d-flex align-center">
          <li className="mr-30 ">
            <img width={18} height={18} src="/img/card.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">Все кроссовки</h1>
          <div className="searh-block d-flex">
            <img src="img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск" />
          </div>
        </div>

        <div className="sneakers d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
