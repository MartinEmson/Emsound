import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL,
    }),
  });
});

