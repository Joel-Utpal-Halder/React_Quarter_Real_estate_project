// components/Header.jsx
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import Container from './commonComponents/Container';
import Button from './commonComponents/Button'; // ✅ Import reusable Button

const Header = () => {
  // === FIX: Define handler for Add Listings button ===
  const handleAddListings = () => {
    console.log("Add Listings button clicked");
    // Later: navigate to Add Listings page or open a form
  };

  return (
    <header className="bg-white shadow-md text-sm">
      {/* Top bar with contact info and social icons */}
      <div className="bg-[#0A2C3D] text-white">
        <Container>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center py-2 gap-2 md:gap-0 items-center text-center md:text-left">
            
            {/* Left side: Address and Email */}
            <div className="flex flex-col sm:flex-row sm:gap-4 text-xs sm:text-sm items-center md:items-start">
              <span className="flex items-center gap-1">
                <IoLocationOutline /> 254 Lilian Blvd, Holbrook
              </span>
              <span className="flex items-center gap-1 sm:border-l sm:border-white sm:pl-4">
                <FaRegEnvelope /> info@santizex-site.com
              </span>
            </div>

            {/* Right side: Social Icons and Add Listings Button */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 mt-2 md:mt-0">
              {/* Social Icons open blank tab */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-blue-300 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-green-400 transition" />
              </a>
              <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
                <FaVimeoV className="hover:text-purple-400 transition" />
              </a>

              {/* Add Listings Button using reusable component */}
              <Button onClick={handleAddListings}>
                Add Listings
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;