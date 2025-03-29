import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

function ContactInfo({ icon, title, content }: ContactInfoProps) {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1 text-gray-800">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Visit Us
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          We'd love to hear from you. Get in touch with us for any queries.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 p-8 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Get in Touch
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm hover:bg-white/80"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm hover:bg-white/80"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm hover:bg-white/80"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm hover:bg-white/80 resize-none"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-[1.02] hover:shadow-lg">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Contact Information
            </h3>
            <div className="space-y-4">
              <ContactInfo
                icon={<MapPin className="w-6 h-6" />}
                title="Address"
                content="Paschim Tola, Nala Mod, Ara, Bhojpur, Bihar 802301"
              />
              <ContactInfo
                icon={<Phone className="w-6 h-6" />}
                title="Phone"
                content="+91 7004437562"
              />
              <ContactInfo
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                content="info@mylibrary.com"
              />
              <ContactInfo
                icon={<Clock className="w-6 h-6" />}
                title="Working Hours"
                content="Scheduled Study Hours"
              />
            </div>
            <div className="h-64 rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white/80 backdrop-blur-xl">
              {/* Google Maps iframe would go here */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 bg-grid-pattern bg-opacity-5">
                Map View
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}