import React from "react";

import styles from "./AnotherInfor.module.css";
const AnotherInfor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.service}>
        <div>
          <h5>FREE SHIPPING</h5>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <h5>24 X 7 SERVICE</h5>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <h5>FESTIVAL OFFER</h5>
          <p>Free shipping worldwide</p>
        </div>
      </div>
      <div className={styles.slogan}>
        <div className={styles.sloganItem}>
          <h4>LET'S BE FRIENDS!</h4>
          <p>Nisi nisi tempor consequat laboris nisi</p>
        </div>
        <div className={styles.register}>
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};
export default AnotherInfor;
