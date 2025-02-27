import React from 'react';
import { Check } from 'lucide-react';

interface PlanCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

function PlanCard({ title, price, period, features, highlighted = false }: PlanCardProps) {
  return (
    <div 
      className={`rounded-3xl p-8 ${
        highlighted 
          ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white transform scale-105' 
          : 'bg-white text-gray-800'
      } shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-5xl font-bold">{price}</span>
          <span className="text-sm ml-2 opacity-80">{period}</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 mr-3 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${
          highlighted 
            ? 'bg-white text-blue-600 hover:bg-gray-100' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
        } transform hover:scale-105`}
      >
        Choose Plan
      </button>
    </div>
  );
}

export function Membership() {
  const plans = [
    {
      title: "Daily Pass",
      price: "₹149",
      period: "per day",
      features: [
        "12 hours access",
        "Basic amenities",
        "Wi-Fi access",
        "Locker facility",
        "Access to study materials"
      ]
    },
    {
      title: "Monthly",
      price: "₹2999",
      period: "per month",
      features: [
        "24/7 access",
        "All amenities",
        "High-speed Wi-Fi",
        "Reserved seating",
        "Locker included",
        "Free beverages",
        "Group discussion access"
      ],
      highlighted: true
    },
    {
      title: "Weekly",
      price: "₹899",
      period: "per week",
      features: [
        "12 hours daily",
        "All amenities",
        "Wi-Fi access",
        "Locker facility",
        "Basic refreshments",
        "Study materials"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Membership Plans
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Choose the perfect plan that suits your study needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}