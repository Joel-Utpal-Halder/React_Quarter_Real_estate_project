// File: src/components/about/Blogs.jsx

import React from "react";
// Import the Container component you already created for consistent layout
import Container from "../commonComponents/Container";

// Import images (adjust paths if needed)
import commonHouseIcon from "../../assets/images/commonHouseIcon.png";
import blogs_1 from "../../assets/images/aboutPage/blogs_1.png";

// Import react-icons (example: FaRegComment for comments)
import { FaRegComment } from "react-icons/fa";

const Blogs = () => {
  // Dummy blog data (you can later fetch from API or Markdown files)
  const blogPosts = [
    {
      id: 1,
      date: "July 27, 2021",
      comments: 1,
      title: "Get Best Advertiser In Your Side Pocket",
      image: blogs_1,
    },
    {
      id: 2,
      date: "July 27, 2021",
      comments: 4,
      title: "Realtors, you know you can’t be good at your",
      image: blogs_1,
    },
    {
      id: 3,
      date: "Jan 24, 2021",
      comments: 3,
      title: "More value to your clients Happy reading!",
      image: blogs_1,
    },
  ];

  return (
    <section className="py-12 bg-white font-nunito">
      {/* Use your Container component for consistent spacing */}
      <Container>
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Read From Blogs
          </h2>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Blog Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Blog Content */}
              <div className="p-5">
                {/* Date and Comments */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <FaRegComment className="text-gray-400" />
                    {post.comments} Comments
                  </span>
                </div>

                {/* Blog Title */}
                <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blogs;