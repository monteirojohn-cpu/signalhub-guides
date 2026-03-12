import { Signal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Signal className="w-6 h-6 text-primary" />
              <span className="font-display text-xl font-bold text-foreground">SignalHub</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Central oficial de tutoriais e suporte do aplicativo SIGNALPLAY. Ajudamos você a configurar e aproveitar o melhor da sua experiência de streaming.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#tutoriais" className="hover:text-primary transition-colors">Tutoriais</a></li>
              <li><a href="#aviso" className="hover:text-primary transition-colors">Aviso Importante</a></li>
              <li><a href="#suporte" className="hover:text-primary transition-colors">Suporte</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Informações</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>App: SIGNALPLAY</li>
              <li>Domínio CDNTV: tv.signalplay.com.br</li>
              <li>Provedor: SIGNAL PLAY</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SignalHub. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
