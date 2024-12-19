import navLink from '@/constants/navLink'
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between px-[5rem] py-4 bg-[#211D31]  border-[#fff3] border-b-[1px] '>
            <div className="text-white float-left w-[8.125rem] font-bold text-2xl">EXPO</div>
            <div className="  flex items-center justify-around ">
                {
                    navLink.map((item, index) => {
                        return (
                            <a href={item.href} key={index} className="text-white w-[7rem] text-center text-lg font-medium float-left rounded py-2 px-5 hover:bg-[#ee35afcc] ">{item.name}</a>
                        )
                    })
                }
            </div>
            <div className="header-button">
                GET STARTED
            </div>
        </div>
    )
}
