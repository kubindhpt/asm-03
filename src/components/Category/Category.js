import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Category.module.css";

const Category = () => {
  const navigate = useNavigate();

  // Di chuyển đến trang /shop
  const gotoShop = () => {
    navigate("/shop");
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>CAREFULLY CREATED COLLECTIONS</p>
        <h5>BROWSE OUR CATEGORIES</h5>
      </div>
      <div className={classes.category1}>
        <img
          src="../../assets/Images/product_1.png"
          alt=""
          onClick={gotoShop}
        />
        <img
          src="../../assets/Images/product_2.png"
          alt=""
          onClick={gotoShop}
        />
      </div>
      <div className={classes.category2}>
        <img
          src="../../assets/Images/product_3.png"
          alt=""
          onClick={gotoShop}
        />
        <img
          src="../../assets/Images/product_4.png"
          alt=""
          onClick={gotoShop}
        />
        <img
          src="../../../public/Images/product_5.png"
          alt=""
          onClick={gotoShop}
        />
      </div>
    </div>
  );
};

export default Category;
