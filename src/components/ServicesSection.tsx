import {
  Truck,
  Search,
  ShieldCheck,
  Users,
  RefreshCw,
  PackageCheck
} from 'lucide-react';
import { Button } from './ui/button';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow group">
    <div className="w-16 h-16 flex items-center justify-center rounded-md bg-sibelcom-orange/10 text-sibelcom-orange mb-4 group-hover:bg-sibelcom-orange group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <Truck size={32} />,
      title: 'Прямые поставки',
      description: 'Организация прямых поставок электронных компонентов от производителей из Китая.',
    },
    {
      icon: <Search size={32} />,
      title: 'Подбор аналогов',
      description: 'Профессиональный подбор аналогов электронных компонентов с учетом всех технических требований.',
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Контроль качества',
      description: 'Многоступенчатая проверка качества компонентов перед отправкой заказчику.',
    },
    {
      icon: <Users size={32} />,
      title: 'Техническая поддержка',
      description: 'Квалифицированная консультация по выбору компонентов и их применению.',
    },
    {
      icon: <RefreshCw size={32} />,
      title: 'Контрактное производство',
      description: 'Размещение заказов на контрактное производство электронных компонентов в Китае.',
    },
    {
      icon: <PackageCheck size={32} />,
      title: 'Моточные изделия',
      description: 'Изготовление и поставка трансформаторов, дросселей и других моточных изделий.',
    },
  ];

  return (
    <section className="py-20 bg-sibelcom-lightgray" id="services">
      <div className="container-custom">
        <h2 className="section-title">Наши услуги</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-sibelcom-orange hover:bg-sibelcom-orange/90 text-white">
            Все услуги
          </Button>
        </div>
        
        {/* Декоративный элемент в стиле логотипа */}
        <div className="relative h-20 mt-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-sibelcom-orange rotate-45 animate-rotate-diamond"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-x-16 w-8 h-8 bg-sibelcom-gray rotate-45"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
