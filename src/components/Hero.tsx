import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-100 to-pink-100 animate-gradient">
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(147, 51, 234, 0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-purple-900 animate-fade-in">
              Hello! I'm
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up">
              Anushruti Singh
            </h1>
          </div>
          
          <p className="text-2xl text-purple-800 mt-8 mb-12 animate-fade-in-delay">
            A Marketing Manager turning insights into impactful strategies.
            <span className="block mt-2 text-xl text-purple-600">
              Passionate about blending creativity with data to drive growth and innovation.
            </span>
          </p>

          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all animate-fade-in-delay-2"
          >
            Let's Connect
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-purple-600 p-1">
          <div className="w-1.5 h-3 bg-purple-600 rounded-full mx-auto animate-scroll" />
        </div>
      </div>
    </section>
  );
}