import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">ФотоОтчёт</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              О нас
            </Link>
            <Link to="/project" className="text-foreground hover:text-primary transition-colors">
              О проекте
            </Link>
            <Link to="/subscribe">
              <Button>Подписаться</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Меню">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary px-4 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={toggleMenu}
              >
                Главная
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary px-4 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={toggleMenu}
              >
                О нас
              </Link>
              <Link 
                to="/project" 
                className="text-foreground hover:text-primary px-4 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={toggleMenu}
              >
                О проекте
              </Link>
              <Link to="/subscribe" onClick={toggleMenu}>
                <Button className="w-full">Подписаться</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
