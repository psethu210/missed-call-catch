import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">📞</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground">The Missed-Call</h1>
            <p className="text-xs text-primary font-medium">Text-Back</p>
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link
            to="/calculator"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            ROI Calculator
          </Link>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Try A Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;