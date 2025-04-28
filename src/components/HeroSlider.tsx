import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  bgImage: string;
  action: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: 'Более 13 лет на рынке',
    subtitle: 'Прямые поставки качественных электронных компонентов из Китая',
    bgImage: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=1470&auto=format&fit=crop',
    action: 'Узнать больше',
  },
  {
    id: 2,
    title: 'Гарантия 12 месяцев',
    subtitle: 'На весь поставляемый товар и комплектующие',
    bgImage: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1470&auto=format&fit=crop',
    action: 'Условия гарантии',
  },
  {
    id: 3,
    title: 'Поиск по базам поставщиков',
    subtitle: 'Быстрый подбор необходимых электронных компонентов',
    bgImage: 'https://images.unsplash.com/photo-1556382363-8429fce12935?q=80&w=1374&auto=format&fit=crop',
    action: 'Начать поиск',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Автоматическая смена слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative h-[600px] mt-20 overflow-hidden">
      {/* Слайды */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container-custom h-full flex flex-col justify-center items-start">
            <div className="max-w-2xl text-white relative animate-fade-in">
              {/* Декоративный ромб (как в логотипе) */}
              <div className="absolute -left-12 top-0 w-8 h-8 bg-sibelcom-orange transform rotate-45"></div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-8">{slide.subtitle}</p>
              <Button className="bg-sibelcom-orange hover:bg-sibelcom-orange/90 text-white px-8 py-6 rounded-md">
                {slide.action}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Кнопки навигации */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-sibelcom-orange' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
