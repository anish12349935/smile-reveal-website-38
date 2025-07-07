import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dental-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">DentalCare</h3>
            <p className="text-dental-blue-light mb-4">
              Your trusted partner for comprehensive dental care. We provide quality treatments 
              with state-of-the-art technology and experienced professionals.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-dental-blue-light hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-dental-blue-light hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-dental-blue-light hover:text-white transition-colors">About Us</a></li>
              <li><a href="#team" className="text-dental-blue-light hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-dental-blue-light hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-dental-blue-light">General Dentistry</span></li>
              <li><span className="text-dental-blue-light">Cosmetic Dentistry</span></li>
              <li><span className="text-dental-blue-light">Orthodontics</span></li>
              <li><span className="text-dental-blue-light">Dental Implants</span></li>
              <li><span className="text-dental-blue-light">Emergency Care</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-dental-blue-light">123 Dental Street, Health City, HC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-dental-blue-light">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-dental-blue-light">info@dentalcare.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-dental-blue-light">
                  <div>Mon-Fri: 8AM-6PM</div>
                  <div>Sat: 9AM-3PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dental-blue mt-8 pt-8 text-center">
          <p className="text-dental-blue-light">
            © 2024 DentalCare. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;