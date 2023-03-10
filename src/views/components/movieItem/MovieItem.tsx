import React, { useState } from "react";
import { MovieItemType } from "../../types/movieTypes";
import styles from "./MovieItem.module.scss";

type Props = {
  /* オブジェクト型
     映画情報の型の定義（id、映画のポスター画像、映画タイトル、映画の概要説明）*/
  item: MovieItemType;
};

const MovieItem: React.FC<Props> = ({ item }) => {
  const [onMouse, setOnMouse] = useState(false);
  const onMouseOverEvent = () => {
    setOnMouse(true);
  };
  const onMouseLeaveEvent = () => {
    setOnMouse(false);
  };
  return (
    <div className={styles.root}>
      <div className={styles.posterBox}>
        <img
          className={styles.posterImage}
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
          alt="movie poster"
          onMouseOver={onMouseOverEvent}
          onMouseLeave={onMouseLeaveEvent}
        />
        {onMouse && (
          <div className={styles.movieInfo}>
            <div className={styles.movieTitle}>{item.title}</div>
            <div className={styles.overview}>{item.overview}</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MovieItem;
