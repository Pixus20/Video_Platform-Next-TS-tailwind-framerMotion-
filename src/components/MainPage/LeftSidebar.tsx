// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import FollowedChannel from "./leftSidebar/followedChannel";
// import RecommendedChannel from "./leftSidebar/recommendedChannel";


// const LeftSidebar = ({
//   toggleMenu,
//   setToggleMenu,
// }: {
//   toggleMenu: boolean;
//   setToggleMenu: (val: boolean) => void;
// }) => {
//   return (
//     <div
//       className={`bg-gray-900 min-h-screen fixed top-0 left-0 transition-all duration-300 
//       ${toggleMenu ? "w-[10%]" : "w-[4%]"}`}
//     >
//       <button
//         className="absolute top-14 right-[-12px] bg-gray-700 rounded-full p-1"
//         onClick={() => setToggleMenu(!toggleMenu)}
//       >
//         {toggleMenu ? <FaChevronLeft /> : <FaChevronRight />}
//       </button>

//       <div className="mt-12">
//         <FollowedChannel isOpen={toggleMenu} />
//         <RecommendedChannel isOpen={toggleMenu} />
//       </div>
//     </div>
//   );
// };

// export default LeftSidebar;



import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FollowedChannel from "./leftSidebar/followedChannel";
import RecommendedChannel from "./leftSidebar/recommendedChannel";

const LeftSidebar = ({
  toggleMenu,
  setToggleMenu,
}: {
  toggleMenu: boolean;
  setToggleMenu: (val: boolean) => void;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const isOpen = isMobile ? false : toggleMenu;

  return (
    <div
      className={`bg-gray-900 min-h-screen fixed top-0 left-0 transition-all duration-300 
      ${isOpen ? "w-[10%]" : "w-[55px]"}`}
    >

      {!isMobile && (
        <button
          className="absolute top-14 right-[-12px] bg-gray-700 rounded-full p-1"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      )}

      <div className="mt-12">
        <FollowedChannel isOpen={isOpen} />
        <RecommendedChannel isOpen={isOpen} />
      </div>
    </div>
  );
};

export default LeftSidebar;
