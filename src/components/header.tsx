'use client';

import Link from 'next/link';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">SA</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold tracking-tight text-gray-900">
                STUDIO ATELIER
              </div>
              <div className="text-xs text-gray-500 tracking-wide">
                Fashion Boutique
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/category/kinderen"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              KINDEREN
            </Link>
            <Link
              href="/category/heren"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              HEREN
            </Link>
            <Link
              href="/category/dames"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              DAMES
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            {/* User Account */}
            <button
              className="hidden sm:flex p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5 text-gray-700" />
            </button>

            {/* Shopping Bag */}
            <button
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar (expandable) */}
        {searchOpen && (
          <div className="pb-4 animate-in slide-in-from-top duration-200">
            <input
              type="search"
              placeholder="Zoek producten..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top duration-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/category/kinderen"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kinderen
            </Link>
            <Link
              href="/category/heren"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Heren
            </Link>
            <Link
              href="/category/dames"
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dames
            </Link>
            <div className="border-t border-gray-200 pt-4 mt-2">
              <Link
                href="/account"
                className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-5 h-5" />
                Mijn Account
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
