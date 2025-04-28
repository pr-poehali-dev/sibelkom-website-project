import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, User, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'О компании', path: '/about' },
    { label: 'Линия поставок', path: '/supply-line' },
    { label: 'Контрактное производство', path: '/contract-manufacturing' },
    { label: 'Моточные изделия', path: '/winding-products' },
    { label: 'Подбор аналогов', path: '/analogs' },
    { label: 'Контроль качества', path: '/quality-control' },
    { label: 'Новости', path: '/news' },
    { label: 'База даташит', path: '/datasheet' },
    { label: 'Контакты', path: '/contacts' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Логотип */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-sibelcom-black">
            <span className="text-sibelcom-yellow">СибЭлком</span> Логистика
          </span>
        </Link>

        {/* Меню для десктопа */}
        <nav className="hidden lg:flex items-center justify-center space-x-1">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path} className="menu-link text-sm">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Кнопка личного кабинета */}
        <Button className="hidden md:flex items-center bg-sibelcom-orange hover:bg-sibelcom-yellow text-white rounded-full px-4 py-2 transition-colors">
          <User className="mr-2 h-4 w-4" />
          <span>Личный кабинет</span>
        </Button>

        {/* Мобильное меню */}
        <button
          className="lg:hidden text-sibelcom-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 pt-4">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="flex items-center">
                  <span className="text-xl font-bold text-sibelcom-black">
                    <span className="text-sibelcom-yellow">СибЭлком</span> Логистика
                  </span>
                </Link>
                <button
                  className="text-sibelcom-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-lg py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="flex items-center bg-sibelcom-orange hover:bg-sibelcom-yellow text-white rounded-full px-4 py-2 w-full justify-center mt-4">
                  <User className="mr-2 h-4 w-4" />
                  <span>Личный кабинет</span>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
