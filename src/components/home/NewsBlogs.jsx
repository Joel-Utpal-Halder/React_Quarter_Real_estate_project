import React from "react";
import Container from "../commonComponents/Container";

// ✅ Import images
import img1 from "../../assets/images/homePage/newsBlogs_1.png";
import img2 from "../../assets/images/homePage/newsBlogs_2.png";
import img3 from "../../assets/images/homePage/newsBlogs_3.png";
import img4 from "../../assets/images/homePage/newsBlogs_4.png";

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
        <section className="relative bg-white">
            <Container>
                <div className="pt-5 pb-35">
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
                        
                        {/* Column 1 → Two stacked items */}
                        <div className="flex flex-col gap-6">
                            {blogs.slice(0, 2).map((item) => (
                                <div
                                    key={item.id}
                                    className="relative group rounded-sm overflow-hidden shadow-md h-66 w-full"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-5 text-white z-10 w-full">
                                        <div className="flex items-center gap-3 text-xs mb-2">
                                            <span className="tracking-wider">{item.category}</span>
                                            <span className="bg-white backdrop-blur-md text-gray-800 px-2 py-0.5 rounded text-[10px]">
                                                {item.date}
                                            </span>
                                        </div>
                                        <h3 className="text-md font-bold leading-tight">
                                            {item.title}
                                        </h3>
                                        <a href="#" className="mt-3 inline-block text-orange-400 text-xs tracking-widest hover:text-orange-600 transition-colors">
                                            Read More →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Column 2 → Tall Item (Index 2) */}
                        <div className="relative group rounded-sm overflow-hidden shadow-lg h-[552px] w-full bg-gray-200">
                            <img
                                src={blogs[2]?.image}
                                alt={blogs[2]?.title}
                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white z-10 w-full">
                                <div className="flex items-center justify-start gap-3 text-xs mb-3">
                                    <span className="tracking-wider">{blogs[2]?.category}</span>
                                    <span className="bg-white text-gray-800 backdrop-blur-md px-2 py-0.5 rounded text-[10px]">
                                        {blogs[2]?.date}
                                    </span>
                                </div>
                                <h3 className="text-md font-bold leading-tight">
                                    {blogs[2]?.title}
                                </h3>
                                <a href="#" className="mt-4 inline-block text-orange-400 text-xs tracking-widest hover:text-orange-600 transition-colors">
                                    Read More →
                                </a>
                            </div>
                        </div>

                        {/* Column 3 → Tall Item (Index 3) */}
                        <div className="relative group rounded-sm overflow-hidden shadow-lg h-[552px] w-full bg-gray-200">
                            <img
                                src={blogs[3]?.image}
                                alt={blogs[3]?.title}
                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white z-10 w-full">
                                <div className="flex items-center justify-start gap-3 text-xs mb-3">
                                    <span className="tracking-wider">{blogs[3]?.category}</span>
                                    <span className="bg-white text-gray-800 backdrop-blur-md px-2 py-0.5 rounded text-[10px]">
                                        {blogs[3]?.date}
                                    </span>
                                </div>
                                <h3 className="text-md font-bold leading-tight">
                                    {blogs[3]?.title}
                                </h3>
                                <a href="#" className="mt-4 inline-block text-orange-400 text-xs tracking-widest hover:text-orange-600 transition-colors">
                                    Read More →
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default NewsBlogs;