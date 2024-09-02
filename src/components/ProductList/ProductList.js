import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./ProductList.module.css";

const ProductList = (props) => {
  const navigate = useNavigate();
  //chuyển đến trang Detail
  const gotoDetail = (event) => {
    navigate(`/detail/${event.target.id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.productsList}>
        {props.dataByCategory.map((item) => (
          <div
            className={styles.productItem}
            id={item._id.$oid}
            key={item._id.$oid}
          >
            <img
              src={item.img1}
              alt=""
              onClick={gotoDetail}
              id={item._id.$oid}
            />
            <h5>{item.name}</h5>
            <p>{`${item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
