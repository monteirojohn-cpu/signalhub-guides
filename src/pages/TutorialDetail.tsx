import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Copy, CheckCircle2, AlertCircle } from "lucide-react";
import { tutorials } from "@/data/tutorials";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const TutorialDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const tutorial = tutorials.find((t) => t.id === id);

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground text-lg mb-4">Tutorial não encontrado</p>
          <button onClick={() => navigate("/")} className="text-primary hover:underline">
            Voltar ao início
          </button>
        </div>
      </div>
    );
  }

  const Icon = tutorial.icon;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-16 container mx-auto px-4">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar aos tutoriais
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tutorial.color} flex items-center justify-center`}>
              <Icon className="w-8 h-8 text-foreground" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                {tutorial.title}
              </h1>
              <p className="text-muted-foreground">{tutorial.subtitle}</p>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="max-w-3xl space-y-6 mb-12">
          {tutorial.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-glass rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 font-display text-lg">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {step.note && (
                    <div className="mt-3 flex items-center gap-2">
                      <code className="px-3 py-1.5 rounded-lg bg-secondary text-primary text-sm font-mono">
                        {step.note}
                      </code>
                      <button
                        onClick={() => handleCopy(step.note!, i)}
                        className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                        title="Copiar"
                      >
                        {copiedIndex === i ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notes */}
        {tutorial.notes && tutorial.notes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: tutorial.steps.length * 0.1 }}
            className="max-w-3xl card-glass rounded-xl p-6 border-l-4 border-l-accent"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-semibold text-foreground mb-3">Observações Importantes</h4>
                <ul className="space-y-2">
                  {tutorial.notes.map((note, i) => (
                    <li key={i} className="text-secondary-foreground text-sm flex gap-2">
                      <span className="text-primary">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TutorialDetail;
