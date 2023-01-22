// MovieItemType にオブジェクトとして型を定義している
export type MovieItemType = {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
};
// ↑で定義したオブジェクトの MovieItemType を配列にし、それを変数の MovieListType としている
export type MovieListType = MovieItemType[];
