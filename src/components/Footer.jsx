// components/Footer.jsx
import React, { useState } from "react";
import Container from "../components/CommonComponents/Container";
// ✅ Reuse your existing Container for consistent layout
import { FaFacebookF, FaTwitter, FaVimeoV, FaPinterestP, FaMapMarkerAlt } from "react-icons/fa";
import logoOnlyHouse from "../assets/images/logo_onlyHouse.png";

const Footer = () => {
    // State for email subscription
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Handle subscription logic (basic demo)
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
        <footer className="bg-gray-900 text-gray-300 py-10">
            <Container>
                {/* Grid layout for footer sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* About Us Section */}
                    <div>
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
                    <div>
                        <h3 className="text-white font-semibold mb-4">Useful Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/about" className="hover:text-white">About</a></li>
                            <li><a href="/news" className="hover:text-white">News</a></li>
                            <li><a href="/partners" className="hover:text-white">Partners</a></li>
                            <li><a href="/room-details" className="hover:text-white">Room Details</a></li>
                            <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
                            <li><a href="/contacts" className="hover:text-white">Contacts</a></li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Help?</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
                            <li><a href="/reporting" className="hover:text-white">Reporting</a></li>
                            <li><a href="/docs" className="hover:text-white">Documentation</a></li>
                            <li><a href="/support-policy" className="hover:text-white">Support Policy</a></li>
                            <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
                        </ul>
                    </div>

                    {/* Quarter Section */}
                    <div>
                        {/* Logo placed before the text "Quarter" */}
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
                        <p className="text-sm mb-2">📍 254 Lillian Blvd, Holbrook</p>


                        {/* Email Subscription */}
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 px-3 py-2 rounded-md text-gray-900 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                        {message && <p className="text-xs mt-2 text-green-400">{message}</p>}
                    </div>
                </div>

                {/* Footer Bottom Note */}
                <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p>© TunaThemes 2021. All rights reserved.</p>
                    <div className="flex space-x-4 mt-2 sm:mt-0">
                        <a href="/terms" className="hover:text-white">Terms of Use</a>
                        <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;