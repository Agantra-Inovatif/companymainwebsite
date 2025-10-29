import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Refund and Disputes Policy</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Please review our refund and disputes policy carefully before making a purchase.
                    </p>
                </div>
            </section>

            {/* Refund Policy Content */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <h2 className="text-2xl font-bold text-gray-900">No Refunds</h2>
                            <p>
                                All purchases of products and services from Agantra Inovatif are final and non-refundable. We do not issue refunds for any reason, including but not limited to dissatisfaction with the product or service.
                            </p>
                            <p>
                                By making a purchase on our website, you acknowledge and agree that you will not be entitled to a refund. If you have any questions or concerns about this policy, please contact us at <a href="mailto:info@nextmantra.com" className="text-blue-600 hover:underline">info@nextmantra.com</a> before completing your purchase.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RefundPolicy;