import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function OMne() {
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
            O MNE
          </h1>
        </div>
      </div>

      {/* O MNE Section */}
      <section className="px-8 md:px-16 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Text Content */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-albert-sans)' }}>
                  Som človek, ktorý hľadá pokoj v detailoch a krásu v jednoduchosti. Rada veci cítim – farby, materiály, atmosféru. Verím, že dizajn nie je len o tom, ako veci vyzerajú, ale aj o tom, aký pocit v nás zanechajú.
                  Baví ma tvoriť s úmyslom. Premýšľať, ako niečo môže byť funkčné, ale zároveň jemné a prirodzené. Mám rada veci, ktoré pôsobia ľahko, no majú v sebe hĺbku.
                  Inšpiruje ma realita, skutočné momenty, ticho, ľudia, ktorí sú úprimní v tom, kým sú. Aj malé detaily, ktoré si väčšina nevšimne, ale práve tie robia veci živými.
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image 
                  src="/B948A0C4-25E4-49B6-B134-C6376A251476.jpeg" 
                  alt="Portrait" 
                  width={450} 
                  height={360}
                  className="object-cover rounded-3xl shadow-lg border-4 border-black"
                  style={{ aspectRatio: '5/4' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
