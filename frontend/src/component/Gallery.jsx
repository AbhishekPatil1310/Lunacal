import React, { useRef, useState } from "react";

const GalleryCard = () => {
  const [images, setImages] = useState([
    "https://picsum.photos/300/200?1",
    "https://picsum.photos/300/200?2",
    "https://picsum.photos/300/200?3",
    "https://picsum.photos/300/200?4",
  ]);

  const scrollRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages((prev) => [...prev, url]);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-8 bg-[#23272f] rounded-2xl p-6 shadow-2xl w-full">
      <div className="p-0 relative overflow-visible">


        {/* Controls */}
        <div className="bg-gray-800/30 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold">
              Gallery
            </button>
            <div className="flex items-center gap-3">
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleAddImage}
              />
              <button
                onClick={() => fileInputRef.current.click()}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition"
              >
                + Add Image
              </button>

              {/* Scroll Buttons */}
              <button
                onClick={scrollLeft}
                className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center 
                           shadow-[4px_4px_8px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.05)] 
                           hover:shadow-[6px_6px_10px_rgba(0,0,0,0.7),-6px_-6px_10px_rgba(255,255,255,0.1)] 
                           hover:scale-110 
                           active:bg-blue-400 active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.2)] 
                           active:scale-95 transition-all duration-200"
              >
                ←
              </button>
              <button
                onClick={scrollRight}
                className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center 
                           shadow-[4px_4px_8px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.05)] 
                           hover:shadow-[6px_6px_10px_rgba(0,0,0,0.7),-6px_-6px_10px_rgba(255,255,255,0.1)] 
                           hover:scale-110 
                           active:bg-blue-400 active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.5),inset_-2px_-2px_5px_rgba(255,255,255,0.2)] 
                           active:scale-95 transition-all duration-200"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Image Row */}
        <div
          ref={scrollRef}
          className="flex gap-4 scroll-smooth overflow-x-auto no-scrollbar relative z-[999] min-h-[212px] pt-4 px-4 pb-6 -mx-6 overflow-visible"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative min-w-[140px] overflow-visible rounded-xl shadow-md transform transition-transform duration-500 ease-out origin-bottom-left 
                         hover:rotate-[-3deg] hover:-translate-y-px hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,0,0,0.95)] hover:z-50"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar completely */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default GalleryCard;
