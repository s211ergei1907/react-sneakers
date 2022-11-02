// !1::41 6 видос

import { useState } from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";

export const Card = ({
  id,
  onFavorite,
  onPlus,
  imageUrl,
  title,
  price,
  favorited = false,
  added = false,
  loading
}) => {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const onClickPlus = () => {
    onPlus({ id, imageUrl, title, price });
    //Есть true будет false, если false будет true
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  //Если переменная изменится, то выполняется код
  // useEffect(()=>console.log('Принт'), [isAdded])
  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={187}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <circle cx="20" cy="20" r="20" />
          <rect x="0" y="95" rx="0" ry="0" width="150" height="15" />
          <rect x="0" y="114" rx="0" ry="0" width="100" height="15" />
          <rect x="0" y="142" rx="0" ry="0" width="80" height="25" />
          <rect x="117" y="130" rx="0" ry="0" width="32" height="32" />
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
              src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
              alt="Plus"
            />
          </div>
        </div>
      )}
      
    </div>
  );
};
