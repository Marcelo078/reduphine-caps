import { Shield, RotateCcw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import guaranteeImage from "@/assets/reduphine-suplemento-garantia.webp";

const Guarantee = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gold/10 via-background to-background">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 mb-6">
              <Shield className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium text-gold-foreground">Compra 100% Segura</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Garantia Total de <span className="text-gold">30 Dias</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Experimente ReduPhine Caps com total tranquilidade! Se você não ficar satisfeito com os 
              resultados do seu emagrecimento saudável em até 30 dias, devolvemos 100% do seu dinheiro.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">Risco Zero</h3>
                  <p className="text-sm text-muted-foreground">
                    Todo o risco é nosso. Você só ganha com essa garantia incondicional de satisfação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <RotateCcw className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">Devolução Simples</h3>
                  <p className="text-sm text-muted-foreground">
                    Processo de reembolso rápido e sem burocracia. Seu dinheiro de volta em até 30 dias.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">Pagamento Seguro</h3>
                  <p className="text-sm text-muted-foreground">
                    Ambiente protegido e criptografado. Seus dados estão seguros conosco.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-gold hover:bg-gold/90 text-gold-foreground font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              asChild
            >
              <a href="https://app.monetizze.com.br/r/AFX20871337" target="_blank" rel="noopener noreferrer">
                Comprar com Garantia
              </a>
            </Button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={guaranteeImage} 
                alt="Selo de garantia de 30 dias do ReduPhine Caps - Seu dinheiro de volta se não ficar satisfeito com o emagrecimento saudável"
                className="w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
