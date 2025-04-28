import { Card } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Александр Петров",
      role: "Основатель и CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Опыт в IT сфере более 15 лет. Реализовал десятки успешных проектов в области бизнес-автоматизации."
    },
    {
      name: "Екатерина Иванова",
      role: "Технический директор",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Эксперт в области разработки программного обеспечения с фокусом на обработку и анализ данных."
    },
    {
      name: "Дмитрий Сидоров",
      role: "Руководитель отдела разработки",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Специалист по архитектуре ПО и оптимизации бизнес-процессов с помощью IT-решений."
    }
  ];

  const timelineEvents = [
    {
      year: "2021",
      title: "Основание компании",
      description: "Начало работы над прототипом сервиса для обработки фотоотчетов."
    },
    {
      year: "2022",
      title: "Первые клиенты",
      description: "Запуск бета-версии платформы и привлечение первых корпоративных клиентов."
    },
    {
      year: "2023",
      title: "Расширение функционала",
      description: "Добавление модулей статистики и аналитики, увеличение клиентской базы."
    },
    {
      year: "2024",
      title: "Масштабирование",
      description: "Выход на новые рынки и разработка мобильных приложений для платформы."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">О нашей команде</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Мы — команда профессионалов, объединенных целью сделать работу с фотоотчетами проще, 
            быстрее и эффективнее для бизнеса любого размера.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Наша команда</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">История развития</h2>
          
          <div className="space-y-12 max-w-3xl mx-auto">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex justify-start">
                  <div className="bg-primary text-white font-bold py-2 px-6 rounded-full text-center">
                    {event.year}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-12">Наши ценности</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="feature-card">
                <h3 className="text-xl font-bold mb-3">Инновации</h3>
                <p className="text-muted-foreground">
                  Постоянное совершенствование технологий и процессов для достижения лучших результатов.
                </p>
              </div>
              
              <div className="feature-card">
                <h3 className="text-xl font-bold mb-3">Качество</h3>
                <p className="text-muted-foreground">
                  Приверженность высоким стандартам качества во всех аспектах нашей работы.
                </p>
              </div>
              
              <div className="feature-card">
                <h3 className="text-xl font-bold mb-3">Клиентоориентированность</h3>
                <p className="text-muted-foreground">
                  Глубокое понимание потребностей клиентов и постоянная обратная связь.
                </p>
              </div>
              
              <div className="feature-card">
                <h3 className="text-xl font-bold mb-3">Надежность</h3>
                <p className="text-muted-foreground">
                  Стабильная работа сервиса и сохранность данных наших клиентов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
