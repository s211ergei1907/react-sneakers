// !1::41 6 видос
import React from "react";

import { useState } from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../context";

 export const Card = ({
  id,
  onFavorite,
  onPlus,
  imageUrl,
  title,
  price,
  favorited = false,
  added = false,
  loading = false,
}) => {

  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);


  
  console.log(title, isItemAdded(id));

  const onClickPlus = () => {
    onPlus({ id, imageUrl, title, price });
    //Есть true будет false, если false будет true
  };

  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
    console.log("Кликнули на фэйворит");
  };

  //Если переменная изменится, то выполняется код
  // useEffect(()=>console.log('Принт'), [isAdded])
  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <div>
          <div className="favorite" onClick={onFavorite}>
            <img
              onClick={onClickFavorite}
              className="heart-unliked"
              style={{ height: "40px", width: "40px" }}
              src={
                isFavorite ? "/img/heart-liked.svg " : "/img/heart-unliked.svg"
              }
              alt="Plus"
            />
          </div>
          <img
            style={{ height: "112px", width: "133px" }}
            src={imageUrl}
            alt="sneak"
          />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price}</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              // ТЕперь берем через контекст, от туда достаем эту функцию и каждый раз чекаем этот id 
              src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
              alt="Plus"
            />
          </div>
        </div>
      )}
    </div>
  );
};
