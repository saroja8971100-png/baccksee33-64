const SimpleReturnsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Text Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            No boxes. No labels. No lines.
            <br />
            Just returns made easy
            <br />
            <span className="text-pink-bright">And yes — it really is that simple.</span>
          </h2>
        </div>
        
        {/* Images */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6 max-w-6xl mx-auto">
          {/* Frustrated customer - Left */}
          <div className="flex-1 max-w-sm lg:max-w-xs">
            <img 
              src="/lovable-uploads/45e8252d-b79a-4f44-a3f0-fab0a311829c.png" 
              alt="Frustrated customer with damaged item" 
              className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          
          {/* Form/Phone interface - Middle */}
          <div className="flex-1 max-w-sm lg:max-w-xs">
            <img 
              src="/lovable-uploads/53a03f22-7f32-495f-b524-eb21ff28b4e8.png" 
              alt="Fill the form out - Select pickup time and get confirmation" 
              className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          
          {/* Happy customer - Right */}
          <div className="flex-1 max-w-sm lg:max-w-xs">
            <img 
              src="/lovable-uploads/42566c71-487e-4b92-b4e6-98a5167a63cf.png" 
              alt="Return picked - Happy customer notification" 
              className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SimpleReturnsSection;