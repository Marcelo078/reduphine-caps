import { useEffect } from "react";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Ingredients from "@/components/Ingredients";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";

const Index = () => {
  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "ReduPhine Caps",
      "image": "https://8bd254c3-2d15-4e31-b265-97c15a0fdeb2.lovableproject.com/reduphine-product.png",
      "description": "ReduPhine Caps é o suplemento alimentar natural que potencializa seu processo de emagrecimento saudável. 60 cápsulas, 100% natural, com garantia de 30 dias.",
      "brand": {
        "@type": "Brand",
        "name": "VitaBalance"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "147.00",
        "highPrice": "377.00",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
        "url": "https://app.monetizze.com.br/r/AFX20871337"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "2847"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Ingredients />
      <Testimonials />
      <PricingSection />
      <Guarantee />
      <FAQ />
      
      <footer className="bg-secondary py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center text-secondary-foreground/80">
            <p className="mb-4">
              <strong>ReduPhine Caps</strong> - Suplemento Alimentar Natural para Emagrecimento Saudável
            </p>
            <p className="text-sm mb-4">
              60 cápsulas | 100% Natural | Garantia de 30 dias | Frete Grátis para todo o Brasil
            </p>
            <p className="text-xs text-secondary-foreground/60 max-w-3xl mx-auto">
              Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. 
              Os resultados podem variar de pessoa para pessoa. Recomenda-se o acompanhamento de um profissional de saúde. 
              Suplementos alimentares não devem substituir uma dieta equilibrada e hábitos de vida saudáveis.
            </p>
            <div className="mt-8 text-sm">
              <p>© 2025 VitaBalance. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
