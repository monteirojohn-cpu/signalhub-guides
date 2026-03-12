import { useState } from "react";
import { motion } from "framer-motion";
import { Box, ExternalLink, X } from "lucide-react";
import { platforms, Platform } from "@/data/tutorials";

const iconMap: Record<string, React.ReactNode> = {
  box: <Box className="w-10 h-10 text-foreground" />,
};

const PlatformModal = ({ platform, onClose }: { platform: Platform; onClose: () => void }) => {
  const info = platform.modalInfo!;
  const isDownloader = !!info.downloaderCode;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        className="relative w-full max-w-md rounded-2xl bg-card border border-border p-6 shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
          {platform.type === "image" ? (
            <img src={platform.icon} alt="" className="w-7 h-7 object-contain" />
          ) : platform.type === "text" ? (
            <span className="text-lg">{platform.icon}</span>
          ) : (
            iconMap[platform.icon]
          )}
          {platform.title} {platform.subtitle && `/ ${platform.subtitle}`}
        </h3>

        {isDownloader ? (
          <div className="text-center">
            <p className="text-muted-foreground mb-3">
              Abra o app <strong className="text-foreground">Downloader</strong> e digite o código:
            </p>
            <div className="rounded-xl bg-secondary/80 border border-border py-4 px-6 mb-3">
              <span className="font-display font-bold text-4xl text-primary tracking-widest">
                {info.downloaderCode}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{info.downloaderNote}</p>
          </div>
        ) : (
          <>
            <div className="rounded-xl bg-secondary/50 border border-border p-4 space-y-3 mb-4">
              {info.app && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">APP</p>
                  <p className="font-semibold text-foreground">{info.app}</p>
                </div>
              )}
              {info.provedor && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">PROVEDOR</p>
                  <p className="font-semibold text-foreground">{info.provedor}</p>
                </div>
              )}
              {info.dominio && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">DOMÍNIO</p>
                  <p className="font-semibold text-foreground">{info.dominio}</p>
                </div>
              )}
              {info.login && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">LOGIN</p>
                  <p className="font-semibold text-foreground">{info.login}</p>
                </div>
              )}
              {info.senha && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">SENHA</p>
                  <p className="font-semibold text-foreground">{info.senha}</p>
                </div>
              )}
            </div>

            {info.compativel && (
              <p className="text-sm text-muted-foreground mb-4">{info.compativel}</p>
            )}

            {info.storeLink && (
              <a
                href={info.storeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {info.storeLinkLabel || "Abrir na Loja"}
              </a>
            )}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

const PlatformCards = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const handleClick = (platform: Platform) => {
    if (platform.action === "link" && platform.href) {
      window.open(platform.href, "_blank", "noopener,noreferrer");
    } else if (platform.action === "modal") {
      setSelectedPlatform(platform);
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
          Disponível em
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            onClick={() => handleClick(platform)}
            className={`cursor-pointer rounded-xl p-5 bg-gradient-to-br ${platform.color} flex flex-col items-center justify-center text-center gap-3 min-h-[140px] transition-all duration-300 hover:shadow-lg`}
          >
            <div className="w-16 h-12 flex items-center justify-center">
              {platform.type === "image" ? (
                <img
                  src={platform.icon}
                  alt={platform.title}
                  className={`object-contain ${platform.id === "google-tv" ? "w-16 h-16" : "w-10 h-10"}`}
                />
              ) : platform.type === "text" ? (
                <span className="text-foreground font-bold text-xl font-display">{platform.icon}</span>
              ) : (
                iconMap[platform.icon] || null
              )}
            </div>

            <div>
              <h3 className="font-display font-semibold text-foreground text-sm">
                {platform.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {platform.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedPlatform && (
        <PlatformModal
          platform={selectedPlatform}
          onClose={() => setSelectedPlatform(null)}
        />
      )}
    </section>
  );
};

export default PlatformCards;
