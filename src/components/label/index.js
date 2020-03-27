import React from 'react';

import styles from './Label.module.scss';

const Label = ({ color = 'cdcdcd', children, ...props }) => {
  return (
    <span
      className={styles.label}
      style={{ backgroundColor: `#${color}` }}
      {...props}
    >
      {children}
    </span>
  );
};

export default Label;
