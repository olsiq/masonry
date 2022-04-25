import React from "react";
import styles from "./ui.module.css";
export const Layout = ({ children }) => {
  return <div className={styles["grid-layout"]}>{children}</div>;
};
