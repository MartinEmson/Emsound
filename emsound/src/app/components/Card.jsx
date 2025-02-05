import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ title, thumbnail, subtitle, href }) => {
  console.log({ title, thumbnail, subtitle, href }); // Log the props to verify the data

  return (
    <div className='card flex h-[40vh] w-[40vh] bg-white'>
      <div className='w-full h-full'>
        <Link href={href}>
          <Image 
            alt={title} 
            className='flex w-full h-full justify-center items-center object-cover' 
            src={thumbnail} 
            width={400} 
            height={400} 
          />
        </Link>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col py-2'>
            <div className='text-lg'>{title}</div>
            <div className='mb-4'>{subtitle}</div>
          </div>
          <a href={href} className='py-2 text-blue-500'>Read more</a>
        </div>
      </div>
    </div>
  );
};

export default Card;