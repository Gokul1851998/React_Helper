import React from 'react';
import { useProductsQuery } from '../../../api/useApiData';
import { Sparkles, Heart, ShoppingBag, Eye } from 'lucide-react';

export default function DaisyuiCardsDemo() {
  const { data: products = [], isLoading } = useProductsQuery();

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">DaisyUI Glassmorphism Cards</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              DaisyUI Card System
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Styled card showcases using DaisyUI component classes: image overlays, glass effects, and action badges.
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center p-12">
          <span className="loading loading-bars loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-sm border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-300">
              <figure className="px-4 pt-4 relative bg-slate-50 rounded-t-2xl">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded-xl h-48 w-full object-contain mix-blend-multiply"
                />
                <div className="badge badge-secondary absolute top-6 right-6 font-semibold">
                  {item.discountPercentage}% OFF
                </div>
              </figure>
              <div className="card-body p-6">
                <div className="flex justify-between items-start gap-2">
                  <h2 className="card-title text-base font-bold text-slate-800 line-clamp-1">
                    {item.title}
                  </h2>
                  <div className="badge badge-outline text-xs capitalize">{item.category}</div>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-xs text-slate-400">Price</span>
                    <div className="text-xl font-bold text-slate-900">${item.price}</div>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary rounded-xl gap-2 font-semibold text-white">
                      <ShoppingBag className="w-4 h-4" /> Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
