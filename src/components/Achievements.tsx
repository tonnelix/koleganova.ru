import { TrendingUp, Users, Award, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: TrendingUp,
    value: "55%",
    label: "Увеличение эффективности рекрутинга за счет современных методик и автоматизации",
  },
  {
    icon: Users,
    value: "290-450",
    label: "Управление специалистами в Казахстане и Индии с ростом команды на 55% за 8 месяцев",
  },
  {
    icon: Award,
    value: "580+",
    label: "Участников HR-сообщества Татарстана и ежегодной конференции HR-club",
  },
  {
    icon: Zap,
    value: "50%",
    label: "Сокращение времени согласования и закрытия вакансий через оптимизацию процессов",
  },
];

export const Achievements = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Ключевые достижения
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Конкретные результаты, подтверждённые метриками и data-driven подходом
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-elegant transition-all duration-300 border-border hover:border-primary/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                        {achievement.value}
                      </div>
                      <p className="text-muted-foreground">
                        {achievement.label}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
