import { Truck, Factory, Cpu, Search, FileCheck, Clock } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: <Truck className="w-10 h-10 text-sibelcom-orange" />,
    title: 'Логистика',
    description: 'Прямые поставки электронных компонентов из Китая с оптимальными сроками доставки'
  },
  {
    icon: <Factory className="w-10 h-10 text-sibelcom-orange" />,
    title: 'Контрактное производство',
    description: 'Размещение заказов на производство электронных изделий под вашими требованиями'
  },
  {
    icon: <Cpu className="w-10 h-10 text-sibelcom-orange" />,
    title: 'Моточные изделия',
    description: 'Производство трансформаторов, дросселей и других моточных изделий на заказ'
  },
  {
    icon: <Search className="w-10 h-10 text-sibelcom-orange" />,
    title: 'Подбор аналогов',
    description: 'Помощь в поиске и подборе аналогов снятых с производства компонентов'
  },
  {
    icon: <FileCheck className="w-10 h-10 text-sibelcom-orange" />,
    title: 'Контроль качества',
    description: 'Тщательная проверка каждой партии товара перед отправкой заказчику'
  },
  {
    icon: <Clock className="w-10 h-10 text-sibelcom-orange" />,
    title: 'Срочная поставка',
    description: 'Возможность экспресс-доставки компонентов для срочных производственных нужд'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-sibelcom-lightBg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading-center">Наши услуги</h2>
          <p className="max-w-2xl mx-auto text-lg mt-4">
            Предлагаем полный комплекс услуг по поставке электронных компонентов, от закупки до контроля качества
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
            >
              {/* Декоративный ромб в углу */}
              <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="diamond-shape bg-sibelcom-gray w-20 h-20"></div>
              </div>
              
              <div className="flex flex-col h-full">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-sibelcom-darkgray">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Button variant="link" className="px-0 text-sibelcom-orange hover:text-sibelcom-orange/80 font-medium">
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-sibelcom-orange hover:bg-sibelcom-orange/90 text-white px-8 py-6">
            Все услуги
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
