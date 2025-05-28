import React, { useEffect, useState, useRef, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const EmblaCarousel = ({ slides, options = {} }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {slides.map((src, index) => (
          <div
            className="embla__slide relative flex-shrink-0 md:w-4/6 w-full h-[500px]"
            key={index}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0} // prioritize first slide loading
            />
          </div>
        ))}
      </div>

      {/* Optional dots navigation */}
      <div className="embla__dots flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`embla__dot w-3 h-3 rounded-full ${
              index === selectedIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default EmblaCarousel
