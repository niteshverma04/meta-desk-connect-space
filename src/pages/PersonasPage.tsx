
import PersonasSection from "@/components/PersonasSection";

const PersonasPage = () => (
  <div className="min-h-screen flex flex-col">
    <div className="container mx-auto px-4 py-16 flex-grow">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-metadesk-purple text-center">
          For You
        </h1>
        <div className="space-y-8">
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Find the perfect solution tailored to your needs
          </p>
          <PersonasSection />
        </div>
      </div>
    </div>
  </div>
);

export default PersonasPage;
