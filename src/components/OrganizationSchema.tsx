import React from 'react';
import { Helmet } from 'react-helmet-async';
import logoUrl from '../assets/Agantra-Inovatif-LogoOnly.png';

const OrganizationSchema = () => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Agantra Inovatif',
        'url': window.location.origin,
        'logo': `${window.location.origin}${logoUrl}`,
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+37253194019',
            'contactType': 'Customer Service',
            'email': 'info@nextmantra.com'
        },
        'sameAs': [
            'https://www.linkedin.com/company/agantra-inovatif'
        ],
        'description': "Pioneering the convergence of AI technologies to build tomorrow's digital experiences today."
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default OrganizationSchema;