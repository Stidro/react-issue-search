import React, { useState, useEffect } from 'react';

import { Input, IssueList } from 'components';
import { useDebouncedState } from 'hooks';
import { getIssues } from 'services';

import styles from './IssueSearchPage.module.scss';

export default () => {
  const [query, setQuery] = useDebouncedState('', 200);
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchIssues = async () => {
      setIsLoading(true);

      const results = await getIssues(query);

      setIsLoading(false);
      setIssues(results);
    };
    query ? searchIssues() : setIssues([]);
  }, [query]);

  const handleSearch = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1 className={styles.title}>React Issue Search</h1>
      <div className={styles['input-container']}>
        <Input placeholder="Type to Search" onChange={handleSearch} />
      </div>
      {query && !isLoading && !issues.length && <span>No Results</span>}
      <IssueList items={issues} />
    </div>
  );
};
