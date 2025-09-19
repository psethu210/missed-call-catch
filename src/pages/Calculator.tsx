import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Calculator = () => {
  const [averageClientValue, setAverageClientValue] = useState<number>(0);
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState<number>(0);
  const [averageCloseRate, setAverageCloseRate] = useState<number>(0);
  const [results, setResults] = useState<{
    monthlyLeftOnTable: number;
    weCharge: number;
    roi: number;
  } | null>(null);

  const calculateROI = () => {
    // Calculate missed calls per month (4.33 weeks per month)
    const missedCallsPerMonth = missedCallsPerWeek * 4.33;
    
    // Calculate potential revenue from missed calls
    const potentialConversions = missedCallsPerMonth * (averageCloseRate / 100);
    const monthlyLeftOnTable = potentialConversions * averageClientValue;
    
    // Assuming service charge is $97/month (typical SaaS pricing)
    const weCharge = 97;
    
    // Calculate ROI
    const roi = weCharge > 0 ? ((monthlyLeftOnTable - weCharge) / weCharge) * 100 : 0;
    
    setResults({
      monthlyLeftOnTable: Math.round(monthlyLeftOnTable),
      weCharge,
      roi: Math.round(roi)
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Calculator Card */}
            <Card className="p-8 bg-background shadow-card">
              <h1 className="text-3xl font-bold text-center text-foreground mb-8">
                ROI Calculator
              </h1>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="clientValue" className="text-base font-medium text-foreground">
                    Average Client Value:
                  </Label>
                  <Input
                    id="clientValue"
                    type="number"
                    value={averageClientValue || ''}
                    onChange={(e) => setAverageClientValue(Number(e.target.value))}
                    placeholder="Enter amount"
                    className="mt-2 text-lg"
                  />
                </div>
                
                <div>
                  <Label htmlFor="missedCalls" className="text-base font-medium text-foreground">
                    Missed Calls per Week:
                  </Label>
                  <Input
                    id="missedCalls"
                    type="number"
                    value={missedCallsPerWeek || ''}
                    onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
                    placeholder="Enter number"
                    className="mt-2 text-lg"
                  />
                </div>
                
                <div>
                  <Label htmlFor="closeRate" className="text-base font-medium text-foreground">
                    Average Close Rate (%):
                  </Label>
                  <Input
                    id="closeRate"
                    type="number"
                    value={averageCloseRate || ''}
                    onChange={(e) => setAverageCloseRate(Number(e.target.value))}
                    placeholder="Enter percentage"
                    className="mt-2 text-lg"
                    max="100"
                  />
                </div>
                
                <Button
                  onClick={calculateROI}
                  className="w-full bg-gradient-primary hover:shadow-primary text-primary-foreground py-6 text-lg font-semibold rounded-lg transform transition-all duration-300 hover:scale-105"
                >
                  Calculate ROI
                </Button>
              </div>
              
              {results && (
                <div className="mt-8 pt-8 border-t border-border">
                  <h2 className="text-xl font-bold text-foreground mb-6">Results:</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                      <span className="font-medium text-foreground">Monthly $$$ Left on Table:</span>
                      <span className="text-xl font-bold text-destructive">
                        ${results.monthlyLeftOnTable.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                      <span className="font-medium text-foreground">We Charge (per month):</span>
                      <span className="text-xl font-bold text-foreground">
                        ${results.weCharge}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border-2 border-primary">
                      <span className="font-medium text-foreground">ROI:</span>
                      <span className="text-2xl font-bold text-primary">
                        {results.roi > 0 ? '+' : ''}{results.roi}%
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </Card>
            
            {/* Information Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Get An Estimate Of How Much Your Missed Calls Are Costing You
                </h2>
                
                <div className="space-y-4 text-lg text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Enter the average lifetime value of a customer</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Enter an estimate of how many calls you miss per month</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Enter the rate at which you close new sales</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Hit Calculate and we'll show you how much money we can make you!</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Calculator;