import React from 'react'
import Link from 'next/link'
import Icon from '../assets/icon.svg'

const HeroText = () => {
  return (
    <section className='flex min-h-screen w-full justify-center items-center'>
    <Link href='/' className='flex flex-row items-center justify-center p-6'>
    {/* <Icon alt='Logo' width={100} height={100} className="" style={{ transform: 'scale(0.5)', transformOrigin: 'center' }}  /> */}
        <h1 className='text-4xl -ml-2 pr-6'>
        Ljud och Ljustekniker med 25 års erfarenhet
        </h1>
        </Link>
    </section>
  )
}

export default HeroText