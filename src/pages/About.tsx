import {Users, Target, Lightbulb, Award} from 'lucide-react';
import SEO from '../components/SEO.tsx';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation('about');

    const team = [
        {
            name: "Nicko",
            role: t('founder'),
            image: require("../assets/headshot-nicko.jpg"),
            description: t('nicko_description')
        },
        {
            name: "Airlangga",
            role: t('co_founder'),
            image: require("../assets/headshot-airlangga.jpg"),
            description: t('airlangga_description')
        },
        {
            name: "You?",
            role: t('future_products'),
            image: "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: t('product_development')
        },
        {
            name: "You?",
            role: t('future_operations'),
            image: "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: t('internal_operations')
        }
    ];

    const values = [
        {
            icon: <Target className="h-8 w-8"/>,
            title: t('mission_driven'),
            description: t('mission_driven_description')
        },
        {
            icon: <Lightbulb className="h-8 w-8"/>,
            title: t('innovation_first'),
            description: t('innovation_first_description')
        },
        {
            icon: <Users className="h-8 w-8"/>,
            title: t('collaborative'),
            description: t('collaborative_description')
        },
        {
            icon: <Award className="h-8 w-8"/>,
            title: t('excellence'),
            description: t('excellence_description')
        }
    ];

    return (
        <div>
            <SEO 
                title={t('about_seo_title')} 
                description={t('about_seo_description')} 
                name="Agantra Inovatif" 
                type="website" />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('about_title')}</h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            {t('about_subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('our_story_title')}</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                                {t('our_story_p1')}
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                                {t('our_story_p2')}
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                                {t('our_story_p3')}
                            </p>
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('our_values_title')}</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {t('our_values_subtitle')}
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
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('meet_our_team_title')}</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {t('meet_our_team_subtitle')}
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