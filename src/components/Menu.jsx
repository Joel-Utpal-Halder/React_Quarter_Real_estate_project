import { useState } from "react";
import { FiUser, FiHeart, FiSearch } from "react-icons/fi";
import logo from "../assets/images/logo.png";
import Container from "./commonComponents/Container";

const Menu = () => {
  // === Menu Items Data: Each object defines one menu link ===
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Properties", link: "/properties" },
    { id: 3, name: "Property", link: "/property" },
    { id: 4, name: "Blog", link: "/blog" },
    { id: 5, name: "Pages", link: "/pages" },
    { id: 6, name: "Contact", link: "/contact" },
  ];

  // === State for mobile menu toggle ===
  const [isOpen, setIsOpen] = useState(false);

  // === FIX: Define handlers for icon buttons ===
  const handleUserClick = () => {
    console.log("User icon clicked");
    // Later: navigate to login/profile page
  };

  const handleFavoritesClick = () => {
    console.log("Favorites icon clicked");
    // Later: show saved/favorite properties
  };

  const handleSearchClick = () => {
    console.log("Search icon clicked");
    // Later: open search bar or modal
  };

  return (
    <nav className="bg-white shadow-md">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Left side: Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Quarter Logo" className="h-10 w-auto" />
          </div>

          {/* Right side: Menu + Icons */}
          <div className="flex items-center gap-6">
            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-gray-700 font-medium menu_font">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="hover:text-orange-500 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Icons with handlers */}
            <div className="hidden md:flex gap-4">
              <div
                onClick={handleUserClick}
                className="p-2 rounded-md shadow-md cursor-pointer transition group hover:bg-orange-500"
              >
                <FiUser className="text-gray-700 transition group-hover:text-white" />
              </div>
              <div
                onClick={handleFavoritesClick}
                className="p-2 rounded-md shadow-md cursor-pointer transition group hover:bg-orange-500"
              >
                <FiHeart className="text-gray-700 transition group-hover:text-white" />
              </div>
              <div
                onClick={handleSearchClick}
                className="p-2 rounded-md shadow-md cursor-pointer transition group hover:bg-orange-500"
              >
                <FiSearch className="text-gray-700 transition group-hover:text-white" />
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Three Bars Icon */}
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-700"></span>
                <span className="block w-6 h-0.5 bg-gray-700"></span>
                <span className="block w-6 h-0.5 bg-gray-700"></span>
              </div>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Dropdown with sliding animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <Container>
          <div className="bg-gray-50 py-4 rounded-md shadow-inner">
            {/* Mobile Menu Items */}
            <ul className="space-y-1 text-gray-700 font-medium text-center">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="block py-2 hover:text-orange-500 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Icons with handlers */}
            <div className="flex justify-center gap-3 mt-6">
              <div
                onClick={handleUserClick}
                className="p-3 rounded-md shadow-md cursor-pointer transition group hover:bg-orange-500"
              >
                <FiUser className="text-gray-700 transition group-hover:text-white" />
              </div>
              <div
                onClick={handleFavoritesClick}
                className="p-3 rounded-md shadow-md cursor-pointer transition group hover:bg-orange-500"
              >
                <FiHeart className="text-gray-700 transition group-hover:text-white" />
              </div>
              <div
                onClick={handleSearchClick}
                className="p-3 rounded-md shadow-md cursor-pointer transition group hover:bg-orange-500"
              >
                <FiSearch className="text-gray-700 transition group-hover:text-white" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Menu;