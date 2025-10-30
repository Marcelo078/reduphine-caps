import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Truck, Gift } from "lucide-react";
import package1 from "@/assets/reduphine-oferta-1-pote-tratamento.webp";
import package3 from "@/assets/reduphine-compre-2-leve-3-potes.webp";
import package5 from "@/assets/reduphine-compre-3-leve-5-promocao.webp";
import package8 from "@/assets/reduphine-compre-5-leve-8-melhor-oferta.webp";

const pricingPlans = [
  {
    image: package1,
    name: "1 Pote",
    subtitle: "1 mês de tratamento",
    installment: "R$ 14,76",
    total: "R$ 147,00",
    link: "https://app.monetizze.com.br/r/AFX20871337",
    features: ["E-books", "App Exclusivo", "Grupo VIP"],
    badge: null
  },
  {
    image: package3,
    name: "Compre 2 Leve 3",
    subtitle: "3 meses de tratamento",
    installment: "R$ 19,78",
    total: "R$ 197,00",
    link: "https://app.monetizze.com.br/r/AFX20871337/?u=YJ80941",
    features: ["1 Pote Grátis", "E-books", "App Exclusivo", "Grupo VIP"],
    badge: "1 Pote Grátis"
  },
  {
    image: package5,
    name: "Compre 3 Leve 5",
    subtitle: "5 meses de tratamento",
    installment: "R$ 24,80",
    total: "R$ 247,00",
    link: "https://app.monetizze.com.br/r/AFX20871337/?u=BQ81114",
    features: ["2 Potes Grátis", "E-books", "App Exclusivo", "Grupo VIP"],
    badge: "2 Potes Grátis",
    popular: true
  },
  {
    image: package8,
    name: "Compre 5 Leve 8",
    subtitle: "8 meses de tratamento",
    installment: "R$ 37,85",
    total: "R$ 377,00",
    link: "https://app.monetizze.com.br/r/AFX20871337/?u=GU82858",
    features: ["3 Potes Grátis", "E-books", "App Exclusivo", "Grupo VIP"],
    badge: "3 Potes Grátis"
  }
];

const PricingSection = () => {
  return (
    <section id="precos" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Escolha o <span className="text-primary">Kit Ideal</span> Para Você
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Quanto mais você investe no seu emagrecimento saudável, mais economia e bônus você ganha. 
            Todos os kits têm frete grátis para todo o Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-accent shadow-xl bg-card' 
                  : 'border-border hover:border-primary bg-card'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-accent text-accent-foreground font-bold px-3 py-1">
                    <Gift className="w-4 h-4 mr-1 inline" />
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              {plan.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-primary text-primary-foreground font-bold">
                    Mais Vendido
                  </Badge>
                </div>
              )}

              <div className="p-6">
                <div className="mb-4">
                  <img 
                    src={plan.image} 
                    alt={`ReduPhine Caps ${plan.name} - Oferta especial de suplemento para emagrecimento saudável`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">{plan.subtitle}</p>

                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Por apenas 12x</div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.installment}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Ou {plan.total} à vista
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-2 text-sm">
                    <Truck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-card-foreground">Frete Grátis Brasil</span>
                  </li>
                </ul>

                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    Comprar Agora
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
