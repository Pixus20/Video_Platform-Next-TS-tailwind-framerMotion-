import MyNotifications from "@/components/Notifications/MyNotifications";
import UserMenuModal from "@/components/UserPage/UserMenuModal";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };
  const toggleNote = () => {
    setIsNoteOpen((prev) => !prev);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-12 bg-blue-500 fixed z-50">
      <nav className="w-full h-full flex items-center justify-around px-6">

        <Link href="/" className="text-lg font-bold">
          Logo
        </Link>

        <ul className="hidden md:flex justify-between items-center gap-6">
          <Link href="/Following" className="hover:text-gray-800 transition-colors">
            <li>Following</li>
          </Link>
          <li>
            <input
              type="search"
              placeholder="Search"
              className="bg-black rounded-md text-white p-1 md:w-40 w-60"
            />
          </li>
          <li className="hover:text-gray-800 transition-colors">
            <button className="cursor-pointer" onClick={toggleNote}>
              Notification
            </button>
          </li>
          <li className="hover:text-gray-800 transition-colors">
            <button className="cursor-pointer" onClick={toggleUserMenu}>
              User
            </button>
          </li>
        </ul>


        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>


      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-blue-600 p-4 text-white ">
          <Link href="/Following" className="hover:text-gray-200 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Following
          </Link>
          <input
            type="search"
            placeholder="Search"
            className="bg-black rounded-md text-white p-1"
          />
          <button className="cursor-pointer hover:text-gray-200 transition-colors" onClick={toggleNote}>Notification</button>
          <button className="cursor-pointer hover:text-gray-200 transition-colors"  onClick={toggleUserMenu}>User</button>
        </div>
      )}

      {isUserMenuOpen && (
        <UserMenuModal onClose={() => setIsUserMenuOpen(false)} />
      )}
      {isNoteOpen && <MyNotifications onClose={() => setIsNoteOpen(false)} />}
    </div>
  );
};

export default Navbar;
