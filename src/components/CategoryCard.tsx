import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Tutorial } from "@/data/tutorials";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  tutorial: Tutorial;
  index: number;
}

const CategoryCard = ({ tutorial, index }: CategoryCardProps) => {
  const navigate = useNavigate();
  const Icon = tutorial.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      onClick={() => navigate(`/tutorial/${tutorial.id}`)}
      className="group cursor-pointer card-glass rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:glow-primary"
    >
      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${tutorial.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-foreground" />
      </div>

      <h3 className="font-display text-lg font-semibold text-foreground mb-1">
        {tutorial.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {tutorial.subtitle}
      </p>

      <div className="flex items-center text-sm text-primary font-medium gap-1 group-hover:gap-2 transition-all duration-300">
        Ver tutorial
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
};

export default CategoryCard;
