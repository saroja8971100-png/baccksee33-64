import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const benefits = [
    "Up to 5 items picked up from your door",
    "Max combined weight: 12 kg",
    "No hidden fees",
    "No subscriptions", 
    "No stress"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            One flat fee. No surprises
          </h2>
          <p className="text-xl text-muted-foreground">
            Pay once and enjoy all the benefits of baccksee return service.
          </p>
        </div>
        
        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-3xl p-8 shadow-2xl border-2 border-pink-bright/20 relative overflow-hidden">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-bright/5 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10">
              
              {/* Price */}
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-foreground mb-2">
                  $12
                </div>
                <p className="text-muted-foreground">
                  Per pickup service
                </p>
              </div>
              
              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-pink-bright rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* Shipping Note */}
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/30 mb-6">
                <div className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Note:</span> baccksee manages the entire process, but customers must cover the return shipping cost.
                </p>
              </div>
              
              {/* CTA Button */}
              <Button variant="pink" size="lg" className="w-full text-lg py-6">
                Get Early Access
              </Button>
              
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PricingSection;