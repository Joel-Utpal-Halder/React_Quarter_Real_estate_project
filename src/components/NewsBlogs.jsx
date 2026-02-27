// ✅ Import dependencies
import React from "react";
import Container from "./commonComponents/Container";

// ✅ Import images (adjust path if needed!)
import img1 from "../assets/images/homePage/newsBlogs_1.png";
import img2 from "../assets/images/homePage/newsBlogs_2.png";
import img3 from "../assets/images/homePage/newsBlogs_3.png";
import img4 from "../assets/images/homePage/newsBlogs_4.png";

// ✅ Dynamic blog data
const blogs = [
    {
        id: 1,
        category: "Product Design",
        date: "02 Sep 2020",
        title: "This consumer-focused blog gives clients",
        image: img1,
    },
    {
        id: 2,
        category: "Product Design",
        date: "02 Sep 2020",
        title: "This consumer-focused blog gives clients",
        image: img2,
    },
    {
        id: 3,
        category: "Web Developer",
        date: "02 Sep 2020",
        title: "Have an ear to the ground on what real estate invest",
        image: img3,
    },
    {
        id: 4,
        category: "Estate Agents",
        date: "02 Sep 2020",
        title: "Appraisal skills and real estate career? McKissock",
        image: img4,
    },
];

const NewsBlogs = () => {
    return (
        <div className="relative">
            <Container>
                <div className="py-20">
                    {/* ✅ Section Header */}
                    <div className="text-center mb-10">
                        <span className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium">
                            News & Blogs
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 leading-snug">
                            See Our Latest News <br /> & Read Blogs
                        </h2>
                    </div>

                    {/* ✅ Custom Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Column 1 → two stacked items */}
                        <div className="flex flex-col gap-6">
                            {blogs.slice(0, 2).map((item) => (
                                <div
                                    key={item.id}
                                    className="relative group rounded-lg overflow-hidden shadow-md h-64"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>
                                    <div className="absolute bottom-0 left-0 p-4 text-white z-10">
                                        {/* ✅ 1st row on the image */}
                                        <div className="flex items-center justify-start gap-3 text-xs mb-2">
                                            <span className="font-medium">{item.category}</span>
                                            <span className="bg-white text-gray-800 px-2 py-0.5 rounded-full text-[11px] font-medium">
                                                {item.date}
                                            </span>
                                        </div>
                                        {/* 2nd row → title */}
                                        <h3 className="text-sm sm:text-base font-semibold leading-snug">
                                            {item.title}
                                        </h3>
                                        {/* ✅ Read More link */}
                                        <a
                                            href="#"
                                            className="mt-2 inline-block text-orange-400 font-medium hover:text-orange-600 transition-colors text-xs"
                                        >
                                            Read More →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Column 2 → one tall item */}
                        <div className="relative group rounded-lg overflow-hidden shadow-md h-[532px]">
                            <img
                                src={blogs[2].image}
                                alt={blogs[2].title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                                <div className="flex items-center justify-between text-xs mb-2">
                                    <span className="font-medium">{blogs[2].category}</span>
                                    <span className="bg-white text-gray-800 px-2 py-0.5 rounded-full text-[11px] font-medium">
                                        {blogs[2].date}
                                    </span>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold leading-snug">
                                    {blogs[2].title}
                                </h3>
                                <a
                                    href="#"
                                    className="mt-2 inline-block text-orange-400 font-medium hover:text-orange-600 transition-colors text-xs"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>

                        {/* Column 3 → one tall item */}
                        <div className="relative group rounded-lg overflow-hidden shadow-md h-[532px]">
                            <img
                                src={blogs[3].image}
                                alt={blogs[3].title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                                <div className="flex items-center justify-between text-xs mb-2">
                                    <span className="font-medium">{blogs[3].category}</span>
                                    <span className="bg-white text-gray-800 px-2 py-0.5 rounded-full text-[11px] font-medium">
                                        {blogs[3].date}
                                    </span>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold leading-snug">
                                    {blogs[3].title}
                                </h3>
                                <a
                                    href="#"
                                    className="mt-2 inline-block text-orange-400 font-medium hover:text-orange-600 transition-colors text-xs"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NewsBlogs;