"use client"

import React from 'react';
import { useQuery, gql } from "@apollo/client";
import Card from '../components/Card'; // Ensure you have the Card component imported

// Define the GraphQL query to fetch products
const PRODUCTS_QUERY = gql`
  query NewQuery {
    products {
      nodes {
        productFields {
          summary
          image {
            node {
              sourceUrl
            }
          }
        }
        title
        slug
      }
    }
  }
`;

export default function Products() {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  if (loading) return <p className='flex justify-center items-center'>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <main className="flex min-h-screen flex-col">
      <section className='px-24 py-12 flex justify-center'>
        <div className='flex justify-center h-full w-full'>
          <div className='h-full'>
            <h1 className="text-2xl font-bold mb-4">Hyra</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
              {data.products.nodes.map(product => (
                <Card
                  key={product.id}
                  title={product.title}
                  thumbnail={product.productFields.image.node.sourceUrl}
                  subtitle={product.productFields.summary}
                  href={`/products/${product.slug}`}
                />
              ))}
            </div>
        </div>
        </div>
      </section>
    </main>
  );
}