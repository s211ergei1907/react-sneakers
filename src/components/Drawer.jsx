import { useState } from "react";
import { Info } from "./Info";
import { AppContext } from "../context";
import { useContext } from "react";
import { fetchApi } from "../fetchApi/fetchApi";



export const Drawer = ({ onCloseCart, items = [], onRemove }) => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const { cartItems, setCartItems } = useContext(AppContext);

  const onClickOrder = async () => {
    await fetchApi.post("order", cartItems);
    setIsOrderComplete(true);
    setCartItems([]);
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            onClick={onCloseCart}
            className="removeBtn cu-p "
            src="img/sneakers/btn-remove.svg"
            alt="remove"
          />
        </h2>
        {items.length ? (
          <div>
            <div className="items">
              {items.map(({ imageUrl, title, price, id }) => (
                <div key={id} className="cartItem d-flex align-center">
                  <div className="cardItemImg">
                    <img
                      style={{ height: "70px", width: "70px" }}
                      src={imageUrl}
                      alt="sneakers"
                    />
                  </div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{title}</p>
                    <b>{price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(id)}
                    className="removeBtn"
                    src="img/sneakers/btn-remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li className="d-flex">
                  <span>Итого: </span>
                  <div></div>
                  <b>
                    {items.reduce((acc, { price }) => acc + Number(price), 0)}{" "}
                    руб.
                  </b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%</span>
                  <div></div>
                  <b>
                    {items.reduce((acc, { price }) => acc + Number(price), 0) *
                      0.05}{" "}
                    руб.
                  </b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
            description={
              isOrderComplete
                ? "Ваш заказ скоро будет передан курьерской доставки"
                : "Добавьте хоть один товар пожалуйста"
            }
            image={
              isOrderComplete ? "/img/orderSuc.jpg" : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
};

// 5 урок
