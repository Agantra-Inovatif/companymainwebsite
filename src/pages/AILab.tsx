import React from 'react';
import {Link} from "react-router-dom";
import {ArrowRight, Brain, Shield, Zap} from "lucide-react";

const AiLabs = () => {

    const features = [
        {
            icon: <Brain className="h-8 w-8"/>,
            title: "Autonomous Agent Frameworks",
            description: "Build, test, and deploy AI agents with modular logic, real-time feedback loops, and ethical guardrails.."
        },
        {
            icon: <Shield className="h-8 w-8"/>,
            title: "Cognitive Infrastructure",
            description: "Scalable backend systems optimized for machine learning, NLP, and multimodal reasoning."
        },
        {
            icon: <Zap className="h-8 w-8"/>,
            title: "AI-Native UX Components",
            description: "Prebuilt UI/UX modules designed for AI-first platforms—voice, vision, and intent-driven interfaces."
        },
        {
            icon: <Brain className="h-8 w-8"/>,
            title: "Synthetic Data Sandbox",
            description: "Generate, refine, and validate synthetic datasets for training and simulation without compromising privacy."
        },
        {
            icon: <Shield className="h-8 w-8"/>,
            title: "Ethical Alignment Engine",
            description: "Integrate customizable values, constraints, and explainability into your AI workflows."
        },
        {
            icon: <Zap className="h-8 w-8"/>,
            title: "Multilingual Reasoning Layer",
            description: "Enable global reach with AI that understands and responds across languages and cultural contexts."
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
                        Code Intelligence. Shape Reality
                        <div
                            className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Rethink
                            Possibility</div>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
                        A sandbox for AI-native platforms, autonomous agents, and cognitive infrastructure—built for scalability, ethical alignment, and real-world impact.
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
                        {/*    View AI Lab*/}
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
export default AiLabs;