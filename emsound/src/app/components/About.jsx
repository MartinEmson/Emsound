import Image from 'next/image';

export default function About() {
  return (
    <section className="py-12">
      <div className="h-screen flex flex-col justify-center items-center px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Emsound mm AB is a leading sound and lighting company based in Sweden, dedicated to delivering exceptional audio-visual experiences for events of all sizes.
            </p>
            <p className="text-lg mb-6">
              With over 20 years of industry experience, our team of skilled professionals is passionate about creating immersive environments through cutting-edge technology and creative solutions.
            </p>
            <p className="text-lg">
              From intimate gatherings to large-scale productions, we pride ourselves on our attention to detail, technical expertise, and commitment to exceeding client expectations.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="/placeholder.svg"
              alt="Emsound mm AB team"
              fill
              style={{ objectFit: 'cover' }}
              className="aspect-square flex justify-center items-center rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

