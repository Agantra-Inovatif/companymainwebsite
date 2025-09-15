import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import ImageLogo from "../images/NextMantra-Logo-NoBG.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/*<div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">*/}
              {/*  <Zap className="h-6 w-6 text-white" />*/}
              {/*</div>*/}
                <div>
                    <img src={ImageLogo} alt="logo" style={{width:'50px'}}/>
                </div>
              <span className="text-xl font-bold">Next Mantra</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Pioneering the convergence of AI and Web3 technologies to build tomorrow's digital experiences today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              {/*<li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>*/}
              {/*<li><Link to="/projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</Link></li>*/}
              {/*<li><Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>*/}
            </ul>
          </div>

          {/* Services */}
          {/*<div>*/}
          {/*  <h3 className="text-lg font-semibold mb-4">Services</h3>*/}
          {/*  <ul className="space-y-2">*/}
          {/*    <li><span className="text-gray-300">AI Development</span></li>*/}
          {/*    <li><span className="text-gray-300">Blockchain Solutions</span></li>*/}
          {/*    <li><span className="text-gray-300">Smart Contracts</span></li>*/}
          {/*    <li><span className="text-gray-300">Consulting</span></li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Next Mantra Innovation OU. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacypolicy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/tos" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;