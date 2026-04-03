import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Wrench, Zap, Clock, Star, MapPin, ArrowRight, CheckCircle2, MessageCircle, CircleDashed, Droplets, Circle, ShoppingBag, Truck, CheckCircle } from 'lucide-react';
import { categories } from '../data/mockData';

const IconMap: Record<string, React.ElementType> = {
  CircleDashed,
  Droplets,
  Circle,
  Zap
};

export default function Home() {
  const commonRequests = [
    'Bolt sets', 'Engine oil', 'Brake pads', 'Tires', 'Sprocket sets', 'Battery'
  ];

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
              HENG Shop <span className="text-primary">Cebu</span>
            </h1>
            <p className="text-lg md:text-xl text-metallic mb-8 font-medium">
              HENG Shop Cebu offers affordable motorcycle parts in Cebu. Bolts, engine oil, tires, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.facebook.com/HengShopUBEC/" 
                target="_blank"
                rel="noreferrer"
                className="bg-primary hover:bg-primary-dark text-darker px-8 py-4 rounded font-bold uppercase tracking-wider text-center transition-all shadow-[0_0_15px_rgba(255,106,0,0.3)] hover:shadow-[0_0_20px_rgba(255,106,0,0.5)] flex items-center justify-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" /> Message Us Now
              </a>
              <a 
                href="#categories" 
                className="bg-transparent hover:bg-primary/10 text-primary border border-primary px-8 py-4 rounded font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center"
              >
                Browse Shop <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-darker border-y border-gray-800 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center text-primary font-bold uppercase tracking-widest text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Trusted by Cebu Riders
            </div>
            <div className="flex items-center text-primary font-bold uppercase tracking-widest text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Affordable Prices
            </div>
            <div className="flex items-center text-primary font-bold uppercase tracking-widest text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Ready Stock
            </div>
            <div className="flex items-center text-primary font-bold uppercase tracking-widest text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Fast Replies
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Bar */}
      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-darker mb-1 uppercase">Di sure if compatible?</h3>
            <p className="text-darker/80 font-bold">Send your motorcycle model — we'll recommend the right parts.</p>
          </div>
          <a 
            href="https://www.facebook.com/HengShopUBEC/" 
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto bg-darker hover:bg-black text-white px-10 py-4 rounded font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center"
          >
            <MessageCircle className="mr-2 w-5 h-5" /> MESSAGE US NOW
          </a>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="categories" className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 uppercase">Shop by Category</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            
            {/* Most Requested Items Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <span className="text-metallic text-xs font-bold uppercase tracking-widest mr-2 py-1">Common requests:</span>
              {commonRequests.map(tag => (
                <span key={tag} className="bg-gray-800 text-metallic text-[10px] font-bold px-3 py-1 rounded-full border border-gray-700 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon ? IconMap[category.icon] : null;
              
              return (
                <Link 
                  key={category.id} 
                  to={`/shop?category=${category.id}`}
                  className={`group relative h-56 overflow-hidden rounded-xl block border border-gray-800 bg-darker hover:border-primary hover:-translate-y-1 transition-all duration-300 ${index === 3 ? 'lg:col-start-2' : ''}`}
                >
                  {category.image ? (
                    <>
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-50 group-hover:opacity-30"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/60 to-transparent"></div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                      {Icon && <Icon className="w-32 h-32 text-white" />}
                    </div>
                  )}
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {Icon && <Icon className="w-10 h-10 text-primary" />}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors uppercase tracking-tight">{category.name}</h3>
                    <div className="w-0 h-1 bg-primary transition-all duration-300 group-hover:w-16"></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Available in Store Section */}
      <section className="py-20 bg-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 uppercase">Available in Store</h2>
            <p className="text-metallic font-medium">Actual stock — visit or message us for availability</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl overflow-hidden border border-gray-800 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://insideracing.com.ph/wp-content/uploads/2020/04/IMG_9481.jpg" 
                  alt="Bolts Inventory" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-dark text-center">
                <h4 className="font-bold text-white uppercase tracking-wider">Premium Bolts</h4>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-800 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgynXICfrYMzxJlXLeyr2MncGXztcb6GFz7w&s" 
                  alt="Oil Inventory" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-dark text-center">
                <h4 className="font-bold text-white uppercase tracking-wider">Engine Oil Shelves</h4>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-800 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEJ4awDV91N1B0fvglRBl-JZotA0zUiQX3g&s" 
                  alt="Tires Inventory" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-dark text-center">
                <h4 className="font-bold text-white uppercase tracking-wider">Tires & Tubes</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-20 bg-dark border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 uppercase tracking-tight">How to Order</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MessageCircle, title: "1. Message Us", desc: "Chat with us on Messenger" },
              { icon: Wrench, title: "2. Send Model", desc: "Send your motorcycle model" },
              { icon: CheckCircle, title: "3. Confirm", desc: "We confirm availability" },
              { icon: Truck, title: "4. Get Parts", desc: "Pickup or delivery" }
            ].map((step, i) => (
              <div key={i} className="relative text-center p-6 rounded-2xl bg-darker border border-gray-800 hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{step.title}</h4>
                <p className="text-metallic text-sm">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
