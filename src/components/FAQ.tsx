import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como tomar ReduPhine Caps para emagrecimento saudável?",
    answer: "Recomendamos tomar 2 cápsulas por dia, preferencialmente antes das principais refeições, acompanhadas de um copo de água. Mantenha uma rotina regular para melhores resultados no seu emagrecimento saudável."
  },
  {
    question: "ReduPhine Caps é seguro? Possui efeitos colaterais?",
    answer: "ReduPhine Caps é um suplemento alimentar 100% natural, desenvolvido com ingredientes selecionados. É seguro para a maioria das pessoas. Se você tem alguma condição médica ou usa medicamentos, consulte seu médico antes de começar."
  },
  {
    question: "Em quanto tempo vejo resultados do emagrecimento?",
    answer: "Os resultados variam de pessoa para pessoa, mas muitos usuários relatam mudanças perceptíveis já nas primeiras semanas de uso regular. Para resultados mais significativos no emagrecimento saudável, recomendamos o uso contínuo por pelo menos 90 dias."
  },
  {
    question: "O frete realmente é grátis para todo o Brasil?",
    answer: "Sim! Oferecemos frete grátis para todo o território brasileiro em todos os nossos kits de ReduPhine Caps. Seu pedido chega com segurança na sua casa, sem custos adicionais."
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer: "Se você não ficar satisfeito com os resultados do ReduPhine Caps em até 30 dias após a compra, devolvemos 100% do seu dinheiro. É simples, rápido e sem burocracia. Todo o risco é nosso!"
  },
  {
    question: "Preciso de receita médica para comprar?",
    answer: "Não. ReduPhine Caps é um suplemento alimentar de venda livre, não necessitando de receita médica para compra. No entanto, se você tiver condições de saúde específicas, é sempre bom consultar um profissional."
  },
  {
    question: "Quanto tempo dura cada pote?",
    answer: "Cada pote de ReduPhine Caps contém 60 cápsulas, o que corresponde a aproximadamente 1 mês de tratamento seguindo a recomendação de 2 cápsulas por dia para o emagrecimento saudável."
  },
  {
    question: "Qual a diferença entre os kits de ReduPhine Caps?",
    answer: "Os kits variam na quantidade de potes e no valor. Quanto maior o kit, maior a economia e mais potes grátis você ganha. O kit mais popular é o Compre 3 Leve 5, ideal para quem deseja resultados consistentes no emagrecimento saudável."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o ReduPhine Caps e o processo de emagrecimento saudável
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card hover:border-primary transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-card-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-8 rounded-2xl bg-muted/50 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Ainda tem dúvidas sobre o ReduPhine Caps?
          </h3>
          <p className="text-muted-foreground mb-6">
            Nossa garantia de 30 dias permite que você experimente sem riscos. Comece sua jornada de emagrecimento saudável hoje!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
