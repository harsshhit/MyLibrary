import React, { useState } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PlanCardProps {
  title: string;
  price: string;
  period: string;
  timeSlots: string[];
}

function PlanCard({ title, price, period, timeSlots }: PlanCardProps) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleContactClick = () => {
    navigate("/contact"); // Ensure this route exists
  };

  const handleCallClick = () => {
    window.location.href = "tel:+917004437562";
  };

  return (
    <div
      className={`relative rounded-3xl p-8 bg-white text-gray-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        isHovered
          ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white"
          : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-5xl font-bold">{price}</span>
          <span className="text-sm ml-2 opacity-80">{period}</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        <li className="flex items-center">
          <Check className="w-5 h-5 mr-3 flex-shrink-0" />
          <span className="text-sm">Wi-Fi Access</span>
        </li>
        <li className="flex items-center">
          <Check className="w-5 h-5 mr-3 flex-shrink-0" />
          <span className="text-sm">Reserved Seating</span>
        </li>
        <li className="flex items-center">
          <Check className="w-5 h-5 mr-3 flex-shrink-0" />
          <span className="text-sm">Basic Study Facilities</span>
        </li>
        <li className="flex items-center">
          <Check className="w-5 h-5 mr-3 flex-shrink-0" />
          <span className="text-sm">Time Slots: {timeSlots.join(", ")}</span>
        </li>
      </ul>

      {/* Buttons appear only on hover */}
      {isHovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
          <button
            onClick={handleContactClick}
            className="w-full py-3 px-6 rounded-full font-semibold bg-white text-blue-600 hover:bg-gray-100 transition-all transform hover:scale-105 mb-2"
          >
            Contact Us
          </button>
          <button
            onClick={handleCallClick}
            className="w-full py-3 px-6 rounded-full font-semibold bg-white text-blue-600 hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Call Now
          </button>
        </div>
      )}
    </div>
  );
}

export function Membership() {
  const plans = [
    {
      title: "4 Hours",
      price: "₹350",
      period: "per session",
      timeSlots: [
        "06 AM - 10 AM",
        "10 AM - 02 PM",
        "02 PM - 06 PM",
        "06 PM - 10 PM",
      ],
    },
    {
      title: "6 Hours",
      price: "₹500",
      period: "per session",
      timeSlots: ["06 AM - 12 PM", "12 PM - 06 PM"],
    },
    {
      title: "8 Hours",
      price: "₹650",
      period: "per session",
      timeSlots: ["06 AM - 02 PM", "02 PM - 10 PM"],
    },
    {
      title: "12 Hours",
      price: "₹900",
      period: "per session",
      timeSlots: ["06 AM - 06 PM", "06 PM - 06 AM"],
    },
  ];

  return (
    <section id="membership" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Study Plans & Pricing
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Select a time slot that fits your study schedule.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
