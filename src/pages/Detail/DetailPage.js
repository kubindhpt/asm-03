import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { cartActions } from "../../core/store/cart";
import { useDispatch, useSelector } from "react-redux";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./DetailPage.module.css";
//import classNames from "classnames/bind";

import { NavLink } from "react-router-dom";

//const cx = classNames.bind(styles);
const DetailPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);
  const [isShowDesc, setIsShowDesc] = useState(false);

  // Lấy dữ liệu số lượng item add vào cart
  const quanlityRef = useRef();

  // Lấy dữ liệu từ server
  const [product, setProduct] = useState(null);
  const [relateProduct, setRelateProduct] = useState([]);
  //Lấy id sản phẩm
  const params = useParams(); //a ktr xem nó có cập nhật váo state k a?
  const { productId } = params;

  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((response) => response.json())
      .then((data) => {
        const productFound = data.find(
          (product) => product._id.$oid === productId
        );
        setProduct(productFound);

        // Tìm sản phẩm có cùng category
        const relateProductFound = data.filter(
          (item) =>
            item.category === productFound.category &&
            item._id.$oid !== productId
        );
        setRelateProduct(relateProductFound);
      });
  }, [productId]);

  const addItemToCartHandler = (event) => {
    event.preventDefault();
    // Yêu cầu đăng nhập mới thêm vào giỏ hàng
    if (isLogin === false) {
      alert("Please login for adding product to Cart!");
      return;
    }

    const productAmount = quanlityRef.current.value;

    // Thêm vào giỏ hàng
    dispatch(
      cartActions.addCart({ item: product, amount: Number(productAmount) })
    );

    // Cập nhật dữ liệu
    dispatch(cartActions.updateCart());

    //Thông báo đã bỏ sản phẩm vào giỏ hàng thành công
    alert("The product is added to your cart");
  };

  // Ẩn hiện decription
  const toggleDescription = () => {
    setIsShowDesc(!isShowDesc);
  };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div>
      <div className={styles.banner}>
        <h1>DETAIL</h1>
        <div>
          <span className={styles.detail}>DETAIL</span>
        </div>
      </div>
      {product && (
        <div className={styles.container}>
          <div className={styles.slider}>
            {/* <img src={product.img1} alt="" /> */}
            <div className={styles.left}>
              <Slider asNavFor={nav2} ref={(c) => setNav1(c)} arrows={false}>
                <div>
                  <img src={product.img1} alt="" />
                </div>
                <div>
                  <img src={product.img2} alt="" />
                </div>
                <div>
                  <img src={product.img3} alt="" />
                </div>
                <div>
                  <img src={product.img4} alt="" />
                </div>
              </Slider>
            </div>

            <div className={styles.right}>
              <Slider
                asNavFor={nav1}
                ref={(c) => setNav2(c)}
                slidesToShow={4}
                swipeToSlide={true}
                focusOnSelect={true}
                arrows={false}
                vertical={true}
              >
                <div>
                  <img src={product.img1} alt="" />
                </div>
                <div>
                  <img src={product.img2} alt="" />
                </div>
                <div>
                  <img src={product.img3} alt="" />
                </div>
                <div>
                  <img src={product.img4} alt="" />
                </div>
              </Slider>
            </div>
          </div>
          <div className={styles.decs}>
            <div className={styles.desc_p}>
              <h2>{product.name}</h2>
              <p style={{ color: "red" }}>{`${product.price.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ","
              )} VND`}</p>
              <p>{product.short_desc}</p>
              <div>
                <p
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    paddingTop: "20px",
                    display: "inline-block",
                    paddingBottom: "20px",
                  }}
                >
                  CATEGORY:
                </p>
                <p style={{ display: "inline-block", paddingLeft: "20px" }}>
                  {product.category}
                </p>
              </div>
              <div className={styles.inputForm}>
                <form onSubmit={addItemToCartHandler}>
                  <input
                    type="number"
                    placeholder="QUANTITY"
                    step="1"
                    min="1"
                    ref={quanlityRef}
                    required
                  />
                  <button className={styles.addBtn}>Add to Cart</button>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <button onClick={toggleDescription}>DESCRIPTION</button>
            {isShowDesc && (
              <span>
                <h3>PRODUCT DESCRIPTION</h3>
                <p>{product.long_desc}</p>
              </span>
            )}
          </div>
          <div>
            <h3>RELATE PRODUCTS</h3>
            {relateProduct && (
              <div className={styles.productsList}>
                {relateProduct.map((item) => (
                  <div
                    className={styles.productItem}
                    id={item._id.$oid}
                    key={item._id.$oid}
                  >
                    <NavLink to={`/detail/${item._id.$oid}`}>
                      <img src={item.img1} alt="" id={item._id.$oid} />
                      <h5>{item.name}</h5>
                      <p>{`${item.price.replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ","
                      )} VND`}</p>
                    </NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default DetailPage;
