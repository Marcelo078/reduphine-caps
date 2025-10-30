import { Zap, Heart, Scale, TrendingUp, Shield, Sparkles } from "lucide-react";
import productImage from "@/assets/reduphine-mulher-tomando-capsulas-emagrecimento.webp";

const benefits = [
  {
    icon: Scale,
    title: "Emagrecimento Natural",
    description: "Potencializa a perda de peso de forma saudável e natural, respeitando o metabolismo do seu corpo."
  },
  {
    icon: Zap,
    title: "Energia e Disposição",
    description: "Aumenta seus níveis de energia para você manter a rotina ativa durante o processo de emagrecimento."
  },
  {
    icon: Heart,
    title: "Saúde em Primeiro Lugar",
    description: "Fórmula 100% natural que cuida do seu bem-estar enquanto você emagrece de forma saudável."
  },
  {
    icon: TrendingUp,
    title: "Resultados Consistentes",
    description: "Com uso regular de 2 cápsulas por dia, você vê resultados reais no seu emagrecimento saudável."
  },
  {
    icon: Shield,
    title: "Seguro e Testado",
    description: "Suplemento alimentar desenvolvido seguindo rigorosos padrões de qualidade e segurança."
  },
  {
    icon: Sparkles,
    title: "Fácil de Usar",
    description: "Apenas 2 cápsulas por dia são suficientes para começar sua jornada de emagrecimento saudável."
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Para Quem é o <span className="text-primary">ReduPhine Caps?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O ReduPhine Caps é ideal para quem busca potencializar seu processo de emagrecimento saudável 
            com um suplemento alimentar 100% natural e eficaz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={productImage} 
              alt="Mulher feliz tomando ReduPhine Caps, suplemento natural para emagrecimento saudável e perda de peso"
              className="w-full h-auto rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.slice(3).map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
