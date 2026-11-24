import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-orange-500" strokeWidth={2.5} />
              <span className="text-2xl font-black text-white">
                VAHULEYAA <span className="text-orange-500">FITNESS</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your body and mind with expert guidance, state-of-the-art facilities,
              and a community that supports your fitness goals.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-orange-500/10 hover:bg-orange-500 p-3 rounded-lg transition-colors group"
              >
                <Facebook className="h-5 w-5 text-orange-500 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="bg-orange-500/10 hover:bg-orange-500 p-3 rounded-lg transition-colors group"
              >
                <Instagram className="h-5 w-5 text-orange-500 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="bg-orange-500/10 hover:bg-orange-500 p-3 rounded-lg transition-colors group"
              >
                <Twitter className="h-5 w-5 text-orange-500 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="bg-orange-500/10 hover:bg-orange-500 p-3 rounded-lg transition-colors group"
              >
                <Youtube className="h-5 w-5 text-orange-500 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} VAHULEYAA FITNESS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
