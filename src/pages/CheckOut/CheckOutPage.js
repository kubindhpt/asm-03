import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./CheckOutPage.module.css";
const CheckOutPage = () => {
  const listCart = useSelector((state) => state.cart.listCart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Fragment>
      <div className={styles.banner}>
        <h1>CHECKOUT</h1>
        <div>
          <span>HOME / CART / </span>
          <span className={styles.checkout}>CHECKOUT</span>
        </div>
      </div>
      <h3>BILLING DETAILS</h3>
      <div className={styles.container}>
        <form className={styles.formcontrol}>
          <label>FULL NAME:</label>
          <input type="text" placeholder="Enter Your Full Name Here!" />
          <label>EMAIL:</label>
          <input type="email" placeholder="Enter Your Email Here!" />
          <label>PHONE NUMBER:</label>
          <input type="text" placeholder="Enter Your Phone Number Here!" />
          <label>ADDRESS:</label>
          <input type="text" placeholder="Enter Your Address Here!" />
          <button>Place order</button>
        </form>
        <div className={styles.order}>
          <h3>YOUR ORDER</h3>
          {listCart.map((item) => (
            <div className={styles.item}>
              <span>{item.name}</span>
              <span className={styles.price}>{`${item.price.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ","
              )} VND  x  ${item.amount}`}</span>
            </div>
          ))}
          <div className={styles.total}>
            <span>TOTAL</span>
            <span>{`${String(totalAmount).replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )} VND`}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CheckOutPage;
