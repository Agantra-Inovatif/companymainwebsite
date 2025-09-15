import React from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Trading Platform",
      category: "AI & Finance",
      description: "Advanced algorithmic trading platform using machine learning for market prediction and automated trading strategies.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "WebSocket"],
      results: ["40% increase in trading efficiency", "99.9% uptime", "50+ active traders"],
      link: "#",
      github: "#"
    },
    {
      title: "Decentralized Supply Chain",
      category: "Blockchain & Logistics",
      description: "Transparent supply chain management system using blockchain technology for tracking goods from origin to consumer.",
      image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React", "IPFS"],
      results: ["100% traceability", "30% cost reduction", "Zero counterfeits"],
      link: "#",
      github: "#"
    },
    {
      title: "Smart Healthcare Assistant",
      category: "AI & Healthcare",
      description: "AI-powered healthcare assistant providing personalized medical recommendations and appointment scheduling.",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Python", "NLP", "FastAPI", "React Native", "PostgreSQL"],
      results: ["85% user satisfaction", "60% faster diagnosis", "10K+ consultations"],
      link: "#",
      github: "#"
    },
    {
      title: "NFT Marketplace",
      category: "Web3 & Digital Art",
      description: "Full-featured NFT marketplace with minting, trading, and royalty distribution capabilities.",
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Solidity", "Next.js", "Ethereum", "IPFS", "Moralis"],
      results: ["$2M+ in transactions", "5000+ NFTs minted", "95% user retention"],
      link: "#",
      github: "#"
    },
    {
      title: "Predictive Analytics Dashboard",
      category: "AI & Business Intelligence",
      description: "Real-time analytics dashboard using AI to predict business trends and optimize operations.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Python", "Scikit-learn", "D3.js", "Flask", "Redis"],
      results: ["25% revenue increase", "Real-time insights", "Custom ML models"],
      link: "#",
      github: "#"
    },
    {
      title: "DeFi Lending Protocol",
      category: "DeFi & Blockchain",
      description: "Decentralized lending protocol with automated market making and yield optimization strategies.",
      image: "https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Solidity", "Hardhat", "React", "Web3.js", "Chainlink"],
      results: ["$50M+ TVL", "15% APY average", "Security audited"],
      link: "#",
      github: "#"
    }
  ];

  const stats = [
    { icon: <Calendar className="h-6 w-6" />, label: "Project Duration", value: "2-6 months avg" },
    { icon: <Users className="h-6 w-6" />, label: "Team Size", value: "3-8 experts" },
    { icon: <TrendingUp className="h-6 w-6" />, label: "Success Rate", value: "95% completion" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Explore our portfolio of innovative AI and Web3 solutions that have transformed businesses across industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <div className="text-blue-400">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <TrendingUp className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 text-sm"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-300 text-sm"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's work together to bring your innovative ideas to life with cutting-edge AI and Web3 technologies.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;