import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa"; // ✅ Play icon from react-icons
import bannerImg from "../assets/images/homePage/VideoBanner.png"; // ✅ Thumbnail image

const VideoBanner = () => {
  // ✅ State to track if video is playing
  const [isPlaying, setIsPlaying] = useState(false);

  // ✅ Ref to control video element
  const videoRef = useRef(null);

  // ✅ Function to handle play button click
  const handlePlay = () => {
    setIsPlaying(true); // Switch to video mode
    if (videoRef.current) {
      videoRef.current.play(); // Start video playback
    }
  };

  return (
    <section className="w-full relative mb-10">
      {/* ✅ If video is playing, show video; otherwise show thumbnail */}
      {!isPlaying ? (
        <div className="relative w-full">
          {/* Thumbnail Image */}
          <img
            src={bannerImg}
            alt="Video Banner"
            className="w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[400px] object-cover"
          />

          {/* Play Button */}
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="bg-orange-500 text-white rounded-full p-4 md:p-6 shadow-lg hover:bg-orange-600 transition">
              <FaPlay className="text-lg md:text-2xl" />
            </span>
          </button>
        </div>
      ) : (
        <video
          ref={videoRef}
          className="w-full h-[200px] sm:h-[300px] md:h-[300px] lg:h-[400px]  object-cover"
          controls
        >
          {/* ✅ Replace with the actual video file path */}
          <source src="/assets/videos/sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </section>
  );
};

export default VideoBanner;