"use client"; // Required for Next.js 13+ with app directory

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
    // Get the current scroll position
    const { scrollY } = useScroll();

    // Map scroll position to horizontal movement for the card
    const translateX = useTransform(scrollY, [0, 500], [0, 500]); // Adjust 200px as needed

    return (
        <div className="flex items-center flex-col justify-center px-[5rem] py-32 bg-[#211D31] relative overflow-hidden">
            <img
                src="/assets/yellow.png"
                alt="img grow"
                className="absolute top-14 left-20 grow"
            />

            {/* Apply scroll animation to the card image */}
            <motion.img

                src="/assets/card.png"
                alt="card image"
                style={{
                    transform: translateX, // Framer Motion handles the transform
                }}
                className="absolute top-14 -right-72 "
            />


            <div className="hero capitalize">
                <h1 className="banner-title text-[5rem] font-bold">
                    Make Your <span className="banner-title-icon"></span> Work For{" "}
                </h1>
                <img
                    src="/assets/line.png"
                    alt="img"
                    className="banner-title-icon-line"
                />
                <h1 className="banner-title !border-t-0 !pt-0 text-[5rem] font-bold">
                    You <span className="banner-title-icon-two spin "></span> and Your
                    Business{" "}
                </h1>
                <p className="text-balance text-xl mb-8 text-white font-medium text-center">
                    Join us for the Design Conference and get inspired by the
                    <br />
                    latest ideas and techniques from the best in the business!
                </p>
                <div className="flex items-center gap-4 justify-center">
                    <div className="header-button">GET STARTED</div>
                    <div className="outline-button">Learn More</div>
                </div>
            </div>
            <img src="/assets/card.png" alt="" className=" absolute -bottom-56 -left-36 " />
        </div>
    );
}
