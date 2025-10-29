import React, {useState} from 'react';
import {Mail, Phone, MapPin, Clock, Send, CheckCircle} from 'lucide-react';
import '../googleformembed.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
    });

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    };

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     });
    // };
    //
    // const handleSubmit = (e: React.FormEvent) => {
    //
    //     // Handle form submission here
    //     fetch('/', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //         body: encode({ 'form-name': 'contact', ...formData }),
    //     })
    //         .then(() => alert('Success!'))
    //         .catch((error) => alert(error));
    //
    //
    //     e.preventDefault();
    //     // console.log('Form submitted:', formData);
    // };

    const contactInfo = [
        {
            icon: <Mail className="h-6 w-6"/>,
            title: "Email Us",
            details: "info <at> nextmantra.com",
            description: "Send us an email anytime"
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Call Us",
            details: "+37253194019",
            description: "Voice available"
        },
        {
            icon: <MapPin className="h-6 w-6"/>,
            title: "Linkedin",
            details: "https://www.linkedin.com/company/agantra-inovatif",
            description: "Our Linkedin Page"
        },
        {
            icon: <Clock className="h-6 w-6"/>,
            title: "Working Hours",
            details: "Monday - Friday: 9am - 6pm",
            description: "Weekend emergency support available"
        }
    ];

    // const services = [
    //     "AI Labs and Solutions",
    //     "Custom Development"
    // ];
    //
    // const budgets = [
    //     "Under $10,000",
    //     "$10,000 - $25,000",
    //     "$25,000 - $50,000",
    //     "$50,000 - $100,000",
    //     "$100,000+"
    // ];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to transform your business? Let's discuss your project and explore the possibilities.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Start Your Project</h2>

                            <div className={'google-iframe-container'}>
                                <iframe
                                    frameBorder="0"
                                    marginHeight="0"
                                    marginWidth="0"
                                    height={'600'}
                                    width={'100%'}
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSf63ETuIE8tA4JNbr7hu7QFRWjpBRhKy933Pk3FSD8j6aCZpg/viewform?usp=header"
                                > Loading ..... </iframe>
                            </div>

                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                                <p className="text-gray-600 text-base md:text-lg mb-6">
                                    We'd love to hear from you. Choose the most convenient way to get in touch,
                                    and we'll respond as quickly as possible.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index}
                                         className="bg-gray-50 p-5 md:p-6 rounded-2xl hover:bg-gray-100 transition-colors">
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg text-white flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                                <p className="text-blue-600 font-medium mb-1 text-sm md:text-base break-all">{item.details}</p>
                                                <p className="text-gray-600 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 md:p-8 rounded-2xl">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why Partner with us?</h3>
                                <div className="space-y-4">
                                    {[
                                        "Transparent Cost of Development",
                                        "Dedicated project manager for seamless communication",
                                        "Agile development with regular updates and demos",
                                    ].map((benefit, index) => (
                                        <div key={index} className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0"/>
                                            <span className="text-gray-700 text-sm md:text-base">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg md:text-xl text-gray-600">
                            Quick answers to common questions about our services and process.
                        </p>
                    </div>

                    <div className="space-y-6">
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
                                answer: "We specialize in AI/ML frameworks (TensorFlow, PyTorch) and modern web technologies (React, Node.js, Python, Dotnet Core,)."
                            },
                            {
                                question: "Do you provide ongoing support after project completion?",
                                answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and feature enhancements to ensure your solution continues to perform optimally."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;