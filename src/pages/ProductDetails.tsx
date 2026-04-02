import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Wrench, MessageCircle, AlertCircle } from 'lucide-react';
import { products } from '../data/mockData';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-heading font-bold text-white mb-4">Product Not Found</h2>
        <p className="text-metallic mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate('/shop')}
          className="bg-primary hover:bg-primary-dark text-darker px-6 py-3 rounded font-bold uppercase tracking-wider transition-colors"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-metallic hover:text-primary mb-8 transition-colors font-semibold uppercase tracking-wider text-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </button>

      <div className="bg-dark border border-gray-800 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Product Image */}
          <div className="relative h-96 md:h-auto border-r border-gray-800">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="p-8 md:p-12 flex flex-col">
            <div className="text-sm text-primary font-bold uppercase tracking-wider mb-2">{product.category}</div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{product.name}</h1>
            <div className="text-4xl font-heading font-bold text-primary mb-6">₱{product.price.toLocaleString()}</div>
            
            <p className="text-metallic text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                <Wrench className="w-5 h-5 mr-2 text-primary" /> Compatibility
              </h3>
              <ul className="space-y-2">
                {product.compatibility.map((model, index) => (
                  <li key={index} className="flex items-center text-metallic">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> {model}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto space-y-4">
              {product.inStock ? (
                <div className="flex items-center text-green-500 font-bold mb-4">
                  <CheckCircle2 className="w-5 h-5 mr-2" /> In Stock - Available
                </div>
              ) : (
                <div className="flex items-center text-primary font-bold mb-4">
                  <AlertCircle className="w-5 h-5 mr-2" /> Limited Stock
                </div>
              )}

              <div className="flex flex-col gap-4">
                <a 
                  href={`https://m.me/hengshopcebu?text=Hi, I'm interested in buying the ${product.name} (₱${product.price}). Is it available?`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-primary hover:bg-primary-dark text-darker py-4 rounded font-bold uppercase tracking-wider text-center transition-all shadow-[0_0_15px_rgba(255,106,0,0.3)] hover:shadow-[0_0_20px_rgba(255,106,0,0.5)] flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> MESSAGE TO ORDER
                </a>
                <a 
                  href={`https://m.me/hengshopcebu?text=Hi, ask lang ko if mo fit ba ang ${product.name} sa akong motor?`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-transparent border border-primary hover:bg-primary/10 text-primary py-4 rounded font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center"
                >
                  <Wrench className="w-5 h-5 mr-2" /> Ask if this fits your bike
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-darker border border-gray-800 p-6 rounded-lg flex items-center">
          <ShieldCheck className="w-10 h-10 text-primary mr-4" />
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider">Quality Guarantee</h4>
            <p className="text-sm text-metallic">Reliable parts only</p>
          </div>
        </div>
        <div className="bg-darker border border-gray-800 p-6 rounded-lg flex items-center">
          <Wrench className="w-10 h-10 text-primary mr-4" />
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider">Ready Stock</h4>
            <p className="text-sm text-metallic">Available in-store</p>
          </div>
        </div>
        <div className="bg-darker border border-gray-800 p-6 rounded-lg flex items-center">
          <MessageCircle className="w-10 h-10 text-primary mr-4" />
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider">Fast Support</h4>
            <p className="text-sm text-metallic">Message us anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
}
