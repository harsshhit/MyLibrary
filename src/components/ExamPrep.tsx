import React from 'react';
import { Calendar, Trophy } from 'lucide-react';

interface PrepCardProps {
  title: string;
  description: string;
  date?: string;
  image: string;
  icon: React.ReactNode;
  buttonText: string;
}

function PrepCard({ title, description, date, image, icon, buttonText }: PrepCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div 
        className="h-56 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-8">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
              {icon}
            </div>
            {date && (
              <span className="ml-3 text-sm text-white/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                {date}
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white/90 mb-6 text-sm transform transition-all duration-500 group-hover:opacity-100 opacity-0">
            {description}
          </p>
          <button className="bg-white text-blue-600 px-6 py-2.5 rounded-full text-sm font-semibold transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-blue-50 group-hover:translate-y-0 translate-y-8">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ExamPrep() {
  const prepItems = [
    // {
    //   title: "UPSC Strategy Session",
    //   description: "Learn effective strategies from top rankers and expert mentors",
    //   date: "Next Session: March 15",
    //   image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //   icon: <Target className="h-5 w-5 text-white" />,
    //   buttonText: "Register Now"
    // },
    // {
    //   title: "Study Group Formation",
    //   description: "Join or create study groups for collaborative preparation",
    //   image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //   icon: <Users className="h-5 w-5 text-white" />,
    //   buttonText: "Find Group"
    // },
    // {
    //   title: "Mock Test Series",
    //   description: "Weekly mock tests with detailed analysis and solutions",
    //   date: "Every Sunday",
    //   image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //   icon: <BookOpen className="h-5 w-5 text-white" />,
    //   buttonText: "Enroll Now"
    // },
    {
      title: "Success Stories",
      description: "Interactive sessions with successful candidates",
      date: "Monthly Feature",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      icon: <Trophy className="h-5 w-5 text-white" />,
      buttonText: "Read Stories"
    },
    // {
    //   title: "Expert Lectures",
    //   description: "Subject-specific guidance from experienced faculty",
    //   date: "Bi-weekly",
    //   image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    //   icon: <Brain className="h-5 w-5 text-white" />,
    //   buttonText: "View Schedule"
    // },
    {
      title: "Exam Calendar",
      description: "Stay updated with important dates and deadlines",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      icon: <Calendar className="h-5 w-5 text-white" />,
      buttonText: "View Calendar"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 inline-block">
            Exam Preparation Support
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support system to help you achieve your goals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {prepItems.map((item, index) => (
            <PrepCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}