// File: src/components/about/PropertyDetails.jsx

import React from "react";
import houseIcon from "../../assets/images/commonHouseIcon.png"; 

const PropertyDetails = () => {
  return (
    <div className="font-nunito">
      {/* Background split: left 1/3 white, right 2/3 gray */}
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
        
        {/* Left side background (white) */}
        <div className="bg-white"></div>
        
        {/* Right side background (darker gray, spans 2/3) */}
        <div className="bg-gray-300 lg:col-span-2 flex items-center justify-center p-6">
          
          {/* Big centered card */}
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-8 space-y-6">
            
            {/* Headline */}
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Your Perfect & Modern Living Space Waits!
            </h2>
            
            {/* Icon placed once under headline */}
            <div className="flex justify-center">
              <img src={houseIcon} alt="house icon" className="w-10 h-10" />
            </div>
            
            {/* Short description */}
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Sed perspiciatis unde omnis iste natus error sit voluptatem 
              laudantium totam rem aperiam eaque ipsa quae ab illo inventore 
              veritatis et quasi.
            </p>
            
            {/* Property Types list */}
            <ul className="grid grid-cols-2 gap-3 text-gray-700 text-center">
              {[
                "The Studio",
                "Deluxe Portion",
                "Penthouse",
                "Top Garden",
                "Deluxe Portion",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-red-600 transition-colors font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
            
            {/* Deluxe Portion Details */}
            <div className="bg-red-600 text-white rounded-lg shadow-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold text-center">Deluxe Portion</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <p><span className="font-bold">Total Area:</span> 2800 Sq. Ft</p>
                <p><span className="font-bold">Floor No.:</span> 15</p>
                <p><span className="font-bold">Current Status:</span> Available</p>
                <p><span className="font-bold">No. Of Rooms:</span> 6</p>
                <p><span className="font-bold">Parking:</span> Yes</p>
                <p><span className="font-bold">Price From:</span> $4,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;