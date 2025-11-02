import React from 'react';
import SEO from '../components/SEO.tsx';
import { useTranslation, Trans } from 'react-i18next';

const Apps = () => {
    const { t } = useTranslation('apps');

    return (
        <div className="bg-white">
            <SEO 
                title={t('apps_seo_title')} 
                description={t('apps_seo_description')}
                name="Agantra Inovatif" 
                type="website" />
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        opacity: 0.5,
                        backgroundImage: "url('https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
                    }}
                ></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <Trans i18nKey="apps_title" ns="apps">
                            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Apps</span>
                        </Trans>
                    </h1>
                    <p className="text-xl md:text-2xl  bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent  max-w-3xl mx-auto">
                        {t('apps_subtitle')}
                    </p>
                </div>
            </section>

            {/* Store Content Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('coming_soon_title')}</h2>
                        <p className="text-lg text-gray-600">
                            {t('coming_soon_subtitle')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Apps;