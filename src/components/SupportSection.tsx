import { MessageCircle, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const SupportSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Headphones className="w-8 h-8 text-primary" />
        </div>
        <h2 className="font-display text-3xl font-bold text-foreground mb-3">
          Precisa de Ajuda?
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Não conseguiu acessar? Entre em contato com seu provedor para suporte personalizado.
        </p>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-600/20"
        >
          <MessageCircle className="w-6 h-6" />
          Falar via WhatsApp
        </a>

        <p className="mt-4 text-sm text-muted-foreground">
          Ou entre em contato diretamente com seu revendedor/provedor
        </p>
      </div>
    </motion.section>
  );
};

export default SupportSection;
