import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Menu, X, Zap} from 'lucide-react';
import ImageLogo from "../images/NextMantra-LogoOnly.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        {name: 'Home', href: '/'},
        {name: 'Apps', href: '/apps'},
        {name: 'AI Labs',href:'/ailabs'},
        {name: 'Web3 Labs',href:'/web3labs'},
        {name: 'About', href: '/about'},
        {name: 'Contact', href: '/contact'},
    ];

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-28">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            {/*<div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">*/}
                            {/*    <Zap className="h-6 w-6 text-white"/>*/}
                            {/*   */}
                            {/*</div>*/}
                            <div>
                                <img src={ImageLogo} alt="logo" style={{width:'100px'}}/>
                            </div>
                            <span className="text-xl font-bold text-gray-900">Next Mantra</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    location.pathname === item.href
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                        >
                            {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                                        location.pathname === item.href
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 mt-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;