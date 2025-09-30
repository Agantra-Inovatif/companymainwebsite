import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight, Brain, Shield, Zap, Users, TrendingUp, Award} from 'lucide-react';
import CookieConsentComponent from "./CookieConsentComponent.tsx";

const Home = () => {
    const features = [
        {
            icon: <Brain className="h-8 w-8"/>,
            title: "AI Innovation",
            description: "Cutting-edge artificial intelligence solutions that transform businesses and enhance human capabilities."
        },
        {
            icon: <Shield className="h-8 w-8"/>,
            title: "Web3 Innovation",
            description: "Innovate legacy web and transform into decentralized web technology."
        },
        {
            icon: <Zap className="h-8 w-8"/>,
            title: "Rapid Development and Integration",
            description: "Integrate legacy technology with AI and Web3 to control cost and bring innovation to organization."
        }
    ];

    // const stats = [
    //   { number: "100+", label: "Projects Delivered" },
    //   { number: "50+", label: "Happy Clients" },
    //   { number: "95%", label: "Success Rate" },
    //   { number: "24/7", label: "Support" }
    // ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
                    }}
                ></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Wisdom Meets
                        <span
                            className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Innovation</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
                        Pioneering the convergence of AI and Web3 technologies to build tomorrow's digital experiences
                        today.
                    </p>
                    {/*<div className="flex flex-col sm:flex-row gap-4 justify-center">*/}
                    {/*  <Link*/}
                    {/*    to="/services"*/}
                    {/*    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"*/}
                    {/*  >*/}
                    {/*    Explore Services*/}
                    {/*    <ArrowRight className="ml-2 h-5 w-5" />*/}
                    {/*  </Link>*/}
                    {/*  <Link*/}
                    {/*    to="/projects"*/}
                    {/*    className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center"*/}
                    {/*  >*/}
                    {/*    View Projects*/}
                    {/*  </Link>*/}
                    {/*</div>*/}
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What is Next Mantra Innovation?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We combined the wisdom of traditional thinking with rapid innovation for current and future
                            challenge
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index}
                                 className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {/*<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">*/}
            {/*  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
            {/*    <div className="text-center mb-16">*/}
            {/*      <h2 className="text-4xl font-bold mb-4">Proven Track Record</h2>*/}
            {/*      <p className="text-xl opacity-90">Numbers that speak for our commitment to excellence</p>*/}
            {/*    </div>*/}

            {/*    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">*/}
            {/*      {stats.map((stat, index) => (*/}
            {/*        <div key={index} className="text-center">*/}
            {/*          <div className="text-5xl font-bold mb-2">{stat.number}</div>*/}
            {/*          <div className="text-lg opacity-90">{stat.label}</div>*/}
            {/*        </div>*/}
            {/*      ))}*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}

            {/* AI Labs Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        AI Innovation Labs
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                       We develop our in-house or use AI Models and transforms into business usage. It will help business to create a new opportunity or cutting cost
                    </p>
                    <Link
                        to="/ailabs"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                    >
                        Visit our AI Labs
                        <ArrowRight className="ml-2 h-5 w-5"/>
                    </Link>
                </div>
            </section>

            {/* Web 3 Labs Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Web 3.0 Innovation Labs</h2>
                        <p className="text-xl opacity-90">The Web3.0 Innovation Lab at Next Mantra is where legacy systems evolve into trustless, interoperable ecosystems. Our platform empowers businesses to harness blockchain, smart contracts, and tokenization to unlock new models of ownership, governance, and engagement.</p>
                    </div>
                    <div className="text-center">
                        <Link
                            to="/web3labs"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                        >
                            Visit Web3 Labs
                            <ArrowRight className="ml-2 h-5 w-5"/>
                        </Link>
                    </div>
                </div>
            </section>


            {/* Apps Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Apps</h2>
                        <p className="text-xl opacity-90">We will create several apps innovation to start our journey.
                            Several Apps that meet the challenges</p>
                    </div>
                    <div className="text-center">
                        <Link
                            to="/apps"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                        >
                            Our Apps
                            <ArrowRight className="ml-2 h-5 w-5"/>
                        </Link>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Let's discuss how AI and Web3 technologies can revolutionize your operations and create new
                        opportunities for growth.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                    >
                        Start Your Journey
                        <ArrowRight className="ml-2 h-5 w-5"/>
                    </Link>
                </div>
            </section>

            <CookieConsentComponent/>
        </div>

    );
};

export default Home;