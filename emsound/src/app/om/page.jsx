import About from '../components/About';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <About />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg mb-8">
            At Emsound mm AB, our mission is to transform events through the power of sound and light. We strive to create unforgettable experiences that engage, inspire, and leave a lasting impression on audiences.
          </p>
          
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Anna Svensson', role: 'Sound Engineer', image: '/placeholder.svg' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative h-64 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg bg-slate-50"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <ul className="list-disc list-inside text-lg space-y-4">
            <li>Professional sound system design and installation</li>
            <li>Creative lighting solutions for events and venues</li>
            <li>Audio-visual equipment rental for all types of events</li>
            <li>Technical support and on-site management</li>
            <li>Custom sound and lighting design for unique spaces</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

