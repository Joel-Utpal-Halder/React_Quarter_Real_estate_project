import React, { useState } from "react";
import houseIcon from "../../assets/images/commonHouseIcon.png"; 

const PropertyDetails = () => {
  // ✅ Property data
  const properties = {
    "The Studio": {
      title: "The Studio",
      area: "600 Sq. Ft",
      floor: "3",
      status: "Available",
      rooms: "1",
      parking: "No",
      price: "$1,200",
    },
    "Deluxe Portion": {
      title: "Deluxe Portion",
      area: "2800 Sq. Ft",
      floor: "15",
      status: "Available",
      rooms: "6",
      parking: "Yes",
      price: "$4,500",
    },
    Penthouse: {
      title: "Penthouse",
      area: "3500 Sq. Ft",
      floor: "20",
      status: "Sold Out",
      rooms: "8",
      parking: "Yes",
      price: "$6,800",
    },
    "Top Garden": {
      title: "Top Garden",
      area: "2000 Sq. Ft",
      floor: "10",
      status: "Available",
      rooms: "4",
      parking: "Yes",
      price: "$3,200",
    },
  };

  // ✅ Default selection is "The Studio"
  const [selectedProperty, setSelectedProperty] = useState("The Studio");

  return (
    <div className="font-nunito relative min-h-screen flex items-center justify-center">
      {/* Background split */}
      <div className="absolute inset-0 grid grid-cols-3">
        <div className="bg-white"></div>
        <div className="bg-gray-300 col-span-2"></div>
      </div>

      {/* Centered card */}
      <div className="relative z-9 bg-white rounded-sm shadow-gray-400 shadow-xl max-w-3xl w-180 h-[500px] px-24 py-16 space-y-6">
        
        {/* Headline */}
        <h2 className="text-3xl font-bold text-gray-900 text-left tracking-wide leading-11">
          Your Perfect & Modern <br /> Living Space Waits!
        </h2>

        {/* House Icon */}
        <div className="flex justify-center">
          <img src={houseIcon} alt="house icon" className="w-10 h-10 -mt-30" />
        </div>

        {/* Short description */}
        <p className="text-gray-700 text-start max-w-2xl mx-auto text-[13px] -mt-10">
          Sed perspiciatis unde omnis iste natus error sit voluptatem 
          laudantium totam rem aperiam eaque ipsa quae ab illo inventore 
          veritatis et quasi.
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT SIDE: Property Types list */}
          <ul className="space-y-3 text-gray-900 text-center md:text-left">
            {Object.keys(properties).map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedProperty(item)} // ✅ click handler
                className={`cursor-pointer font-medium transition-colors ${
                  selectedProperty === item
                    ? "text-red-600 font-semibold" // active item highlighted orange/red
                    : "hover:text-red-600"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE: Dynamic property details */}
          <div className="bg-orange-600 text-white rounded-lg shadow-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold text-center">
              {properties[selectedProperty].title}
            </h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-bold">Total Area</span> — {properties[selectedProperty].area}</p>
              <p><span className="font-bold">Floor No.</span> — {properties[selectedProperty].floor}</p>
              <p><span className="font-bold">Current Status</span> — {properties[selectedProperty].status}</p>
              <p><span className="font-bold">No. Of Rooms</span> — {properties[selectedProperty].rooms}</p>
              <p><span className="font-bold">Parking</span> — {properties[selectedProperty].parking}</p>
              <p><span className="font-bold">Price From</span> — {properties[selectedProperty].price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;