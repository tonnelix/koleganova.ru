import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Управление персоналом",
    skills: [
      "IT-рекрутинг",
      "Массовый и точечный подбор",
      "Адаптация",
      "KPI",
      "Управление командой",
      "HR-бренд",
      "Корпоративная культура",
      "Миграционное сопровождение",
    ],
  },
  {
    category: "HR-стратегия и аналитика",
    skills: [
      "Трансформация HR-функций",
      "HR-аналитика",
      "Power BI",
      "Построение бизнес-процессов",
      "Управление проектами",
      "Data-driven подход",
    ],
  },
  {
    category: "Цифровизация HR",
    skills: [
      "ATS-системы",
      "Автоматизация рекрутинга",
      "Чат-боты",
      "HR-tech решения",
    ],
  },
  {
    category: "Коммуникация и события",
    skills: [
      "Публичные выступления",
      "Организация конференций",
      "Ведение сообществ",
      "Нетворкинг",
    ],
  },
];

const languages = [
  { language: "Русский", level: "Родной" },
  { language: "Английский", level: "Intermediate (B1)" },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Навыки и компетенции
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Конкретные инструменты и технологии
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-primary">Языки</h3>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="font-medium">{lang.language}</span>
                  <Badge variant="outline">{lang.level}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
