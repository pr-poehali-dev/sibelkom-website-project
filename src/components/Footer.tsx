import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const menuColumns = [
    {
      title: 'Компания',
      links: [
        { label: 'О компании', path: '/about' },
        { label: 'Новости', path: '/news' },
        { label: 'Линия поставок', path: '/supply-line' },
        { label: 'Контроль качества', path: '/quality-control' },
      ],
    },
    {
      title: 'Услуги',
      links: [
        { label: 'Контрактное производство', path: '/contract-manufacturing' },
        { label: 'Моточные изделия', path: '/winding-products' },
        { label: 'Подбор аналогов', path: '/analogs' },
        { label: 'База даташит', path: '/datasheet' },
      ],
    },
    {
      title: 'Информация',
      links: [
        { label: 'Доставка и оплата', path: '/delivery' },
        { label: 'Гарантия', path: '/warranty' },
        { label: 'Наши клиенты', path: '/clients' },
        { label: 'Контакты', path: '/contacts' },
      ],
    },
  ];

  return (
    <footer className="bg-sibelcom-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Логотип и контактная информация */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                <span className="text-sibelcom-yellow">СибЭлком</span> Логистика
              </span>
            </Link>
            
            <p className="text-sibelcom-gray mb-6 max-w-md">
              Прямые поставки электронных компонентов от китайских производителей. 
              Гарантия качества, оптимальные сроки, конкурентные цены.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-sibelcom-yellow mr-3" />
                <span>+7 (383) 123-45-67</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-sibelcom-yellow mr-3" />
                <span>info@sibelcom.ru</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-sibelcom-yellow mr-3" />
                <span>г. Новосибирск, ул. Технопарковая, 5</span>
              </div>
            </div>
          </div>
          
          {/* Меню */}
          {menuColumns.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-sibelcom-gray hover:text-sibelcom-yellow transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        {/* Нижняя часть футера */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sibelcom-gray text-sm mb-4 md:mb-0">
            © {currentYear} СибЭлком Логистика. Все права защищены.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-sibelcom-gray hover:text-sibelcom-yellow transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-sibelcom-gray hover:text-sibelcom-yellow transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-sibelcom-gray hover:text-sibelcom-yellow transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-sibelcom-gray hover:text-sibelcom-yellow transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex mt-4 md:mt-0">
            <Link to="/privacy" className="text-sibelcom-gray text-sm hover:text-sibelcom-yellow transition-colors mr-4">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-sibelcom-gray text-sm hover:text-sibelcom-yellow transition-colors">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
