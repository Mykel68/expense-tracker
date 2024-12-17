import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const NavbarLink = [
    "Home", "Features", "About Us", "Pages"
]

export default function Navbar() {
    return (
        <div className='flex container mx-auto items-center py-5 justify-between w-full ' style={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
        }} >
            <div className="flex items-center space-x-2  text-center">
                <img src={'/logo.png'} width={1000} height={1000} className='w-8 h-8' alt='logo' />
                <p className='text-2xl font-bold'>EXPO</p>
                {/* <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            /> */}
            </div>
            <div className="flex gap-8 items-center">
                {
                    NavbarLink.map((link, index) => {
                        return (
                            <p key={index} className='text-lg font-medium cursor-pointer'>{link}</p>
                        )
                    })
                }
            </div>
            <Button className='btn py-5 px-8 font-medium text-xl'>Sign In</Button>
        </div>
    )
}
