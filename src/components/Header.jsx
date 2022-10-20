function Header(props) {
  console.log({props});
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
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/card.svg" alt=""/>
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt=""/>
        </li>
      </ul>
    </header>
  );
}

export default Header;