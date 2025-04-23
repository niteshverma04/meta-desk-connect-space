
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PersonaProps {
  title: string;
  description: string;
  benefits: string[];
  imageBg: string;
  cta: string;
}

const PersonaCard = ({ title, description, benefits, imageBg, cta }: PersonaProps) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
    <div className={`h-48 ${imageBg} flex items-center justify-center p-6`}>
      <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">{title}</h3>
    </div>
    <div className="p-6">
      <p className="text-gray-700 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-2 mt-1">
              <Check size={18} className="text-green-500" />
            </div>
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full bg-metadesk-purple hover:bg-metadesk-dark-purple">
        {cta}
      </Button>
    </div>
  </div>
);

const PersonasSection = () => {
  const personas = [
    {
      title: "For Freelancers",
      description: "Find clients, showcase your portfolio, and manage your projects all in one place.",
      benefits: [
        "Connect with potential clients globally",
        "Join specialized communities in your field",
        "Manage multiple projects with dedicated workspaces",
        "Get paid securely through our platform"
      ],
      imageBg: "bg-gradient-to-br from-blue-500 to-purple-600",
      cta: "Start Freelancing"
    },
    {
      title: "For Companies",
      description: "Find top talent, manage remote teams, and streamline your workflow efficiently.",
      benefits: [
        "Access a global pool of skilled professionals",
        "Seamless onboarding for remote contractors",
        "Custom workspaces for different departments",
        "Advanced analytics and reporting tools"
      ],
      imageBg: "bg-gradient-to-br from-purple-600 to-indigo-600",
      cta: "Hire Talent"
    },
    {
      title: "For Remote Workers",
      description: "Stay connected with your team, access resources, and boost your productivity.",
      benefits: [
        "Feel connected to your team despite distance",
        "Access all work tools in one unified platform",
        "Track time and productivity easily",
        "Join company events and social activities"
      ],
      imageBg: "bg-gradient-to-br from-indigo-600 to-blue-500",
      cta: "Connect Now"
    }
  ];

  return (
    <section id="personas" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">MetaDesk Works for Everyone</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored features for freelancers, companies, and remote employees to thrive in the digital workplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <PersonaCard key={index} {...persona} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
