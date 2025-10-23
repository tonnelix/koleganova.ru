import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Образование
          </h2>
          
          <Card className="p-8 shadow-soft hover:shadow-elegant transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Астраханский государственный технический университет
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-lg text-muted-foreground">Финансы и кредит</span>
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Диплом с отличием (красный диплом)</span>
                </div>
                <p className="text-muted-foreground">2013</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
