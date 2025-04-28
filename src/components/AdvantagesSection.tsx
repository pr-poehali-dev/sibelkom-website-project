
import { Shield, Truck, Badge, DollarSign, Clock, HeadphonesIcon } from 'lucide-react';

interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    icon: <Shield className="h-10 w-10 text-sibelcom-yellow" />,
    title: 'Гарантия качества',
    description: 'На все поставляемые компоненты предоставляется гарантия 12 месяцев.'
  },
  {
    icon: <Truck className="h-10 w-10 text-sibelcom-yellow" />,
    title: 'Прямые поставки',
    description: 'Работаем напрямую с производителями, исключая посредников.'
  },
  {
    icon: <Badge className="h-10 w-10 text-sibelcom-yellow" />,
    title: '13+ лет опыта',
    description: 'Более 13 лет успешной работы на рынке электронных компонентов.'
  },
  {
    icon: <DollarSign className="h-10 w-10 text-sibelcom-yellow" />,
    title: 'Конкурентные цены',
    description: 'Оптимальное соотношение цены и качества на все товары.'
  },
  {
    icon: <Clock className="h-10 w-10 text-sibelcom-yellow" />,
    title: 'Быстрые сроки',
    description: 'Минимальные сроки поставки благодаря отлаженной логистике.'
  },
  {
    icon: <HeadphonesIcon className="h-10 w-10 text-sibelcom-yellow" />,
    title: 'Техническая поддержка',
    description: 'Профессиональная консультация на всех этапах сотрудничества.'
  }
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 bg-sibelcom-black text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Почему клиенты выбирают СибЭлком Логистика для поставки электронных компонентов
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="p-6 border border-gray-800 rounded-lg transition-transform hover:-translate-y-1"
            >
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-gray-400">{advantage.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-900 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Нужна консультация?</h3>
              <p className="text-gray-400">
                Свяжитесь с нами для получения профессиональной консультации
              </p>
            </div>
            <button className="py-3 px-6 bg-sibelcom-yellow hover:bg-sibelcom-orange text-sibelcom-black font-medium rounded-lg transition-colors">
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
