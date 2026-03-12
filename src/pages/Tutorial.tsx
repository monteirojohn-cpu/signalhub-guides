import { motion } from "framer-motion";
import { ArrowLeft, Download, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tutorialSteps, APK_DOWNLOAD_URL } from "@/data/tutorials";

const Tutorial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-16 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Tutorial de Instalação
          </h1>
          <p className="text-muted-foreground mt-1">
            Como instalar e fazer login no app de TV
          </p>
        </motion.div>

        {/* Timeline steps */}
        <div className="max-w-3xl mx-auto mt-12 relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {tutorialSteps.map((step, i) => {
              const isLast = i === tutorialSteps.length - 1;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex gap-6"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0 font-display text-lg shadow-lg">
                    {isLast ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      i + 1
                    )}
                  </div>

                  {/* Step content */}
                  <div className="card-glass rounded-xl p-6 flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-secondary-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <div className="card-glass rounded-xl p-8">
            <p className="text-foreground font-display font-semibold text-lg mb-4">
              Ainda não baixou o aplicativo?
            </p>
            <a
              href={APK_DOWNLOAD_URL}
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Baixar APK agora
            </a>
          </div>
        </motion.div>

        {/* Support info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-3xl mx-auto mt-8 text-center"
        >
          <p className="text-muted-foreground text-sm">
            Precisa de ajuda? Entre em contato:
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            (85) 3512-0329 · contato@ypntecnologia.com.br
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Tutorial;
