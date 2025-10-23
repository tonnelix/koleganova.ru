import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Телеастрой",
    role: "Руководитель проекта по трансформации HR-функции",
    period: "Март 2025 — Сентябрь 2025",
    duration: "7 месяцев",
    type: "Проектный контракт",
    achievements: [
      "Масштабирование процессов массового подбора для международных рынков",
      "Организация отдела (35+ чел.) с распределенными кросс-функциональными обязанностями",
      "Создание отчетности в Power BI для top-менеджмента",
      "Запуск «Мастерской рекрутера» по обучению сорсеров",
      "Увеличение объема закрываемых вакансий на 55% (с 290 до 450/мес.)",
      "Сокращение времени согласования и закрытия вакансий на 50%",
    ],
  },
  {
    company: "Иннополис",
    role: "HR-бизнес-партнер / Руководитель HR-проектов",
    period: "Октябрь 2022 — Февраль 2025",
    duration: "2 года 5 месяцев",
    achievements: [
      "Развитие HR-направления в рамках IT-экосистемы Иннополиса",
      "Карьерный рост с позиции HR-менеджера до руководителя проектов",
      "Управление отраслевым HR-брендом и сообществом Татарстана",
      "Основание и развитие HR-сообщества (580+ участников) и конференции HR-club",
      "Организация распределенной команды IT-рекрутеров (9 человек)",
      "Повышение эффективности конференций в 2 раза (рост с 15 до 250+ участников)",
    ],
  },
  {
    company: "Сбер",
    role: "HR-ресёрчер по внутреннему рекрутингу",
    period: "Июнь 2021 — Январь 2022",
    duration: "8 месяцев",
    achievements: [
      "Развитие площадки IT-Хаба Сбера в Иннополисе",
      "Онбординг разработчиков и внутренние коммуникации",
      "Работа с вузами (Университет Иннополис, «Школа 21»)",
    ],
  },
  {
    company: "Пилот",
    role: "HR-ресёрчер",
    period: "Ноябрь 2016 — Январь 2021",
    duration: "4 года 3 месяца",
    achievements: [
      "Массовый и точечный подбор (разработчики BI, аналитики, менеджеры)",
      "Развитие корпоративной культуры и HR-бренда",
    ],
  },
  {
    company: "Астраханский Технопарк FABRIKA",
    role: "Руководитель проектов",
    period: "Март 2013 — Ноябрь 2016",
    duration: "3 года 9 месяцев",
    achievements: [
      "Участие в открытии первого частного технопарка страны (3300 кв.м., 36 резидентов)",
      "Организация мероприятий (хакатоны, Startup Tour - 100-300 чел.)",
    ],
  },
  {
    company: "Аэропорт Астрахань",
    role: "Директор начальника отдела кадров",
    period: "Июль 2012 — Январь 2013",
    duration: "7 месяцев",
    achievements: [
      "Подбор персонала и ведение кадрового делопроизводства (штат около 800 человек)",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Опыт работы
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            12+ лет в HR-сфере, производстве и экосистеме технопарка
          </p>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="relative md:ml-20 p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="absolute -left-[4.5rem] top-8 w-8 h-8 rounded-full bg-gradient-primary hidden md:flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-background"></div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                    <div className="flex flex-wrap gap-2 items-center text-muted-foreground mb-2">
                      <span className="font-semibold text-foreground">{exp.company}</span>
                      {exp.type && <Badge variant="secondary">{exp.type}</Badge>}
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
