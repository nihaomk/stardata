
'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Enabling AI Innovation Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Meticulously Crafted Training Data
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As your premier partner in AI development, we bridge the gap between raw data and intelligent insights, 
            delivering precision-engineered datasets that power breakthrough innovations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To accelerate the development of intelligent systems by providing the highest quality, 
              most comprehensive training data solutions. We believe that exceptional AI starts with exceptional data.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-blue-600 text-sm"></i>
                </div>
                <span className="text-gray-700">Precision-first approach to every annotation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-blue-600 text-sm"></i>
                </div>
                <span className="text-gray-700">Scalable solutions for enterprise needs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-blue-600 text-sm"></i>
                </div>
                <span className="text-gray-700">Continuous innovation in data processing</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=professional%20team%20of%20data%20scientists%20working%20with%20advanced%20AI%20annotation%20tools%20in%20a%20modern%20clean%20office%20environment%2C%20multiple%20monitors%20displaying%20data%20visualization%20and%20neural%20network%20diagrams%2C%20bright%20and%20professional%20atmosphere%20with%20focus%20on%20precision%20and%20technology&width=600&height=400&seq=about1&orientation=landscape"
              alt="Professional data annotation team"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover object-top"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">1M+</div>
              <div className="text-sm opacity-90">Data Points Processed</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-crosshair-line text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Precision</h4>
            <p className="text-gray-600">Every annotation is meticulously crafted with industry-leading accuracy standards</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-speed-line text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Efficiency</h4>
            <p className="text-gray-600">Streamlined workflows and advanced tools ensure rapid project completion</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-white text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Security</h4>
            <p className="text-gray-600">Enterprise-grade security protocols protect your sensitive data assets</p>
          </div>
        </div>
      </div>
    </section>
  );
}
