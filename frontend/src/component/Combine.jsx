import React from "react";
import Navbar from "./Navbar";
import { links } from "../App"; // Import links data

const MainContentCard = ({ activeTab, setActive, boxStyle, linkRefs }) => {
    const activeLink = links.find(link => link.id === activeTab);
    const activeId = activeLink ? activeLink.id : links[0].id;

    const getDescription = () => {
        if (activeId === 1) {
            return (
                <>
                    <p className="mb-6">Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
                    <p>I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters— Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9–10 AM. This is a...</p>
                </>
            );
        }
        return <p className="text-sm">Content for the **{activeLink?.label || 'Loading'}** section goes here. This area mimics the sales rep's bio card structure.</p>;
    };

    return (
        <div
            className="w-full bg-[#23272f] shadow-2xl rounded-xl overflow-hidden mb-8
                   border border-[#3c414d]"
        >
            {/* 1. Top Section (Navbar and Question Mark Icon) */}
            <div className="relative w-full flex justify-center pt-3 pb-8 bg-[#373b45] rounded-t-xl">

                {/* Question Mark Icon (Top-Left) */}
                <div className="absolute left-4 top-4 p-2 w-8 h-8 rounded-full bg-transparent border border-white/20 text-white/50 text-xs flex items-center justify-center font-bold">
                    ?
                </div>

                {/* Centered Navbar */}
                <Navbar
                    active={activeId}
                    setActive={setActive}
                    boxStyle={boxStyle}
                    linkRefs={linkRefs}
                    links={links}
                />

            </div>

            {/* 2. Description/Content Area */}
            <div className="flex p-6 pt-0 text-white min-h-[300px]">

                {/* Grid Icon (Left) */}
                <div className="w-8 pt-6">
                    <div className="text-xl text-white/50 opacity-80">
                        ▦
                    </div>
                </div>

                {/* Main Text Content Area */}
                <div className="flex-1 pt-6 pr-4 h-96 overflow-y-auto custom-scrollbar text-lg text-slate-300 leading-relaxed">
                    {getDescription()}
                </div>
            </div>
        </div>
    );
};

export default MainContentCard;