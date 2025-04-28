
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Более 13 лет на рынке',
    subtitle: 'Прямые поставки качественных электронных компонентов из Китая',
    buttonText: 'Узнать больше',
    buttonLink: '/about',
  },
  {
    image: 'https://images.unsplash.com/photo-1581092160607-ee22732de545?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Гарантия 12 месяцев',
    subtitle: 'На весь товар предоставляется полная гарантия и техническая поддержка',
    buttonText: 'Подробнее о гарантии',
    buttonLink: '/warranty',
  },
  {
    image: 'https://images.unsplash.com/photo-1580745294621-5246b32b2e71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    title: 'Поиск по базам поставщиков',
    subtitle: 'Найдем необходимые компоненты по лучшим ценам и оптимальным срокам',
    buttonText: 'Начать поиск',
    buttonLink: '/datasheet',
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] overflow-hidden mt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          
          <div className="relative h-full flex flex-col justify-center container-custom z-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl animate-fade-in">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-fade-in">
              {slide.subtitle}
            </p>
            <div>
              <Button 
                size="lg" 
                className="bg-sibelcom-yellow hover:bg-sibelcom-orange text-sibelcom-black font-medium"
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Навигационные кнопки */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Индикаторы */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-sibelcom-yellow' : 'w-2 bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
