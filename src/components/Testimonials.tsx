import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

function TestimonialCard({ name, role, content, rating, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 italic">{content}</p>
    </div>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      name: "Pooja Yadav",
      role: "UPSC Aspirant",
      content:
        "A peaceful place with no disturbances. The scheduled study time helps maintain discipline. Good for serious students!",
      rating: 5,
      image:
        "https://media.istockphoto.com/id/1272815911/photo/young-indian-female-university-student-stock-photo.jpg?s=612x612&w=0&k=20&c=Iwdc08GR3pw8_Qg3_nabNJUQYTo52EU3dvW4tsth1tE=",
    },
    {
      name: "Ravi Verma",
      role: "Engineering Student",
      content:
        "Affordable and clean environment. Wi-Fi speed is good, and having drinking water available is helpful. Would recommend to others.",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1604177091072-b7b677a077f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Suman Tiwari",
      role: "Bank Exam Aspirant",
      content:
        "Good place for self-study. The environment is quiet, and power backup is a plus. It would be great if they had more newspapers.",
      rating: 4,
      image:
        "https://www.shutterstock.com/image-photo/positive-young-indian-woman-student-260nw-2385200433.jpg",
    },
  ];


  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          What Our Members Say
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Don't just take our word for it - hear from our successful members
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}