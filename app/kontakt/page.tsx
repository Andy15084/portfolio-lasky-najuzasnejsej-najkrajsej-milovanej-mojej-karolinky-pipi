import Navbar from '@/components/Navbar';

export default function Kontakt() {
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
            KONTAKT
          </h1>
        </div>
      </div>

      {/* Contact Information */}
      <section className="px-8 md:px-16 lg:px-24 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-[40px] shadow-xl p-12 border border-gray-200">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8" style={{ fontFamily: 'Font Awesome 6 Free' }}>
                Spoj sa so mnou
              </h2>
              
              <div className="space-y-6 text-xl text-gray-700" style={{ fontFamily: 'var(--font-albert-sans)' }}>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-2xl">📞</span>
                  <span>+421 911 294 129</span>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-2xl">✉️</span>
                  <span>karolina.pifflova@gmail.com</span>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-2xl">📱</span>
                  <span>@karolina_r_p_</span>
                </div>
              </div>
              
              <div className="pt-8">
                <p className="text-lg text-gray-600" style={{ fontFamily: 'var(--font-albert-sans)' }}>
                  Radi ťa počujem! Neváhaj ma kontaktovať pre akékoľvek otázky alebo spoluprácu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
