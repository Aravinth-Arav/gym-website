import { Clock, MapPin, Shield, Wifi } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Train on your schedule with round-the-clock gym access for all members.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Conveniently located with ample parking and easy access to public transport.',
  },
  {
    icon: Shield,
    title: 'Certified Trainers',
    description: 'All our trainers are certified professionals with years of experience.',
  },
  {
    icon: Wifi,
    title: 'Modern Amenities',
    description: 'Free WiFi, showers, lockers, and a smoothie bar for your convenience.',
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              WHY CHOOSE <span className="text-orange-500">VAHULEYAA?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We're not just a gym – we're a fitness community dedicated to helping you
              achieve results that last. With cutting-edge equipment, expert trainers,
              and a motivating atmosphere, we provide everything you need to succeed.
            </p>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Whether you're a beginner starting your fitness journey or an experienced
              athlete pushing your limits, VAHULEYAA FITNESS is your partner in achieving
              extraordinary results.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start space-x-4">
                    <div className="bg-orange-500/10 p-3 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-orange-500" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-orange-500/20 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gym interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-orange-500 text-white p-8 rounded-xl shadow-2xl">
              <div className="text-5xl font-black mb-2">15+</div>
              <div className="text-sm font-bold">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
