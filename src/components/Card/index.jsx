// !Компоненты с большой буквы называем
//Для чего нужны компоненты?
//!Допустим мы хотим изменить нашу карточку как-то или переиспользовать ее, компоненты позволяют сделать это быстро и сразу везде
//!Это сильно облегчает работу.
//Все, что мы передаем в компонент будет хранится в props, из пропсы вытаскиваем 3 значения

import { useState } from "react";
import styles from './Card.module.scss';

function Card(props) {
  //Деструктуризация
  //useState
  let [isClicked, setIsClicked] = useState(false);
  const onClickButton = () => {
    alert(props.title)
  };
  return (
    <div className={styles.card}>
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button onClick={props.onClick}>
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>

      
      {/* <button onClick={() => setIsClicked(!isClicked)}>{isClicked ? 'Пидора ответ' : 'Нет'}</button> */}
    </div>
  );
}

export default Card;
