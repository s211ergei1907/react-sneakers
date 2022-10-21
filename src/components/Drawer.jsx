export const Drawer = ({ onCloseCart, items = [] }) => {
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
        {/* //url(${obj.imageUrl}) */}
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center">
              <div className="cardItemImg">
                <img style={{height: "70px", width: "70px"}} src={obj.imageUrl} alt="sneak" />  
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
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
};
