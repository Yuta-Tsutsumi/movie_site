import React from "react";
import Header from "../components/header/Header";
import styles from "./TopPage.module.scss";

const TopPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <header>
        <Header />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default TopPage;
