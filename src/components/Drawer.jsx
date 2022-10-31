export const Drawer = ({ onCloseCart, items = [], onRemove}) => {
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

          {items.map(({imageUrl, title, price, id}) => (
            <div key={id} className="cartItem d-flex align-center">
              <div className="cardItemImg">
                <img style={{height: "70px", width: "70px"}} src={imageUrl} alt="sneakers" />  
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
              <b>{items.reduce((acc, {price}) => acc + Number(price), 0)} руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%</span>
              <div></div>
              <b>{items.reduce((acc, {price}) => acc + Number(price) , 0) * 0.05 } руб.</b>
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
