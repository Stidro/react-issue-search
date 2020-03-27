import React from 'react';
import cn from 'classnames';

import styles from './Input.module.scss';

const Input = ({ className, ...props }) => {
  const computedClassNames = cn(styles.input, className);
  return <input className={computedClassNames} {...props} />;
};

export default Input;
