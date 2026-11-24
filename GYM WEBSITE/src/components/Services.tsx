import { Dumbbell, Heart, Users, Zap, Target, Trophy } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Build muscle and increase strength with our comprehensive weight training programs and expert guidance.',
  },
  {
    icon: Zap,
    title: 'HIIT Classes',
    description: 'High-intensity interval training sessions designed to maximize fat burn and boost cardiovascular fitness.',
  },
  {
    icon: Heart,
    title: 'Cardio Zone',
    description: 'State-of-the-art cardio equipment and dynamic classes to improve endurance and heart health.',
  },
  {
    icon: Users,
    title: 'Personal Training',
    description: 'One-on-one coaching tailored to your specific goals with certified professional trainers.',
  },
  {
    icon: Target,
    title: 'Yoga & Flexibility',
    description: 'Improve mobility, balance, and mental wellness through guided yoga and stretching sessions.',
  },
  {
    icon: Trophy,
    title: 'Competition Prep',
    description: 'Specialized training programs for athletes and competitors looking to reach peak performance.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            OUR <span className="text-orange-500">SERVICES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals under one roof
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-black/50 p-8 rounded-xl border border-orange-500/20 hover:border-orange-500 transition-all hover:transform hover:scale-105 backdrop-blur-sm"
              >
                <div className="bg-orange-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Icon className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
