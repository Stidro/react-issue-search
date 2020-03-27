import React, { useMemo } from 'react';

import IssueItem from '../issueItem';

import styles from './IssueList.module.scss';

const IssueList = ({ items, selectedIndex, ...props }) => {
  const issueItems = useMemo(
    () =>
      items.map(({ id, title, labels, url }, idx) => (
        <IssueItem
          key={id}
          title={title}
          labels={labels}
          url={url}
          selected={selectedIndex === idx}
        />
      )),
    [items, selectedIndex]
  );

  return (
    <div className={styles['issue-list']} {...props}>
      {issueItems}
    </div>
  );
};

export default IssueList;
