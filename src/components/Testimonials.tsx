import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    age: 34,
    lost: "8kg",
    time: "2 meses",
    text: "ReduPhine Caps mudou minha vida! Em apenas 2 meses consegui resultados que não alcançava há anos. Me sinto mais leve, com mais energia e autoestima. O emagrecimento saudável realmente funciona!",
    rating: 5
  },
  {
    name: "Juliana Costa",
    age: 29,
    lost: "12kg",
    time: "3 meses",
    text: "Estava cética no início, mas os resultados falam por si. Perdi 12kg de forma natural e saudável. O melhor é que não senti efeitos colaterais e minha disposição aumentou muito!",
    rating: 5
  },
  {
    name: "Ana Paula",
    age: 41,
    lost: "15kg",
    time: "5 meses",
    text: "Depois dos 40, achei que seria impossível emagrecer. ReduPhine Caps provou que eu estava errada! O emagrecimento saudável é possível em qualquer idade. Estou radiante!",
    rating: 5
  },
  {
    name: "Carla Mendes",
    age: 27,
    lost: "6kg",
    time: "6 semanas",
    text: "Resultados incríveis em apenas 6 semanas! As cápsulas são fáceis de tomar e realmente funcionam. Combinei com alimentação equilibrada e o resultado foi surpreendente.",
    rating: 5
  },
  {
    name: "Fernanda Lima",
    age: 38,
    lost: "10kg",
    time: "3 meses",
    text: "ReduPhine Caps me ajudou a recuperar minha confiança. O processo de emagrecimento saudável foi tranquilo e natural. Recomendo para todas as minhas amigas!",
    rating: 5
  },
  {
    name: "Patricia Santos",
    age: 45,
    lost: "9kg",
    time: "2 meses",
    text: "Já tentei várias coisas antes, mas o ReduPhine Caps foi o único que realmente funcionou para mim. Natural, eficaz e sem sofrimento. Estou muito satisfeita!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quem Usa <span className="text-primary">ReduPhine Caps</span> Recomenda!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Milhares de pessoas já transformaram suas vidas com ReduPhine Caps. 
            Veja o que elas têm a dizer sobre o emagrecimento saudável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote className="w-16 h-16" />
              </div>
              
              <CardContent className="pt-6 relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.age} anos
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">
                      -{testimonial.lost}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      em {testimonial.time}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-card border border-border">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8/5.0</div>
              <div className="flex gap-1 mb-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Baseado em 2.847 avaliações
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
