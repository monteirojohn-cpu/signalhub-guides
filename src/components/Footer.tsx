const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} YPN Tecnologia LTDA · (85) 3512-0329 · contato@ypntecnologia.com.br
      </div>
    </footer>
  );
};

export default Footer;
