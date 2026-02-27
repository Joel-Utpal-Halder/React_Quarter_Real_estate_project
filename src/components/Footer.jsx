import React, { useState } from "react";
import Container from "../components/CommonComponents/Container";
import { FaFacebookF, FaTwitter, FaVimeoV, FaPinterestP, FaMapMarkerAlt } from "react-icons/fa";
import logoOnlyHouse from "../assets/images/logo_onlyHouse.png";

const Footer = () => {
    // State for email subscription
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Handle subscription logic
    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim() === "") {
            setMessage("Please enter a valid email address.");
        } else {
            setMessage("Thank you for subscribing!");
            setEmail(""); // reset input
        }
    };

    return (
        <footer className="bg-gray-900 text-gray-300 pt-44 -mt-50">
            <Container>
                {/* Grid layout for footer sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">

                    {/* About Us Section */}
                    <div className="sm:col-span-2">
                        <h3 className="text-white font-semibold mb-4">About Us</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Corporate clients and leisure travellers rely on Groundlink for dependable, safe, and professional chauffeur car service in major cities worldwide. Serving for more than 15 years.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex space-x-2">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black hover:bg-orange-500 hover:text-white transition-colors duration-300"
                            >
                                <FaFacebookF size={12} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black hover:bg-orange-500 hover:text-white transition-colors duration-300"
                            >
                                <FaTwitter size={12} />
                            </a>
                            <a
                                href="https://vimeo.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black hover:bg-orange-500 hover:text-white transition-colors duration-300"
                            >
                                <FaVimeoV size={12} />
                            </a>
                            <a
                                href="https://pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black hover:bg-orange-500 hover:text-white transition-colors duration-300"
                            >
                                <FaPinterestP size={12} />
                            </a>
                        </div>
                    </div>

                    {/* Useful Links Section */}
                    <div className="sm:col-span-1">
                        <h3 className="text-white font-semibold mb-4">Useful Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/about" className="hover:text-orange-500">About</a></li>
                            <li><a href="/news" className="hover:text-orange-500">News</a></li>
                            <li><a href="/partners" className="hover:text-orange-500">Partners</a></li>
                            <li><a href="/room-details" className="hover:text-orange-500">Room Details</a></li>
                            <li><a href="/gallery" className="hover:text-orange-500">Gallery</a></li>
                            <li><a href="/contacts" className="hover:text-orange-500">Contacts</a></li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div className="sm:col-span-1">
                        <h3 className="text-white font-semibold mb-4">Help?</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/faq" className="hover:text-orange-500">FAQ</a></li>
                            <li><a href="/terms" className="hover:text-orange-500 text-[13px]">Terms & Conditions</a></li>
                            <li><a href="/reporting" className="hover:text-orange-500">Reporting</a></li>
                            <li><a href="/docs" className="hover:text-orange-500">Documentation</a></li>
                            <li><a href="/support-policy" className="hover:text-orange-500">Support Policy</a></li>
                            <li><a href="/privacy" className="hover:text-orange-500">Privacy</a></li>
                        </ul>
                    </div>

                    {/* Quarter Section */}
                    <div className="sm:col-span-2">
                        <div className="flex items-center gap-1 mb-4">
                            <img
                                src={logoOnlyHouse}
                                alt="House Logo"
                                className="w-8 h-6"
                            />
                            <h3 className="text-white font-semibold">Quarter</h3>
                        </div>

                        <p className="text-sm leading-relaxed mb-4">
                            We are a team of designers and developers creating high quality Magento & Prestashop solutions.
                        </p>
                        <p className="text-sm mb-2 flex items-center gap-2">
                            <FaMapMarkerAlt className="text-orange-500" />
                            254 Lillian Blvd, Holbrook
                        </p>

                        {/* Email Subscription */}
                        <form onSubmit={handleSubscribe} className="relative w-full sm:w-auto mt-5">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 pr-24 rounded-md bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1 bottom-1 px-4 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                        {message && <p className="text-xs mt-2 text-green-400">{message}</p>}
                    </div>
                </div>
            </Container>
            
            {/* Footer Bottom Note */}
            <div className="w-full bg-[#303340] mt-25 py-6 ">
                <Container>
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
                        {/* Left side: Copyright */}
                        <p className="mb-2 sm:mb-0">
                            © TunaThemes 2021. All rights reserved.
                        </p>

                        {/* Right side: Links */}
                        <div className="flex space-x-6">
                            <a href="/terms" className="hover:text-orange-500 transition">Terms of Use</a>
                            <a href="/privacy" className="hover:text-orange-500 transition">Privacy Policy</a>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;