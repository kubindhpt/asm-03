import React, { useState, useEffect } from "react";

import styles from "./ShopPage.module.css";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import ProductList from "../../components/ProductList/ProductList";

const ShopPage = () => {
  // Lấy dữ liệu từ server
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);

        // Mặc định ban đầu vào trang shop có category = all
        setProducts(data);
      });
  }, []);

  // Lấy dữ liệu categories
  const getCategoryHandler = (category) => {
    //Trường hợp chọn all thì sẽ hiển thị đầy đủ product
    if (category === "all") {
      setProducts(data);
    } else {
      // Lọc product dựa trên category
      const productByCategory = data.filter(
        (item) => item.category === category
      );
      setProducts(productByCategory);
    }
  };

  return (
    <div>
      <div className={styles.banner}>
        <h1>SHOP</h1>
        <div>
          <span className={styles.shop}>SHOP</span>
        </div>
      </div>
      <div className={styles.container}>
        <CategoriesList onCategory={getCategoryHandler} />
        <div className={styles.productRender}>
          <div className={styles.searchForm}>
            <input type="text" placeholder="Enter Search Here!" />
            <select>
              <option>Default sorting</option>
            </select>
          </div>
          <ProductList dataByCategory={products} />
          <div className={styles.changePage}>
            <div className={styles.Btn}>
              <button href="#">{`<<`}</button>
              <span>1</span>
              <button href="#">{`>>`}</button>
            </div>
            <p>Showing 1-9 of 9 results</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopPage;
