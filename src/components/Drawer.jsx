export const Drawer = ({onCloseCart})=> {
  return (
    <div  className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img onClick={onCloseCart}
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
  );
}

