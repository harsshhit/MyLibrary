import React from 'react';
import { BookOpen, Newspaper, FileText, TestTube, Monitor } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  color: string;
}

function ResourceCard({ title, description, items, icon, color }: ResourceCardProps) {
  return (
    <div className={`group p-8 rounded-3xl bg-gradient-to-br ${color} text-white transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden`}>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500"></div>
      <div className="relative">
        <div className="flex items-center mb-8">
          <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm transform transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
        <p className="text-white/90 mb-8 group-hover:translate-x-2 transition-transform duration-300 delay-75">{description}</p>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-white/70 group-hover:bg-white transition-colors duration-300"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full transform translate-x-16 translate-y-16 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></div>
    </div>
  );
}

export function Resources() {
  const resources = [
    {
      title: "Competitive Exam Books",
      description: "Comprehensive collection of study materials for all major exams",
      items: [
        "UPSC Civil Services",
        "SSC & Banking",
        "NEET & JEE",
        "GATE & ESE",
        "CA & CS"
      ],
      icon: <BookOpen className="h-8 w-8 text-white" />,
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Current Affairs",
      description: "Stay updated with latest news and developments",
      items: [
        "Daily Newspapers",
        "Monthly Magazines",
        "Current Affairs Digests",
        "Weekly Analysis",
        "Opinion Columns"
      ],
      icon: <Newspaper className="h-8 w-8 text-white" />,
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "Study Materials",
      description: "Well-organized notes and guides for effective preparation",
      items: [
        "Subject-wise Notes",
        "Previous Year Papers",
        "Topic-wise Summaries",
        "Quick Revision Guides",
        "Formula Sheets"
      ],
      icon: <FileText className="h-8 w-8 text-white" />,
      color: "from-green-600 to-green-800"
    },
    {
      title: "Practice Tests",
      description: "Regular mock tests and assessments for self-evaluation",
      items: [
        "Full Length Mock Tests",
        "Subject-wise Tests",
        "Daily Quiz Series",
        "Performance Analytics",
        "Detailed Solutions"
      ],
      icon: <TestTube className="h-8 w-8 text-white" />,
      color: "from-red-600 to-red-800"
    },
    {
      title: "Digital Resources",
      description: "Online learning tools and digital study materials",
      items: [
        "E-Library Access",
        "Video Lectures",
        "Online Test Series",
        "Study Apps Access",
        "Digital Notes"
      ],
      icon: <Monitor className="h-8 w-8 text-white" />,
      color: "from-yellow-600 to-yellow-800"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 inline-block">
            Study Resources
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive study materials and resources for your exam preparation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
}