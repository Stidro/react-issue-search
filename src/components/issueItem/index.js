import React, { useMemo } from 'react';
import cn from 'classnames';

import Label from '../label';

import styles from './IssueItem.module.scss';

const IssueItem = ({ title, labels = [], url, selected, ...props }) => {
  const computedClassNames = cn(styles['issue-item'], {
    [styles['issue-selected']]: selected
  });

  const labelItems = useMemo(
    () =>
      labels.map(({ id, name, color }) => (
        <Label key={id} color={color}>
          {name}
        </Label>
      )),
    [labels]
  );

  return (
    <div className={computedClassNames} {...props}>
      <a href={url} className={styles['issue-title']}>
        {title}
      </a>
      {labelItems}
    </div>
  );
};

export default IssueItem;
