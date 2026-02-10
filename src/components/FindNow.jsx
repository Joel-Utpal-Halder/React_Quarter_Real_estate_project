import React, { useState, useEffect } from "react";
import Container from "../components/CommonComponents/Container";
import Button from "../components/CommonComponents/Button";
import { FiSliders } from "react-icons/fi";

const FindNow = () => {
  const [districts, setDistricts] = useState([]); // Creates a state variable 'districts' to store the list of districts fetched from the API.
  const [selectedDistrict, setSelectedDistrict] = useState(""); // Creates a state variable 'selectedDistrict' to hold the user’s chosen district.
  const [propertyStatus, setPropertyStatus] = useState(""); // Creates a state variable to hold whether the property is for sale or rent.
  const [propertyType, setPropertyType] = useState(""); //  to hold the type of property (apartment, house, commercial, etc.).

  useEffect(() => {
    fetch("https://bdapi.vercel.app/api/v.1/district")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) setDistricts(data.data);
      })
      .catch((err) => console.error("Error fetching districts:", err));
  }, []);

  const handleFindNow = (e) => {
    e.preventDefault();
    console.log("Search Params:", {
      district: selectedDistrict,
      status: propertyStatus,
      type: propertyType,
    });
  };

  return (
    <div className="relative -mt-12 z-20 mb-10">
      <Container>
        <form
          onSubmit={handleFindNow}
          className="bg-white shadow-lg rounded-lg p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
        >
          {/* District Dropdown */}
          <div className="md:col-span-3 w-full">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Choose Area</option>
              {districts.map((district) => (
                <option key={district.id} value={district.name}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>

          {/* Property Status Dropdown */}
          <div className="md:col-span-3 w-full">
            <select
              value={propertyStatus}
              onChange={(e) => setPropertyStatus(e.target.value)}
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Property Status</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
            </select>
          </div>

          {/* Property Type Dropdown */}
          <div className="md:col-span-3 w-full">
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          {/* Middle Icon */}
          <div className="md:col-span-1 flex justify-center">
            <FiSliders className="text-orange-500 text-3xl rotate-90" />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <Button
              type="submit"
              className="bg-[#FF5A3C] text-white text-[16px] w-full py-3"
            >
              FIND NOW
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default FindNow;