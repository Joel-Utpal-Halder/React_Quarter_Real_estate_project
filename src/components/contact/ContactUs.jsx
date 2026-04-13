import React from "react";
import Container from "../commonComponents/Container";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <Container>
      {/* Card wrapper */}
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 font-nunito">
        {/* Responsive grid with custom proportions */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* LEFT SIDE: Contact Information (2/5) */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Feel free to contact us for any query.
            </h2>

            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-orange-500" />
              <p className="text-gray-700">Head office: (210) 123 451</p>
            </div>

            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-orange-500" />
              <p className="text-gray-700">website@myweb123@gmail.com</p>
            </div>

            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-orange-500" />
              <p className="text-gray-700">254 Lilian Blvd, Holbrook</p>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form (3/5) */}
          <form className="md:col-span-3 space-y-4">
            {/* First Name + Last Name side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Email + Phone Number side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Mail Address*"
                className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Choose Properties */}
            <select
              className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Choose Properties</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="office">Office</option>
            </select>

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Enter Message"
              className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
            >
              Submit Request →
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;