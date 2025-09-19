const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">📞</span>
          </div>
          <div>
            <h3 className="font-bold text-lg">The Missed-Call</h3>
            <p className="text-xs text-primary font-medium">Text-Back</p>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4">
          Never lose business to a missed call again.
        </p>
        
        <p className="text-sm text-muted-foreground">
          © 2024 The Missed-Call Text-Back. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;