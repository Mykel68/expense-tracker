import React from 'react'
import Navbar from './Navbar'
import { Button } from './ui/button'
import { Icons } from '../../public/svg/Icons'

export default function Hero() {
    return (
        <div>
            <div className="hero-img  hero ">
                {/* <Navbar /> */}
                <div className="flex flex-col items-center justify-center gap-8 md:p-24 p-14 text-center ">
                    <p className="md:text-7xl text-4xl font-semibold leading-tight tracking-tight capitalize text-balance">
                        Take Control of Your Expenses with AI
                    </p>
                    <p className="text-2xl font-medium text-balance tracking-widest">
                        Automate your tracking, discover spending insights, and make smarter financial choices with ease.
                    </p>
                    <Button variant={'default'} className='btn py-8 px-8 font-medium text-2xl'>Get Started Free <Icons.arrow className='size-16 ml-2' /></Button>
                </div>

            </div>
        </div>
    )
}



