import { Button } from "@/components/ui/button";
import heroImage from "@/assets/reduphine-hero-produto-natural-garantia.png";
import { Sparkles, Shield, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-primary to-primary-glow">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      <div className="container relative z-10 px-4 py-12 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent-foreground">100% Natural e Seguro</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              ReduPhine Caps: Seu Aliado no{" "}
              <span className="text-accent">Emagrecimento Saudável</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              Potencialize seu processo de emagrecimento saudável com 2 cápsulas por dia. 
              Suplemento alimentar natural com 60 cápsulas que ajudam você a alcançar seus objetivos de forma eficaz.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-primary-foreground">
                <Shield className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">Garantia 30 Dias</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Frete Grátis Brasil</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AFX20871337" target="_blank" rel="noopener noreferrer">
                  Comprar ReduPhine Caps Agora
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
                asChild
              >
                <a href="#beneficios">
                  Conhecer Benefícios
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={heroImage} 
                alt="ReduPhine Caps suplemento natural para emagrecimento saudável com garantia de 30 dias e selo 100% natural"
                className="w-full h-auto drop-shadow-2xl"
                loading="eager"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
