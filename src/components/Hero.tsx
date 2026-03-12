import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { APK_DOWNLOAD_URL, APK_VERSION } from "@/data/tutorials";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center hero-bg overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Aplicativo de Streaming
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Sua TV favorita,</span>
            <br />
            <span className="text-gradient">na palma da mão</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Baixe o aplicativo da <strong className="text-foreground">SIGNALPLAY</strong> e aprenda a configurar em poucos passos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={APK_DOWNLOAD_URL}
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 glow-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              Baixar APK
              <span className="text-sm opacity-80">{APK_VERSION}</span>
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/tutorial"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border bg-secondary/50 text-foreground font-semibold text-lg hover:bg-secondary transition-all duration-300"
              >
                Ver Tutorial
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
