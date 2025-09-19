import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">📞</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground">The Missed-Call</h1>
            <p className="text-xs text-primary font-medium">Text-Back</p>
          </div>
        </div>
        
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Try A Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;