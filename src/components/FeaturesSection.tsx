
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  FileText, 
  Video, 
  PanelLeft 
} from "lucide-react";

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => (
  <div className="bg-[#1A2333] rounded-xl p-6 shadow-lg border border-metadesk-purple/20 hover:border-metadesk-purple/40 transition-all duration-300 hover:shadow-xl">
    <div className="w-12 h-12 rounded-lg bg-metadesk-purple/10 flex items-center justify-center mb-4">
      <div className="text-metadesk-purple">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users size={24} />,
      title: "Virtual Workspaces",
      description: "Customizable spaces for your team to collaborate just like a physical office."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Real-time Chat",
      description: "Connect with teammates instantly with text, voice, and video messaging."
    },
    {
      icon: <Calendar size={24} />,
      title: "Smart Scheduling",
      description: "AI-powered scheduling that finds the perfect time for everyone to meet."
    },
    {
      icon: <FileText size={24} />,
      title: "Document Collaboration",
      description: "Edit documents together in real-time with version history and tracking."
    },
    {
      icon: <Video size={24} />,
      title: "HD Video Conferencing",
      description: "Crystal clear video meetings with screen sharing and recording."
    },
    {
      icon: <PanelLeft size={24} />,
      title: "Project Management",
      description: "Keep projects on track with kanban boards, tasks, and deadlines."
    }
  ];

  return (
    <section id="features" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Powerful Collaboration Tools</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything your team needs to work together, all in one platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
