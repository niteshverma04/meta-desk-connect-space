
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-metadesk-purple/20 to-metadesk-light-blue/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-metadesk-purple/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-metadesk-light-blue/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Work Experience?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of professionals already using MetaDesk to connect, collaborate, and create together.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-metadesk-purple focus:border-transparent"
              />
              <Button className="bg-metadesk-purple hover:bg-metadesk-dark-purple text-white px-6 py-3 h-auto whitespace-nowrap">
                Get Early Access
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Free 30-day trial. No credit card required.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-metadesk-purple mb-2">10,000+</div>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-metadesk-purple mb-2">500+</div>
                <p className="text-gray-600">Companies</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-metadesk-purple mb-2">98%</div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
