import React, { useState, useEffect } from "react";
import MovieList from "../components/movieList/MovieList";
import { MovieListType } from "../../views/types/movieTypes";
import axios from "axios";
import Header from "../components/header/Header";
import styles from "./TopPage.module.scss";

const TopPage: React.FC = () => {
  const [movieList, setMovieList] = useState<MovieListType>([
    { id: 0, poster_path: "", title: "", overview: "" },
  ]);

  // APIキーを「ApiKey」に格納
  const ApiKey = process.env.REACT_APP_MOVIE_APIKEY;
  //非同期通信を行う際は「async」が必要になる
  useEffect(() => {
    const fetchTrendMovies = async () => {
      //tryでApiが正常に動作したときの処理を書く
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day",
          {
            params: {
              api_key: ApiKey,
            },
          }
        );
        //moviesに映画情報の一覧（配列）を格納している
        const movies = response.data.results;
        // ↑で定義したmoviseを使用し映画の情報の一覧を配列で取得する。
        setMovieList(movies);
        // console.log(movies);
      } catch {}
    };

    fetchTrendMovies();
    // 第2引数で発火のタイミングを設定
  }, [ApiKey]);

  return (
    <div className={styles.root}>
      <header>
        <Header />
      </header>
      <main>
        <MovieList movieList={movieList} />
      </main>
      <footer></footer>
    </div>
  );
};

export default TopPage;
