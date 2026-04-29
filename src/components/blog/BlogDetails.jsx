// src/components/blog/BlogDetails.jsx
import React from "react";
import { FaCalendarAlt, FaCommentDots, FaSearch } from "react-icons/fa";
import Container from "../commonComponents/Container"; // Reuse your common container
import blogImage from "../../assets/images/blogPage/blog_1.png"; // Example blog image
import { FaUser, FaPlay, FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";

const BlogDetails = () => {
  return (
    <Container>
      {/* Main grid: 2/3 left for blog content, 1/3 right for sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-nunito">

        {/* LEFT SIDE: Blog Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Blog Image */}
          <img
            src={blogImage}
            alt="Blog"
            className="w-full h-auto rounded-lg shadow-md"
          />

          {/* Blog Meta Info */}
          <div className="flex items-center gap-6 text-gray-600 text-sm">
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-orange-500" />
              July 27, 2020
            </span>
            <span className="flex items-center gap-2">
              <FaCommentDots className="text-orange-500" />
              1 Comment
            </span>
          </div>

          {/* Blog Title */}
          <h2 className="text-2xl font-bold text-gray-800">
            Lauren Brown is simply dummy text of the printing and typesetting industry
          </h2>

          {/* Blog Body */}
          <p className="text-gray-700 leading-relaxed">
            Lauren Brown is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          {/* Subheading */}
          <h3 className="text-xl font-semibold text-gray-800">
            A charming but elusive or tooth
          </h3>
          <p className="text-gray-700 leading-relaxed">
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          {/* Highlighted Quote Box */}
          <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-md shadow-sm">
            <p className="italic text-gray-800">
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            </p>
          </div>

          {/* Another Subheading with bullet list */}
          <h3 className="text-xl font-semibold text-gray-800">
            Setting the mood with incense
          </h3>

          {/* Bullet List */}
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>Check Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Check Lorem ipsum dolor sit amet, sed do.</li>
            <li>Check Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Check Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Check Lorem ipsum dolor sit amet, sed do.</li>
            <li>Check Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>

          {/* Supporting Paragraph */}
          <p className="text-gray-700 leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially unchanged.
          </p>

          {/* Image + Video Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Left Image */}
              <div className="relative">
                <img
                  src={blogImage}
                  alt="House Photo"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              {/* Right Image with Play Button */}
              <div className="relative">
                <img
                  src={blogImage}
                  alt="House Video"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                {/* Play Button Overlay */}
                <button
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Play Video"
                >
                  <div className="group w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer transition hover:bg-orange-500">
                    <FaPlay className="w-6 h-6 text-orange-500 transition group-hover:text-white" />
                  </div>
                </button>
              </div>

            </div>

            {/* Divider Line with Icons */}
            <div className="flex items-center justify-center gap-6 my-6">
              {/* Left line */}
              <div className="flex-grow border-t border-gray-300"></div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer transition hover:bg-orange-500"
                >
                  <FaFacebookF className="text-gray-600 transition group-hover:text-white" />
                </a>

                {/* Twitter */}
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer transition hover:bg-orange-500"
                >
                  <FaTwitter className="text-gray-600 transition group-hover:text-white" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer transition hover:bg-orange-500"
                >
                  <FaInstagram className="text-gray-600 transition group-hover:text-white" />
                </a>

                {/* Google */}
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer transition hover:bg-orange-500"
                >
                  <FaGoogle className="text-gray-600 transition group-hover:text-white" />
                </a>
              </div>

              {/* Right line */}
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Reviews</h3>
            {/* Example Review */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-gray-800">John Smith ★★★★☆</p>
              <p className="text-gray-700 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            {/* Add Review Form */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Add a review</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your rating"
                  className="w-full px-3 py-2 border rounded-lg text-sm outline-none"
                />
                <textarea
                  placeholder="Your review"
                  rows="4"
                  className="w-full px-3 py-2 border rounded-lg text-sm outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>









        {/* RIGHT SIDE: Sidebar */}
        <div className="space-y-8">
          {/* Profile Card */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <FaUser className="text-4xl text-orange-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-gray-800">Jehnny Rose</h4>
            <p className="text-sm text-gray-600">Web Developer</p>
            <p className="text-gray-600 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Search Bar</h4>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow px-3 py-2 outline-none text-sm"
              />
              <button className="bg-orange-500 text-white px-4 py-2">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-bold text-gray-800 mb-4">
              Drop Message For Book
            </h4>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-lg text-sm outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded-lg text-sm outline-none"
              />
              <textarea
                placeholder="Write Message"
                rows="4"
                className="w-full px-3 py-2 border rounded-lg text-sm outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetails;
