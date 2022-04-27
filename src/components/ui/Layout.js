import React from 'react';
import styles from './ui.module.css';
export const Layout = ({ children, layout }) => {
  return <div className={styles[layout]}>{children}</div>;
};
