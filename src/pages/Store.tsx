// import React from 'react';
import {ShoppingCart, CheckCircle} from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import TShirtAgantraWesternBoy from "../store/assets/TShirt-Agantra-Logo-WesternMan.png";
import TShirtAgantraAsianGirl from "../store/assets/TShirt-Agantra-Logo-AsianGirl.png";

import HoodieAgantraLogo from '../store/assets/Hoodie-Agantra-Logo.png';
import HoodieAgantraLogoWesternBoy from '../store/assets/Hoodie-Agantra-Logo-WesternBoy.png';
import HoodieAgantraLogoAsianGirl from '../store/assets/Hoddie-Agantra-Logo-AsianGirl.png';

import SweatshirtAgantraLogoAsianGirl from '../store/assets/SweatShirt-Agantra-Logo-AsianGirl.png';
import SweatshirtAgantraLogoWesternMan from '../store/assets/SweatShirt-Agantra-Logo-WesternMan.png';


const Store = () => {
    const products = [
        {
            name: "Our T-Shirt",
            price: "$25.00",
            images: [
                TShirtAgantraWesternBoy,
                TShirtAgantraAsianGirl,

            ],
            stripeLink: "https://buy.stripe.com/test_5kAcP6b8w5d2gPS144"
        },
        {
            name: "Our Hoodie",
            price: "$45.00",
            images: [
                HoodieAgantraLogo,
                HoodieAgantraLogoWesternBoy,
                HoodieAgantraLogoAsianGirl
            ],
            stripeLink: "https://buy.stripe.com/test_5kAcP6b8w5d2gPS144"
        },
        {
            name: "Proud in sweat shirt",
            price: "$35.00",
            images: [
                SweatshirtAgantraLogoAsianGirl,
                SweatshirtAgantraLogoWesternMan
            ],
            stripeLink: "https://buy.stripe.com/test_5kAcP6b8w5d2gPS144"
        },
        {
            name: "Long Sleeve",
            price: "$30.00",
            images: ["https://images.pexels.com/photos/2313192/pexels-photo-2313192.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"],
            stripeLink: "https://buy.stripe.com/test_5kAcP6b8w5d2gPS144"
        },
        {
            name: "Tank Top",
            price: "$20.00",
            images: ["https://images.pexels.com/photos/1865131/pexels-photo-1865131.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"],
            stripeLink: "https://buy.stripe.com/test_5kAcP6b8w5d2gPS144"
        },
        {
            name: "Beanie",
            price: "$15.00",
            images: ["https://images.pexels.com/photos/569169/pexels-photo-569169.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"],
            stripeLink: "https://buy.stripe.com/test_5kAcP6b8w5d2gPS144"
        },
        {
            name: " Cap",
            price: "$22.00",
            images: ["https://images.pexels.com/photos/1460036/pexels-photo-1460036.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"],
            stripeLink: "https://buy.stripe.com/test_5kAcP6b8w5d2gPS144"
        },
        {
            name: "Tote Bag",
            price: "$18.00",
            images: ["https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"],
            stripeLink: "https://buy.stripe.com/test_dR65nqb8w8ti2o8001"
        },
        {
            name: "Backpack",
            price: "$55.00",
            images: ["https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"],
            stripeLink: "https://buy.stripe.com/test_dR65nqb8w8ti2o8001"
        }
    ];

    const subscriptions = [
        {
            name: "Basic AI Chat",
            price: "$10/month",
            features: [
                "1,000 messages/month",
                "Standard AI model",
                "Community support"
            ],
            stripeLink: "https://buy.stripe.com/test_5kAcP6b8w5d2gPS144"
        },
        {
            name: "Pro AI Chat",
            price: "$25/month",
            features: [
                "5,000 messages/month",
                "Advanced AI model",
                "Priority support"
            ],
            stripeLink: "https://buy.stripe.com/test_5kAcP6b8w5d2gPS144"
        },
        {
            name: "Enterprise AI Chat",
            price: "Contact Us",
            features: [
                "Unlimited messages",
                "Custom AI model",
                "Dedicated support"
            ],
            stripeLink: "/contact"
        }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: false
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        opacity: 0.5,
                        backgroundImage: "url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
                    }}
                ></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Our
                        <span
                            className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Store</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
                        Find our latest products, services, and merchandise here.
                    </p>
                </div>
            </section>

            {/* Subscriptions Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">AI Chat Subscriptions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {subscriptions.map((sub, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{sub.name}</h3>
                                <p className="text-4xl font-bold text-gray-900 mb-6">{sub.price}</p>
                                <ul className="space-y-4 text-gray-600 mb-8 flex-grow">
                                    {sub.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3"/>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={sub.stripeLink}
                                    target={sub.name === 'Enterprise AI Chat' ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center text-lg font-semibold mt-auto"
                                >
                                    {sub.name === 'Enterprise AI Chat' ? 'Contact Us' : 'Subscribe'}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Merchandise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <div key={index}
                                 className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                {product.images.length > 1 ? (
                                    <Slider {...sliderSettings}>
                                        {product.images.map((image, i) => (
                                            <div key={i}>
                                                <img src={image} alt={`${product.name} ${i + 1}`}
                                                     className="w-full h-80 object-contain"/>
                                            </div>
                                        ))}
                                    </Slider>
                                ) : (
                                    <img src={product.images[0]} alt={product.name}
                                         className="w-full h-80 object-contain"/>
                                )}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                                    <p className="text-lg text-gray-700 mb-4">{product.price}</p>
                                    <a
                                        href={product.stripeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center text-lg font-semibold"
                                    >
                                        <ShoppingCart className="mr-2 h-5 w-5"/>
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Store;