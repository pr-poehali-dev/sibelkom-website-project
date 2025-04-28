import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Контакты</h2>
        
        <div className="flex flex-col md:flex-row gap-10 mt-12">
          <div className="md:w-1/2">
            <div className="bg-sibelcom-lightBg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Связаться с нами</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-sibelcom-yellow mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Адрес</h4>
                    <p className="text-sibelcom-gray">г. Новосибирск, ул. Технопарковая, 5, офис 301</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-sibelcom-yellow mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Телефон</h4>
                    <p className="text-sibelcom-gray">+7 (383) 123-45-67</p>
                    <p className="text-sibelcom-gray">+7 (800) 555-12-34 (бесплатно по России)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-sibelcom-yellow mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-sibelcom-gray">info@sibelcom.ru</p>
                    <p className="text-sibelcom-gray">sales@sibelcom.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-sibelcom-yellow mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Режим работы</h4>
                    <p className="text-sibelcom-gray">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-sibelcom-gray">Сб-Вс: выходные</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden h-full min-h-[300px] shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2287.0742686607377!2d82.9671937!3d55.0106133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDAxJzAyLjYiTiA4MsKwNTgnMDYuNCJF!5e0!3m2!1sru!2sru!4v1619702343000!5m2!1sru!2sru" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Карта расположения офиса СибЭлком Логистика"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
