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
      <Footer />
    </div>
  );
};

export default Index;
