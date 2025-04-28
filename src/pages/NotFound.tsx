import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-sibelcom-lightBg pt-20 pb-20">
      <div className="container-custom text-center">
        <div className="relative inline-block mb-8">
          <div className="diamond-shape bg-sibelcom-orange w-24 h-24">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="diamond-shape bg-white w-16 h-16 flex items-center justify-center">
                <span className="text-sibelcom-orange text-4xl font-bold z-20">404</span>
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-sibelcom-darkgray mb-4">Страница не найдена</h1>
        <p className="text-gray-600 max-w-lg mx-auto mb-8">
          Извините, запрашиваемая страница не существует. Возможно, она была удалена или вы ввели неверный адрес.
        </p>
        
        <Button asChild className="bg-sibelcom-orange hover:bg-sibelcom-orange/90 text-white inline-flex items-center">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
