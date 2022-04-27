import React from 'react';

import styles from './Counter.module.css';

export function Button({ action, text }) {
  return (
    <div>
      <button className={styles.asyncButton} onClick={action}>
        {text}
      </button>
    </div>
  );
}
