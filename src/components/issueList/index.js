import React, { useMemo } from 'react';

import IssueItem from '../issueItem';

import styles from './IssueList.module.scss';

const IssueList = ({ items, ...props }) => {
  const issueItems = useMemo(
    () =>
      items.map(({ id, title, labels, url }) => (
        <IssueItem key={id} title={title} labels={labels} url={url} />
      )),
    [items]
  );

  return <div className={styles['issue-list']}>{issueItems}</div>;
};

export default IssueList;
