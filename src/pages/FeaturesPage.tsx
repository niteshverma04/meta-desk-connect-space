
import FeaturesSection from "@/components/FeaturesSection";

const FeaturesPage = () => (
  <div className="min-h-screen flex flex-col bg-background text-foreground">
    <div className="container mx-auto px-4 py-16 flex-grow">
      <div className="max-w-4xl mx-auto backdrop-blur-xl bg-black/40 p-8 rounded-2xl border border-metadesk-purple/30 shadow-[0_4px_20px_-2px_rgba(155,135,245,0.3)]">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-metadesk-purple text-center bg-clip-text text-transparent bg-gradient-to-r from-metadesk-purple to-metadesk-dark-purple">
          Features
        </h1>
        <div className="space-y-8">
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
            Discover powerful tools and features designed to enhance your workflow
          </p>
          <FeaturesSection />
        </div>
      </div>
    </div>
  </div>
);

export default FeaturesPage;
