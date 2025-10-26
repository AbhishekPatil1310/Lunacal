import React, { useState } from "react";

const Navbar = ({ active, setActive, boxStyle, linkRefs, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative bg-[#23272f] p-3 rounded-2xl w-full md:w-fit mx-auto">
            {/* Desktop view (hidden on mobile) */}
            <div className="hidden md:flex relative items-center gap-3">
                <div
                    className="absolute top-0 h-full rounded-full bg-[#1b1f25]
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
                        className={`relative z-10 px-4 sm:px-8 py-2 rounded-full font-semibold text-center transition-colors duration-300 overflow-hidden group
                    ${active === link.id
                                ? "text-white"
                                : "text-slate-400 hover:text-white"
                            }`}
                    >
                        <span
                            className={`absolute inset-0 block rounded-full z-[-1] transition-transform duration-300 ease-out 
                    ${active === link.id
                                    ? "translate-x-full"
                                    : "-translate-x-full group-hover:translate-x-0"
                                }`}
                            style={{
                                background: "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)",
                            }}
                        ></span>

                        {link.label}
                    </button>
                ))}
            </div>

            {/* Mobile view (hidden on desktop) */}
            <div className="md:hidden">
                <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Menu</span>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white z-20">
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        )}
                    </button>
                </div>
                {isOpen && (
                    <div className="mt-4">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => {
                                    setActive(link.id);
                                    setIsOpen(false);
                                }}
                                className={`w-full py-3 my-1 text-center font-semibold transition-colors duration-300 rounded-lg
                                ${active === link.id
                                    ? "text-white bg-[#1b1f25]"
                                    : "text-slate-400 hover:text-white hover:bg-[#2a2e36]"
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
