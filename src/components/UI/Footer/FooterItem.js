import React from "react";

import styles from "./FooterItem.module.css";
import { NavLink } from "react-router-dom";

const FooterItem = (props) => {
  return (
    <div className={styles.footer_item}>
      <h3>{props.name}</h3>
      <ul>
        {props.linkname.map((item) => (
          <li id={item} key={item}>
            <NavLink href="#" id={item}>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
