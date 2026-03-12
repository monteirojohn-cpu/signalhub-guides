import { motion } from "framer-motion";
import { Apple, Box } from "lucide-react";
import { platforms } from "@/data/tutorials";

const iconMap: Record<string, React.ReactNode> = {
  apple: <Apple className="w-10 h-10 text-foreground" />,
  box: <Box className="w-10 h-10 text-foreground" />,
};

const PlatformCards = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
          Disponível em
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className={`cursor-pointer rounded-xl p-5 bg-gradient-to-br ${platform.color} flex flex-col items-center justify-center text-center gap-3 min-h-[140px] transition-all duration-300 hover:shadow-lg`}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              {platform.type === "image" ? (
                <img src={platform.icon} alt={platform.title} className="w-10 h-10 object-contain" />
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
    </section>
  );
};

export default PlatformCards;
