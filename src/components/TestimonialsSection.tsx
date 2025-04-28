import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  company: string;
  role: string;
  image: string;
  text: string;
  rating: number;
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Алексей Петров',
      company: 'ТехноМикс',
      role: 'Технический директор',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      text: 'Сотрудничаем с СибЭлком Логистика более 5 лет. За это время ни разу не возникло проблем с качеством компонентов. Особенно ценим оперативность поставок и профессиональные консультации по подбору аналогов.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Марина Соколова',
      company: 'Электроника-Плюс',
      role: 'Директор по закупкам',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      text: 'Благодаря сотрудничеству с СибЭлком Логистика мы смогли значительно сократить сроки поставок компонентов для наших проектов. Отдельная благодарность за помощь в подборе аналогов снятых с производства микросхем.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Дмитрий Иванов',
      company: 'НПО Импульс',
      role: 'Главный инженер',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      text: 'Надёжный поставщик с отличным сервисом. Всегда держат в курсе о статусе заказа, предоставляют подробную документацию. За три года сотрудничества ни одной задержки или проблемы с качеством.',
      rating: 4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-sibelcom-lightBg">
      <div className="container-custom">
        <h2 className="section-title">Отзывы клиентов</h2>
        
        <div className="relative mt-12 max-w-4xl mx-auto">
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-sibelcom-black hover:bg-sibelcom-yellow transition-colors"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-6">
                      <div className="flex-shrink-0 mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-sibelcom-gray text-sm">{testimonial.role}, {testimonial.company}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={i < testimonial.rating ? 'text-sibelcom-yellow fill-sibelcom-yellow' : 'text-gray-300'} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="italic text-sibelcom-gray">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-sibelcom-black hover:bg-sibelcom-yellow transition-colors"
              aria-label="Следующий отзыв"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-sibelcom-yellow' : 'bg-gray-300'
              }`}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
