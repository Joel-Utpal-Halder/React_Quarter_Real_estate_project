import React, { useState, useEffect } from "react";
import Container from "../components/CommonComponents/Container";
import Button from "../components/CommonComponents/Button";
import { FiSliders } from "react-icons/fi";

const FindNow = () => {
  // ✅ State variables
  const [districts, setDistricts] = useState([]); // Stores the list of districts fetched from the API
  const [selectedDistrict, setSelectedDistrict] = useState(""); // Holds the user’s chosen district
  const [propertyStatus, setPropertyStatus] = useState(""); // Holds whether the property is for sale or rent
  const [propertyType, setPropertyType] = useState(""); // Holds the type of property (apartment, house, commercial, etc.)
  const [loading, setLoading] = useState(false); // NEW: Tracks loading state
  const [error, setError] = useState(null); // NEW: Tracks error state

  // ✅ Fetch districts using async/await
  useEffect(() => {
    const fetchDistricts = async () => {
      setLoading(true); // Start loading before fetch
      setError(null);   // Reset error before fetch
      try {
        const res = await fetch("https://bdapi.vercel.app/api/v.1/district"); // Await the API call
        const data = await res.json(); // Await conversion to JSON
        if (data?.data) {
          setDistricts(data.data); // Save districts into state if data exists
        }
      } catch (err) {
        console.error("Error fetching districts:", err); // Log error in console
        setError("Failed to load districts. Please try again."); // Save error message in state
      } finally {
        setLoading(false); // Always stop loading after success or error
      }
    };

    fetchDistricts(); // Call the async function
  }, []); // Empty dependency array → runs only once when component mounts

  // ✅ Handle form submit
  const handleFindNow = (e) => {
    e.preventDefault(); // Prevent page reload
    // Instead of console.log, we can later redirect or filter properties
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
              {/* Show loading or error messages */}
              {loading && <option>Loading districts...</option>}
              {error && <option>{error}</option>}
              {/* Map through districts if available */}
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