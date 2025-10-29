import React from 'react';
import {Users, Target, Lightbulb, Award} from 'lucide-react';

const About = () => {

    const team = [
        {
            name: "Nicko",
            role: "Co-Founder",
            image: require("../images/headshot-nicko.jpg"),
            description: "Total 20 years of experiences in Fintech and AI "
        },
        {
            name: "Airlangga",
            role: "Co-Founder",
            image: require("../images/headshot-airlangga.jpg"),
            description: "Experiences in 20 years of sales, marketing and business in Hardware businesses and Security Solutions"
        },
        {
            name: "You?",
            role: "Future Products",
            image: "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: "Product Development "
        },
        {
            name: "You?",
            role: "Future Operations",
            image: "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: "Internal Operations"
        }
    ];

    const values = [
        {
            icon: <Target className="h-8 w-8"/>,
            title: "Mission-Driven",
            description: "We're committed to solving real-world problems through innovative technology solutions."
        },
        {
            icon: <Lightbulb className="h-8 w-8"/>,
            title: "Innovation First",
            description: "Constantly pushing boundaries and exploring new possibilities in AI."
        },
        {
            icon: <Users className="h-8 w-8"/>,
            title: "Collaborative",
            description: "Working closely with clients and partners to achieve shared success."
        },
        {
            icon: <Award className="h-8 w-8"/>,
            title: "Excellence",
            description: "Maintaining the highest standards in everything we do, from code to customer service."
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Agantra Inovatif OÜ</h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            Our Leader and Team member for AI Innovation
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                                Founded in 2025, Agantra Inovatif emerged from a simple belief: that artificial intelligence would fundamentally transform how businesses operate and
                                interact with their customers.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                                The name "Agantra" is a fusion of "Agami," meaning future, and "Mantra," a sacred utterance. It represents our evolution from our previous brand, NextMantra, signifying our commitment to chanting the future of innovation.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                                What started as a small team of passionate developers has grown into an innovation lab,
                                helping business across industries harness the power of emerging technologies to solve
                                complex challenges
                                and unlock new opportunities.
                            </p>
                            {/*<p className="text-lg text-gray-600 leading-relaxed">*/}
                            {/*  Today, we're proud to have delivered over 100 projects, partnered with industry leaders, */}
                            {/*  and maintained our commitment to pushing the boundaries of what's possible.*/}
                            {/*</p>*/}
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                alt="Team collaboration"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            These core principles guide everything we do and shape how we approach every project.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                                <div
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Talented individuals united by a shared passion for innovation and excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div key={index}
                                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;