import React, { useState, useEffect, useMemo } from 'react';

import { Input } from 'components';
import { useDebouncedState } from 'hooks';
import { getIssues } from 'services';

import styles from './IssueSearchPage.module.scss';

export default () => {
  const [query, setQuery] = useDebouncedState('', 200);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    console.log('searching', query);
    const searchIssues = async () => {
      const results = await getIssues(query);
      setIssues(results);
    };
    query ? searchIssues() : setIssues([]);
  }, [query]);

  const handleSearch = e => {
    setQuery(e.target.value);
  };

  const items = useMemo(
    () =>
      issues.map(issue => (
        <div>
          <h3>{issue.title}</h3>
        </div>
      )),
    [issues]
  );

  return (
    <div>
      <h1 className={styles.title}>React Issue Search</h1>
      <div className={styles['input-container']}>
        <Input placeholder="Type to Search" onChange={handleSearch} />
      </div>
      {query && !items.length && <span>No Results</span>}
      <div>{items}</div>
    </div>
  );
};
