import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">SA</span>
              </div>
              <div className="text-lg font-bold tracking-tight text-gray-900">
                STUDIO ATELIER
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Stijlvolle en betaalbare mode voor het hele gezin. Kwaliteit en trends tegen de beste prijzen.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/category/dames" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Dames
                </Link>
              </li>
              <li>
                <Link href="/category/heren" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Heren
                </Link>
              </li>
              <li>
                <Link href="/category/kinderen" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Kinderen
                </Link>
              </li>
              <li>
                <Link href="/nieuw" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Nieuwe Collectie
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Klantenservice</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/verzending" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Verzending & Levering
                </Link>
              </li>
              <li>
                <Link href="/retourneren" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Retourneren
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Veelgestelde Vragen
                </Link>
              </li>
              <li>
                <Link href="/maattabel" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Maattabel
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Nieuwsbrief</h3>
            <p className="text-sm text-gray-600 mb-4">
              Ontvang de laatste updates over nieuwe collecties en exclusieve aanbiedingen.
            </p>
            <form className="flex flex-col gap-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Jouw e-mailadres"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-opacity-90 transition-colors"
                  aria-label="Subscribe"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Door je in te schrijven ga je akkoord met onze privacyvoorwaarden.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2024 Studio Atelier. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Privacybeleid
              </Link>
              <Link href="/algemene-voorwaarden" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Algemene Voorwaarden
              </Link>
              <Link href="/cookies" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Cookiebeleid
              </Link>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-6 flex justify-center items-center gap-4">
            <span className="text-xs text-gray-500">Betaalmethoden:</span>
            <div className="flex gap-2">
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold text-gray-600">
                VISA
              </div>
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold text-gray-600">
                MC
              </div>
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold text-gray-600">
                IDEAL
              </div>
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold text-gray-600">
                PP
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
