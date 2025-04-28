import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Более 13 лет на рынке',
    description: 'Прямые поставки качественных электронных компонентов из Китая',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
  },
  {
    id: 2,
    title: 'Гарантия 12 месяцев',
    description: 'На весь товар предоставляется гарантия качества и подлинности',
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 3,
    title: 'Поиск по базам поставщиков',
    description: 'Находим редкие и снятые с производства электронные компоненты',
    image: 'https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1739&q=80',
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
  }, []);

  return (
    <section className="relative h-[600px] mt-20">
      {/* Слайды */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container-custom h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <div className="inline-block mb-6">
                <div className="diamond-shape bg-sibelcom-orange w-16 h-16 mb-4 animate-rotate-diamond">
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="diamond-shape bg-white w-10 h-10"></div>
                  </div>
                </div>
              </div>
              <h2 className="text-4xl font-bold animate-slide-left">{slide.title}</h2>
              <p className="text-xl mt-4 animate-slide-right">{slide.description}</p>
              <Button className="mt-8 bg-sibelcom-orange hover:bg-sibelcom-orange/90 px-8 py-6 text-white rounded-full">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Навигация */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-sibelcom-orange' : 'bg-white/50'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      {/* Кнопки влево/вправо */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        onClick={prevSlide}
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        onClick={nextSlide}
        aria-label="Следующий слайд"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default HeroSlider;
