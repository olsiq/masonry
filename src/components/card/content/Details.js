import React, { Fragment } from "react";
import styles from "../card.module.css";

export const Details = ({ author, title }) => {
  return (
    <div className={styles["description"]}>
      <div className={styles["authorWrapper"]}>{author}</div>
      <h6 className={styles.title}>{title}</h6>
    </div>
  );
};
