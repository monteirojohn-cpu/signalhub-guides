import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import ImportantNotice from "@/components/ImportantNotice";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";
import { tutorials } from "@/data/tutorials";

const Index = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return tutorials;
    const q = search.toLowerCase();
    return tutorials.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.subtitle.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Tutorials Section */}
      <section id="tutoriais" className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Escolha seu dispositivo
          </h2>
          <p className="text-muted-foreground text-lg">
            Selecione o dispositivo para ver o tutorial de instalação
          </p>
        </div>

        <div className="mb-10">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((tutorial, i) => (
            <CategoryCard key={tutorial.id} tutorial={tutorial} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            Nenhum tutorial encontrado para "{search}"
          </div>
        )}
      </section>

      <div id="aviso">
        <ImportantNotice />
      </div>

      <div id="suporte">
        <SupportSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
