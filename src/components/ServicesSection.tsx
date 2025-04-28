
import { Truck, Cpu, Search, ShieldCheck, Clock, Zap } from 'lucide-react';
import { Button } from './ui/button';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const services: ServiceCard[] = [
  {
    icon: <Truck className="h-10 w-10 text-sibelcom-yellow" />,
    title: 'Линия поставок',
    description: 'Прямые поставки электронных компонентов от производителей Китая, Тайваня и Юго-Восточной Азии.',
    link: '/supply-line'
  },
  {
    icon: <Cpu className="h-10 w-10 text-sibelcom-yellow" />,
    title: 'Контрактное производство',
    description: 'Полный цикл производства электроники от проектирования до монтажа и тестирования.',
    link: '/contract-manufacturing'
  },
  {
    icon: <Zap className="h-10 w-10 text-sibelcom-yellow" />,
    title: 'Моточные изделия',
    description: 'Производство трансформаторов, дросселей, катушек индуктивности и других моточных изделий.',
    link: '/winding-products'
  },
  {
    icon: <Search className="h-10 w-10 text-sibelcom-yellow" />,
    title: 'Подбор аналогов',
    description: 'Профессиональный подбор аналогов электронных компонентов при снятии с производства или дефиците.',
    link: '/analogs'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-sibelcom-yellow" />,
    title: 'Контроль качества',
    description: 'Многоступенчатая система проверки и тестирования каждой партии компонентов.',
    link: '/quality-control'
  },
  {
    icon: <Clock className="h-10 w-10 text-sibelcom-yellow" />,
    title: 'Быстрые сроки',
    description: 'Оптимальные сроки поставки благодаря отлаженной логистике и наличию собственных складов.',
    link: '/delivery'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-sibelcom-lightBg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-sibelcom-black">Наши услуги</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Мы предлагаем полный комплекс услуг по поставке электронных компонентов 
            и контрактному производству электроники
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-sibelcom-black">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <a 
                href={service.link}
                className="text-sibelcom-black font-medium inline-flex items-center hover:text-sibelcom-yellow transition-colors"
              >
                Подробнее
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            className="bg-sibelcom-yellow hover:bg-sibelcom-orange text-sibelcom-black font-medium"
          >
            Все услуги
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
