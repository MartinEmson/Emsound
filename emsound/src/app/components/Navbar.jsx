"use client"

import React from 'react';
import Link from 'next/link';
import Icon from '../assets/icon.jsx';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='z-10 fixed top-0 left-0 w-full border border-b-black border-opacity-15 bg-inherit'>
    <div className='flex w-full justify-between px-12 py-4'>
    <div className='flex w-auto'>
    <Link href='/' className='flex flex-row items-center'>
    <div className='scale-on-hover'>
    <Icon alt='Logo' className=""/>
    </div>
        <h1 className='text-3xl ml-4'>
        Emsound mm AB
        </h1>
        </Link>
    </div>
    <div className='flex text-regular items-center p-6'>
      <Link href="/om" className="cursor-pointer ml-6">Om</Link>
      <Link href="/tjanster" className="cursor-pointer ml-6">Tjänster</Link>

      <Link href="/kontakt" className="cursor-pointer ml-6">Kontakt</Link>
      {/* <Link href="/products" className="cursor-pointer ml-6 scale-on-hover-2">Produkter</Link> */}

      </div>
      </div>
    </nav>
  );
};

export default Navbar;