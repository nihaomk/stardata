
'use client';

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20technology%20background%20with%20flowing%20data%20particles%20and%20neural%20network%20connections%20in%20deep%20space%2C%20dark%20blue%20gradient%20with%20glowing%20light%20trails%20and%20geometric%20patterns%2C%20futuristic%20digital%20landscape%20with%20minimal%20complexity%20for%20text%20overlay&width=1920&height=1080&seq=hero1&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-slate-900/70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
              Premier AI Training Data Partner
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Precision</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Annotation
            </span>
            <span className="block text-3xl md:text-4xl font-normal text-gray-300 mt-2">
              Intelligent Harvest
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Delivering professional, efficient data annotation and collection services 
            to power your intelligent models and accelerate deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap">
              <i className="ri-rocket-line mr-2"></i>
              Power Your AI
            </button>
            <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all cursor-pointer whitespace-nowrap">
              <i className="ri-play-circle-line mr-2"></i>
              Learn More
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-12 text-gray-400">
            <div className="flex items-center gap-2">
              <i className="ri-shield-check-line text-green-400"></i>
              <span>99.9% Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-time-line text-blue-400"></i>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-global-line text-purple-400"></i>
              <span>Global Scale</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl opacity-60"></i>
      </div>
    </section>
  );
}
