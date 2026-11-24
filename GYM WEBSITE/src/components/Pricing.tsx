import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '29',
    period: 'month',
    features: [
      'Access to gym equipment',
      'Locker room access',
      'Free fitness assessment',
      'Mobile app access',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '59',
    period: 'month',
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      'Nutrition consultation',
      'Guest passes (2/month)',
      'Sauna & steam room',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '99',
    period: 'month',
    features: [
      'Everything in Premium',
      'Personal training (4 sessions)',
      'Priority class booking',
      'Massage therapy',
      'Custom meal plans',
      'VIP lounge access',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            MEMBERSHIP <span className="text-orange-500">PLANS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan to start your fitness journey today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-gray-900 rounded-2xl p-8 border-2 transition-all hover:transform hover:scale-105 ${
                plan.popular
                  ? 'border-orange-500 shadow-2xl shadow-orange-500/20'
                  : 'border-gray-800 hover:border-orange-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-black text-orange-500">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" strokeWidth={3} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/50'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-12">
          All plans include a 7-day money-back guarantee. No long-term contracts.
        </p>
      </div>
    </section>
  );
}
