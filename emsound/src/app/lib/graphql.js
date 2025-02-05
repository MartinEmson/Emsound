const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL || 'https://test-martinemson.local/graphql';

export function fetchGraphQL(query, variables = {}) {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  }).then(res => {
    if (!res.ok) {
      return res.text().then(text => {
        console.error('GraphQL Error:', text);
        throw new Error('Failed to fetch data');
      });
    }
    return res.json();
  });
}

