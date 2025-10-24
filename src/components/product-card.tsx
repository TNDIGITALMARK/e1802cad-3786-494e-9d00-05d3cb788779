import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { Star, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      href={`/product/${product.id}`}
      className="product-card group block bg-white rounded-lg overflow-hidden transition-all duration-200 hover:shadow-hover"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-2.5 py-1 rounded">
            -{discount}%
          </div>
        )}

        <button
          className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50"
          onClick={(e) => {
            e.preventDefault();
            // Wishlist functionality placeholder
          }}
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.brand}</div>

        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-900">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviewCount})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            €{product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              €{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {!product.inStock && (
          <div className="mt-2 text-sm text-red-600 font-medium">
            Uitverkocht
          </div>
        )}
      </div>
    </Link>
  );
}
