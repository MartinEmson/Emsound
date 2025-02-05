'use client';

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { useState } from 'react';

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: typeof window === "undefined"
      ? ApolloLink.from([
          new ApolloLink((operation, forward) => {
            operation.setContext({
              headers: {
                'Apollo-Require-Preflight': 'true',
              },
            });
            return forward(operation);
          }),
          httpLink,
        ])
      : httpLink,
  });
}

export function ApolloWrapper({ children }) {
  const [client] = useState(makeClient);

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

