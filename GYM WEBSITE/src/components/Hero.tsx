import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-block mb-4">
            <span className="bg-orange-500/20 text-orange-500 px-4 py-2 rounded-full text-sm font-bold border border-orange-500/50">
              TRANSFORM YOUR BODY, TRANSFORM YOUR LIFE
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            UNLEASH YOUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              TRUE POTENTIAL
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join VAHULEYAA FITNESS and experience world-class training, state-of-the-art equipment,
            and a community that pushes you to achieve greatness every single day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/50"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center space-x-2 backdrop-blur-sm border border-white/20"
            >
              <Play className="h-5 w-5" />
              <span>Watch Tour</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            <div>
              <div className="text-4xl font-black text-orange-500 mb-2">5000+</div>
              <div className="text-gray-400 font-semibold">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-500 mb-2">50+</div>
              <div className="text-gray-400 font-semibold">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-500 mb-2">15+</div>
              <div className="text-gray-400 font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
