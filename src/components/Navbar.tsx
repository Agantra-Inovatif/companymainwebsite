import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Menu, X, ChevronDown} from 'lucide-react';
import ImageLogo from "../assets/Agantra-Inovatif-LogoOnly.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const navigation = [
        {name: 'Home', href: '/'},
        {name: 'Apps', href: '/apps'},
        {
            name: 'Labs',
            children: [
                {name: 'AI Labs', href: '/ailabs'},
            ]
        },
        {name: 'Portfolio', href: '/portfolio'},
        {name: 'Store', href: '/store'},
        {
            name: 'Company',
            children: [
                {name: 'About', href: '/about'},
                {name: 'Contact', href: '/contact'},
            ]
        }
    ];

    const closeAllMenus = () => {
        setIsOpen(false);
        setOpenMenu(null);
    };

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
                                <img src={ImageLogo} alt="logo" style={{width: '50px'}}/>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Agantra Inovatif</h1>
                                {/*<p className={'font-bold text-sm text-gray-400'}>Inovatif</p>*/}
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) =>
                            item.children ? (
                                <div key={item.name} className="relative" onMouseEnter={() => setOpenMenu(item.name)} onMouseLeave={() => setOpenMenu(null)}>
                                    <div
                                        className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                                            item.children.some(child => location.pathname === child.href)
                                                ? 'text-blue-600'
                                                : 'text-gray-700 hover:text-blue-600'
                                        }`}
                                        aria-haspopup="true"
                                    >
                                        {item.name}
                                        <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${openMenu === item.name ? 'rotate-180' : ''}`}/>
                                    </div>                                    
                                    {openMenu === item.name && (
                                        <div
                                            className="absolute -left-4 top-full pt-2 w-48"
                                        >
                                            <div className="bg-white rounded-md shadow-lg z-10">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        to={child.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        onClick={() => setOpenMenu(null)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link key={item.name} to={item.href} className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    location.pathname === item.href
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`}>
                                    {item.name}
                                </Link>
                            )
                        )}
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
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                            {navigation.map((item) =>
                                item.children ? (
                                    <div key={item.name}>
                                        <button
                                            onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
                                            className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                                        >
                                            {item.name}
                                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${openMenu === item.name ? 'rotate-180' : ''}`}/>
                                        </button>
                                        {openMenu === item.name && (
                                            <div className="pl-4">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        to={child.href}
                                                        className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                                                            location.pathname === child.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                                        }`}
                                                        onClick={closeAllMenus}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link key={item.name} to={item.href} className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                                        location.pathname === item.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    }`} onClick={closeAllMenus}>
                                        {item.name}
                                    </Link>
                                )
                            )}
                            <Link
                                to="/contact"
                                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 mt-4"
                                onClick={closeAllMenus}
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