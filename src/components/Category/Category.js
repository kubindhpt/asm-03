import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Category.module.css";

const Category = () => {
  const navigate = useNavigate();

  // Di chuyển đến trang /shop
  const gotoShop = () => {
    navigate("/shop");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>CAREFULLY CREATED COLLECTIONS</p>
        <h5>BROWSE OUR CATEGORIES</h5>
      </div>
      <div className={styles.category1}>
        <img src="./Images/product_1.png" alt="" onClick={gotoShop} />
        <img src="./Images/product_2.png" alt="" onClick={gotoShop} />
      </div>
      <div className={styles.category2}>
        <img src="./Images/product_3.png" alt="" onClick={gotoShop} />
        <img src="./Images/product_4.png" alt="" onClick={gotoShop} />
        <img src="./Images/product_5.png" alt="" onClick={gotoShop} />
      </div>
    </div>
  );
};

export default Category;
