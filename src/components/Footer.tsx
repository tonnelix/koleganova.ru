import { Mail, Linkedin, MessageCircle, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Давайте работать вместе</h3>
            <p className="text-background/80 mb-6">
              Открыта для новых интересных проектов и предложений о
              сотрудничестве
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center justify-center md:justify-end gap-3">
              <MessageCircle className="w-5 h-5" />
              <a
                href="https://t.me/a_kolegana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Telegram: @a_kolegana
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:anastasia@koleganova.ru"
                className="hover:text-primary transition-colors"
              >
                anastasia@koleganova.ru
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-8">
            <MapPin className="w-5 h-5" />
            <span className="text-background/80">
              Москва • Готова к переездам: Санкт-Петербург • Казань
            </span>
          </div>

          <div className="flex gap-6 justify-center mb-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://t.me/a_kolegana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Telegram"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center text-sm text-background/60">
            <p>© 2025 Анастасия Колеганова. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
