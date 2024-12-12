'use client';

import { useState, useEffect } from 'react';

export default function Caroussel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: '/skateboard.png',
      title: 'Explorer de nouveaux horizons',
      paragraph: `Échappez à la routine et découvrez 
des destinations uniques où chaque voyage 
devient une histoire inoubliable.`,
    },
    {
      image: '/travel.png',
      title: 'Découvrez votre prochaine aventure',
      paragraph: `Que ce soit pour un week-end spontané 
ou un voyage planifié, trouvez l'expérience 
qui vous correspond.`,
    },
    {
      image: '/holiday.png',
      title: 'Le monde vous attend',
      paragraph: `Des escapades locales aux séjours 
internationaux, explorez les merveilles 
du monde avec nous.`,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="text-center relative px-10 py-5">
      {/* Titre ajusté */}
      <h1 className="absolute top-5 text-3xl font-bold text-white">
        Bienvenue sur Wegodia !
      </h1>
      <div className="relative w-[400px] h-[400px] overflow-hidden mb-5 mx-auto">
        {/* Images animées */}
        <div
          className="absolute flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-[400px] h-[400px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
      <div>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full transition-opacity ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
            <p className="text-md">{slide.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
