import { Button } from './ui/button';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">О компании</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Команда СибЭлком Логистика" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              <strong>СибЭлком Логистика</strong> — ведущий поставщик электронных компонентов 
              с прямыми контрактами от китайских производителей. Наша компания 
              работает на рынке более 13 лет, обеспечивая российских клиентов 
              качественными комплектующими по конкурентным ценам.
            </p>
            <p className="text-lg mb-6">
              Мы специализируемся на поиске, закупке и доставке широкого спектра 
              электронных компонентов: от микроконтроллеров и датчиков до 
              пассивных компонентов и коннекторов. Благодаря налаженным связям 
              с производителями, мы гарантируем оригинальность и высокое качество 
              всей поставляемой продукции.
            </p>
            <Button 
              asChild
              className="bg-sibelcom-black hover:bg-sibelcom-gray text-white"
            >
              <a href="/about">Подробнее о компании</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
