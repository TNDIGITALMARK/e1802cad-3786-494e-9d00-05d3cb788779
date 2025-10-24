'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart, ShoppingBag, Truck, RefreshCw, Shield, ChevronLeft } from 'lucide-react';
import { getProductById, getProductsByCategory } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product niet gevonden</h1>
        <Link
          href="/"
          className="text-primary font-semibold hover:underline"
        >
          Terug naar home
        </Link>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category).filter(
    p => p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Selecteer een maat');
      return;
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/category/${product.category}`}
              className="hover:text-primary transition-colors capitalize"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href={`/category/${product.category}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-6 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Terug naar {product.category}
        </Link>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 mb-16">
          {/* Product Images */}
          <div className="mb-8 lg:mb-0">
            <div className="sticky top-24">
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium text-gray-900">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  €{product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      €{product.originalPrice.toFixed(2)}
                    </span>
                    <span className="px-2.5 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              {product.inStock ? (
                <p className="text-green-600 font-medium mb-6">Op voorraad</p>
              ) : (
                <p className="text-red-600 font-medium mb-6">Uitverkocht</p>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Kleur: <span className="font-normal text-gray-600">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${
                      selectedColor === color
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Maat: {selectedSize && <span className="font-normal text-gray-600">{selectedSize}</span>}
              </label>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 rounded-lg font-medium transition-all ${
                      selectedSize === size
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Link
                href="/maattabel"
                className="inline-block mt-3 text-sm text-primary hover:underline"
              >
                Bekijk maattabel
              </Link>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Aantal
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 h-12 text-center border-2 border-gray-300 rounded-lg font-semibold focus:outline-none focus:border-primary"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 border-2 border-gray-300 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-3 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingBag className="w-5 h-5" />
                {addedToCart ? 'Toegevoegd!' : 'Toevoegen aan winkelwagen'}
              </button>
              <button
                className="w-14 h-14 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-gray-200">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-primary" />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Gratis verzending</p>
                  <p className="text-gray-600">Vanaf €50</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-primary" />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">30 dagen retour</p>
                  <p className="text-gray-600">Gratis retourneren</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Veilig betalen</p>
                  <p className="text-gray-600">SSL beveiligd</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Vergelijkbare Producten
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
