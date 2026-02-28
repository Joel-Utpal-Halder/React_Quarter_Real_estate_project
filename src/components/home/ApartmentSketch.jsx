import React, { useState } from "react";
import Container from "../commonComponents/Container";
import apartmentImg from "../../assets/images/homePage/apartmentSketch.png";

// ✅ Dynamic data for apartment plans
const apartmentPlans = [
    {
        id: 1,
        name: "The Studio",
        title: "Studio Apartment",
        description:
            "Compact and modern living space perfect for singles or students, offering comfort, convenience, and efficient design with smart storage solutions throughout.",
        specs: {
            totalArea: "850 Sq. Ft",
            bedroom: "100 Sq. Ft",
            bathroom: "40 Sq. Ft",
            lounge: "250 Sq. Ft",
            pets: "Allowed",
        },
    },
    {
        id: 2,
        name: "Deluxe Portion",
        title: "Deluxe Portion",
        description:
            "Spacious deluxe portion with elegant design, ideal for families seeking comfort and style, blending functionality with luxury for everyday modern living.",
        specs: {
            totalArea: "2800 Sq. Ft",
            bedroom: "150 Sq. Ft",
            bathroom: "45 Sq. Ft",
            lounge: "650 Sq. Ft",
            pets: "Allowed",
        },
    },
    {
        id: 3,
        name: "Penthouse",
        title: "Luxury Penthouse",
        description:
            "Exclusive penthouse with panoramic views, premium finishes, and private terrace, designed for ultimate sophistication and unmatched lifestyle experiences.",
        specs: {
            totalArea: "4000 Sq. Ft",
            bedroom: "200 Sq. Ft",
            bathroom: "60 Sq. Ft",
            lounge: "800 Sq. Ft",
            pets: "Allowed",
        },
    },
    {
        id: 4,
        name: "Top Garden",
        title: "Top Garden Apartment",
        description:
            "Green rooftop living with garden access, blending nature and modern lifestyle, creating a refreshing environment for relaxation and family gatherings.",
        specs: {
            totalArea: "3200 Sq. Ft",
            bedroom: "180 Sq. Ft",
            bathroom: "50 Sq. Ft",
            lounge: "700 Sq. Ft",
            pets: "Allowed",
        },
    },
    {
        id: 5,
        name: "Double Height",
        title: "Double Height Apartment",
        description:
            "Stylish double-height ceilings with open-plan design, offering a grand living experience, enhanced by natural light, spacious interiors, and modern architectural elegance.",
        specs: {
            totalArea: "3500 Sq. Ft",
            bedroom: "190 Sq. Ft",
            bathroom: "55 Sq. Ft",
            lounge: "750 Sq. Ft",
            pets: "Allowed",
        },
    },
];

const ApartmentSketch = () => {
    // ✅ State to track which tab is active
    const [activePlan, setActivePlan] = useState(apartmentPlans[0]); // Default: Deluxe Portion

    return (
        <Container>
            {/* ✅ Section Header */}
            <div className="text-center mt-4 mb-12">
                <span className="inline-block bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm font-medium">
                    Apartment Sketch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                    Apartments Plan
                </h2>
            </div>

            {/* ✅ Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {apartmentPlans.map((plan) => (
                    <button
                        key={plan.id}
                        onClick={() => setActivePlan(plan)}
                        className={`px-4 py-2 text-sm md:text-base rounded-full transition-colors duration-300 ${activePlan.id === plan.id
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-500"
                            }`}
                    >
                        {plan.name}
                    </button>
                ))}
            </div>

            {/* ✅ Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-25">
                {/* Left: Info Box */}
                <div className="bg-orange-600 text-white pt-14 px-12 pb-10 rounded-md shadow-md h-full flex flex-col justify-between">
                    <h3 className="text-2xl font-bold mb-4">{activePlan.title}</h3>

                    {/* Description */}
                    <p className="text-[13px] leading-relaxed mb-6">
                        {activePlan.description}
                    </p>

                    {/* Table Part */}
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between border-b border-red-300 pb-2">
                            <span>Total Area</span>
                            <span>{activePlan.specs.totalArea}</span>
                        </li>
                        <li className="flex justify-between border-b border-red-300 pb-2">
                            <span>Bedroom</span>
                            <span>{activePlan.specs.bedroom}</span>
                        </li>
                        <li className="flex justify-between border-b border-red-300 pb-2">
                            <span>Bathroom</span>
                            <span>{activePlan.specs.bathroom}</span>
                        </li>
                        <li className="flex justify-between border-b border-red-300 pb-2">
                            <span>Lounge</span>
                            <span>{activePlan.specs.lounge}</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Smoking/Pets</span>
                            <span>{activePlan.specs.pets}</span>
                        </li>
                    </ul>
                </div>

                {/* Right: Apartment Sketch */}
                <div className="flex justify-center h-full">
                    <img
                        src={apartmentImg}
                        alt="Apartment Sketch"
                        className="w-full max-w-lg rounded-md shadow-md h-full object-cover"
                    />
                </div>
            </div>

        </Container>
    );
};

export default ApartmentSketch;