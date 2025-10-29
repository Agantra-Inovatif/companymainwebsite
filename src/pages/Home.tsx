import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight, Brain, Zap, Users, TrendingUp, Award, Cpu} from 'lucide-react';
import CookieConsentComponent from "../components/CookieConsentComponent.tsx";

const Home = () => {
    const features = [
        {
            icon: <Brain className="h-8 w-8"/>,
            title: "AI Innovation",
            description: "Cutting-edge artificial intelligence solutions that transform businesses and enhance human capabilities."
        },
        {
            icon: <Cpu className="h-8 w-8"/>,
            title: "Custom AI Models",
            description: "We build and train custom AI models tailored to your specific business needs and data."
        },
        {
            icon: <Zap className="h-8 w-8"/>,
            title: "Rapid Development and Integration",
            description: "Integrate legacy technology with AI to control cost and bring innovation to your organization."
        }
    ];

    const whyChooseUs = [
        {
            icon: <Users className="h-8 w-8" />,
            title: "Expert Team",
            description: "Our team consists of leading experts in AI, dedicated to delivering excellence."
        },
        {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Innovative Solutions",
            description: "We provide creative and effective AI solutions that are tailored to your specific business needs."
        },
        {
            icon: <Award className="h-8 w-8" />,
            title: "Proven Results",
            description: "Our track record of successful AI projects and satisfied clients speaks for itself."
        }
    ];

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
                        Harnessing deep artificial intelligence to design, shape, and deliver the most advanced digital experiences of tomorrow.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What is Agantra Inovatif ?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Very simple: We provide AI technology to make your life better, sleep well and spend more time with family.
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

            {/* Why Choose Us Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Us?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We are your trusted partner in navigating the complexities of Artificial Intelligence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index}
                                 className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Labs Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        AI Innovation Labs
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        We develop our in-house or use AI Models and transforms into business usage. It will help
                        business to create a new opportunity or cutting cost
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

            {/* Apps Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Apps</h2>
                        <p className="text-xl opacity-90">We will create several apps innovation to start our journey.
                            Several Apps that meet the challenges</p>                    </div>
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
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Let's discuss how AI can revolutionize your operations and create new
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
