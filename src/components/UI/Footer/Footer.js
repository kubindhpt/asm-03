import React from "react";

import FooterItem from "./FooterItem";
import styles from "./Footer.module.css";
const Footer = () => {
  const footer = [
    {
      id: 1,
      col_name: "CUSTOMER SERVICES",
      col_values: [
        "Help & Contact us",
        "Return & Refunds",
        "Online Stores",
        "Term & Conditions",
      ],
    },
    {
      id: 2,
      col_name: "COMPANY",
      col_values: ["What We Do", "Available Services", "Lastest Posts", "FAQs"],
    },
    {
      id: 3,
      col_name: "SOCIAL MEDIA",
      col_values: ["Twitter", "Instagram", "Facebook", "Pinterest"],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        {footer.map((item) => (
          <FooterItem
            id={item.id}
            key={item.id}
            name={item.col_name}
            linkname={item.col_values}
          />
        ))}
      </div>
    </div>
  );
};
export default Footer;
