'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const Card = ({ title, content, image }) => {
  const cardRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setMouse({ x: 0, y: 0 });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 2;
    const y = ((e.clientY - top) / height - 0.5) * -2;
    setMouse({ x, y });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="card-wrap cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <div
        className="card relative w-60 h-80 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 ease-out"
        style={{
          transform: `rotateY(${mouse.x * 15}deg) rotateX(${mouse.y * 15}deg)`,
        }}
      >
        <div
          className="card-bg absolute top-0 left-[-10%] w-[120%] h-full bg-cover bg-center transition-transform duration-500 ease-out"
          style={{
            backgroundImage: `url(${image})`,
            transform: `translateX(${mouse.x * -20}px) translateY(${mouse.y * -10}px)`,
          }}
        />
        <div className="card-info absolute bottom-0 p-5 text-white bg-black/50 rounded-b-xl transition-opacity duration-500">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const cards = [
    { title: 'Beaches', content: 'Lorem ipsum dolor sit amet.', image: '/images/team/bayu.png' },
    { title: 'Canyons', content: 'Lorem ipsum dolor sit amet.', image: '/images/team/haikal-1.jpeg' },
    { title: 'Trees', content: 'Lorem ipsum dolor sit amet.', image: '/images/team/drian.png' },
    { title: 'Lakes', content: 'Lorem ipsum dolor sit amet.', image: '/images/team/agil.png' },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center bg-transparent py-10">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Hover over the cards</h1>
      <div className="container flex flex-wrap justify-center gap-6 px-10">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} image={card.image} />
        ))}
      </div>
    </main>
  );
}
