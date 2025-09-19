import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Connecting In A Better Way
          </h2>
          <p className="text-xl text-primary font-semibold mb-4">
            Communicate With Your Customers Via Chat
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            It's no secret most of us prefer chats over phone calls, but most businesses 
            still aren't engaging with prospects and customers via their preferred method of communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="p-8 bg-background border-0 shadow-card text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
              💬
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Unlock The Power Of Chat
            </h3>
            <p className="text-muted-foreground">
              Skyrocket your business by opening the most preferred communication channel
            </p>
          </Card>

          <Card className="p-8 bg-background border-0 shadow-card text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
              📞
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Never Miss Another Call
            </h3>
            <p className="text-muted-foreground">
              Transform every missed opportunity into a meaningful conversation
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;