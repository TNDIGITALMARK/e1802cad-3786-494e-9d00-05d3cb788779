import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Truck, Shield, RefreshCw } from 'lucide-react';
import { getFeaturedProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { CategoryCard } from '@/components/category-card';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-gray-100 overflow-hidden">
        <Image
          src="/generated/hero-fashion-banner.png"
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Ontdek Stijl,<br />Betaalbare Prijzen
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Trendy mode voor het hele gezin. Kwaliteit en comfort tegen de beste prijzen.
            </p>
            <Link
              href="/category/dames"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:gap-3 shadow-lg"
            >
              Shop Nu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop per Categorie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ontdek onze collecties voor dames, heren en kinderen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <CategoryCard category="kinderen" imageSrc="/generated/hero-fashion-banner.png" />
            <CategoryCard category="heren" imageSrc="/generated/hero-fashion-banner.png" />
            <CategoryCard category="dames" imageSrc="/generated/hero-fashion-banner.png" />
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold">Gratis Verzending</h3>
              <p className="text-sm text-white/80">Bij bestellingen vanaf €50</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="font-semibold">30 Dagen Retour</h3>
              <p className="text-sm text-white/80">Niet tevreden? Geld terug</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold">Veilig Betalen</h3>
              <p className="text-sm text-white/80">SSL beveiligde betalingen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Populaire Producten
              </h2>
              <p className="text-lg text-gray-600">
                Onze meest geliefde items van dit moment
              </p>
            </div>
            <Link
              href="/category/dames"
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Bekijk alles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={index < 4}
              />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/category/dames"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Bekijk alle producten
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blijf op de Hoogte
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ontvang exclusieve aanbiedingen, nieuwe collecties en style tips rechtstreeks in je inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Jouw e-mailadres"
                className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors whitespace-nowrap"
              >
                Inschrijven
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Je kunt je op elk moment uitschrijven. Bekijk ons{' '}
              <Link href="/privacy" className="text-primary hover:underline">
                privacybeleid
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
