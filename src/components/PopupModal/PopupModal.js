import React from "react";
import Modal from "../UI/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import styles from "./PopupModal.module.css";

const PopupModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <button onClick={props.onClose} className={styles.closeBtn}>
        X
      </button>
      <div className={styles.popup}>
        <div>
          <img src={props.img} alt="" />
        </div>
        <div className={styles.desc}>
          <h3>{props.name}</h3>
          <p>{`${props.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`}</p>
          <p>{props.desc}</p>
          <button className={styles.viewDetailBtn}>
            <FontAwesomeIcon icon={faCartFlatbed} />
            <span>View Detail</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PopupModal;
