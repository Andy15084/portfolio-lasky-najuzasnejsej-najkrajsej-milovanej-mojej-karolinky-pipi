import Navbar from '@/components/Navbar';
import GalleryCarousel from '@/components/GalleryCarousel';
import Image from 'next/image';

export default function MojePrace() {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse 800px 750px at 20% 5%, rgba(232, 181, 245, 0.7), transparent),
          radial-gradient(ellipse 850px 800px at 80% 10%, rgba(255, 181, 197, 0.65), transparent),
          radial-gradient(ellipse 750px 800px at 50% 30%, rgba(245, 213, 232, 0.6), transparent),
          radial-gradient(ellipse 900px 850px at 10% 50%, rgba(181, 232, 224, 0.68), transparent),
          radial-gradient(ellipse 800px 900px at 70% 55%, rgba(213, 232, 255, 0.62), transparent),
          radial-gradient(ellipse 850px 800px at 35% 75%, rgba(181, 245, 232, 0.66), transparent),
          radial-gradient(ellipse 880px 850px at 85% 85%, rgba(197, 213, 245, 0.64), transparent),
          radial-gradient(ellipse 820px 850px at 50% 95%, rgba(181, 232, 221, 0.63), transparent),
          #FFFFFF
        `,
        backgroundAttachment: 'fixed'
      }}
    >
      <Navbar />
      
      {/* Main Logo Section */}
      <div className="flex justify-center items-center pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8" style={{ fontFamily: 'Font Awesome 6 Free' }}>
            MOJE PRÁCE
          </h1>
        </div>
      </div>

      {/* MOJE PROJEKTY Section */}
      <section className="pb-20 pt-12">
        {/* Title */}
        <div className="px-8 md:px-16 lg:px-24 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 ml-36 md:ml-60 lg:ml-72" style={{ fontFamily: 'Font Awesome 6 Free' }}>
            MOJE PROJEKTY
          </h2>
        </div>

        {/* Decorative line from left edge to middle */}
        <div className="flex items-center mb-6">
          <div className="h-0.5 bg-black w-1/2"></div>
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>

        <div className="max-w-6xl px-8 md:px-16 lg:px-24 ml-auto mr-8 md:mr-16 lg:mr-24">
          {/* Category Button */}
          <div className="mb-6">
            <button className="px-16 py-3 border-2 border-black rounded-full text-lg font-bold hover:bg-black hover:text-white transition-colors -ml-20 md:-ml-28 lg:-ml-40" style={{ fontFamily: 'var(--font-albert-sans)' }}>
              NextLayer Studio
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 -ml-20 md:-ml-28 lg:-ml-40 mt-8">
            {/* Images Grid - Left side large, right side two stacked */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large image on the left taking full height */}
              <div className="col-span-1 row-span-2">
                <Image 
                  src="/Artboard 1.PNG" 
                  alt="NextLayer Project 1" 
                  width={450} 
                  height={700}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Two horizontal images stacked on the right */}
              <div className="col-span-1">
                <Image 
                  src="/NLS v 1.png" 
                  alt="NextLayer Project 2" 
                  width={450} 
                  height={340}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="col-span-1">
                <Image 
                  src="/E5B61F5F-D2B0-4FD2-9049-D105F9ECACCD.png" 
                  alt="NextLayer Project 3" 
                  width={450} 
                  height={340}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex items-start pt-8 ml-20 md:ml-28 lg:ml-32">
              <div className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed max-w-xl" style={{ fontFamily: 'var(--font-albert-sans)' }}>
                Nová firma kde sa mi naskytla príležitosť prejaviť sa, vziať si zodpovednosť a vidieť výsledky. Niečo, čo som mohla považovať za vlastné, niečo, čo dáva zmysel a využiť, rozvíjať popritom moju tvorbu a schopnosti naplno. Vďaka tomu všetkému som sa toho veľa naučila, mala možnosť objaviť veľa nového, aj v oblasti marketingu.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAUHAUS SECTION */}
      <section className="pb-20 pt-12">
        <div className="max-w-6xl px-8 md:px-16 lg:px-24 ml-auto mr-8 md:mr-16 lg:mr-24">
          {/* Category Button */}
          <div className="mb-6">
            <button className="px-16 py-3 border-2 border-black rounded-full text-lg font-bold hover:bg-black hover:text-white transition-colors -ml-20 md:-ml-28 lg:-ml-40" style={{ fontFamily: 'var(--font-albert-sans)' }}>
              &quot;Bauhaus&quot; plagáty
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 -ml-20 md:-ml-28 lg:-ml-40 mt-8">
            {/* Two Images Side by Side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Image 
                  src="/BH 1.png" 
                  alt="Bauhaus Poster 1" 
                  width={350} 
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="col-span-1">
                <Image 
                  src="/BH 2.png" 
                  alt="Bauhaus Poster 2" 
                  width={350} 
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex items-start pt-8 ml-20 md:ml-28 lg:ml-32">
              <div className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed max-w-xl" style={{ fontFamily: 'var(--font-albert-sans)' }}>
                Tieto plagáty sú inšpirované štýlom, ktorý vznikol v Nemecku začiatkom 20. rokov 20. storočia. Zaujali ma obrazy na stene, ktoré som zahliadla v jednej z častí seriálu Dunaj k vašim službám, ktorý sa odohráva práve v tomto období. Jeho čisté línie, funkčnosť a spojenie umenia s technikou výrazne ovplyvnili dizajn a architektúru medzivojnového obdobia. Tento štýl ma veľmi fascinoval, tak som sa rozhodla preskúmať ho.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D MODELY SECTION */}
      <section className="pb-20 pt-12">
        <div className="max-w-6xl px-8 md:px-16 lg:px-24 ml-auto mr-8 md:mr-16 lg:mr-24">
          {/* Category Button */}
          <div className="mb-6">
            <button className="px-16 py-3 border-2 border-black rounded-full text-lg font-bold hover:bg-black hover:text-white transition-colors -ml-20 md:-ml-28 lg:-ml-40" style={{ fontFamily: 'var(--font-albert-sans)' }}>
              3D modely - nábytok
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 -ml-20 md:-ml-28 lg:-ml-40 mt-8">
            {/* Two Images Side by Side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Image 
                  src="/IMG_1612.PNG" 
                  alt="3D Model 1" 
                  width={350} 
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="col-span-1">
                <Image 
                  src="/IMG_1613.PNG" 
                  alt="3D Model 2" 
                  width={350} 
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex items-start pt-8 ml-20 md:ml-28 lg:ml-32">
              <div className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed max-w-xl" style={{ fontFamily: 'var(--font-albert-sans)' }}>
                Modelovaniu v takejto miere sa nevenujem dlho, ale je to pre mňa určite nesmierne osviežujúce. Svet interiérového dizajnu a nábytku ma zaujíma, tak som sa rozhodla vytvoriť si niečo podľa seba, niečo unikátne...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KRESBY SECTION */}
      <section className="pb-20 pt-12">
        <div className="max-w-6xl px-8 md:px-16 lg:px-24 ml-auto mr-8 md:mr-16 lg:mr-24">
          {/* Category Button */}
          <div className="mb-6">
            <button className="px-16 py-3 border-2 border-black rounded-full text-lg font-bold hover:bg-black hover:text-white transition-colors -ml-20 md:-ml-28 lg:-ml-40" style={{ fontFamily: 'var(--font-albert-sans)' }}>
              Kresby, maľby, skeče
            </button>
          </div>

          {/* Three Images in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 -ml-20 md:-ml-28 lg:-ml-40 mt-8 mb-8">
            <div className="col-span-1">
              <Image 
                src="/IMG_7623.PNG" 
                alt="Drawing 1" 
                width={350} 
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image 
                src="/IMG_1641.PNG" 
                alt="Drawing 2" 
                width={350} 
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1">
              <Image 
                src="/IMG_1642.PNG" 
                alt="Drawing 3" 
                width={350} 
                height={350}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Content Below */}
          <div className="-ml-20 md:-ml-28 lg:-ml-40">
            <div className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed max-w-4xl" style={{ fontFamily: 'var(--font-albert-sans)' }}>
              Kreslenie a maľovanie bolo vždy súčasťou môjho života, niekedy viac, niekedy menej. No nikdy neodišlo a pevne dúfam že zostane súčasťou môjho života  navždy a vekom sa bude len zdokonaľovať. Čo sa kreslenia a skečovania týka, vždy som mala zvláštny záujem o oči a kvety.
            </div>
          </div>
        </div>
      </section>

      {/* GALÉRIA SECTION */}
      <section className="pb-20 pt-16 px-8 md:px-16">
        {/* Title */}
        <div className="px-8 md:px-16 lg:px-24 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 ml-36 md:ml-60 lg:ml-72" style={{ fontFamily: 'Font Awesome 6 Free' }}>
            GALÉRIA
          </h2>
        </div>

        {/* Decorative line from left edge to middle */}
        <div className="flex items-center mb-6">
          <div className="h-0.5 bg-black w-1/2"></div>
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>

        {/* Gallery Carousel in Elegant Box */}
        <div className="max-w-7xl mx-auto bg-white/60 backdrop-blur-sm rounded-[60px] shadow-2xl p-8 border border-gray-200">
          <GalleryCarousel />
        </div>
      </section>
    </div>
  );
}
