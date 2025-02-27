import React from 'react';
import { Users, UserPlus, Laptop, Coffee, TreePine } from 'lucide-react';

interface SpaceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
}

function SpaceCard({ title, description, features, image, icon }: SpaceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white  transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div 
        className="h-56 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500"></div>
      </div>
      <div className="relative p-8">
        <div className="absolute -top-10 left-8 rounded-2xl bg-blue-600 p-4 text-white shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-blue-700">
          {icon}
        </div>
        <div className="mb-6 pt-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600 group-hover:bg-blue-700 transition-colors duration-300"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function StudySpaces() {
  const spaces = [
    {
      title: "Silent Reading Zone",
      description: "Perfect for deep focus and individual study sessions",
      features: [
        "Noise-free partitions",
        "Ergonomic chairs",
        "Individual desk lamps",
        "Power outlets at every desk"
      ],
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      icon: <Laptop className="h-6 w-6" />
    },
    {
      title: "Group Study Zone",
      description: "Collaborative spaces for team learning and discussions",
      features: [
        "Spacious tables",
        "Whiteboard walls",
        "Presentation screens",
        "Flexible seating"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Private Study Rooms",
      description: "Soundproof cabins for focused group or individual study",
      features: [
        "Soundproof environment",
        "Smart TV for presentations",
        "Climate control",
        "4-6 person capacity"
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      icon: <UserPlus className="h-6 w-6" />
    },
    {
      title: "Relaxation Lounge",
      description: "Comfortable space for breaks and casual reading",
      features: [
        "Comfortable seating",
        "Coffee station",
        "Magazine corner",
        "Ambient music"
      ],
      image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      icon: <Coffee className="h-6 w-6" />
    },
    {
      title: "Outdoor Study Area",
      description: "Garden space for fresh air and natural light",
      features: [
        "Shaded seating",
        "Wi-Fi coverage",
        "Natural surroundings",
        "Weather protection"
      ],
      image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      icon: <TreePine className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 inline-block">
            Study Spaces for Every Need
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our variety of thoughtfully designed study environments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {spaces.map((space, index) => (
            <SpaceCard key={index} {...space} />
          ))}
        </div>
      </div>
    </section>
  );
}
