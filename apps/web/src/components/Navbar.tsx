'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const NavbarLinks = ["Home", "Features", "About Us", "Pages"]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="container mx-auto py-5 px-4 sticky top-0  ">
            <div className="flex items-center justify-between ">
                {/* Logo */}
                <div className="flex items-center space-x-2 ">
                    <Image
                        src="/logo.png"
                        width={1000}
                        height={1000}
                        className="w-8 h-8"
                        alt="logo"
                    />
                    <p className="text-2xl font-bold text-[#FF7700]">EXPO</p>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 items-center bg-muted py-4 px-10 rounded-full">
                    {NavbarLinks.map((link, index) => (
                        <p key={index} className="text-lg font-medium cursor-pointer hover:text-gray-500 transition">
                            {link}
                        </p>
                    ))}
                </div>

                {/* Sign In Button */}
                <div className="hidden md:block">
                    <Button className='btn py-5 px-8 font-medium text-xl' onClick={() => router.push('/login')}>Sign In</Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden mt-5 space-y-4 bg-gray-50 p-4 flex absolute left-0 right-0 flex-col items-start ${isOpen ? 'block' : 'hidden'
                    }`}
            >
                {NavbarLinks.map((link, index) => (
                    <p key={index} className="text-lg font-medium cursor-pointer hover:text-gray-500 transition">
                        {link}
                    </p>
                ))}
                <Button className='btn py-5 px-8 font-medium text-xl' onClick={() => router.push('/login')}>Sign In</Button>
            </div>
        </nav>
    )
}
