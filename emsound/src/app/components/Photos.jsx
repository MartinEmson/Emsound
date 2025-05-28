import React from 'react'
import Image from 'next/image'
import { formulaCR } from '../fonts.js'
import EmblaCarousel from './EmblaCarousel'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'


const OPTIONS = { loop: true }

const SLIDES = [img1, img2, img3, img4, img5]

const Photos = () => {
  return (
    <section id="galleri" className=' w-full px-6 py-6 md:px-12 md:py-12'>
      <div className="min-h-screen flex flex-col">
        <div className="w-full flex flex-col">
          <h1 className="font-formula text-[6rem] text-[#212121]">Galleri</h1>
        </div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  )
}

export default Photos
