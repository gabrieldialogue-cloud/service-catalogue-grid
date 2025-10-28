import { useState } from "react";
import LetterNav from "@/components/LetterNav";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import { awsServices } from "@/data/awsServices";

const Index = () => {
  const letters = awsServices.map(section => section.letter);

  const scrollToSection = (letter: string) => {
    const element = document.getElementById(`section-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <LetterNav letters={letters} onLetterClick={scrollToSection} />
      
      <main className="ml-12 px-8 md:px-16 lg:px-24 py-12">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-[10rem] md:text-[14rem] font-black gradient-text leading-none mb-4">
            TODOS
          </h1>
          <div className="h-2 w-48 bg-gradient-primary rounded-full mb-12" />
          
          <div className="gradient-border max-w-xl p-8">
            <h2 className="gradient-text text-2xl font-bold mb-4">
              Todos os serviços
            </h2>
            <p className="text-foreground leading-relaxed">
              Lista agregada de todos os serviços da AWS; ponto de entrada para navegar, filtrar e descobrir produtos por categoria.
            </p>
          </div>
        </section>

        {/* Services by Letter */}
        {awsServices.map((section) => (
          <section key={section.letter} className="mb-24">
            <SectionHeader letter={section.letter} id={`section-${section.letter}`} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.services.map((service, index) => (
                <ServiceCard
                  key={`${section.letter}-${index}`}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Index;
