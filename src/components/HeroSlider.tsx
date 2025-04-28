import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

type Slide = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
};

const HeroSlider = () => {
  const slides: Slide[] = [
    {
      id: 1,
      title: 'Более 13 лет на рынке',
      description: 'Прямые поставки качественных электронных компонентов из Китая',
      imageUrl: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      buttonText: 'Узнать больше',
      buttonLink: '/about',
    },
    {
      id: 2,
      title: 'Гарантия 12 месяцев на весь товар',
      description: 'Высокое качество продукции от проверенных производителей',
      imageUrl: 'https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      buttonText: 'Наши гарантии',
      buttonLink: '/quality-control',
    },
    {
      id: 3,
      title: 'Поиск по базам поставщиков',
      description: 'Оперативный подбор необходимых компонентов по вашим требованиям',
      imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      buttonText: 'К поиску',
      buttonLink: '/datasheet',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full hero-slide overflow-hidden mt-20">
      <div className="absolute inset-0 z-10 flex items-center justify-between px-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
          aria-label="Предыдущий слайд"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
          aria-label="Следующий слайд"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center container-custom text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl max-w-xl mb-8 animate-fade-in">
                {slide.description}
              </p>
              <div>
                <Button
                  asChild
                  className="bg-sibelcom-yellow hover:bg-sibelcom-orange text-black font-bold px-6 py-3 rounded-md animate-fade-in"
                >
                  <a href={slide.buttonLink}>{slide.buttonText}</a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-sibelcom-yellow' : 'bg-white/50'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
