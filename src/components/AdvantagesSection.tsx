import { CheckCircle, Clock, Award, DollarSign } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <CheckCircle className="h-10 w-10 text-sibelcom-yellow" />,
      title: 'Прямые контракты',
      description: 'Работаем напрямую с производителями, исключая посредников и дополнительные наценки'
    },
    {
      icon: <Clock className="h-10 w-10 text-sibelcom-yellow" />,
      title: 'Быстрая доставка',
      description: 'Оптимальные логистические схемы позволяют доставлять товары в кратчайшие сроки'
    },
    {
      icon: <Award className="h-10 w-10 text-sibelcom-yellow" />,
      title: 'Гарантия качества',
      description: 'Все поставляемые компоненты проходят многоступенчатый контроль качества'
    },
    {
      icon: <DollarSign className="h-10 w-10 text-sibelcom-yellow" />,
      title: 'Конкурентные цены',
      description: 'Прямые поставки и партнерские отношения с производителями позволяют предлагать выгодные цены'
    }
  ];

  return (
    <section className="py-16 bg-sibelcom-black text-white">
      <div className="container-custom">
        <h2 className="section-title text-white">Наши преимущества</h2>
        <p className="text-center text-sibelcom-gray max-w-2xl mx-auto mb-12">
          Благодаря многолетнему опыту работы с китайскими производителями, мы предлагаем нашим клиентам лучшие условия поставок электронных компонентов
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="p-6 border border-gray-800 rounded-lg hover:border-sibelcom-yellow transition-colors">
              <div className="mb-4 flex justify-center">{advantage.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">{advantage.title}</h3>
              <p className="text-sibelcom-gray text-center text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
