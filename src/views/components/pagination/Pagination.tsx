import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { MovieItemType } from "../../types/movieTypes";

type Props = {
  // 映画情報の型の定義（id、映画のポスター画像、映画タイトル、映画の概要説明）
  item: MovieItemType;
};

const Pagination: React.FC<Props> = (data) => {
  // 今、何ページ目であるかを管理するstate
  const [currentPage, setCurrentPage] = useState<number>(0);
  // 合計で何ページあるのかを管理するstate
  const [totalPage, setTotalPage] = useState<number>(0);
  // 表示するユーザーの名前を管理するstate

  // ページネーションの数字をクリックした時に発火する関数
  const handlePageChange = (data: {}) => {
    const response = axios.get(`https://image.tmdb.org/t/p/original/${data}`);
  };

  return (
    <div className={styles.root}>
      <ReactPaginate
        pageCount={totalPage}
        onPageChange={handlePageChange}
        containerClassName={styles.containerClass}
        pageClassName={styles.pageClass}
        pageLinkClassName={styles.pageLinkClass}
        activeClassName={styles.activeClass}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
      />
    </div>
  );
};

export default Pagination;
