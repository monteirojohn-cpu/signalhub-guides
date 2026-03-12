import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const ImportantNotice = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-3xl mx-auto card-glass rounded-2xl p-8 border-l-4 border-l-primary">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              Aviso Importante
            </h3>
            <div className="space-y-4 text-secondary-foreground">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <p>
                  Se baixar o app <strong className="text-foreground">SIGNALPLAY</strong>, basta inserir seu login e senha diretamente. Nenhuma configuração adicional é necessária.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <p>
                  Se baixar o app <strong className="text-foreground">CDNTV</strong>, é necessário selecionar o provedor <strong className="text-foreground">SIGNAL PLAY</strong>, informar o domínio <code className="px-2 py-0.5 rounded bg-secondary text-primary text-sm font-mono">tv.signalplay.com.br</code> e depois inserir suas credenciais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ImportantNotice;
