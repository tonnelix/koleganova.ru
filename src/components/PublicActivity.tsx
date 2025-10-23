import { Card } from "@/components/ui/card";
import { ExternalLink, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const activities = [
  {
    icon: Users,
    title: "Основатель HR-сообщества Татарстана",
    description: "Telegram-канал с 580+ участниками",
    link: "https://t.me/HRclub_conf",
    linkText: "Перейти в канал",
  },
  {
    icon: Award,
    title: "Организатор ежегодной конференции",
    description: "HR-клуб в Иннополисе - рост с 15 до 250+ участников",
    link: "https://hrclub-conf.ru/",
    linkText: "Сайт конференции",
  },
];

const articles = [
  {
    title: "Стратегии найма сильных айтишников в Татарстане",
    publication: "Huntflow Media",
    link: "https://huntflow.media/strategii-nayma-silnyh-aytishnikov-v-tatarstane/",
  },
  {
    title: "Статья на Хабре о переезде в Иннополис",
    publication: "Habr",
    link: "https://habr.com/ru/articles/505932/",
  },
  {
    title: "Статья на Хабре об участии в конференции",
    publication: "Habr",
    link: "https://habr.com/p/915154/",
  },
  {
    title: "Как писать резюме: ошибки и советы",
    publication: "Telegraph",
    link: "https://telegra.ph/Oshibki-v-rezyume-07-20",
  },
];

const conferences = [
  "HR FORUM BIG FISH",
  "Merge 2022-2025",
  "IT HR Саммит",
  "Спикер курса «Школа IT-рекрутера»",
  "HR API",
  "Проект «Карьера в Сбере»",
];

export const PublicActivity = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Публичная деятельность
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Активное участие в развитии HR-сообщества
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                      <p className="text-muted-foreground">{activity.description}</p>
                    </div>
                  </div>
                  <Button variant="outline" asChild className="w-full">
                    <a href={activity.link} target="_blank" rel="noopener noreferrer">
                      {activity.linkText}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </Card>
              );
            })}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Статьи и экспертиза</h3>
              </div>
              <ul className="space-y-3">
                {articles.map((article, index) => (
                  <li key={index}>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium group-hover:underline">{article.title}</div>
                        <div className="text-sm">{article.publication}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Спикер и участие</h3>
              </div>
              <ul className="space-y-2">
                {conferences.map((conf, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{conf}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
