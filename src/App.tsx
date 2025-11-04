import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { HelmetProvider } from 'react-helmet-async';
import OrganizationSchema from './components/OrganizationSchema';
import Home from './pages/Home';
import About from './pages/About';
import Apps from './pages/Apps';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AILabs from './pages/AILab';
import Store from './pages/Store';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermOfService from './pages/TOS';
import ReturnPolicy from './pages/ReturnPolicy';
import RefundPolicy from './pages/RefundPolicy';
import CancellationPolicy from './pages/CancellationPolicy';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <div className="min-h-screen bg-white">
                    <OrganizationSchema />
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/apps" element={<Apps/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/ailabs" element={<AILabs/>}/>
                        <Route path='/store' element={<Store/>}/>


                        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
                        <Route path="/tos" element={<TermOfService/>}/>
                        <Route path="/returnpolicy" element={<ReturnPolicy/>}/>
                        <Route path="/refundpolicy" element={<RefundPolicy/>}/>
                        <Route path="/cancellationpolicy" element={<CancellationPolicy/>}/>


                    </Routes>
                    <Footer/>
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;