import React from "react";
import styles from "./ui.module.css";

export const CardLayout = ({ size, children }) => {
  return <div className={`${styles[size]} ${styles.card}`}>{children}</div>;
};
