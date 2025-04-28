import { Truck, Factory, SearchCheck, Clock } from 'lucide-react';
import { Button } from './ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-sibelcom-yellow" />,
      title: 'Прямые поставки',
      description: 'Доставка электронных компонентов напрямую от китайских производителей с минимальными сроками.',
    },
    {
      icon: <Factory className="h-12 w-12 text-sibelcom-yellow" />,
      title: 'Контрактное производство',
      description: 'Изготовление электронных компонентов и устройств по техническому заданию заказчика.',
    },
    {
      icon: <SearchCheck className="h-12 w-12 text-sibelcom-yellow" />,
      title: 'Подбор аналогов',
      description: 'Поиск и подбор функциональных аналогов для замены снятых с производства или труднодоступных компонентов.',
    },
    {
      icon: <Clock className="h-12 w-12 text-sibelcom-yellow" />,
      title: 'Срочные поставки',
      description: 'Ускоренная доставка критически важных компонентов для обеспечения непрерывности производства.',
    },
  ];

  return (
    <section className="py-16 bg-sibelcom-lightBg">
      <div className="container-custom">
        <h2 className="section-title">Наши услуги</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
              <p className="text-sibelcom-gray text-center">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            asChild
            className="bg-sibelcom-black hover:bg-sibelcom-gray text-white px-6"
          >
            <a href="/services">Все услуги</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
