
import FeaturesSection from "@/components/FeaturesSection";

const FeaturesPage = () => (
  <div className="min-h-screen flex flex-col">
    <div className="container mx-auto px-4 py-16 flex-grow">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-metadesk-purple text-center">
          Features
        </h1>
        <div className="space-y-8">
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Discover powerful tools and features designed to enhance your workflow
          </p>
          <FeaturesSection />
        </div>
      </div>
    </div>
  </div>
);

export default FeaturesPage;
