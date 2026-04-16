import React from "react";
import Container from "../commonComponents/Container";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaAt,
  FaMobileAlt,
  FaRegCommentDots,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <Container>
        {/* Card wrapper with full shadow */}
        <div className="bg-white shadow-2xl shadow-gray-400 my-20 font-nunito overflow-hidden">
          {/* Card content */}
          <div className="p-6 md:p-16">
            {/* Responsive grid with custom proportions */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* LEFT SIDE: Contact Information (2/5) */}
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Feel free to contact us for any query.
                </h2>

                {/* Phone */}
                <div className="flex items-start space-x-3 rounded-full transition-colors duration-200 hover:bg-orange-50">
                  <div className="flex items-center justify-center w-15 h-15 rounded-full bg-orange-500 text-white">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Phone Number:</p>
                    <p className="text-gray-700">Head office: (210) 123 451</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 rounded-full transition-colors duration-200 hover:bg-orange-50">
                  <div className="flex items-center justify-center w-15 h-15 rounded-full bg-orange-500 text-white">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Mail Address:</p>
                    <p className="text-gray-700">webecyenvato12@gmail.com</p>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-start space-x-3 rounded-full transition-colors duration-200 hover:bg-orange-50">
                  <div className="flex items-center justify-center w-15 h-15 rounded-full bg-orange-500 text-white">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Office Address:</p>
                    <p className="text-gray-700">254 Lillian Blvd, Holbrook</p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Contact Form (3/5) */}
              <form className="md:col-span-3 space-y-4">
                {/* First Name + Last Name side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="First Name*"
                      className="w-full bg-gray-100 text-gray-700 border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                    <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-hover:text-orange-500 group-focus-within:text-orange-500" />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Last Name*"
                      className="w-full bg-gray-100 text-gray-700 border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                    <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-hover:text-orange-500 group-focus-within:text-orange-500" />
                  </div>
                </div>

                {/* Email + Phone Number side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="Mail Address*"
                      className="w-full bg-gray-100 text-gray-700 border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                    <FaAt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-hover:text-orange-500 group-focus-within:text-orange-500" />
                  </div>
                  <div className="relative group">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-gray-100 text-gray-700 border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <FaMobileAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-hover:text-orange-500 group-focus-within:text-orange-500" />
                  </div>
                </div>

                {/* Choose Properties */}
                <select
                  className="w-full bg-gray-100 text-gray-700 border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Choose Properties</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="office">Office</option>
                </select>

                {/* Message */}
                <div className="relative group">
                  <textarea
                    rows="4"
                    placeholder="Enter Message"
                    className="w-full bg-gray-100 text-gray-700 border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                  <FaRegCommentDots className="absolute right-3 top-3 text-gray-400 transition-colors duration-200 group-hover:text-orange-500 group-focus-within:text-orange-500" />
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="w-2/5 bg-orange-500 text-white font-semibold py-3 px-4 hover:bg-orange-600 transition-colors"
                  >
                    Submit Request →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>

      {/* Full-width gray strip across site */}
      <div className="w-full h-40 bg-gray-300"></div>
    </>
  );
};

export default ContactUs;