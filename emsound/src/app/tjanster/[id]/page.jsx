'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = {
  ljud: {
    title: 'Ljud',
    description: 'Vi erbjuder professionella ljudlösningar för alla typer av evenemang. Från små intima sammankomster till stora konserter, vår expertis säkerställer kristallklart ljud som förhöjer upplevelsen.',
    image: '/placeholder.svg'
  },
  ljus: {
    title: 'Ljus',
    description: 'Våra kreativa ljusdesigner skapar stämningsfulla miljöer som förstärker ditt events atmosfär. Med modern teknik och artistisk vision transformerar vi vilket utrymme som helst.',
    image: '/placeholder.svg'
  },
  streaming: {
    title: 'Streaming',
    description: 'I dagens digitala värld erbjuder vi högkvalitativa streamingtjänster för att nå din publik var de än befinner sig. Från företagsevent till live-konserter, vi säkerställer en sömlös upplevelse.',
    image: '/placeholder.svg'
  },
  konferens: {
    title: 'Konferens',
    description: 'Vi levererar kompletta tekniska lösningar för konferenser av alla storlekar. Från presentationsutrustning till interaktiva element, vi ser till att ditt budskap når fram klart och tydligt.',
    image: '/placeholder.svg'
  },
};


const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const serviceIds = Object.keys(services);

export default function ServicePage({ params }) {
  const router = useRouter();
  const id = use(params).id;
  const [currentIndex, setCurrentIndex] = useState(serviceIds.indexOf(id));

  const service = services[id];

  if (!service) {
    return <div>Tjänsten hittades inte</div>;
  }

  const goToNextService = () => {
    const nextIndex = (currentIndex + 1) % serviceIds.length;
    router.push(`/tjanster/${serviceIds[nextIndex]}`);
    setCurrentIndex(nextIndex);
  };

  const goToPreviousService = () => {
    const previousIndex = (currentIndex - 1 + serviceIds.length) % serviceIds.length;
    router.push(`/tjanster/${serviceIds[previousIndex]}`);
    setCurrentIndex(previousIndex);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-36">
      <h1 className="text-4xl font-bold mb-8 text-start">{service.title}</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96">
          <Image
            src={service.image}
            alt={service.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg shadow-lg flex justify-center items-center"
          />
        </div>
        <div>
          <p className="text-lg mb-6">{service.description}</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Professionell utrustning</li>
            <li>Erfaren personal</li>
            <li>Skräddarsydda lösningar</li>
            <li>Support före, under och efter eventet</li>
          </ul>
        
        </div>
      </div>
      <div className="flex justify-between items-center space-x-12 mt-12">
        <button 
          onClick={goToPreviousService}
          className="text-blue-500 hover:text-blue-600 transition-colors focus:outline-none"
          aria-label="Föregående tjänst"
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={goToNextService}
          className="text-blue-500 hover:text-blue-600 transition-colors focus:outline-none"
          aria-label="Nästa tjänst"
        >
          <ChevronRight />
        </button>
      </div>
      {/* <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Alla Tjänster</h2>
        <div className="flex space-x-4">
          {serviceIds.map((serviceId) => (
            <Link 
              key={serviceId} 
              href={`/tjanster/${serviceId}`}
              className={`px-4 py-2 rounded ${
                serviceId === id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {services[serviceId].title}
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
}

