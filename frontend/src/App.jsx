import React, { useState, useRef, useEffect, useCallback } from "react";
import MainContentCard from "./component/Combine";
import GalleryCard from "./component/Gallery";

// Data for the Navbar is defined here since it is global to the layout state
export const links = [
  { id: 1, label: "About Me" },
  { id: 2, label: "Experiences" },
  { id: 3, label: "Recommended" },
];

const App = () => {
  const [active, setActive] = useState(1);
  const [boxStyle, setBoxStyle] = useState({ width: 0, left: 0 });
  const linkRefs = useRef([]);

  // Logic to calculate the position and width of the sliding highlight box
  const updateBoxStyle = useCallback(() => {
    const activeLink = links.find((link) => link.id === active);
    const activeLinkElement = linkRefs.current[links.indexOf(activeLink)];

    if (activeLinkElement) {
      setBoxStyle({
        width: activeLinkElement.offsetWidth,
        left: activeLinkElement.offsetLeft,
      });
    }
  }, [active]);

  useEffect(() => {
    // Delay calculation slightly to ensure all button widths are stable
    const timer = setTimeout(updateBoxStyle, 50);
    return () => clearTimeout(timer);
  }, [active, updateBoxStyle]);

  useEffect(() => {
    window.addEventListener("resize", updateBoxStyle);
    return () => window.removeEventListener("resize", updateBoxStyle);
  }, [updateBoxStyle]);

  return (
    <div className="flex flex-col min-h-screen bg-[#1a1d23] text-white p-4 sm:p-8">
      {/* KEY CHANGE: 
        1. max-w-xl sets the column width.
        2. ml-auto pushes the container to the right.
        3. mr-8 provides the padding/gap from the right edge.
      */}
      <div className="w-full max-w-xl ml-auto mr-8 mt-8 mb-8">

        {/* Pass state control props to MainContentCard, which contains the Navbar */}
        <MainContentCard
          activeTab={active}
          setActive={setActive}
          boxStyle={boxStyle}
          linkRefs={linkRefs}
        />
        <GalleryCard />
      </div>

      {/* Custom Scrollbar Style for the inner content div */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #3c414d;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: #2d303a;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default App;