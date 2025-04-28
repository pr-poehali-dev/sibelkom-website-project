import { ShieldCheck, Clock, ThumbsUp, Timer, Package, BadgePercent } from 'lucide-react';

const advantages = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-sibelcom-orange" />,
    title: 'Гарантия качества',
    description: 'Гарантия 12 месяцев на все поставляемые компоненты'
  },
  {
    icon: <Clock className="w-12 h-12 text-sibelcom-orange" />,
    title: 'Опыт работы',
    description: 'Более 13 лет успешной работы на рынке электронных компонентов'
  },
  {
    icon: <ThumbsUp className="w-12 h-12 text-sibelcom-orange" />,
    title: 'Прямые поставки',
    description: 'Работаем напрямую с китайскими производителями без посредников'
  },
  {
    icon: <Timer className="w-12 h-12 text-sibelcom-orange" />,
    title: 'Быстрая доставка',
    description: 'Оптимальные сроки доставки даже для сложных заказов'
  },
  {
    icon: <Package className="w-12 h-12 text-sibelcom-orange" />,
    title: 'Широкий ассортимент',
    description: 'Более 1 000 000 наименований электронных компонентов'
  },
  {
    icon: <BadgePercent className="w-12 h-12 text-sibelcom-orange" />,
    title: 'Конкурентные цены',
    description: 'Выгодные условия для постоянных клиентов и оптовых заказов'
  }
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Фоновый элемент в стиле логотипа */}
      <div className="absolute -right-36 top-1/2 -translate-y-1/2 opacity-5">
        <div className="diamond-shape bg-sibelcom-gray w-96 h-96"></div>
      </div>
      <div className="absolute -left-36 bottom-0 opacity-5">
        <div className="diamond-shape bg-sibelcom-orange w-64 h-64"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-heading-center">Наши преимущества</h2>
          <p className="max-w-2xl mx-auto text-lg mt-4">
            Почему клиенты выбирают СибЭлком Логистика для поставок электронных компонентов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex"
            >
              <div className="mr-4 mt-1">
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-sibelcom-darkgray">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
