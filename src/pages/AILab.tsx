import React from 'react';
import {Link} from "react-router-dom";
import {
    ArrowRight, Brain, Zap, Cpu, Bot, Scale, MessageCircle, Eye, Sparkles, FlaskConical, Combine
} from "lucide-react";
import SEO from '../components/SEO.tsx';
import { useTranslation, Trans } from 'react-i18next';

const AILab = () => {
    const { t } = useTranslation('ailab');

    const features = [
        {
            icon: <Brain className="h-8 w-8"/>,
            title: t('autonomous_agent_frameworks'),
            description: t('autonomous_agent_frameworks_description')
        },
        {
            icon: <Cpu className="h-8 w-8"/>,
            title: t('cognitive_infrastructure'),
            description: t('cognitive_infrastructure_description')
        },
        {
            icon: <Zap className="h-8 w-8"/>,
            title: t('ai_native_ux_components'),
            description: t('ai_native_ux_components_description')
        },
        {
            icon: <Bot className="h-8 w-8"/>,
            title: t('synthetic_data_sandbox'),
            description: t('synthetic_data_sandbox_description')
        },
        {
            icon: <Scale className="h-8 w-8"/>,
            title: t('ethical_alignment_engine'),
            description: t('ethical_alignment_engine_description')
        },
        {
            icon: <Brain className="h-8 w-8"/>,
            title: t('multilingual_reasoning_layer'),
            description: t('multilingual_reasoning_layer_description')
        }
    ];

    const researchAreas = [
        {
            icon: <Cpu className="h-8 w-8" />,
            title: t('machine_learning_systems'),
            description: t('machine_learning_systems_description')
        },
        {
            icon: <MessageCircle className="h-8 w-8" />,
            title: t('natural_language_understanding'),
            description: t('natural_language_understanding_description')
        },
        {
            icon: <Eye className="h-8 w-8" />,
            title: t('computer_vision'),
            description: t('computer_vision_description')
        },
        {
            icon: <Sparkles className="h-8 w-8" />,
            title: t('generative_ai'),
            description: t('generative_ai_description')
        },
        {
            icon: <FlaskConical className="h-8 w-8" />,
            title: t('ai_for_science'),
            description: t('ai_for_science_description')
        },
        {
            icon: <Combine className="h-8 w-8" />,
            title: t('ai_multimodal'),
            description: t('ai_multimodal_description')
        }
    ];



    return (
        <div>
            <SEO 
                title={t('ailab_seo_title')} 
                description={t('ailab_seo_description')} 
                name="Agantra Inovatif" 
                type="website" />
            <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        opacity:0.5,
                        backgroundImage: "url('https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
                    }}
                ></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <Trans i18nKey="ailab_title">
                            Code Intelligence. Shape Reality
                            <div
                                className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Rethink
                                Possibility</div>
                        </Trans>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
                        {t('ailab_subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                        >
                            {t('contact_us_button')}
                            <ArrowRight className="ml-2 h-5 w-5"/>
                        </Link>
                        <a
                            href="https://ningenproject.org"
                            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-flex items-center justify-center"
                            target="_blank"
                        >
                            {t('view_ai_lab_button')}
                        </a>
                    </div>
                </div>
            </section>

            {/* Core Capabilities Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            {t('core_capabilities_title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {t('core_capabilities_subtitle')}
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

            {/* Research Areas Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            {t('research_areas_title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {t('research_areas_subtitle')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {researchAreas.map((area, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="bg-gradient-to-r from-cyan-400 to-teal-400 w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                                    {area.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )

}
export default AILab;