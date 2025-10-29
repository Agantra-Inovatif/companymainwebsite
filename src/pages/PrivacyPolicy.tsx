import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Your privacy is important to us. It is Agantra Inovatif's policy to respect your privacy regarding any information we may collect from you across our website.
                    </p>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
                            <p>
                                We only collect information about you if we have a reason to do so—for example, to provide our services, to communicate with you, or to make our services better.
                            </p>
                            
                            <h2 className="text-2xl font-bold text-gray-900 mt-8">2. How We Use Information</h2>
                            <p>
                                We use the information we collect in various ways, including to:
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Provide, operate, and maintain our website</li>
                                <li>Improve, personalize, and expand our website</li>
                                <li>Understand and analyze how you use our website</li>
                                <li>Develop new products, services, features, and functionality</li>
                                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                                <li>Send you emails</li>
                                <li>Find and prevent fraud</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Log Files</h2>
                            <p>
                                Agantra Inovatif follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Cookies and Web Beacons</h2>
                            <p>
                                Like any other website, Agantra Inovatif uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Third-Party Privacy Policies</h2>
                            <p>
                                Agantra Inovatif's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Changes to This Privacy Policy</h2>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-8">7. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us by email: <a href="mailto:info@nextmantra.com" className="text-blue-600 hover:underline">info@nextmantra.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;