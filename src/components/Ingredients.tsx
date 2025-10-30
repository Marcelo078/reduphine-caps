import { Leaf } from "lucide-react";
import productBottle from "@/assets/reduphine-pote-garantia-30-dias.png";

const ingredients = [
  {
    name: "Spirulina",
    description: "Rica em nutrientes e proteínas, auxilia no controle do apetite e fornece energia natural."
  },
  {
    name: "Quitosana",
    description: "Fibra natural que ajuda a reduzir a absorção de gorduras pelo organismo."
  },
  {
    name: "Psyllium",
    description: "Fibra solúvel que promove saciedade e auxilia no funcionamento intestinal."
  },
  {
    name: "Cromo",
    description: "Mineral essencial que ajuda no controle da glicemia e reduz a vontade de comer doces."
  },
  {
    name: "Magnésio",
    description: "Essencial para o metabolismo energético e funcionamento muscular adequado."
  },
  {
    name: "Vitaminas",
    description: "Complexo vitamínico que complementa a nutrição durante o emagrecimento saudável."
  },
  {
    name: "Cranberry",
    description: "Antioxidante natural que auxilia na saúde do trato urinário e bem-estar geral."
  },
  {
    name: "Cúrcuma",
    description: "Poderoso anti-inflamatório natural que auxilia no metabolismo e digestão."
  },
  {
    name: "Guaraná",
    description: "Fonte natural de energia que estimula o metabolismo e aumenta a disposição."
  },
  {
    name: "Tamarindo da Índia",
    description: "Auxilia na digestão e pode ajudar no controle do peso de forma natural."
  }
];

const Ingredients = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-4">
            <Leaf className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent-foreground">Fórmula 100% Natural</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conheça os Ingredientes que Fazem o{" "}
            <span className="text-primary">ReduPhine Caps</span> Tão Eficaz
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada cápsula de ReduPhine contém uma combinação cuidadosamente selecionada de ingredientes 
            naturais que trabalham em sinergia para potencializar seu emagrecimento saudável.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="sticky top-8">
            <div className="relative">
              <img 
                src={productBottle} 
                alt="ReduPhine Caps com ingredientes naturais para emagrecimento saudável - 60 cápsulas"
                className="w-full max-w-md mx-auto h-auto drop-shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {ingredients.map((ingredient, index) => (
              <div 
                key={index}
                className="p-5 rounded-xl bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {ingredient.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ingredient.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Combinação Perfeita para Emagrecimento Saudável
          </h3>
          <p className="text-muted-foreground">
            Todos os ingredientes do ReduPhine Caps são cuidadosamente dosados para trabalhar em harmonia, 
            proporcionando o melhor suporte para sua jornada de emagrecimento saudável sem comprometer sua saúde.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
