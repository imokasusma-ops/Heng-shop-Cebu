import { Wrench, Settings, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Services() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-dark py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">OUR SERVICES</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-metallic max-w-2xl mx-auto">
            Expert care for your motorcycle. We ensure every part is installed correctly and your bike is safe for the daily ride.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Installation */}
            <div className="bg-dark border border-gray-800 rounded-lg overflow-hidden hover:border-primary transition-colors duration-300">
              <img 
                src="https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/657131222_1400311578567439_5517589134138892999_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG5IhtBzkgUrfH9uMa-zjQHxf2uY20vuhfF_a5jbS-6FwAYN15WslGv2JqUbGkktwiPFBjE_6d0JDgPoEGGIDsY&_nc_ohc=OxHN8_y8dl4Q7kNvwGsdszT&_nc_oc=AdqBhedbqrZaqfWwZq4FuFOuZyTQV3VFgVZW_nq9WXNdsQ8MhozkpnCTvSps-oMo8fo&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=7fIrtmtACU8ijJd76hc9pg&_nc_ss=7a3a8&oh=00_Af12YKIEFHYKT4Z3JYO9zPiYLMOI5s_qR9VvuZtOA-U-iQ&oe=69D47372" 
                alt="Parts Installation" 
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Wrench className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl font-heading font-bold text-white">PARTS INSTALLATION</h2>
                </div>
                <p className="text-metallic mb-6">
                  Bought parts from us? We offer professional installation services to ensure your upgrades are fitted correctly and safely.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-metallic"><CheckCircle2 className="w-5 h-5 text-primary mr-2" /> Tires & Mags</li>
                  <li className="flex items-center text-metallic"><CheckCircle2 className="w-5 h-5 text-primary mr-2" /> Suspension Upgrades</li>
                  <li className="flex items-center text-metallic"><CheckCircle2 className="w-5 h-5 text-primary mr-2" /> Brake Systems</li>
                  <li className="flex items-center text-metallic"><CheckCircle2 className="w-5 h-5 text-primary mr-2" /> Lighting & Electrical</li>
                </ul>
                <a 
                  href="https://www.facebook.com/HengShopUBEC/" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-full bg-gray-800 hover:bg-primary text-white hover:text-darker py-3 rounded font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> Inquire Installation
                </a>
              </div>
            </div>

            {/* Diagnostic & Repair */}
            <div className="bg-dark border border-gray-800 rounded-lg overflow-hidden hover:border-primary transition-colors duration-300">
              <img 
                src="https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/658352539_1400311848567412_6209447657481950672_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IXoOhtenm8cQ7kNvwH7cFh2&_nc_oc=Adp5lp0YH82iwoJkTcMe9EZIsEdVMRjP_z4le0MBybK8kTvYLt_022sy-6BavlI3AAA&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=cu51Sn6I5znLxGd-7mrHig&_nc_ss=7a3a8&oh=00_Af3KuDzaxW-kHXiDtiz4q3cYXuDwYazbMZW8NjmdY-80Ww&oe=69D47A61" 
                alt="Diagnostic & Repair" 
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl font-heading font-bold text-white">DIAGNOSTIC & REPAIR</h2>
                </div>
                <p className="text-metallic mb-6">
                  Experiencing issues with your motorcycle? We can diagnose the problem and provide reliable repair services using quality replacement parts.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-metallic"><CheckCircle2 className="w-5 h-5 text-primary mr-2" /> Engine Diagnostics</li>
                  <li className="flex items-center text-metallic"><CheckCircle2 className="w-5 h-5 text-primary mr-2" /> Electrical Troubleshooting</li>
                  <li className="flex items-center text-metallic"><CheckCircle2 className="w-5 h-5 text-primary mr-2" /> Suspension Repair</li>
                  <li className="flex items-center text-metallic"><CheckCircle2 className="w-5 h-5 text-primary mr-2" /> Brake System Overhaul</li>
                </ul>
                <a 
                  href="https://www.facebook.com/HengShopUBEC/" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-full bg-gray-800 hover:bg-primary text-white hover:text-darker py-3 rounded font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> Consult With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-20 bg-dark border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">PREVENTIVE MAINTENANCE</h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-metallic mb-6 text-lg">
                Keep your daily commuter in top shape. Regular maintenance prevents costly repairs down the road and ensures your safety.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-darker p-4 rounded border border-gray-800">
                  <Settings className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-bold text-white mb-1">Change Oil & Tune-up</h4>
                  <p className="text-sm text-gray-500">Premium oils and thorough inspection.</p>
                </div>
                <div className="bg-darker p-4 rounded border border-gray-800">
                  <ShieldCheck className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-bold text-white mb-1">Brake Servicing</h4>
                  <p className="text-sm text-gray-500">Pad replacement and fluid bleeding.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1625047509248-ec889cbabe0f?auto=format&fit=crop&q=80&w=1000" 
                alt="Maintenance" 
                className="rounded-lg shadow-2xl border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
