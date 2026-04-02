import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Wrench, Zap, Clock, Star, MapPin, ArrowRight, CheckCircle2, MessageCircle, CircleDashed, Lightbulb } from 'lucide-react';
import { categories } from '../data/mockData';

const IconMap: Record<string, React.ElementType> = {
  CircleDashed,
  Lightbulb
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17NqULsVqa3JsXK5uSiGH1RQJJ5WTscuP1Q&s" 
            alt="Heng Shop Cebu" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-darker via-darker/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold uppercase tracking-wider mb-6">
              <MapPin className="w-4 h-4 mr-2" /> HENG Shop Cebu
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6 uppercase">
              Motorcycle Parts & Supplies <span className="text-primary">in Cebu</span>
            </h1>
            <p className="text-lg md:text-xl text-metallic mb-8 font-medium">
              Bolts, Oil, Tires & More — Message Us for Availability
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.facebook.com/HengShopUBEC/" 
                target="_blank"
                rel="noreferrer"
                className="bg-primary hover:bg-primary-dark text-darker px-8 py-4 rounded font-bold uppercase tracking-wider text-center transition-all shadow-[0_0_15px_rgba(255,106,0,0.3)] hover:shadow-[0_0_20px_rgba(255,106,0,0.5)] flex items-center justify-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" /> Message Us
              </a>
              <a 
                href="#categories" 
                className="bg-transparent hover:bg-primary/10 text-primary border border-primary px-8 py-4 rounded font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center"
              >
                Browse Categories <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-darker border-y border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-primary mb-2"><Star className="w-8 h-8 mx-auto" /></div>
              <div className="text-sm text-white font-bold uppercase tracking-wider">Trusted by Cebu Riders</div>
            </div>
            <div>
              <div className="text-primary mb-2"><Zap className="w-8 h-8 mx-auto" /></div>
              <div className="text-sm text-white font-bold uppercase tracking-wider">Affordable Prices</div>
            </div>
            <div>
              <div className="text-primary mb-2"><CheckCircle2 className="w-8 h-8 mx-auto" /></div>
              <div className="text-sm text-white font-bold uppercase tracking-wider">Ready Stock Available</div>
            </div>
            <div>
              <div className="text-primary mb-2"><MessageCircle className="w-8 h-8 mx-auto" /></div>
              <div className="text-sm text-white font-bold uppercase tracking-wider">Fast Messenger Replies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="categories" className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">SHOP BY CATEGORY</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon ? IconMap[category.icon] : null;
              
              return (
                <Link 
                  key={category.id} 
                  to={`/shop?category=${category.id}`}
                  className={`group relative h-48 overflow-hidden rounded-lg block border border-gray-800 bg-darker hover:border-primary hover:-translate-y-1 transition-all duration-300 ${index === 3 ? 'lg:col-start-2' : ''}`}
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
                      {Icon && <Icon className="w-24 h-24 text-white" />}
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                    <div className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-12"></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-darker mb-4">
            NOT SURE WHAT FITS YOUR BIKE?
          </h2>
          <p className="text-darker/80 font-bold mb-6">
            Send your motorcycle model — we'll recommend the right parts.
          </p>
          <a 
            href="https://www.facebook.com/HengShopUBEC/" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-darker hover:bg-black text-white px-8 py-3 rounded font-bold uppercase tracking-wider transition-colors"
          >
            <MessageCircle className="mr-2 w-5 h-5" /> PM for Compatibility
          </a>
        </div>
      </section>
    </div>
  );
}
