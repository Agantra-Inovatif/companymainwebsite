import React from 'react';

const ReturnPolicy = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Return Policy</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Please review our return policy carefully before making a purchase.
                    </p>
                </div>
            </section>

            {/* Return Policy Content */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h2 className="text-2xl font-bold text-gray-900">All Sales Are Final</h2>
                            <p>
                                At Agantra Inovatif, we are committed to providing high-quality products and services. Due to the nature of our products, all sales are final. We do not offer refunds or exchanges for any products or services purchased through our store.
                            </p>
                            <p>
                                We encourage you to review your order carefully before completing your purchase. If you have any questions about a product or service, please contact us at <a href="mailto:info@nextmantra.com" className="text-blue-600 hover:underline">info@nextmantra.com</a> before placing your order.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReturnPolicy;