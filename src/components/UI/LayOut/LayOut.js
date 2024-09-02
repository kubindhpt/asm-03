import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./LayOut.module.css";

const LayOut = (props) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default LayOut;
