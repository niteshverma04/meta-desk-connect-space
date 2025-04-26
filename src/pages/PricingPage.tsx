
const PricingPage = () => (
  <div className="min-h-screen flex flex-col bg-[#1A1F2C] text-foreground pt-20 md:pt-24">
    <div className="container mx-auto px-4 py-8 md:py-16 flex-grow">
      <div className="max-w-4xl mx-auto backdrop-blur-xl bg-black/60 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-metadesk-purple/30 shadow-[0_4px_20px_-2px_rgba(155,135,245,0.3)]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-metadesk-purple to-metadesk-dark-purple">
          Pricing
        </h1>
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <p className="text-lg sm:text-xl text-gray-300 text-center max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
          <div className="backdrop-blur-sm bg-black/20 rounded-xl p-4 sm:p-6 md:p-8 text-center border border-metadesk-purple/20">
            <p className="text-base sm:text-lg text-gray-300">Choose the plan that's right for you! (Pricing info coming soon)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PricingPage;
