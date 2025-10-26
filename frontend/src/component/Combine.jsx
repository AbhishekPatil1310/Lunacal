import React from "react";
import Navbar from "./navbar";
import { links } from "../App";

const MainContentCard = ({ activeTab, setActive, boxStyle, linkRefs }) => {
    const activeLink = links.find(link => link.id === activeTab);
    const activeId = activeLink ? activeLink.id : links[0].id;

    const getDescription = () => {
        if (activeId === 1) {
            return (
                <>
                    <p className="mb-6">I am a Computer Science graduate from M S Ramaiah University of Applied Sciences. I’m passionate about building interactive and responsive websites using the MERN stack (MongoDB, Express, React, Node.js).</p>
                    <p>I also have good knowledge of Python (Flask) and MySQL for backend and database development.</p>
                    <p>Always eager to learn, adapt, and build something impactful.</p>
                </>
            );
        }
        if (activeId === 2) {
            return(<>
            <p>Developed several projects using technologies such as MERN, Fastify, Python (FastAPI, Flask), MySQL, and JWT Authentication</p>
            <p>Also experienced with Supabase, S3 Cloud, Git, and GitHub</p>
            </>)
        }
        if (activeId === 3) {
            return(
                <>
                <p>recommend to visit the portfolio link is bellow</p>
                <a href="https://html-port-folio.vercel.app/">Portfolio 🌐</a>
                </>
            )
        }
    };

    return (
        <div
            className="w-full bg-[#23272f] shadow-2xl rounded-xl overflow-hidden mb-8
                border border-[#3c414d]"
        >
            <div className="relative w-full flex justify-center p-4 md:pt-3 md:pb-8 bg-[#373b45] rounded-t-xl">

                <div className="absolute left-4 top-4 p-2 w-8 h-8 rounded-full bg-transparent border border-white/20 text-white/50 text-xs flex items-center justify-center font-bold">
                    ?
                </div>

                <Navbar
                    active={activeId}
                    setActive={setActive}
                    boxStyle={boxStyle}
                    linkRefs={linkRefs}
                    links={links}
                />

            </div>

            <div className="flex p-4 md:p-6 pt-0 text-white min-h-[300px]">

                <div className="w-8 pt-6">
                    <div className="text-xl text-white/50 opacity-80">
                        ▦
                    </div>
                </div>

                <div className="flex-1 pt-6 pr-4 h-auto overflow-y-auto custom-scrollbar text-base sm:text-lg text-slate-300 leading-relaxed">
                    {getDescription()}
                </div>
            </div>
        </div>
    );
};

export default MainContentCard;