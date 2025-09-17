import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight, Brain, Shield, Zap, Users, TrendingUp, Award} from 'lucide-react';

const Web3Lab = () => {
    const features = [
        {
            icon: <Brain className="h-8 w-8"/>,
            title: "Decentralized Architecture",
            description: "Build modular dApps on Ethereum, Polygon, Solana,  or custom Layer 2 networks."
        },
        {
            icon: <Shield className="h-8 w-8"/>,
            title: "Smart Contract Automation",
            description: "Create self-executing contracts for payments, workflows, and governance"
        },
        {
            icon: <Zap className="h-8 w-8"/>,
            title: "RWA Tokenization",
            description: "Digitize physical assets like property, IP, or services into tradable tokens."
        },
        {
            icon: <Brain className="h-8 w-8"/>,
            title: "Interopability Layer",
            description: "Seamlessly connect Web3 systems with existing Web2 infrastructure."
        },
        {
            icon: <Shield className="h-8 w-8"/>,
            title: "Zero-Knowledge Privacy",
            description: "Enable secure, private verification without exposing sensitive data."
        },
        {
            icon: <Zap className="h-8 w-8"/>,
            title: "DAO Enablement",
            description: "Launch decentralized autonomous organizations with built-in voting, treasury, and governance tools."
        }
    ]


    return (
        <div>
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
                        Code Trust. Scale Innovation.
                        <div
                            className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Own
                            the Future</div>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
                        A launchpad for dApps, DAOs, and digital assets—engineered for interoperability, privacy, and
                        AI-enhanced governance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                        >
                            Contact Us
                            <ArrowRight className="ml-2 h-5 w-5"/>
                        </Link>
                        {/*<a*/}
                        {/*    href="https://microsoft.com"*/}
                        {/*    className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center"*/}
                        {/*    target="_blank"*/}
                        {/*>*/}
                        {/*    View Web3 Lab*/}
                        {/*</a>*/}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Web3 Approach
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We empower organizations to evolve from legacy systems into decentralized, trustless
                            ecosystems.
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
        </div>
    )

}
export default Web3Lab;