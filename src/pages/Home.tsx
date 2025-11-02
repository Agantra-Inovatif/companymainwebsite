import {Link} from 'react-router-dom';
import {ArrowRight, Brain, Zap, Users, TrendingUp, Award, Cpu} from 'lucide-react';
import CookieConsentComponent from "../components/CookieConsentComponent.tsx";
import SEO from '../components/SEO.tsx';
import { useTranslation, Trans } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation('home');

    const features = [
        {
            icon: <Brain className="h-8 w-8"/>,
            title: t('ai_innovation_title'),
            description: t('ai_innovation_description')
        },
        {
            icon: <Cpu className="h-8 w-8"/>,
            title: t('custom_ai_models_title'),
            description: t('custom_ai_models_description')
        },
        {
            icon: <Zap className="h-8 w-8"/>,
            title: t('rapid_development_title'),
            description: t('rapid_development_description')
        }
    ];

    const whyChooseUs = [
        {
            icon: <Users className="h-8 w-8" />,
            title: t('expert_team_title'),
            description: t('expert_team_description')
        },
        {
            icon: <TrendingUp className="h-8 w-8" />,
            title: t('innovative_solutions_title'),
            description: t('innovative_solutions_description')
        },
        {
            icon: <Award className="h-8 w-8" />,
            title: t('proven_results_title'),
            description: t('proven_results_description')
        }
    ];

    return (
        <div>
            <SEO 
                title="Agantra Inovatif - AI Innovation and Solutions" 
                description="Pioneering the convergence of AI technologies to build tomorrow's digital experiences today." 
                name="Agantra Inovatif" 
                type="website" />
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
                        <Trans i18nKey="home_title" ns="home">
                            Wisdom Meets <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Innovation</span>
                        </Trans>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
                        {t('home_subtitle')}
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            {t('what_is_agantra_title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {t('what_is_agantra_subtitle')}
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
                            {t('why_choose_us_title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {t('why_choose_us_subtitle')}
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
                        {t('ai_labs_title')}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        {t('ai_labs_subtitle')}
                    </p>
                    <Link
                        to="/ailabs"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                    >
                        {t('visit_ai_labs_button')}
                        <ArrowRight className="ml-2 h-5 w-5"/>
                    </Link>
                </div>
            </section>

            {/* Apps Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t('apps_title')}</h2>
                        <p className="text-xl opacity-90">{t('apps_subtitle')}</p>                    </div>
                    <div className="text-center">
                        <Link
                            to="/apps"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                        >
                            {t('our_apps_button')}
                            <ArrowRight className="ml-2 h-5 w-5"/>
                        </Link>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        {t('cta_title')}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        {t('cta_subtitle')}
                    </p>
                    <Link
                        to="/contact"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                    >
                        {t('start_your_journey_button')}
                        <ArrowRight className="ml-2 h-5 w-5"/>
                    </Link>
                </div>
            </section>

            <CookieConsentComponent/>
        </div>

    );
};

export default Home;