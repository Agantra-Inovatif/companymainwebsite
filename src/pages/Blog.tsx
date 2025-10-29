import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const featured = {
    title: "The Future of AI in Business Intelligence",
    excerpt: "Exploring how artificial intelligence is revolutionizing Business Intelligence, from automated data analysis to predictive insights and automated reporting.",
    image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    author: "Alex Chen",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "AI & Business"
  };

  const posts = [
    {
      title: "Machine Learning Operations in Production",
      excerpt: "A comprehensive guide to deploying and maintaining ML models in production environments with continuous monitoring.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      author: "Michael Rodriguez",
      date: "January 10, 2025",
      readTime: "10 min read",
      category: "AI/ML"
    },
    {
      title: "AI-Powered Threat Detection",
      excerpt: "Essential security practices for using AI to detect and respond to cybersecurity threats in real-time.",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      author: "Emily Davis",
      date: "January 8, 2025",
      readTime: "7 min read",
      category: "Security"
    },
    {
      title: "The Rise of Generative AI",
      excerpt: "How generative AI is enabling new forms of content creation and democratizing creativity.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      author: "Alex Chen",
      date: "January 5, 2025",
      readTime: "9 min read",
      category: "AI"
    },
  ];

  const categories = ["All", "AI/ML", "Security", "AI"];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & Insights</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest insights on AI and emerging technologies.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover min-h-96"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-blue-600 font-semibold text-sm">{featured.category}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{featured.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{featured.excerpt}</p>
                
                <div className="flex items-center text-gray-500 text-sm mb-8 space-x-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {featured.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {featured.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {featured.readTime}
                  </div>
                </div>

                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center w-fit">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <button className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300 flex items-center text-sm">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest insights on AI and emerging technologies.
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;