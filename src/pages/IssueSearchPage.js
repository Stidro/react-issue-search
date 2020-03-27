import React, { useState, useEffect, useCallback } from 'react';

import { Input, IssueList } from 'components';
import { useDebouncedState } from 'hooks';
import { getIssues } from 'services';

import styles from './IssueSearchPage.module.scss';

export default () => {
  const [query, setQuery] = useDebouncedState('', 200);
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    const searchIssues = async () => {
      setIsLoading(true);

      const results = await getIssues(query);

      setIsLoading(false);
      setIssues(results);
    };

    setSelectedIndex(-1);
    query ? searchIssues() : setIssues([]);
  }, [query]);

  const handleSearch = e => {
    setQuery(e.target.value);
  };

  const handleKeyDown = useCallback(
    e => {
      switch (e.keyCode) {
        case 38: // Up
          return selectedIndex > -1 && setSelectedIndex(selectedIndex - 1);
        case 40: // Down
          return (
            selectedIndex < issues.length - 1 &&
            setSelectedIndex(selectedIndex + 1)
          );
        default:
          return;
      }
    },
    [selectedIndex, issues]
  );

  return (
    <div>
      <h1 className={styles.title}>React Issue Search</h1>
      <div className={styles['input-container']}>
        <Input
          placeholder="Type to Search"
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
      </div>
      {query && !isLoading && !issues.length && <span>No Results</span>}
      <IssueList items={issues} selectedIndex={selectedIndex} />
    </div>
  );
};
