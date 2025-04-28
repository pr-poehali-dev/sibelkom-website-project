import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: 'Работаем с компанией СибЭлком Логистика уже более 5 лет. За это время не было ни одного случая поставки некачественных компонентов. Особенно ценим их помощь в поиске снятых с производства деталей.',
    author: 'Иван Петров',
    position: 'Технический директор, ООО "ЭлектроТех"',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
  },
  {
    id: 2,
    text: 'Благодаря СибЭлком Логистика мы смогли уложиться в сжатые сроки выполнения государственного заказа. Компоненты были доставлены точно в срок, вся партия соответствовала заявленным характеристикам.',
    author: 'Елена Смирнова',
    position: 'Руководитель отдела снабжения, АО "Промсвязь"',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80'
  },
  {
    id: 3,
    text: 'Отличительная черта СибЭлком Логистика – способность находить редкие компоненты и предлагать качественные аналоги. Это существенно сокращает время на разработку новых устройств и модернизацию существующих.',
    author: 'Алексей Никифоров',
    position: 'Главный инженер, ЗАО "СпецПрибор"',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-sibelcom-lightBg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading-center">Отзывы клиентов</h2>
          <p className="max-w-2xl mx-auto text-lg mt-4">
            Что говорят о нас наши постоянные клиенты
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Цитата */}
          <div className="absolute -top-10 -left-10 text-sibelcom-orange opacity-20">
            <Quote size={80} />
          </div>
          
          {/* Текущий отзыв */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-10 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-sibelcom-orange">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-lg italic mb-6">"{testimonials[currentIndex].text}"</p>
                <div>
                  <h4 className="font-bold text-sibelcom-darkgray">{testimonials[currentIndex].author}</h4>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Элементы навигации */}
          <div className="mt-8 flex justify-center items-center">
            <button 
              onClick={prevTestimonial}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-sibelcom-darkgray hover:text-sibelcom-orange transition-colors mr-4"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-sibelcom-orange' : 'bg-gray-300'
                  }`}
                  aria-label={`Отзыв ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-sibelcom-darkgray hover:text-sibelcom-orange transition-colors ml-4"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Декоративный элемент */}
          <div className="absolute -bottom-6 -right-6">
            <div className="diamond-shape bg-sibelcom-orange w-16 h-16 opacity-20">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="diamond-shape bg-white w-10 h-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
