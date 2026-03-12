import { Wifi } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Wifi className="w-6 h-6 text-primary" />
          <span className="font-display text-lg font-bold text-foreground">YPN Tecnologia</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/tutorial" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Tutorial
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
