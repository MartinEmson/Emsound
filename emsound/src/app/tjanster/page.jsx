'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import stock1 from '../assets/stock1.jpg'
import stock2 from '../assets/stock2.jpg'
import stock3 from '../assets/stock3.jpg'
import stock4 from '../assets/stock4.jpg'


// Import CSS files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  { id: 'ljud', title: 'Ljud', image: stock1 },
  { id: 'ljus', title: 'Ljus', image: stock2 },
  { id: 'streaming', title: 'Streaming', image: stock4 },
  { id: 'konferens', title: 'Konferens', image: stock3 },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-label="Next slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-label="Previous slide"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

export default function ServicesPage() {
  useEffect(() => {
    // This is to fix a bug with react-slick in Next.js
    window.dispatchEvent(new Event('resize'));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-5/6 h-full mx-auto py-36">
      <h1 className="text-4xl font-bold mb-12 text-center">Våra Tjänster</h1>
      <div className="relative px-8">
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="p-4">
              <Link href={`/tjanster/${service.id}`} className="group block">
                <div className="bg-transparent border-2 border-black overflow-hidden aspect-square flex flex-col">
                  <div className="relative flex-grow">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className='flex justify-center items-center p-6'
                    />
                  </div>
                  <div className="pb-6">
                    <h2 className="text-xl font-semibold text-center group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
