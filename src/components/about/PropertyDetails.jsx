import React from "react";
import houseIcon from "../../assets/images/commonHouseIcon.png"; 
const PropertyDetails = () => {
  return (
    <div className="font-nunito relative min-h-screen flex items-center justify-center">
      
      {/* Background split: white left 1/3, deep ash right 2/3 */}
      <div className="absolute inset-0 grid grid-cols-3">
        <div className="bg-white"></div>
        <div className="bg-gray-800 col-span-2"></div>
      </div>
      
      {/* Centered card */}
      <div className="relative z-10 bg-white rounded-sm shadow-gray-400 shadow-xl max-w-3xl w-full p-8 space-y-6">
        
        {/* Headline */}
        <h2 className="text-2xl font-bold text-gray-900 text-feft">
          Your Perfect & Modern <br /> Living Space Waits!
        </h2>
        
        {/* Icon placed once under headline */}
        <div className="flex justify-center">
          <img src={houseIcon} alt="house icon" className="w-10 h-10" />
        </div>
        
        {/* Short description */}
        <p className="text-gray-700 text-center max-w-2xl mx-auto">
          Sed perspiciatis unde omnis iste natus error sit voluptatem 
          laudantium totam rem aperiam eaque ipsa quae ab illo inventore 
          veritatis et quasi.
        </p>
        
        {/* Property Types list */}
        <ul className="grid grid-cols-2 gap-3 text-gray-800 text-center">
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
  );
};

export default PropertyDetails;