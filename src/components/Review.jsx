import Container from "../components/CommonComponents/Container";

// ✅ Import review icons
import reviewIcon1 from "../assets/images/homePage/reviewIcon_1.png";
import reviewIcon2 from "../assets/images/homePage/reviewIcon_2.png";
import reviewIcon3 from "../assets/images/homePage/reviewIcon_3.png";
import reviewIcon4 from "../assets/images/homePage/reviewIcon_4.png";

// ✅ Review data (dynamic array for easy updates)
const reviews = [
  { id: 1, icon: reviewIcon1, number: "560", text: "Total Area Sq" },
  { id: 2, icon: reviewIcon2, number: "197", text: "Apartments Sold" },
  { id: 3, icon: reviewIcon3, number: "268", text: "Total Constructions" },
  { id: 4, icon: reviewIcon4, number: "340", text: "Apartio Rooms" },
];

const Review = () => {
  return (
    <div className="bg-gray-100 mb-5">
      <Container>
        {/* ✅ Review Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col items-center justify-center py-16 transition hover:bg-white hover:shadow-md"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mb-4">
                <img
                  src={review.icon}
                  alt={review.text}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Number (big + bold + orange) */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700">
                {review.number}
              </h3>

              {/* Text (smaller, gray, under number) */}
              <p className="text-gray-700 text-xs md:text-sm mt-1">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Review;