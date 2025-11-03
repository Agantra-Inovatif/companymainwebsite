import React from 'react';
import {Mail, Phone, MapPin, Clock, CheckCircle} from 'lucide-react';
import '../googleformembed.css';
import SEO from '../components/SEO.tsx';
import { useTranslation } from 'react-i18next';
import { SiWhatsapp } from '@icons-pack/react-simple-icons';

const Contact = () => {
    const { t } = useTranslation('contact');

    const contactInfo = [
        {
            icon: <Mail className="h-6 w-6"/>,
            title: t('email_us_title'),
            details: "info@nextmantra.com",
            description: t('email_us_description')
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: t('call_us_title'),
            details: "+37253194019",
            description: t('call_us_description')
        },
        {
            icon: <MapPin className="h-6 w-6"/>,
            title: t('linkedin_title'),
            details: "https://www.linkedin.com/company/agantra-inovatif",
            description: t('linkedin_description')
        },
        {
            icon: <Clock className="h-6 w-6"/>,
            title: t('working_hours_title'),
            details: t('working_hours_details'),
            description: t('working_hours_description')
        },
        {
            icon: <SiWhatsapp className="h-6 w-6"/>,
            title: "WhatsApp",
            details: "+37253194019",
            description: t('whatsapp_description'),
            link: "https://wa.me/37253194019"
        }
    ];

    const benefits = [
        t('benefit1'),
        t('benefit2'),
        t('benefit3'),
    ];

    const faqs = [
        {
            question: t('faq1_question'),
            answer: t('faq1_answer')
        },
        {
            question: t('faq2_question'),
            answer: t('faq2_answer')
        },
        {
            question: t('faq3_question'),
            answer: t('faq3_answer')
        },
        {
            question: t('faq4_question'),
            answer: t('faq4_answer')
        }
    ];

    return (
        <div>
            <SEO 
                title={t('contact_seo_title')} 
                description={t('contact_seo_description')} 
                name="Agantra Inovatif" 
                type="website" />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('contact_title')}</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        {t('contact_subtitle')}
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{t('start_project_title')}</h2>

                            <div className={'google-iframe-container h-[800px] lg:h-full flex-grow'}>
                                <iframe
                                    frameBorder="0"
                                    marginHeight="0"
                                    marginWidth="0"
                                    height="100%"
                                    width="100%"
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSf63ETuIE8tA4JNbr7hu7QFRWjpBRhKy933Pk3FSD8j6aCZpg/viewform?usp=header"
                                > Loading ..... </iframe>
                            </div>

                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('contact_info_title')}</h2>
                                <p className="text-gray-600 text-base md:text-lg mb-6">
                                    {t('contact_info_subtitle')}
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
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium mb-1 text-sm md:text-base break-all">{item.details}</a>
                                                <p className="text-gray-600 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 md:p-8 rounded-2xl">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{t('why_partner_title')}</h3>
                                <div className="space-y-4">
                                    {benefits.map((benefit, index) => (
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('faq_title')}</h2>
                        <p className="text-lg md:text-xl text-gray-600">
                            {t('faq_subtitle')}
                        </p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
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