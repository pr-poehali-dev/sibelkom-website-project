
import { Button } from './ui/button';

interface CatalogItem {
  image: string;
  title: string;
  count: string;
  link: string;
}

const catalogItems: CatalogItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    title: 'Микроконтроллеры',
    count: '2500+ наименований',
    link: '/catalog/microcontrollers'
  },
  {
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    title: 'Пассивные компоненты',
    count: '10000+ наименований',
    link: '/catalog/passive'
  },
  {
    image: 'https://images.unsplash.com/photo-1563770660941-10a1b3f5c321?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    title: 'Датчики и сенсоры',
    count: '1500+ наименований',
    link: '/catalog/sensors'
  },
  {
    image: 'https://images.unsplash.com/photo-1611073061518-8d2b87f8cb9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    title: 'Силовая электроника',
    count: '3000+ наименований',
    link: '/catalog/power'
  },
  {
    image: 'https://images.unsplash.com/photo-1563770660938-ec3ed01fd44e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    title: 'Разъемы и соединители',
    count: '5000+ наименований',
    link: '/catalog/connectors'
  },
  {
    image: 'https://images.unsplash.com/photo-1601045569976-ac87f017f9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    title: 'Дисплеи и индикаторы',
    count: '800+ наименований',
    link: '/catalog/displays'
  }
];

const CatalogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-sibelcom-black">Каталог товаров</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Мы поставляем широкий ассортимент электронных компонентов от ведущих производителей Китая и Юго-Восточной Азии
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogItems.map((item, index) => (
            <a 
              key={index}
              href={item.link}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{item.count}</p>
                <span className="inline-flex items-center text-sibelcom-yellow text-sm font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Перейти в каталог
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            className="bg-sibelcom-yellow hover:bg-sibelcom-orange text-sibelcom-black font-medium"
          >
            Полный каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
