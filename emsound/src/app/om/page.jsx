import About from '../components/About';
import Image from 'next/image';
import headshot from '../assets/headshot.jpg'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <About />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8">Our Mission</h2>
          <p className="text-lg mb-8 w-2/6 mx-auto">
            At Emsound mm AB, our mission is to transform events through the power of sound and light. We strive to create unforgettable experiences that engage, inspire, and leave a lasting impression on audiences.
          </p>

          <h2 className="text-3xl text-center font-bold mb-8">Our Team</h2>

          {/* Grid container */}
          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {[
              { name: 'Mats Lindevall', role: 'Grundare', image: headshot },
            ].map((member) => (
              <div key={member.name} className="text-center justify-center">
                <div className="relative h-96 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    style={{
                      objectFit: 'cover',
                    }}
                    className="bg-slate-50"
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
