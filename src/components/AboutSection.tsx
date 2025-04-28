
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-sibelcom-black">О компании</h2>
            
            <p className="text-gray-700 mb-4">
              <strong>СибЭлком Логистика</strong> - надежный поставщик электронных компонентов 
              напрямую от китайских производителей. Более 13 лет мы обеспечиваем 
              российские предприятия качественными комплектующими для электроники.
            </p>
            
            <p className="text-gray-700 mb-6">
              Наша компания специализируется на прямых поставках электронных компонентов, 
              минуя посредников, что позволяет предлагать конкурентные цены и оптимальные 
              сроки доставки. Мы гарантируем качество всей поставляемой продукции и 
              обеспечиваем полную техническую поддержку.
            </p>
            
            <Button 
              variant="outline" 
              className="group flex items-center border-sibelcom-yellow text-sibelcom-black hover:bg-sibelcom-yellow"
            >
              Подробнее о компании
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Команда СибЭлком" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-5 -left-5 bg-sibelcom-yellow p-4 rounded-lg shadow-lg">
                <p className="font-bold text-sibelcom-black">13+ лет опыта</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
