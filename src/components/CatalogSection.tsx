import { Cpu, ChipIcon, BatteryMedium, Cable } from 'lucide-react';

const CatalogSection = () => {
  const categories = [
    {
      icon: <Cpu className="h-16 w-16 text-sibelcom-yellow" />,
      title: 'Микроконтроллеры',
      description: 'Широкий выбор микроконтроллеров различных архитектур и производителей',
      link: '/catalog/microcontrollers',
      brands: ['STM', 'NXP', 'Microchip', 'TI']
    },
    {
      icon: <ChipIcon className="h-16 w-16 text-sibelcom-yellow" />,
      title: 'Микросхемы',
      description: 'Интегральные схемы, операционные усилители, стабилизаторы и др.',
      link: '/catalog/chips',
      brands: ['Analog Devices', 'TI', 'Infineon', 'ST']
    },
    {
      icon: <BatteryMedium className="h-16 w-16 text-sibelcom-yellow" />,
      title: 'Пассивные компоненты',
      description: 'Резисторы, конденсаторы, индуктивности разных номиналов и типов',
      link: '/catalog/passive',
      brands: ['KEMET', 'Murata', 'YAGEO', 'Vishay']
    },
    {
      icon: <Cable className="h-16 w-16 text-sibelcom-yellow" />,
      title: 'Коннекторы',
      description: 'Разъемы, соединители и кабельная продукция для любых задач',
      link: '/catalog/connectors',
      brands: ['TE Connectivity', 'Molex', 'JST', 'Hirose']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Каталог товаров</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href={category.link}
              className="bg-sibelcom-lightBg p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center group"
            >
              <div className="mb-4 flex justify-center">{category.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-sibelcom-yellow transition-colors">{category.title}</h3>
              <p className="text-sibelcom-gray mb-4 text-sm">{category.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-sibelcom-gray mb-2">Популярные бренды:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.brands.map((brand, idx) => (
                    <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-sibelcom-gray">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="/catalog" 
            className="inline-block text-sibelcom-black font-medium hover:text-sibelcom-yellow transition-colors underline"
          >
            Перейти в полный каталог
          </a>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
