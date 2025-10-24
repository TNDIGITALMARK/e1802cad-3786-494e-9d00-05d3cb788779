import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Category, getCategoryCount, categoryInfo } from '@/lib/products';

interface CategoryCardProps {
  category: Category;
  imageSrc?: string;
}

export function CategoryCard({ category, imageSrc }: CategoryCardProps) {
  const info = categoryInfo[category];
  const productCount = getCategoryCount(category);

  return (
    <Link
      href={`/category/${info.slug}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-hover transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={info.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-white text-6xl font-bold"
            style={{ backgroundColor: info.color }}
          >
            {info.name[0]}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{info.name}</h3>
          <p className="text-sm opacity-90 mb-3">{productCount} artikelen</p>

          <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Bekijk collectie</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
