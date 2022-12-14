import { Link } from "react-router-dom";

export const Header = ({ onClickCart, sneakers = [] }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="headerRight d-flex align-center">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img
            className="cu-p"
            style={{ width: "18px", height: "18px" }}
            src="/img/card.svg"
            alt=""
          />

          <span>
            {" "}
            {sneakers.length > 0 &&
              sneakers.reduce(
                (acc, sneakersItem) => acc + Number(sneakersItem.price),
                0
              )}
          </span>
        </li>
        <li>
          <Link to="/favorites">
            <img src="/img/heart.svg" alt="heart" className="mr-30 cu-p" />
          </Link>
        </li>
        <li className="cu-p">
          <Link to="/orders">
            <img
              className="ml-10 cu-p"
              width={18}
              height={18}
              src="/img/user.svg"
              alt="user"
            />  
          </Link>
        </li>
      </ul>
    </header>
  );
};
