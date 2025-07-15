
'use client';

import { useState } from 'react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('annotation');

  const annotationServices = [
    {
      icon: 'ri-image-line',
      title: 'Image Annotation',
      description: 'Bounding boxes, segmentation, keypoint detection, and classification for computer vision models',
      features: ['Object Detection', 'Semantic Segmentation', 'Instance Segmentation', 'Keypoint Annotation']
    },
    {
      icon: 'ri-file-text-line',
      title: 'Text Annotation',
      description: 'NLP tasks including sentiment analysis, entity recognition, and content classification',
      features: ['Named Entity Recognition', 'Sentiment Analysis', 'Text Classification', 'Content Moderation']
    },
    {
      icon: 'ri-video-line',
      title: 'Video Annotation',
      description: 'Frame-by-frame annotation for action recognition and temporal understanding',
      features: ['Action Recognition', 'Object Tracking', 'Event Detection', 'Temporal Segmentation']
    },
    {
      icon: 'ri-mic-line',
      title: 'Audio Annotation',
      description: 'Speech recognition, audio classification, and sound event detection',
      features: ['Speech Transcription', 'Audio Classification', 'Sound Event Detection', 'Speaker Identification']
    }
  ];

  const collectionServices = [
    {
      icon: 'ri-camera-line',
      title: 'Multi-Scenario Collection',
      description: 'Comprehensive data collection across diverse environments and conditions',
      features: ['Indoor/Outdoor Scenarios', 'Weather Variations', 'Lighting Conditions', 'Geographic Diversity']
    },
    {
      icon: 'ri-radar-line',
      title: 'LiDAR & Sensor Fusion',
      description: 'Advanced sensor data collection and fusion for autonomous systems',
      features: ['3D Point Clouds', 'Multi-Sensor Fusion', 'Calibration Services', 'Real-time Processing']
    },
    {
      icon: 'ri-database-line',
      title: 'Data Preprocessing',
      description: 'Clean, normalize, and prepare raw data for optimal training performance',
      features: ['Data Cleaning', 'Format Conversion', 'Quality Assessment', 'Augmentation Services']
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Custom Solutions',
      description: 'Tailored data collection strategies based on specific project requirements',
      features: ['Custom Protocols', 'Specialized Equipment', 'Domain Expertise', 'End-to-end Pipeline']
    }
  ];

  const currentServices = activeTab === 'annotation' ? annotationServices : collectionServices;

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive AI Data
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Services & Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From precision annotation to intelligent collection, we provide end-to-end data solutions 
            that power your AI innovations with unmatched quality and efficiency.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <button
              className={`px-8 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'annotation'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('annotation')}
            >
              <i className="ri-edit-box-line mr-2"></i>
              Data Annotation
            </button>
            <button
              className={`px-8 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'collection'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('collection')}
            >
              <i className="ri-database-2-line mr-2"></i>
              Data Collection
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-blue-600 text-xs"></i>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Quality Assurance Process</h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-file-check-line text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Initial Review</h4>
                <p className="text-sm opacity-90">Comprehensive data assessment and quality benchmarking</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-team-line text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Expert Annotation</h4>
                <p className="text-sm opacity-90">Skilled annotators with domain-specific expertise</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-search-eye-line text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Multi-tier QA</h4>
                <p className="text-sm opacity-90">Automated and manual quality validation processes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-shield-check-line text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Final Delivery</h4>
                <p className="text-sm opacity-90">Guaranteed accuracy with comprehensive documentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
