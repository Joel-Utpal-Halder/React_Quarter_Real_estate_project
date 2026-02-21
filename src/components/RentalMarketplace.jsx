import Container from "../components/CommonComponents/Container";
import Button from "../components/CommonComponents/Button";

// ✅ Import images
import aboutUsImage from "../assets/images/homePage/aboutUsOne.png";
import aboutIcon1 from "../assets/images/homePage/aboutIcon_1.png";
import aboutIcon2 from "../assets/images/homePage/aboutIcon_2.png";
import aboutIcon3 from "../assets/images/homePage/aboutIcon_3.png";
import aboutIcon4 from "../assets/images/homePage/aboutIcon_4.png";

// ✅ Features data
const features = [
  { id: 1, icon: aboutIcon1, title: "Smart Home Design" },
  { id: 2, icon: aboutIcon2, title: "Beautiful Scene Around" },
  { id: 3, icon: aboutIcon3, title: "Exceptional Lifestyle" },
  { id: 4, icon: aboutIcon4, title: "Complete 24/7 Security" },
];

const RentalMarketplace = () => {
  return (
    <div className="py-12 -mt-22 md:py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* ✅ Left Side: Image */}
          <div className="w-full">
            <img
              src={aboutUsImage}
              alt="About Us"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* ✅ Right Side */}
          <div className="space-y-4 md:space-y-5">
            {/* Top Heading styled like a button */}
            <span className="inline-block bg-orange-100 text-orange-600 font-semibold px-3 py-1 rounded-full text-xs md:text-sm">
              About Us
            </span>

            {/* Main Title */}
            <h2 className="text-lg md:text-3xl font-bold text-gray-800">
              The Leading Real Estate Rental Marketplace
            </h2>

            {/* Two-line plain text below heading */}
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Over 39,000 people work for us in more than 70 countries all over
              the world. This breadth of global coverage, combined with
              specialist services.
            </p>

            {/* ✅ Features List (icons + title side by side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow hover:shadow-md transition"
                >
                  {/* Icon circle with its own hover effect */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 transition
                  hover:bg-orange-500 shrink-0">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-6 h-6 object-contain filter brightness-0 saturate-100 hue-rotate-[20deg]
                      transition hover:invert hover:brightness-100"
                    />
                  </div>

                  <h3 className="font-semibold text-gray-800 text-xs md:text-sm">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* ✅ Quote block with light orange background + left border */}
            <div className="bg-orange-100 p-3 border-l-[4px] border-orange-500 leading-relaxed">
              <p className="text-gray-700 text-xs md:text-sm">
                "Elimad minim veniam, quis nostrud exercitation ullamco laboris.
                Lorem ipsum dolor sit amet."
              </p>
            </div>

            {/* ✅ Single Button */}
            <Button
              onClick={() => window.location.href = "#"}
              className="bg-orange-500 text-white px-5 py-2 text-sm md:text-base"
            >
              Know More
            </Button>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default RentalMarketplace;