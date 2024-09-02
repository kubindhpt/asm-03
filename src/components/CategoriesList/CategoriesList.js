import React from "react";

import styles from "./CategoriesList.module.css";

const CategoriesList = (props) => {
  // Lấy dữ liệu category
  const categoryChooseHandler = (event) => {
    props.onCategory(event.target.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <h2>CATEGORIES</h2>
        <div className={styles.categoryTitle}>
          <h3>APPLE</h3>
          <p onClick={categoryChooseHandler} id="all">
            All
          </p>
        </div>
        <div className={styles.categoryItem}>
          <h3>IPHONE & MAC</h3>
          <p onClick={categoryChooseHandler} id="iphone">
            Iphone
          </p>
          <p onClick={categoryChooseHandler} id="ipad">
            Ipad
          </p>
          <p onClick={categoryChooseHandler} id="macbook">
            Macbook
          </p>
        </div>
        <div className={styles.categoryItem}>
          <h3>WIRELESS</h3>
          <p onClick={categoryChooseHandler} id="airpod">
            Airpod
          </p>
          <p onClick={categoryChooseHandler} id="watch">
            Watch
          </p>
        </div>
        <div className={styles.categoryItem}>
          <h3>OTHER</h3>
          <p onClick={categoryChooseHandler} id="mouse">
            Mouse
          </p>
          <p onClick={categoryChooseHandler} id="keyboard">
            Keyboard
          </p>
          <p onClick={categoryChooseHandler} id="other">
            Other
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
