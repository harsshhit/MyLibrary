import React from 'react';
import { LampDesk, Clock,  Coffee, Shield } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="text-blue-600 mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export function Features() {
 const features = [
   {
     icon: <LampDesk className="w-10 h-10" />,
     title: "Focused Environment",
     description:
       "Peaceful and distraction-free space designed for maximum productivity",
   },
   {
     icon: <Clock className="w-10 h-10" />,
     title: "Scheduled Study Time",
     description:
       "Access available during scheduled hours for effective study sessions",
   },
   {
     icon: <Coffee className="w-10 h-10" />,
     title: "Refreshments",
     description:
       "Water is provided to keep you hydrated during your study sessions",
   },
   {
     icon: <Shield className="w-10 h-10" />,
     title: "Safe Environment",
     description: "Secure premises with 24/7 surveillance and staff support",
   },
 ];


  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Why Choose {"आरा"} Library
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          We provide a quiet, distraction-free study space for students,
          competitive exam aspirants, and working professionals in Arrah, Bihar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}