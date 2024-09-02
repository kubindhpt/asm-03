import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./LayOut.module.css";
import Chat from "../../Chat/Chat";

const LayOut = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Chat />
      <Footer />
    </div>
  );
};

export default LayOut;
