import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ФотоОтчёт</h3>
            <p className="text-muted-foreground">
              Сервис по сбору, обработке и контролю структурированных фотоотчетов.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/project" className="text-muted-foreground hover:text-primary transition-colors">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/subscribe" className="text-muted-foreground hover:text-primary transition-colors">
                  Подписаться
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Email: info@fotootchet.ru</li>
              <li className="text-muted-foreground">Телефон: +7 (999) 123-45-67</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} ФотоОтчёт. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
