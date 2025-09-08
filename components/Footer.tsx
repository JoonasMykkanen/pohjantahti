import Image from 'next/image';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1: Company Info & Logo */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/logo.svg"
              alt="Company Logo"
              width={120}
              height={40}
              className="mb-4 filter brightness-0 invert"
            />
          </div>

          {/* Column 2: Contact Details */}
          <div className="flex flex-col items-center">
            <div>
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Yhteystiedot</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-center md:justify-start">
                <Phone size={16} className="mr-3 text-blue-400 flex-shrink-0" />
                <a href="tel:+358400197329" className="hover:text-white transition-colors">+358 400 197 329</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail size={16} className="mr-3 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@pohjantahtikiinteistot.fi" className="hover:text-white transition-colors">info@pohjantahtikiinteistot.fi</a>
              </li>
            </ul>
            </div>
          </div>

          {/* Column 3: Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-white mb-4">Mediassa</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.linkedin.com/company/pohjantähti-kiinteistöt/" aria-label="Instagram" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/ketkavain/" aria-label="Linkedin" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Pohjantähti Kiinteistöt Oy | 3457557-4
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
