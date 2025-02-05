import React from 'react';
import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

// Define the GraphQL query to fetch product by slug
const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: String!) {
    productBy(slug: $slug) {
      title
      productFields {
        summary
        description
        image {
          node {
            sourceUrl
          }
        }
        thumbnail {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { loading, error, data } = useQuery(GET_PRODUCT_BY_SLUG, {
    variables: { slug },
    skip: !slug, // Skip the query until the slug is available
  });

  if (loading) return <p className='flex justify-center items-center'>Loading...</p>;
  if (error) return <p>Error loading product: {error.message}</p>;

  const product = data?.productBy;

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <section className='p-24 flex justify-center'>
        <div className='flex justify-center h-full w-5/6 bg-slate-50'>
          <div className='h-full w-5/6 py-6'>
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <Image
              src={product.productFields.image.node.sourceUrl}
              alt={product.title}
              width={600}
              height={400}
              className="mb-4"
            />
            <p className="mb-4">{product.productFields.summary}</p>
            <div dangerouslySetInnerHTML={{ __html: product.productFields.description }} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;