import React from "react";
// Import the Container component you already created for consistent layout
import Container from "../commonComponents/Container";
// Import icons from react-icons (you can add more if needed)
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    // Use your Container wrapper for consistent spacing and alignment
    <Container>
      {/* Outer grid: responsive layout with two columns on medium+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-nunito">
        
        {/* LEFT SIDE: Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Feel free to contact us for any query.
          </h2>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-orange-500" />
            <p className="text-gray-700">Head office: (210) 123 451</p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-orange-500" />
            <p className="text-gray-700">webceyenvato12@gmail.com</p>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-orange-500" />
            <p className="text-gray-700">254 Lillian Blvd, Holbrook</p>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <form className="space-y-4 bg-white shadow-md rounded-lg p-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name*
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name*
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mail Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Choose Properties (Dropdown) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Choose Properties
            </label>
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select property</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="office">Office</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Enter Message
            </label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
          >
            Submit Request →
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ContactUs;