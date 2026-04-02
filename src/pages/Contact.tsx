import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-dark py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">CONTACT US</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-metallic max-w-2xl mx-auto">
            Drop by our shop or send us a message. We're here to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark border border-gray-800 rounded-lg p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-darker p-4 rounded-full border border-gray-800 mr-6">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Visit Our Shop</h4>
                    <p className="text-metallic leading-relaxed">
                      Mandaue Warehouse Park, S. Jayme St.,<br />
                      Paknaan, Mandaue City,<br />
                      Mandaue City, Philippines
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-darker p-4 rounded-full border border-gray-800 mr-6">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Call or Text Us</h4>
                    <a href="tel:+639060471550" className="text-metallic hover:text-primary transition-colors text-lg">
                      +63 906 047 1550
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-darker p-4 rounded-full border border-gray-800 mr-6">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Store Hours</h4>
                    <p className="text-metallic">
                      Monday - Saturday: 8:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA & Map */}
              <div className="flex flex-col gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">Fastest Way to Reach Us</h3>
                  <p className="text-metallic mb-8">For immediate inquiries, part availability, and pricing, message us directly on our Facebook Page.</p>
                  <a 
                    href="https://www.facebook.com/HengShopUBEC/" 
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full md:w-auto bg-primary hover:bg-primary-dark text-darker px-8 py-4 rounded font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(255,106,0,0.3)] hover:shadow-[0_0_20px_rgba(255,106,0,0.5)]"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" /> Message Us
                  </a>
                </div>

                <div className="w-full h-64 bg-darker border border-gray-800 rounded-lg overflow-hidden relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.123456789!2d123.9456789!3d10.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIwJzQ0LjQiTiAxMjPCsDU2JzQ0LjQiRQ!5e0!3m2!1sen!2sph!4v1709645000000!5m2!1sen!2sph" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="HENG Shop Cebu Location"
                    className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
