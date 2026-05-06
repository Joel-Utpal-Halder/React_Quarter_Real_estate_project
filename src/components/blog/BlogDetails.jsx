import React from "react";
import { FaCalendarAlt, FaCommentDots, FaSearch } from "react-icons/fa";
import { FaUser, FaPlay, FaFacebookF, FaTwitter, FaInstagram, FaGoogle, FaAt, FaRegCommentDots } from "react-icons/fa";
import { FaDribbble, FaGooglePlusG } from "react-icons/fa";
import Container from "../commonComponents/Container"; // Reuse common container
import blogImage from "../../assets/images/blogPage/blog_1.png";
import videoImage from "../../assets/images/blogPage/video_1.png";
import reviewImage from "../../assets/images/blogPage/reviews_1.png";
import latestPropertiesImage from "../../assets/images/blogPage/latestProperties_1.png";
import popularPropertiesImage from "../../assets/images/blogPage/popularProperties.png";
import latestBlogsImage from "../../assets/images/blogPage/latestBlogs_1.png";



const BlogDetails = () => {
  return (
    <Container>
      {/* Main grid: 2/3 left for blog content, 1/3 right for sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-nunito pt-20 pb-30">

        {/* LEFT SIDE: Blog Content */}
        <div className="lg:col-span-2">
          {/* Card wrapper */}
          <div className="bg-white shadow-lg rounded-sm p-6 space-y-8">
            {/* Blog Image */}
            <img
              src={blogImage}
              alt="Blog"
              className="w-full h-auto rounded-sm shadow-md"
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
              It is a long established fact that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
              letters, as opposed to using ‘Content here, content here’, making it look like readable English.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
              letters, as opposed to using ‘Content here, content here’, making it look like readable English.
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
            </p>

            {/* Subheading */}
            <h3 className="text-xl font-semibold text-gray-800">
              A charming but elusive or tooth
            </h3>
            <p className="text-gray-700 leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
              letters, as opposed to using ‘Content here, content here’, making it look like readable English.
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
            </p>

            {/* Highlighted Quote Box */}
            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-md shadow-sm">
              <p className="italic text-gray-800">
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
              </p>
            </div>

            {/* Another Subheading with bullet list */}
            <h3 className="text-xl font-semibold text-gray-800">
              Setting the mood with incense
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>Check Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Check Lorem ipsum dolor sit amet, sed do.</li>
              <li>Check Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Check Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Check Lorem ipsum dolor sit amet, sed do.</li>
              <li>Check Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
              letters, as opposed to using ‘Content here, content here’, making it look like readable English.
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
            </p>

            {/* Image + Video Section */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Left Image */}
                <div className="relative">
                  <img
                    src={videoImage}
                    alt="House Photo"
                    className="w-full h-auto rounded-sm shadow-md"
                  />
                </div>

                {/* Right Image with Play Button */}
                <div className="relative">
                  <img
                    src={videoImage}
                    alt="House Video"
                    className="w-full h-auto rounded-sm shadow-md"
                  />
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
                <div className="flex-grow border-t border-gray-300"></div>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                    className="group w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer transition hover:bg-orange-500">
                    <FaFacebookF className="text-gray-600 transition group-hover:text-white" />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                    className="group w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer transition hover:bg-orange-500">
                    <FaTwitter className="text-gray-600 transition group-hover:text-white" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                    className="group w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer transition hover:bg-orange-500">
                    <FaInstagram className="text-gray-600 transition group-hover:text-white" />
                  </a>
                  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"
                    className="group w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer transition hover:bg-orange-500">
                    <FaGoogle className="text-gray-600 transition group-hover:text-white" />
                  </a>
                </div>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">Reviews</h3>

              {/* Review Card 1 */}
              <div className="bg-gray-100 p-4 rounded-sm shadow-sm flex gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={reviewImage}
                    alt="Reviewer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-800">Tom Wilson</p>
                  <p className="text-xs text-gray-500">June 26, 2020</p>
                  <div className="flex items-center mt-1 text-orange-500">
                    <span>★</span><span>★</span><span>★</span><span>★</span>
                    <span className="text-gray-400">★</span>
                  </div>
                  <p className="text-gray-700 text-sm mt-2">
                    The second bedroom is a corner room with double windows...
                  </p>
                </div>
              </div>

              {/* Review Card 2 */}
              <div className="bg-gray-100 p-4 rounded-sm shadow-sm flex gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={reviewImage}
                    alt="Reviewer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-800">Jane Doe</p>
                  <p className="text-xs text-gray-500">April 15, 2021</p>
                  <div className="flex items-center mt-1 text-orange-500">
                    <span>★</span><span>★</span><span>★</span>
                    <span className="text-gray-400">★</span>
                    <span className="text-gray-400">★</span>
                  </div>
                  <p className="text-gray-700 text-sm mt-2">
                    Loved the spacious kitchen and natural light throughout the house.
                  </p>
                </div>
              </div>

              {/* Write A Review Form */}
              <div className="bg-gray-100 p-6 rounded-sm shadow-md">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Write A Review</h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name*" required
                      className="w-full px-3 py-2 border rounded-sm text-sm outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="email" placeholder="Email Address"
                      className="w-full px-3 py-2 border rounded-sm text-sm outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                  <textarea placeholder="Write Comment" rows="4"
                    className="w-full px-3 py-2 border rounded-sm text-sm outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="saveInfo"
                      className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                    <label htmlFor="saveInfo" className="text-sm text-gray-700">
                      Save my name, email, and website in this browser for the next time I comment
                    </label>
                  </div>
                  <div className="flex justify-start">
                    <button type="submit"
                      className="px-6 bg-orange-500 text-white py-2 rounded-sm font-semibold hover:bg-orange-600 transition">
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Sidebar */}
        <div className="space-y-8">

          {/* Profile Card */}
          <div className="bg-white p-6 rounded-sm shadow-md text-center">
            {/* Profile Image */}
            <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-orange-500">
              <img
                src={blogImage} // replace with actual profile image
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name + Occupation */}
            <h4 className="text-lg font-bold text-gray-800">Jehnny Rose</h4>
            <p className="text-sm text-gray-600">Traveller / Photographer</p>
            {/* Star Rating */}
            <div className="flex items-center justify-center mt-2">
              <span className="text-orange-500">★</span>
              <span className="text-orange-500">★</span>
              <span className="text-orange-500">★</span>
              <span className="text-orange-500">★</span>
              <span className="text-gray-400">★</span>
              <span className="ml-2 text-sm text-gray-600">(1 Review)</span>
            </div>
            {/* Bio */}
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                className="group w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm cursor-pointer transition hover:bg-orange-500">
                <FaFacebookF className="text-gray-600 text-sm transition group-hover:text-white" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                className="group w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm cursor-pointer transition hover:bg-orange-500">
                <FaTwitter className="text-gray-600 text-sm transition group-hover:text-white" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                className="group w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm cursor-pointer transition hover:bg-orange-500">
                <FaInstagram className="text-gray-600 text-sm transition group-hover:text-white" />
              </a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"
                className="group w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm cursor-pointer transition hover:bg-orange-500">
                <FaGoogle className="text-gray-600 text-sm transition group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="bg-white p-6 rounded-sm shadow-md">
            {/* Heading with left orange bar */}
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-orange-500 mr-2 rounded"></div>
              <h4 className="text-lg font-bold text-gray-800">Search Bar</h4>
            </div>

            {/* Input + Button */}
            <div className="flex border rounded-sm overflow-hidden">
              <input
                type="text"
                placeholder="Search Blogs"
                className="flex-grow px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                className="bg-orange-500 text-white px-5 py-2 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaSearch className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-6 rounded-sm shadow-md">
            {/* Heading */}
            <h4 className="text-lg font-bold text-gray-800 mb-4">Drop Messege For Book</h4>

            <form className="space-y-4">
              {/* Name Field */}
              <div className="flex items-center border rounded-sm px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500 bg-white">
                <FaUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  className="flex-grow text-sm outline-none bg-white"
                />
              </div>

              {/* Email Field */}
              <div className="flex items-center border rounded-sm px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500 bg-white">
                <FaAt className="text-gray-500 mr-2" />
                <input
                  type="email"
                  placeholder="Your Email*"
                  required
                  className="flex-grow text-sm outline-none bg-white"
                />
              </div>

              {/* Message Field */}
              <div className="flex items-start border rounded-sm px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500 bg-white">
                <FaRegCommentDots className="text-gray-500 mr-2 mt-1" />
                <textarea
                  placeholder="Write Messege"
                  rows="4"
                  className="flex-grow text-sm outline-none bg-white"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-sm font-semibold hover:bg-orange-600 transition"
              >
                Send Messege
              </button>
            </form>
          </div>

          {/* Latest Properties Section */}
          <div className="bg-white p-6 rounded-sm shadow-md mt-8">
            {/* Heading with left orange bar */}
            <div className="flex items-center mb-6">
              <div className="w-1 h-6 bg-orange-500 mr-2 rounded"></div>
              <h3 className="text-xl font-bold text-gray-800">Latest Properties</h3>
            </div>

            {/* Properties List */}
            <div className="space-y-3">
              {/* Property Card 1 */}
              <div className="flex items-center bg-gray-100 rounded-sm shadow-sm overflow-hidden p-2">
                <img
                  src={latestPropertiesImage} // replace with actual image
                  alt="Property"
                  className="w-16 h-16 object-cover" // smaller image, no rounded corners
                />
                <div className="ml-3">
                  <p className="text-orange-500 font-bold text-xs">$320,000</p>
                  <h4 className="text-xs font-semibold text-gray-800">
                    Neue Dimensionen im Schrägdach
                  </h4>
                </div>
              </div>

              {/* Property Card 2 */}
              <div className="flex items-center bg-gray-100 rounded-sm shadow-sm overflow-hidden p-2">
                <img
                  src={latestPropertiesImage}
                  alt="Property"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-3">
                  <p className="text-orange-500 font-bold text-xs">$750,000</p>
                  <h4 className="text-xs font-semibold text-gray-800">
                    Langs Beach House
                  </h4>
                </div>
              </div>

              {/* Property Card 3 */}
              <div className="flex items-center bg-gray-100 rounded-sm shadow-sm overflow-hidden p-2">
                <img
                  src={latestPropertiesImage}
                  alt="Property"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-3">
                  <p className="text-orange-500 font-bold text-xs">$880,000</p>
                  <h4 className="text-xs font-semibold text-gray-800">
                    Eaton Garth Penthouse
                  </h4>
                </div>
              </div>

              {/* Property Card 4 */}
              <div className="flex items-center bg-gray-100 rounded-sm shadow-sm overflow-hidden p-2">
                <img
                  src={latestPropertiesImage}
                  alt="Property"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-3">
                  <p className="text-orange-500 font-bold text-xs">$880,000</p>
                  <h4 className="text-xs font-semibold text-gray-800">
                    Eaton Garth Penthouse
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Top Categories Section */}
          <div className="bg-white p-6 rounded-sm shadow-md mt-8">
            {/* Heading with left orange bar */}
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-orange-500 mr-2 rounded"></div>
              <h3 className="text-lg font-bold text-gray-800">Top Catagories</h3>
            </div>

            {/* Categories List */}
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-sm bg-orange-50 px-3 py-2 rounded-sm">
                <span className="text-orange-500">Apartment</span>
                <span className="text-orange-500">(14)</span>
              </li>
              <li className="flex justify-between items-center text-sm bg-orange-50 px-3 py-2 rounded-sm">
                <span className="text-orange-500">Picture Studio</span>
                <span className="text-orange-500">(14)</span>
              </li>
              <li className="flex justify-between items-center text-sm bg-orange-50 px-3 py-2 rounded-sm">
                <span className="text-orange-500">Office</span>
                <span className="text-orange-500">(14)</span>
              </li>
              <li className="flex justify-between items-center text-sm bg-orange-50 px-3 py-2 rounded-sm">
                <span className="text-orange-500">Luxary Vilas</span>
                <span className="text-orange-500">(14)</span>
              </li>
              <li className="flex justify-between items-center text-sm bg-orange-50 px-3 py-2 rounded-sm">
                <span className="text-orange-500">Duplex House</span>
                <span className="text-orange-500">(14)</span>
              </li>
            </ul>
          </div>

          {/* Popular Properties Section */}
          <div className="bg-white p-6 rounded-sm shadow-md mt-8">
            {/* Heading with left orange bar */}
            <div className="flex items-center mb-6">
              <div className="w-1 h-6 bg-orange-500 mr-2 rounded"></div>
              <h3 className="text-xl font-bold text-gray-800">Popular Properties</h3>
            </div>

            {/* Property Card */}
            <div className="bg-gray-100 rounded-sm shadow-sm overflow-hidden">
              {/* Property Image */}
              <img
                src={popularPropertiesImage} // replace with actual image
                alt="Property"
                className="w-full h-48 object-cover"
              />

              {/* Property Details */}
              <div className="p-4 space-y-2">
                {/* Price */}
                <p className="text-orange-500 font-bold text-md">$349,00/Month</p>

                {/* Property Name */}
                <h4 className="text-md font-semibold text-gray-800">
                  New Apartment Nice View
                </h4>

                {/* Location */}
                <p className="text-xs text-gray-600">Belmont Gardens, Chicago</p>

                {/* Specifications */}
                <div className="flex flex-wrap gap-4 text-[10px] text-gray-700 font-semibold mt-2">
                  <span>3 Bedrooms</span>
                  <span>2 Bathrooms</span>
                  <span>3450 Sq Ft</span>
                </div>
              </div>

              {/* Divider line */}
              <hr className="border-t border-gray-300 mt-2" />

              {/* Navigation dots */}
              <div className="flex justify-center space-x-2 p-3">
                <button className="w-2 h-2 rounded-full bg-orange-200 hover:bg-orange-400 focus:bg-orange-500 transition"></button>
                <button className="w-2 h-2 rounded-full bg-orange-200 hover:bg-orange-400 focus:bg-orange-500 transition"></button>
                <button className="w-2 h-2 rounded-full bg-orange-200 hover:bg-orange-400 focus:bg-orange-500 transition"></button>
                <button className="w-2 h-2 rounded-full bg-orange-200 hover:bg-orange-400 focus:bg-orange-500 transition"></button>
                <button className="w-2 h-2 rounded-full bg-orange-200 hover:bg-orange-400 focus:bg-orange-500 transition"></button>
              </div>
            </div>
          </div>

          {/* Latest Blogs Section */}
          <div className="bg-white p-6 rounded-sm shadow-md mt-8">
            {/* Heading with left orange bar */}
            <div className="flex items-center mb-6">
              <div className="w-1 h-6 bg-orange-500 mr-2 rounded"></div>
              <h3 className="text-xl font-bold text-gray-800">Leatest Blogs</h3>
            </div>

            {/* Blog List */}
            <div className="space-y-4">
              {/* Blog Item 1 */}
              <div className="flex items-center bg-gray-100 rounded-sm shadow-sm p-2">
                <img
                  src={latestBlogsImage}
                  alt="Blog"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-3">
                  <p className="text-xs text-gray-500">27 July, 2020</p>
                  <h4 className="text-sm font-semibold text-gray-800">
                    It is a long established Cont popular traditional
                  </h4>
                </div>
              </div>

              {/* Blog Item 2 */}
              <div className="flex items-center bg-gray-100 rounded-sm shadow-sm p-2">
                <img
                  src={latestBlogsImage}
                  alt="Blog"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-3">
                  <p className="text-xs text-gray-500">27 July, 2020</p>
                  <h4 className="text-sm font-semibold text-gray-800">
                    Contrary to popular tradi lorem ipsum is not simply
                  </h4>
                </div>
              </div>

              {/* Blog Item 3 */}
              <div className="flex items-center bg-gray-100 rounded-sm shadow-sm p-2">
                <img
                  src={latestBlogsImage}
                  alt="Blog"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-3">
                  <p className="text-xs text-gray-500">27 July, 2020</p>
                  <h4 className="text-sm font-semibold text-gray-800">
                    Lorem Ipsum has been the industry’s standard dummy
                  </h4>
                </div>
              </div>

              {/* Blog Item 4 */}
              <div className="flex items-center bg-gray-100 rounded-sm shadow-sm p-2">
                <img
                  src={latestBlogsImage}
                  alt="Blog"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-3">
                  <p className="text-xs text-gray-500">27 July, 2020</p>
                  <h4 className="text-sm font-semibold text-gray-800">
                    It is a long established Cont popular traditional
                  </h4>
                </div>
              </div>
            </div>
          </div>

{/* Follow Us Section */}
<div className="bg-white p-6 rounded-sm shadow-md mt-8">
  {/* Heading with left orange bar */}
  <div className="flex items-center mb-4">
    <div className="w-1 h-6 bg-orange-500 mr-2 rounded"></div>
    <h3 className="text-lg font-bold text-gray-800">Follow Us</h3>
  </div>

  {/* Social Media Icons */}
  <div className="flex gap-4">
    {/* Facebook */}
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black 
                 transition hover:bg-orange-500 hover:text-white"
    >
      <FaFacebookF />
    </a>

    {/* Twitter */}
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black 
                 transition hover:bg-orange-500 hover:text-white"
    >
      <FaTwitter />
    </a>

    {/* Dribbble */}
    <a
      href="https://dribbble.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black 
                 transition hover:bg-orange-500 hover:text-white"
    >
      <FaDribbble />
    </a>

    {/* Google Plus */}
    <a
      href="https://plus.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black 
                 transition hover:bg-orange-500 hover:text-white"
    >
      <FaGooglePlusG />
    </a>
  </div>
</div>











        </div>
      </div>
    </Container>
  );
};

export default BlogDetails;
