// File: src/components/about/PropertyDetails.jsx

import React from "react";
import Container from "../commonComponents/Container"; 
import houseIcon from "../../assets/images/commonHouseIcon.png"; 

const PropertyDetails = () => {
  return (
    // ✅ Darker background applied
    <div className="bg-gray-200">
      <Container>
        {/* Outer wrapper with padding and responsive grid */}
        <div className="font-nunito py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:ml-32">
          {/* 
            👉 lg:ml-32 gives a left margin on large screens (~1/3 spacing visually).
            On smaller screens, it stays centered without margin for responsiveness.
          */}
          
          {/* LEFT SIDE: Property Types List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Your Perfect & Modern Living Space Waits!
            </h2>
            <p className="text-gray-600">
              Sed perspiciatis unde omnis iste natus error sit voluptatem 
              laudantium totam rem aperiam eaque ipsa quae ab illo inventore 
              veritatis et quasi.
            </p>

            {/* Property Types */}
            <ul className="space-y-2">
              {[
                "The Studio",
                "Deluxe Portion",
                "Penthouse",
                "Top Garden",
                "Deluxe Portion",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <img src={houseIcon} alt="house icon" className="w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE: Deluxe Portion Details */}
          <div className="bg-red-600 text-white rounded-lg shadow-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold">Deluxe Portion</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <p>
                <span className="font-bold">Total Area:</span> 2800 Sq. Ft
              </p>
              <p>
                <span className="font-bold">Floor No.:</span> 15
              </p>
              <p>
                <span className="font-bold">Current Status:</span> Available
              </p>
              <p>
                <span className="font-bold">No. Of Rooms:</span> 6
              </p>
              <p>
                <span className="font-bold">Parking:</span> Yes
              </p>
              <p>
                <span className="font-bold">Price From:</span> $4,500
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PropertyDetails;