import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Missed Call Detected",
      description: "Every time an inbound call to your business goes unanswered, we'll send a text message back to the caller within seconds!",
      feature: "No missed-calls left behind"
    },
    {
      step: "2", 
      title: "Text Message Sent",
      description: "When they reply, we'll push you a notification from our mobile app, where you can continue the convo!",
      feature: "Turns missed-calls into SMS conversations"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            How It Works
          </h2>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={step.step} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Card className="p-8 bg-gradient-hero border-0 shadow-card">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {step.feature}
                  </div>
                </Card>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex justify-center`}>
                <div className="w-80 h-60 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-6xl">
                  📱
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-primary text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transform transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;