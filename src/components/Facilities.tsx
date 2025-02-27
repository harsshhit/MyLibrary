import React from 'react';
import { Wifi, Coffee, Book, Users, Monitor, Lightbulb, Lock, Phone } from 'lucide-react';

interface FacilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FacilityCard({ icon, title, description }: FacilityCardProps) {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="text-blue-600 mb-6 flex justify-center transform transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

export function Facilities() {
  const facilities = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "High-Speed Wi-Fi",
      description: "Stay connected with our reliable internet connection"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Café Corner",
      description: "Fresh beverages and healthy snacks available"
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Study Resources",
      description: "Access to books, magazines, and digital materials"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Discussion Zones",
      description: "Dedicated areas for group studies and discussions"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Digital Library",
      description: "Access to online resources and study materials"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Power Backup",
      description: "Uninterrupted power supply for continuous studying"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Lockers",
      description: "Secure storage for your belongings"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Support",
      description: "24/7 staff assistance available"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Our Facilities
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Everything you need for a productive study session, all in one place
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </div>
    </section>
  );
}