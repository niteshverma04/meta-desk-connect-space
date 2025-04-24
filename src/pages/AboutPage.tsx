
const AboutPage = () => (
  <div className="min-h-screen flex flex-col">
    <div className="container mx-auto px-4 py-16 flex-grow">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-metadesk-purple text-center">
          About
        </h1>
        <div className="space-y-8">
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Learn more about our mission and values
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-lg leading-relaxed">
              MetaDesk is built to empower your workflow with simplicity and power. We believe in creating tools that make collaboration seamless and enjoyable, helping teams achieve their best work together.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
