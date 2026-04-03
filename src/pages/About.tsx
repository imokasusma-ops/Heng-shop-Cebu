import { ShieldCheck, Users, Wrench } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-dark py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase tracking-tight">About HENG Shop Cebu</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-metallic max-w-2xl mx-auto">
            Your trusted local source for affordable, reliable motorcycle parts and accessories in Cebu.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Shop" 
                className="rounded-lg shadow-2xl border border-gray-800"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-heading font-bold text-white mb-6 uppercase tracking-tight">Built by Riders, for Riders</h2>
              <p className="text-metallic mb-4 text-lg">
                HENG Shop Cebu started with a simple goal: to provide Cebuano riders with a reliable, affordable place to get the parts they need for their daily commute. We know how important your motorcycle is for getting around the city, and we believe maintaining it shouldn't break the bank.
              </p>
              <p className="text-metallic mb-6 text-lg">
                We focus on the essentials—quality bolts, reliable engine oils, durable tires, and everyday accessories that keep your bike running smoothly and looking good. We don't just sell parts; we offer practical advice to make sure you get exactly what fits your ride and your budget.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-heading font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-metallic uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-heading font-bold text-white mb-1">10k+</div>
                  <div className="text-sm text-metallic uppercase tracking-wider">Bikes Serviced</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">OUR CORE VALUES</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-darker p-8 rounded-lg border border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300">
              <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Quality & Affordability</h3>
              <p className="text-metallic">We source reliable parts that offer the best value for your money. No overpriced items, just honest pricing for everyday riders.</p>
            </div>
            <div className="bg-darker p-8 rounded-lg border border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300">
              <Wrench className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Practical Expertise</h3>
              <p className="text-metallic">We know what works for Cebu roads. We provide straightforward advice on compatibility and maintenance to keep your bike running right.</p>
            </div>
            <div className="bg-darker p-8 rounded-lg border border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Local Community</h3>
              <p className="text-metallic">We're proud to serve the Cebuano riding community. Fast replies on Messenger, friendly service in-store, and a commitment to our local riders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-darker border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">SHOP GALLERY</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Photos will be added here */}
          </div>
        </div>
      </section>
    </div>
  );
}
