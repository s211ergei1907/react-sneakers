export const Header = ({ onClickCart }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="headerLeft d-flex align-center">
        <img width={40} height={40} src="/img/logo.svg" alt="" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="headerRight d-flex align-center">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img
            style={{ width: "18px", height: "18px" }}
            src="/img/card.svg"
            alt=""
          />
          <span>1205 руб.</span>
        </li>
        <li>
          <img src="/img/favorite.svg" alt="favorite" />
        </li>
        <li>
          <img classname="ml-10" width={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
};
