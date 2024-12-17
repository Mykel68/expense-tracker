import React from 'react'
import Navbar from './Navbar'
import { Button } from './ui/button'
import { Icons } from '../../public/svg/Icons'

export default function Hero() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center gap-8 p-24 text-center">
                <p className="text-7xl font-semibold leading-tight tracking-tight capitalize text-balance">
                    Take Control of Your Expenses with AI Intelligence
                </p>
                <p className="text-2xl font-medium text-balance">
                    Automate your tracking, discover spending insights, and make smarter financial choices with ease.
                </p>
                <Button className='btn py-8 px-8 font-medium text-2xl'>Get Started Free <Icons.arrow className='size-16 ml-2' /></Button>
            </div>
        </div>
    )
}
