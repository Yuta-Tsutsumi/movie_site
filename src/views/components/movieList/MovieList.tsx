import React from "react";
import { MovieListType } from "../../types/movieTypes";
import MovieItem from "../movieItem/MovieItem";
import styles from "./MovieList.module.scss";

/* {}内にある movieList にmovieTypes.tsファイルで
   定義した型（MovieListType（配列））を適用している。
   また、TopPage.tsxで使用する、
   MovieListコンポーネントにわたすべきPropsの型も定義している */
type Props = { movieList: MovieListType };

// ↑で定義した型（porps）を下記のコードの引数に渡している
const MovieList: React.FC<Props> = (props) => {
  /* 10行目で定義した、型付きの配列（movieList）を
     map関数で展開するため1つ1つのMolvieItemに渡していく */
  const movieList = props.movieList;

  // console.log(movieList);

  // movieList配列（20個のデータ）の情報を1つ1つ展開している
  return (
    <div className={styles.root}>
      <div className={styles.movieTitle}>
        Powered by{" "}
        <a className={styles.linkTitle} href="https://www.themoviedb.org/">
          The Movie Database
        </a>
      </div>
      <div className={styles.movieList}>
        {movieList.map((movie) => {
          return <MovieItem item={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
