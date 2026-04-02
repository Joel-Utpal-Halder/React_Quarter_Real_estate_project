// File: src/components/about/Blogs.jsx

import React from "react";
import Container from "../commonComponents/Container";

// Import images
import commonHouseIcon from "../../assets/images/commonHouseIcon.png";
import blogs_1 from "../../assets/images/aboutPage/blog_1.png";
import blogIcon_1 from "../../assets/images/aboutPage/blogIcon_1.png";
import blogIcon_2 from "../../assets/images/aboutPage/blogIcon_2.png";

const Blogs = () => {
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
    <section className="py-12 mb-35 bg-white font-nunito">
      <Container>
        {/* Section Title with Icon */}
        <div className="text-center mb-10 flex flex-col items-center">
          <img
            src={commonHouseIcon}
            alt="Section Icon"
            className="w-12 h-12 mb-3"
          />
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
              className="relative rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Full-size Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-80 object-cover"
              />

              {/* Bottom Card Content */}
              <div className="absolute -bottom-20 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 m-4 rounded-md shadow-md">
                {/* Date and Comments with custom icons */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  {/* Date with icon */}
                  <span className="flex items-center gap-2">
                    <img
                      src={blogIcon_1}
                      alt="Date Icon"
                      className="w-4 h-4"
                    />
                    {post.date}
                  </span>

                  {/* Comments with icon */}
                  <span className="flex items-center gap-2">
                    <img
                      src={blogIcon_2}
                      alt="Comments Icon"
                      className="w-4 h-4"
                    />
                    {post.comments} Comments
                  </span>
                </div>

                {/* Blog Title */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
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