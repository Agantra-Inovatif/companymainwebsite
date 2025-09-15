import React, {useState} from 'react';
import {Mail, Phone, MapPin, Clock, Send, CheckCircle} from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: <Mail className="h-6 w-6"/>,
            title: "Email Us",
            details: "contact <at> nextmantra.com",
            description: "Send us an email anytime"
        },
        // {
        //   icon: <Phone className="h-6 w-6" />,
        //   title: "Call Us",
        //   details: "+1 (555) 123-4567",
        //   description: "Mon-Fri from 8am to 6pm"
        // },
        // {
        //   icon: <MapPin className="h-6 w-6" />,
        //   title: "Visit Us",
        //   details: "123 Innovation Drive, Tech City, TC 12345",
        //   description: "Come say hello at our HQ"
        // },
        {
            icon: <MapPin className="h-6 w-6"/>,
            title: "Linkedin",
            details: "https://linkedin.com/company/NextMantra-Innovation",
            description: "Common"
        },
        {
            icon: <Clock className="h-6 w-6"/>,
            title: "Working Hours",
            details: "Monday - Friday: 9am - 6pm",
            description: "Weekend emergency support available"
        }
    ];

    const services = [
        "AI Labs and Solutions",
        "Web3.0 Labs and Solutions",
        "Custom Development"
    ];

    const budgets = [
        "Under $10,000",
        "$10,000 - $25,000",
        "$25,000 - $50,000",
        "$50,000 - $100,000",
        "$100,000+"
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Ready to transform your business with AI and Web3? Let's discuss your project and explore the
                        possibilities.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Your Project</h2>

                            <form className="space-y-6" method="post" netlify name="contact">
                                {/*<form onSubmit={handleSubmit} className="space-y-6" netlify>*/}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                            placeholder="your.email@company.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="service"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            Service Interested In *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="budget"
                                               className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Budget
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        >
                                            <option value="">Select budget range</option>
                                            {budgets.map((budget, index) => (
                                                <option key={index} value={budget}>{budget}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Project Details *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                        placeholder="Tell us about your project, goals, and any specific requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg font-semibold"
                                >
                                    Send Message
                                    <Send className="ml-2 h-5 w-5"/>
                                </button>

                                <input type="hidden" name="form-name" value="contact" />
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                                <p className="text-gray-600 text-lg mb-8">
                                    We'd love to hear from you. Choose the most convenient way to get in touch,
                                    and we'll respond as quickly as possible.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index}
                                         className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors">
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg text-white flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                                <p className="text-blue-600 font-medium mb-1">{item.details}</p>
                                                <p className="text-gray-600 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Partner with us??</h3>
                                <div className="space-y-4">
                                    {[
                                        "Transparent Cost of Development",
                                        "Dedicated project manager for seamless communication",
                                        "Agile development with regular updates and demos",
                                    ].map((benefit, index) => (
                                        <div key={index} className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0"/>
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">
                            Quick answers to common questions about our services and process.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                question: "How long does a typical project take?",
                                answer: "Project timelines vary based on complexity, but most projects take 2-6 months from concept to deployment. We provide detailed timelines during the consultation phase."
                            },
                            {
                                question: "Do you work with startups or only established companies?",
                                answer: "We work with organizations of all sizes, from innovative startups to Fortune 500 companies. Our flexible approach adapts to your specific needs and budget."
                            },
                            {
                                question: "What technologies do you specialize in?",
                                answer: "We specialize in AI/ML frameworks (TensorFlow, PyTorch), blockchain platforms (Ethereum, Solidity), and modern web technologies (React, Node.js, Python, Dotnet Core,)."
                            },
                            {
                                question: "Do you provide ongoing support after project completion?",
                                answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and feature enhancements to ensure your solution continues to perform optimally."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;