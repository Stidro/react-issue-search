export const getIssues = async query => {
  const response = await fetch(
    `https://api.github.com/search/issues?q=repo:facebook/react+${query}`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      }
    }
  );

  const data = await response.json();
  return data.items;
};
