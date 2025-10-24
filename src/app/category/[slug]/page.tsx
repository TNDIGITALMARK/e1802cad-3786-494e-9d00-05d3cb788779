'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { getProductsByCategory, categoryInfo, Category } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

const priceRanges = [
  { label: 'Onder €20', min: 0, max: 20 },
  { label: '€20 - €40', min: 20, max: 40 },
  { label: '€40 - €60', min: 40, max: 60 },
  { label: 'Boven €60', min: 60, max: 999 },
];

const sortOptions = [
  { label: 'Nieuwste', value: 'newest' },
  { label: 'Prijs: Laag naar Hoog', value: 'price-asc' },
  { label: 'Prijs: Hoog naar Laag', value: 'price-desc' },
  { label: 'Populariteit', value: 'popular' },
  { label: 'Hoogste Rating', value: 'rating' },
];

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = slug as Category;

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');

  const categoryData = categoryInfo[category];
  const products = getProductsByCategory(category);

  // Get unique sizes from products
  const availableSizes = useMemo(() => {
    const sizes = new Set<string>();
    products.forEach(product => {
      product.sizes.forEach(size => sizes.add(size));
    });
    return Array.from(sizes);
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by price range
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      filtered = filtered.filter(p => p.price >= range.min && p.price <= range.max);
    }

    // Filter by sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(p =>
        p.sizes.some(size => selectedSizes.includes(size))
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'popular':
          return b.reviewCount - a.reviewCount;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, selectedPriceRange, selectedSizes, sortBy]);

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSelectedPriceRange(null);
    setSelectedSizes([]);
  };

  const hasActiveFilters = selectedPriceRange !== null || selectedSizes.length > 0;

  const FilterSection = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Prijs
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range, index) => (
            <label key={index} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="price-range"
                checked={selectedPriceRange === index}
                onChange={() => setSelectedPriceRange(index)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Maat</h3>
        <div className="flex flex-wrap gap-2">
          {availableSizes.map(size => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
                selectedSizes.includes(size)
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="w-full px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors"
        >
          Wis alle filters
        </button>
      )}
    </div>
  );

  if (!categoryData) {
    return <div className="container mx-auto px-4 py-16 text-center">Categorie niet gevonden</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{categoryData.name}</h1>
          <p className="text-lg text-gray-600">{categoryData.description}</p>
          <p className="text-sm text-gray-500 mt-2">{filteredProducts.length} producten</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 bg-white rounded-lg p-6 shadow-sm">
              <FilterSection />
            </div>
          </aside>

          {/* Main Content */}
          <div>
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="font-medium">Filters</span>
                {hasActiveFilters && (
                  <span className="w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {(selectedPriceRange !== null ? 1 : 0) + selectedSizes.length}
                  </span>
                )}
              </button>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    priority={index < 6}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg">
                <p className="text-gray-600 mb-4">Geen producten gevonden met de geselecteerde filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-primary font-semibold hover:underline"
                >
                  Wis filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <FilterSection />
            </div>
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Toon {filteredProducts.length} producten
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
