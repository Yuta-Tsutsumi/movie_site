/* MovieItemType にオブジェクトとして型を定義している。
   映画情報の型の定義
   （id（数値型）、
     poster_path:映画のポスター画像（文字列）;
     title:映画タイトル（文字列）;
     overview:映画の概要説明（文字列））*/
export type MovieItemType = {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
};
// ↑で定義したオブジェクトの MovieItemType を配列に変換し、それを変数の MovieListType としている
export type MovieListType = MovieItemType[];
