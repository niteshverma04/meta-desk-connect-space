
const PricingPage = () => (
  <div className="min-h-screen flex flex-col bg-background text-foreground pt-20 md:pt-24">
    <div className="container mx-auto px-4 py-8 md:py-16 flex-grow">
      <div className="max-w-4xl mx-auto backdrop-blur-xl bg-card/50 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-border shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-metadesk-purple to-metadesk-dark-purple">
          Pricing
        </h1>
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <p className="text-lg sm:text-xl text-foreground/75 text-center max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
                      <div className="backdrop-blur-sm bg-muted/50 rounded-xl p-4 sm:p-6 md:p-8 text-center border border-border">
              <p className="text-base sm:text-lg text-foreground/80">Choose the plan that's right for you! (Pricing info coming soon)</p>
            </div>
        </div>
      </div>
    </div>
  </div>
);

export default PricingPage;
