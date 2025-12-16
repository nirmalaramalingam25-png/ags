import React from 'react';
import { Briefcase, Zap, Globe, Users } from "lucide-react";

interface FlipCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flip-card w-64 h-64 mx-4">
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
        <div className="flip-card-front absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg border border-muted flex flex-col items-center justify-center p-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
            {icon}
          </div>
          <h3 className="font-bold text-xl text-center">{title}</h3>
        </div>
        <div className="flip-card-back absolute inset-0 w-full h-full backface-hidden bg-primary text-primary-foreground rounded-xl shadow-lg flex items-center justify-center p-6 rotate-y-180">
          <p className="text-center text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

const FlipBook: React.FC = () => {
  const cards = [
    {
      icon: <Briefcase size={32} />,
      title: "Fast & Reliable Hiring",
      description: "We understand the urgency of today’s workforce needs. Our streamlined process delivers qualified candidates quickly, without compromising quality."
    },
    {
      icon: <Zap size={32} />,
      title: "Industry-Specific Expertise",
      description: "From IT and Healthcare to Engineering, Finance, and Customer Support, our recruiters specialize in the fields they serve. We know what great talent looks like."
    },
    {
      icon: <Users size={32} />,
      title: "Flexible Staffing Solutions",
      description: "Whether you need full-time employees, contract staff, remote teams, or high-volume hiring, we customize solutions to match your goals."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Network",
      description: "Opportunities across the country and around the world."
    }
  ];

  return (
    <div className="flex justify-center items-center min-h-[400px] py-20">
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <FlipCard key={index} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default FlipBook;
