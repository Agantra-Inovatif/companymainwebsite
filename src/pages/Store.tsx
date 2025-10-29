import React from 'react';

const Store = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Store</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Welcome to the Agantra Inovatif store. Find our latest products and merchandise here.
                    </p>
                </div>
            </section>

            {/* Store Content Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
                        <p className="text-lg text-gray-600">
                            Our store is currently under construction. Please check back later for our exciting new products!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Store;