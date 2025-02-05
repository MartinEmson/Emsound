'use client';

import { useState, useEffect } from 'react';
import { fetchGraphQL } from './lib/graphql';
import HeroText from './components/HeroText';
import About from './components/About';
import ContactForm from './components/ContactForm';

export default function Home() {
  // const [homeData, setHomeData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   console.log('Home component mounted, fetching data...');
  //   fetchGraphQL(`
  //     query HomePageQuery {
  //       pages(where: {slug: "home"}) {
  //         nodes {
  //           id
  //           title
  //           content
  //         }
  //       }
  //       posts(first: 5) {
  //         nodes {
  //           id
  //           title
  //           excerpt
  //         }
  //       }
  //     }
  //   `)
  //     .then(({ data }) => {
  //       console.log('Data fetched successfully:', data);
  //       setHomeData(data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error('Error in Home component:', err);
  //       setError('Failed to load data. Please try again later.');
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (isLoading) {
  //   console.log('Rendering loading state...');
  //   return <div className="h-screen flex justify-center items-center">Loading...</div>;
  // }
  
  // if (error) {
  //   console.log('Rendering error state:', error);
  //   return <div className="h-screen flex justify-center items-center text-red-500">{error}</div>;
  // }

  // console.log('Rendering main content...');
  // const homePage = homeData.pages.nodes[0];
  // const recentPosts = homeData.posts.nodes;

  return (
    <section className="flex flex-col min-h-screen">
    <HeroText/>
    <About/>
    <ContactForm />
    </section>
  );
}

