import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, CircleDashed, Droplets, Circle, Zap } from 'lucide-react';
import { categories } from '../data/mockData';

const IconMap: Record<string, React.ElementType> = {
  CircleDashed,
  Droplets,
  Circle,
  Zap
};

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">SHOP BY CATEGORY</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-metallic max-w-2xl mx-auto">
          Browse our categories below. If you need a specific part, send us a message on Facebook and we'll check our inventory for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {categories.map((category, index) => {
          const Icon = category.icon ? IconMap[category.icon] : null;
          
          return (
            <div 
              key={category.id} 
              className={`group relative h-64 overflow-hidden rounded-lg block border border-gray-800 bg-darker hover:border-primary hover:-translate-y-1 transition-all duration-300 ${index === 3 ? 'lg:col-start-2' : ''}`}
            >
              {category.image ? (
                <>
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/80 to-transparent"></div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                  {Icon && <Icon className="w-32 h-32 text-white" />}
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end h-full">
                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors">{category.name}</h3>
                <a 
                  href="https://www.facebook.com/HengShopUBEC/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-darker px-6 py-3 rounded font-bold uppercase tracking-wider text-sm transition-colors w-fit"
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> Inquire Now
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-dark border border-gray-800 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
          CAN'T FIND WHAT YOU'RE LOOKING FOR?
        </h2>
        <p className="text-metallic mb-8 max-w-2xl mx-auto">
          We have hundreds of parts in stock that aren't listed online. Message us your motorcycle model and the part you need, and we'll get back to you fast.
        </p>
        <a 
          href="https://www.facebook.com/HengShopUBEC/" 
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center bg-primary hover:bg-primary-dark text-darker px-8 py-4 rounded font-bold uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(255,106,0,0.3)] hover:shadow-[0_0_20px_rgba(255,106,0,0.5)]"
        >
          <MessageCircle className="mr-2 w-5 h-5" /> Message Us on Facebook
        </a>
      </div>
    </div>
  );
}
