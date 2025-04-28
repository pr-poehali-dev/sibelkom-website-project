
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';

const ContactsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-sibelcom-black">Свяжитесь с нами</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Мы всегда рады помочь вам с выбором и поставкой электронных компонентов
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Карта */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe 
              title="Карта расположения офиса"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2286.4899517144595!2d82.9987717769956!3d55.052456442854574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe5d87a2a0dbb%3A0xa7f7f4124290e0dd!2z0KLQtdGF0L3QvtC_0LDRgNC60L7QstCw0Y8g0YPQuy4sIDUsINCd0L7QstC-0YHQuNCx0LjRgNGB0LosINCd0L7QstC-0YHQuNCx0LjRgNGB0LrQsNGPINC-0LHQuy4sIDYzMDA3OA!5e0!3m2!1sru!2sru!4v1714291953346!5m2!1sru!2sru" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          
          {/* Контактная информация */}
          <div className="bg-sibelcom-lightBg p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-sibelcom-black">Контактная информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-sibelcom-yellow p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-sibelcom-black" />
                </div>
                <div>
                  <h4 className="font-bold text-sibelcom-black mb-1">Телефон</h4>
                  <p className="text-gray-700">+7 (383) 123-45-67</p>
                  <p className="text-gray-700">+7 (383) 765-43-21</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sibelcom-yellow p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-sibelcom-black" />
                </div>
                <div>
                  <h4 className="font-bold text-sibelcom-black mb-1">Email</h4>
                  <p className="text-gray-700">info@sibelcom.ru</p>
                  <p className="text-gray-700">sales@sibelcom.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sibelcom-yellow p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-sibelcom-black" />
                </div>
                <div>
                  <h4 className="font-bold text-sibelcom-black mb-1">Адрес</h4>
                  <p className="text-gray-700">
                    630078, г. Новосибирск, ул. Технопарковая, 5
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sibelcom-yellow p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-sibelcom-black" />
                </div>
                <div>
                  <h4 className="font-bold text-sibelcom-black mb-1">Время работы</h4>
                  <p className="text-gray-700">
                    Пн-Пт: 9:00 - 18:00
                  </p>
                  <p className="text-gray-700">
                    Сб-Вс: Выходной
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full mt-8 bg-sibelcom-yellow hover:bg-sibelcom-orange text-sibelcom-black font-medium"
            >
              Задать вопрос
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
