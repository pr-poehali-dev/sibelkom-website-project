import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Изображение с элементами дизайна */}
          <div className="relative">
            <div className="diagonal-box h-64 w-full lg:h-96 mb-6 lg:mb-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Команда СибЭлком"
                className="object-cover h-full w-full"
              />
              {/* Декоративный элемент в стиле логотипа */}
              <div className="absolute -bottom-6 -right-6">
                <div className="diamond-shape bg-sibelcom-orange w-16 h-16">
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="diamond-shape bg-white w-10 h-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Текстовый контент */}
          <div>
            <h2 className="section-heading">О компании</h2>
            <p className="text-lg mb-4">
              Компания "СибЭлком Логистика" специализируется на прямых поставках электронных компонентов от ведущих китайских производителей. За более чем 13 лет работы мы установили надежные партнерские отношения с крупнейшими фабриками и дистрибьюторами Китая.
            </p>
            <p className="text-lg mb-6">
              Наша цель — обеспечить российские предприятия качественными комплектующими по конкурентоспособным ценам. Мы гарантируем подлинность всех поставляемых компонентов и предоставляем полную техническую поддержку на каждом этапе сотрудничества.
            </p>
            <Button className="bg-sibelcom-orange hover:bg-sibelcom-orange/90 text-white flex items-center group">
              Подробнее о компании
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
