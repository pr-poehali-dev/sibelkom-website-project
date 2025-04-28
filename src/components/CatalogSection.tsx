import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const categories = [
  {
    name: 'Микроконтроллеры',
    image: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    description: 'STM, AVR, PIC и другие серии'
  },
  {
    name: 'Пассивные компоненты',
    image: 'https://images.unsplash.com/photo-1546480985-904a696acc35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Резисторы, конденсаторы, индуктивности'
  },
  {
    name: 'Датчики и сенсоры',
    image: 'https://images.unsplash.com/photo-1559592654-7f6d41f40333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
    description: 'Датчики температуры, давления, движения'
  }
];

const CatalogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading-center">Каталог товаров</h2>
          <p className="max-w-2xl mx-auto text-lg mt-4">
            Широкий ассортимент электронных компонентов от ведущих производителей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Оранжевый ромб на карточке */}
                <div className="absolute top-4 right-4">
                  <div className="diamond-shape bg-sibelcom-orange w-10 h-10">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="diamond-shape bg-white w-6 h-6"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-sibelcom-darkgray/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-white/90 mb-4">{category.description}</p>
                  <Button variant="link" className="px-0 text-sibelcom-orange bg-transparent hover:text-white hover:bg-transparent flex items-center group-[.group]:group-hover:translate-x-2 transition-transform">
                    Перейти в категорию
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-sibelcom-orange hover:bg-sibelcom-orange/90 text-white px-8 py-6">
            Открыть полный каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
