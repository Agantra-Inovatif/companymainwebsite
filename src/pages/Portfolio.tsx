import React from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO.tsx';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation('portfolio');

  const projects = [
    {
      title: t('project1_title'),
      category: t('project1_category'),
      description: t('project1_description'),
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "WebSocket"],
      results: [
        t('project1_result1'),
        t('project1_result2'),
        t('project1_result3')
      ],
      link: "#",
      github: "#"
    },
  ];

  const stats = [
    { icon: <Calendar className="h-6 w-6" />, label: t('stat1_label'), value: t('stat1_value') },
    { icon: <Users className="h-6 w-6" />, label: t('stat2_label'), value: t('stat2_value') },
    { icon: <TrendingUp className="h-6 w-6" />, label: t('stat3_label'), value: t('stat3_value') }
  ];

  return (
    <div>
      <SEO 
        title={t('portfolio_seo_title')} 
        description={t('portfolio_seo_description')}
        name="Agantra Inovatif" 
        type="website" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('portfolio_title')}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            {t('portfolio_subtitle')}
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
                    <h4 className="font-semibold text-gray-900 mb-3">{t('technologies_title')}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">{t('key_results_title')}:</h4>
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
                      {t('view_live_button')}
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-300 text-sm"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t('source_code_button')}
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
          <h2 className="text-4xl font-bold mb-6">{t('cta_title')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('cta_subtitle')}
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            {t('start_project_button')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;