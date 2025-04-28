import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Camera, BarChart2, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="hero-text mb-6">
                Эффективный контроль фотоотчетов
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Сервис по сбору, обработке и контролю структурированных фотоотчетов.
                Формирование статистики и контроль ключевых показателей.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/subscribe">
                  <Button size="lg" className="w-full sm:w-auto">
                    Начать использовать
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/project">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Узнать больше
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Фотоотчеты и аналитика" 
                className="rounded-lg shadow-lg animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card animate-slide-in">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Структурированный сбор</h3>
              <p className="text-muted-foreground">
                Организованный процесс сбора фотоотчетов с проверкой полноты и качества данных.
              </p>
            </div>
            
            <div className="feature-card animate-slide-in" style={{ animationDelay: "200ms" }}>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <BarChart2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Аналитика и статистика</h3>
              <p className="text-muted-foreground">
                Формирование подробной статистики и ключевых показателей эффективности.
              </p>
            </div>
            
            <div className="feature-card animate-slide-in" style={{ animationDelay: "400ms" }}>
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Контроль и безопасность</h3>
              <p className="text-muted-foreground">
                Надежное хранение данных и разграничение прав доступа для безопасности информации.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-6">Готовы повысить эффективность?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-muted-foreground">
            Присоединяйтесь к сотням компаний, которые уже оптимизировали свою работу с фотоотчетами
          </p>
          <Link to="/subscribe">
            <Button size="lg">
              Оформить подписку
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
