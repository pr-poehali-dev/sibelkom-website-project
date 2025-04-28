import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container-custom">
        <h2 className="section-title">О компании</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg relative">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-39b9a49e5544?q=80&w=1470&auto=format&fit=crop" 
                alt="Офис СибЭлком" 
                className="w-full h-full object-cover"
              />
              {/* Декоративный элемент в стиле логотипа */}
              <div className="absolute -right-5 -bottom-5 w-20 h-20 border-4 border-sibelcom-orange transform rotate-45 bg-white/30"></div>
            </div>
            {/* Серый элемент, имитирующий серую часть логотипа */}
            <div className="absolute -left-5 -top-5 w-16 h-16 bg-sibelcom-gray transform -rotate-45"></div>
          </div>
          
          <div className="space-y-6">
            <div className="diamond-decoration">
              <p className="text-lg font-medium text-sibelcom-gray">
                СибЭлком - надежный партнер в поставках электронных компонентов
              </p>
            </div>
            
            <p className="text-gray-600">
              Компания "СибЭлком Логистика" специализируется на прямых поставках электронных компонентов от ведущих китайских производителей. С 2010 года мы обеспечиваем российские предприятия качественными электронными комплектующими по конкурентным ценам.
            </p>
            
            <p className="text-gray-600">
              Благодаря налаженным связям с производителями и отлаженной логистической цепочке, мы гарантируем кратчайшие сроки поставки и предоставляем полную гарантию на весь ассортимент товаров.
            </p>
            
            <p className="text-gray-600">
              Наша команда профессионалов поможет с подбором аналогов компонентов и проконсультирует по всем техническим вопросам.
            </p>
            
            <Button className="mt-8 bg-sibelcom-orange hover:bg-sibelcom-orange/90 text-white">
              Подробнее о компании
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
