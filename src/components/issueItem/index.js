import React, { useMemo } from 'react';

import Label from '../label';

import styles from './IssueItem.module.scss';

const IssueItem = ({ title, labels = [], url, ...props }) => {
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
    <div className={styles['issue-item']} {...props}>
      <a href={url} className={styles['issue-title']}>
        {title}
      </a>
      {labelItems}
    </div>
  );
};

export default IssueItem;
