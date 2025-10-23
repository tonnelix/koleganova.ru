import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img 
                  src={profilePhoto}
                  alt="Anastasiya Koleganova"
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-elegant ring-4 ring-primary/20"
                />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Анастасия Колеганова
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                HR-лидер с 12-летним опытом трансформации HR-функций
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Специализируюсь на построении и оптимизации процессов IT и non-IT подбора, внедрении HR-аналитики, развитии бренда и укреплении корпоративной культуры
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                <Button variant="default" size="lg" asChild className="shadow-soft">
                  <a href="tel:+79950078565">
                    <Phone className="w-4 h-4 mr-2" />
                    +7 (995) 007-85-65
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:a.kolegana@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </Button>
              </div>
              
              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://t.me/a_kolegana" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
