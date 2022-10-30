// !1::41 5 видос 

import { useState } from "react";
import styles from "./Card.module.scss";

export const Card = ({id, onFavorite, onPlus, imageUrl, title, price, favorited = false}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited)
  const onClickPlus = () => {
    onPlus( {imageUrl, title, price});
    //Есть true будет false, если false будет true
    setIsAdded(!isAdded);
  } 

  const onClickFavorite = () => {
    onFavorite({id, imageUrl, title, price});
    setIsFavorite(!isFavorite);
  } 

  //Если переменная изменится, то выполняется код
  // useEffect(()=>console.log('Принт'), [isAdded])
  return (
    <div className={styles.card}>
      <div className="favorite" onClick={onFavorite}>
        <img onClick={onClickFavorite} className="heart-unliked" style={{height: "40px", width: "40px" }} src={isFavorite ? '/img/heart-liked.svg ' : '/img/heart-unliked.svg' } alt="Plus" />
      </div>
      <img style={{height: "112px", width: "133px"}} src={imageUrl} alt="sneak" />  
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
          <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-checked.svg':  '/img/btn-plus.svg'} alt="Plus" />
      </div>
    </div>
  );
};
