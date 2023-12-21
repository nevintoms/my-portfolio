import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="pt-4 text-sm cursor-pointer">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:drop-shadow-xl transition duration-300 ease-in-out">
        <div className="md:flex">
          <div className="p-5">
            <div className="uppercase tracking-wide text-sm font-semibold">{title}</div>
            <p className="mt-2 text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
