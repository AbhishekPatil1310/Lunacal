import React, { useState, useRef, useEffect, useCallback } from "react";
import MainContentCard from "./component/Combine";
import GalleryCard from "./component/Gallery";

export const links = [
  { id: 1, label: "About Me" },
  { id: 2, label: "Experiences" },
  { id: 3, label: "Recommended" },
];

const App = () => {
  const [active, setActive] = useState(1);
  const [boxStyle, setBoxStyle] = useState({ width: 0, left: 0 });
  const linkRefs = useRef([]);

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
    const timer = setTimeout(updateBoxStyle, 50);
    return () => clearTimeout(timer);
  }, [active, updateBoxStyle]);

  useEffect(() => {
    window.addEventListener("resize", updateBoxStyle);
    return () => window.removeEventListener("resize", updateBoxStyle);
  }, [updateBoxStyle]);

  return (
    <div className="flex min-h-screen bg-[#1a1d23] text-white p-4 sm:p-8">
      {/* Left side empty half */}
      <div className="w-1/2 bg-[#2a2e36] rounded-lg border border-[#3c414d] mr-4"></div>

      {/* Right side main content */}
      <div className="flex flex-col w-1/2 mt-8 mb-8">
        <MainContentCard
          activeTab={active}
          setActive={setActive}
          boxStyle={boxStyle}
          linkRefs={linkRefs}
        />
        <GalleryCard />
      </div>

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
