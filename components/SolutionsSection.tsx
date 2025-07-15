
'use client';

export default function SolutionsSection() {
  const solutions = [
    {
      icon: 'ri-car-line',
      title: 'Autonomous Vehicles',
      description: 'Comprehensive datasets for self-driving car development',
      image: 'https://readdy.ai/api/search-image?query=abstract%20representation%20of%20autonomous%20vehicle%20technology%20with%20clean%20road%20lines%20and%20geometric%20patterns%2C%20minimal%20tech%20aesthetic%20with%20deep%20blue%20gradients%20and%20glowing%20elements%2C%20no%20actual%20cars%20visible%20just%20conceptual%20road%20infrastructure&width=400&height=300&seq=auto1&orientation=landscape',
      features: ['3D Object Detection', 'Lane Segmentation', 'Traffic Sign Recognition', 'Pedestrian Tracking'],
      stats: { projects: '150+', accuracy: '99.8%' }
    },
    {
      icon: 'ri-health-book-line',
      title: 'Medical AI',
      description: 'Precision-annotated medical imaging and diagnostic data',
      image: 'https://readdy.ai/api/search-image?query=abstract%20medical%20technology%20visualization%20with%20clean%20geometric%20patterns%20representing%20data%20analysis%2C%20soft%20blue%20and%20white%20gradient%20background%20with%20minimal%20medical%20icons%20and%20flowing%20data%20streams%2C%20professional%20healthcare%20aesthetic&width=400&height=300&seq=medical1&orientation=landscape',
      features: ['Radiology Annotation', 'Pathology Detection', 'Clinical Data Processing', 'Diagnostic Support'],
      stats: { projects: '80+', accuracy: '99.5%' }
    },
    {
      icon: 'ri-shopping-bag-line',
      title: 'Retail & E-commerce',
      description: 'Product recognition and recommendation system training',
      image: 'https://readdy.ai/api/search-image?query=modern%20e-commerce%20technology%20concept%20with%20abstract%20product%20recognition%20patterns%2C%20clean%20geometric%20designs%20with%20gradient%20backgrounds%20in%20blue%20and%20silver%20tones%2C%20minimal%20shopping%20and%20data%20visualization%20elements&width=400&height=300&seq=retail1&orientation=landscape',
      features: ['Product Categorization', 'Visual Search', 'Recommendation Engines', 'Inventory Management'],
      stats: { projects: '200+', accuracy: '99.2%' }
    },
    {
      icon: 'ri-security-scan-line',
      title: 'Security & Surveillance',
      description: 'Advanced security systems with intelligent monitoring',
      image: 'https://readdy.ai/api/search-image?query=abstract%20security%20technology%20visualization%20with%20geometric%20surveillance%20patterns%2C%20dark%20blue%20gradient%20background%20with%20glowing%20network%20connections%20and%20minimal%20security%20elements%2C%20professional%20tech%20aesthetic&width=400&height=300&seq=security1&orientation=landscape',
      features: ['Facial Recognition', 'Behavior Analysis', 'Threat Detection', 'Access Control'],
      stats: { projects: '120+', accuracy: '99.7%' }
    },
    {
      icon: 'ri-robot-line',
      title: 'Industrial Automation',
      description: 'Smart manufacturing and robotic process optimization',
      image: 'https://readdy.ai/api/search-image?query=industrial%20automation%20technology%20concept%20with%20clean%20geometric%20patterns%20representing%20manufacturing%20processes%2C%20blue%20and%20silver%20gradient%20background%20with%20minimal%20robotic%20and%20mechanical%20elements%2C%20modern%20tech%20aesthetic&width=400&height=300&seq=industrial1&orientation=landscape',
      features: ['Quality Inspection', 'Predictive Maintenance', 'Process Optimization', 'Robotic Vision'],
      stats: { projects: '90+', accuracy: '99.6%' }
    },
    {
      icon: 'ri-translate-line',
      title: 'Natural Language Processing',
      description: 'Multilingual AI models and conversational systems',
      image: 'https://readdy.ai/api/search-image?query=abstract%20natural%20language%20processing%20visualization%20with%20flowing%20text%20patterns%20and%20communication%20networks%2C%20clean%20blue%20gradient%20background%20with%20minimal%20linguistic%20and%20data%20flow%20elements%2C%20modern%20AI%20aesthetic&width=400&height=300&seq=nlp1&orientation=landscape',
      features: ['Sentiment Analysis', 'Language Translation', 'Chatbot Training', 'Content Understanding'],
      stats: { projects: '180+', accuracy: '99.1%' }
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Industry-Leading AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Solutions & Applications
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering breakthrough innovations across diverse industries with our specialized 
            data solutions and domain expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <i className={`${solution.icon} text-blue-600 text-xl`}></i>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-blue-600 text-xs"></i>
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{solution.stats.projects}</div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{solution.stats.accuracy}</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm cursor-pointer whitespace-nowrap">
                    Learn More <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://readdy.ai/api/search-image?query=abstract%20technology%20network%20pattern%20with%20flowing%20data%20connections%20and%20neural%20network%20visualization%2C%20dark%20background%20with%20glowing%20blue%20and%20cyan%20elements%2C%20geometric%20patterns%20for%20overlay&width=1200&height=400&seq=cta1&orientation=landscape"
              alt="Technology background"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Accelerate Your AI Development?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join industry leaders who trust Stardata to power their intelligent systems with precision-crafted training data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-message-line mr-2"></i>
                Request Solution
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-phone-line mr-2"></i>
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
