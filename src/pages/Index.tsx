import { Hero } from "@/components/Hero";
import { Achievements } from "@/components/Achievements";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { PublicActivity } from "@/components/PublicActivity";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Achievements />
      <Experience />
      <Skills />
      <PublicActivity />
      <Education />
      <Footer />
    </div>
  );
};

export default Index;
