import React from "react";

const Navbar = ({ active, setActive, boxStyle, linkRefs, links }) => {
  return (
    <nav className="relative flex bg-[#23272f] p-3 rounded-2xl w-fit overflow-visible gap-3 mx-auto">
      {/* Sliding highlight box for ACTIVE state */}
      <div
        className="absolute top-[12px] h-[calc(100%-1.5rem)] rounded-full bg-[#1b1f25]
                   transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                   shadow-[0_0_25px_rgba(0,0,0,0.9),0_0_50px_rgba(0,0,0,0.8),0_0_80px_rgba(0,0,0,0.7)]"
        style={{
          width: `${boxStyle.width}px`,
          transform: `translateX(${boxStyle.left}px)`,
        }}
      ></div>

      {links.map((link, index) => (
        <button
          key={link.id}
          ref={(el) => (linkRefs.current[index] = el)}
          onClick={() => setActive(link.id)}
          className={`relative z-10 px-8 py-2 rounded-full font-semibold text-center transition-colors duration-300 overflow-hidden group
            ${active === link.id
              ? "text-white"
              : "text-slate-400 hover:text-white"
            }`}
        >
          {/* Pseudo-element for the Hover Effect (Hidden when active) */}
          <span
            className={`absolute inset-0 block rounded-full z-[-1] transition-transform duration-300 ease-out 
              ${
                active === link.id
                  ? "translate-x-full" // Keep it hidden when active
                  : "-translate-x-full group-hover:translate-x-0" // Apply hover effect when NOT active
              }`
            }
            style={{
              background: "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)",
            }}
          ></span>

          {link.label}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;