import React from 'react';

const Apps = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Apps</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Discover our innovative applications designed to solve real-world problems.
                    </p>
                </div>
            </section>

            {/* Store Content Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
                        <p className="text-lg text-gray-600">
                            We are currently developing exciting new applications. Please check back later to see our latest innovations!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Apps;