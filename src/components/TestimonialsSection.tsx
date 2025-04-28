
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "СибЭлком Логистика обеспечивает нас качественными компонентами уже более 5 лет. Ни разу не подвели с качеством и сроками поставки. Особенно ценим их способность оперативно найти редкие компоненты.",
    author: "Александр Петров",
    position: "Технический директор",
    company: "ООО 'НПО Электроника'",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Профессиональный подход к поставкам и отличное качество компонентов. Сотрудничаем с компанией уже 3 года и всегда получаем именно то, что заказываем, в оговоренные сроки.",
    author: "Елена Иванова",
    position: "Руководитель отдела закупок",
    company: "АО 'Технопрогресс'",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Благодаря СибЭлком Логистика мы смогли решить проблему с поставками компонентов, когда наш прежний поставщик не смог выполнить обязательства. Они оперативно нашли все необходимое и доставили в кратчайшие сроки.",
    author: "Михаил Соколов",
    position: "Генеральный директор",
    company: "ЗАО 'Микрон'",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="py-16 bg-sibelcom-lightBg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-sibelcom-black">Отзывы клиентов</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Что говорят о нас те, кто уже оценил качество нашей работы
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-sibelcom-yellow opacity-25">
            <Quote size={60} />
          </div>
          
          <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].author}
                className="w-24 h-24 rounded-full object-cover border-4 border-sibelcom-yellow"
              />
            </div>
            
            <div>
              <p className="text-gray-700 italic mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div>
                <h4 className="font-bold text-sibelcom-black">{testimonials[currentIndex].author}</h4>
                <p className="text-sm text-gray-600">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          {/* Кнопки навигации */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-gray-300 hover:bg-sibelcom-yellow hover:border-sibelcom-yellow transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-sibelcom-yellow' : 'bg-gray-300'
                }`}
              />
            ))}
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-gray-300 hover:bg-sibelcom-yellow hover:border-sibelcom-yellow transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
