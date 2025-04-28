import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Camera, FileText, BarChart2, CheckCircle, PieChart, Smartphone, Users, Shield
} from "lucide-react";

const Project = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">О проекте</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Инновационный сервис для структурированного сбора, обработки и анализа фотоотчетов 
            с возможностью формирования статистики и контроля ключевых показателей.
          </p>
        </div>
      </div>

      {/* Main Project Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="section-title">Что такое ФотоОтчёт?</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                ФотоОтчёт — это комплексная платформа, которая позволяет организациям систематизировать процесс 
                сбора и анализа фотоотчетов. Наш сервис подходит для компаний с разветвленной сетью филиалов, 
                торговых точек, строительных объектов и других бизнес-структур, где требуется визуальный контроль.
              </p>
              <p className="text-lg mb-8 text-muted-foreground">
                С помощью нашей платформы вы сможете установить четкие требования к отчетности, контролировать 
                их выполнение, анализировать тенденции и принимать более обоснованные бизнес-решения.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Рабочая панель ФотоОтчёт" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Как это работает</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Сбор данных</h3>
              <p className="text-muted-foreground">
                Сотрудники делают фотографии в соответствии с заданными шаблонами и требованиями.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Структурирование</h3>
              <p className="text-muted-foreground">
                Система автоматически организует фотографии по категориям, локациям и другим параметрам.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Проверка</h3>
              <p className="text-muted-foreground">
                Автоматическая и ручная верификация соответствия фотоотчетов установленным критериям.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <BarChart2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Анализ</h3>
              <p className="text-muted-foreground">
                Формирование аналитических отчетов на основе собранных данных.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <PieChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Статистика</h3>
              <p className="text-muted-foreground">
                Создание статистических моделей и отслеживание ключевых показателей эффективности.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Отчетность</h3>
              <p className="text-muted-foreground">
                Формирование удобных отчетов для всех уровней управления.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Аналитика и отчеты" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="section-title">Преимущества для бизнеса</h2>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="block mb-1">Повышение дисциплины</strong>
                    <span className="text-muted-foreground">
                      Регулярный контроль стимулирует соблюдение корпоративных стандартов.
                    </span>
                  </span>
                </li>
                
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="block mb-1">Оптимизация процессов</strong>
                    <span className="text-muted-foreground">
                      Анализ данных позволяет выявить узкие места и улучшить бизнес-процессы.
                    </span>
                  </span>
                </li>
                
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="block mb-1">Экономия времени</strong>
                    <span className="text-muted-foreground">
                      Автоматизация сбора и анализа данных сокращает трудозатраты.
                    </span>
                  </span>
                </li>
                
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="block mb-1">Обоснованные решения</strong>
                    <span className="text-muted-foreground">
                      Визуальные данные и статистика помогают принимать более точные управленческие решения.
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-6">Готовы улучшить процесс работы с фотоотчетами?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-muted-foreground">
            Зарегистрируйтесь сегодня и получите доступ к полному функционалу платформы
          </p>
          <Link to="/subscribe">
            <Button size="lg" className="px-8">
              Начать использовать сервис
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project;
