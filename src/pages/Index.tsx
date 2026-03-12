import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlatformCards from "@/components/PlatformCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PlatformCards />

      {/* Senha canais adultos */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-3xl mx-auto text-center rounded-xl border border-red-500/30 bg-red-500/10 px-6 py-4">
          <p className="font-display font-bold text-red-500 text-lg">
            🔞 SENHA DOS CANAIS ADULTOS: 8888
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
