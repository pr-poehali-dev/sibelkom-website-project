import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';

const ContactsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading-center">Связаться с нами</h2>
          <p className="max-w-2xl mx-auto text-lg mt-4">
            Свяжитесь с нами для консультации и оформления заказа
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div className="bg-sibelcom-lightBg p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-sibelcom-darkgray">Контактная информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-sibelcom-orange rounded-full p-3 mr-4">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sibelcom-darkgray">Телефоны</h4>
                  <p className="text-gray-600 mt-1">+7 (383) 123-45-67</p>
                  <p className="text-gray-600">+7 (383) 987-65-43</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sibelcom-orange rounded-full p-3 mr-4">
                  <Mail className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sibelcom-darkgray">Электронная почта</h4>
                  <p className="text-gray-600 mt-1">info@sibelcom.ru</p>
                  <p className="text-gray-600">orders@sibelcom.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sibelcom-orange rounded-full p-3 mr-4">
                  <MapPin className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sibelcom-darkgray">Адрес</h4>
                  <p className="text-gray-600 mt-1">630099, Россия, г. Новосибирск,</p>
                  <p className="text-gray-600">ул. Ленина, д. 21, офис 305</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sibelcom-orange rounded-full p-3 mr-4">
                  <Clock className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sibelcom-darkgray">Время работы</h4>
                  <p className="text-gray-600 mt-1">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-600">Сб-Вс: Выходной</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Карта */}
          <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden shadow-md relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2287.5113516362103!2d82.92031907662417!3d55.03019574369092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe5e190958bd5%3A0x9b3a0673e1a3e895!2z0YPQuy4g0JvQtdC90LjQvdCwLCAyMSwg0J3QvtCy0L7RgdC40LHQuNGA0YHQuiwg0J3QvtCy0L7RgdC40LHQuNGA0YHQutCw0Y8g0L7QsdC7LiwgNjMwMTA0!5e0!3m2!1sru!2sru!4v1682515471097!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта с расположением офиса СибЭлком Логистика"
            ></iframe>
            
            {/* Декоративный элемент на карте */}
            <div className="absolute top-4 right-4 z-10">
              <div className="diamond-shape bg-sibelcom-orange w-12 h-12">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="diamond-shape bg-white w-8 h-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-sibelcom-orange hover:bg-sibelcom-orange/90 text-white px-8 py-6">
            Заказать обратный звонок
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
