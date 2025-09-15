import React from 'react';
import { Brain, Shield, Code, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-12 w-12" />,
      title: "AI Development",
      description: "Custom artificial intelligence solutions tailored to your business needs",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Integration"
      ],
      price: "Starting at $25,000"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Blockchain Solutions",
      description: "Secure, scalable blockchain applications and smart contracts",
      features: [
        "Smart Contract Development",
        "DeFi Applications",
        "NFT Platforms",
        "Blockchain Integration",
        "Security Audits"
      ],
      price: "Starting at $30,000"
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Full-Stack Development",
      description: "End-to-end web and mobile application development",
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "Database Design",
        "Cloud Deployment"
      ],
      price: "Starting at $15,000"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Innovation Consulting",
      description: "Strategic guidance for digital transformation and emerging technologies",
      features: [
        "Technology Strategy",
        "Digital Transformation",
        "Innovation Workshops",
        "Technical Due Diligence",
        "Implementation Roadmaps"
      ],
      price: "Starting at $5,000"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business goals, challenges, and technical requirements."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Our team develops a comprehensive strategy and detailed project roadmap."
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "Using agile methodologies, we build and deploy your solution with regular updates."
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing and optimization ensure peak performance and reliability."
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "We handle the launch and provide ongoing support and maintenance."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions that drive innovation and accelerate your digital transformation journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and explore how we can help you achieve your goals with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;