import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sibelcom-darkgray text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Информация о компании */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="СибЭлком Логистика" className="h-12 mr-3 bg-white p-1 rounded" />
            </div>
            <p className="text-gray-300 mb-6">
              Прямые поставки электронных компонентов от китайских производителей. Более 13 лет на рынке.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-sibelcom-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-sibelcom-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-sibelcom-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-sibelcom-orange transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Навигация */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-sibelcom-orange after:left-0 after:-bottom-2">
              Разделы сайта
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-sibelcom-orange transition-colors">О компании</Link>
              </li>
              <li>
                <Link to="/supply-line" className="text-gray-300 hover:text-sibelcom-orange transition-colors">Линия поставок</Link>
              </li>
              <li>
                <Link to="/contract-manufacturing" className="text-gray-300 hover:text-sibelcom-orange transition-colors">Контрактное производство</Link>
              </li>
              <li>
                <Link to="/analogs" className="text-gray-300 hover:text-sibelcom-orange transition-colors">Подбор аналогов</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-sibelcom-orange transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
          
          {/* Каталог */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-sibelcom-orange after:left-0 after:-bottom-2">
              Каталог
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/catalog/microcontrollers" className="text-gray-300 hover:text-sibelcom-orange transition-colors">Микроконтроллеры</Link>
              </li>
              <li>
                <Link to="/catalog/passive" className="text-gray-300 hover:text-sibelcom-orange transition-colors">Пассивные компоненты</Link>
              </li>
              <li>
                <Link to="/catalog/sensors" className="text-gray-300 hover:text-sibelcom-orange transition-colors">Датчики и сенсоры</Link>
              </li>
              <li>
                <Link to="/catalog/connectors" className="text-gray-300 hover:text-sibelcom-orange transition-colors">Разъёмы и соединители</Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-sibelcom-orange transition-colors">Полный каталог</Link>
              </li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-sibelcom-orange after:left-0 after:-bottom-2">
              Контакты
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="text-sibelcom-orange mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-300">+7 (383) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-sibelcom-orange mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-300">info@sibelcom.ru</span>
              </li>
              <li className="text-gray-300">
                <p>630099, Россия,</p>
                <p>г. Новосибирск, ул. Ленина, д. 21, офис 305</p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Разделитель */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ООО "СибЭлком Логистика". Все права защищены.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-sibelcom-orange transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="hover:text-sibelcom-orange transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
