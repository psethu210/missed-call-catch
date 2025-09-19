import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-6">
            🏆 Loved By Thousands of Businesses Around The World
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Never Lose Business
                </span>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                To A Missed Call Again!
              </h2>
              <p className="text-xl text-muted-foreground max-w-lg">
                We'll turn every missed call into a text message conversation
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-primary text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transform transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={heroIllustration} 
              alt="Business communication illustration" 
              className="max-w-full h-auto rounded-lg shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;