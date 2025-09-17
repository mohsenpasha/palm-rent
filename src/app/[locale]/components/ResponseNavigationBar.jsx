'use client'
import Link from "next/link";
import { IconCalender, IconHome, IconLocation, IconPerson, IconPerson2 } from "./Icons";
import { usePathname } from "next/navigation";
import React, { ReactElement } from 'react'
 
export function ResNavigationBar(){
    return(
        <div className="fixed bottom-0 right-0 w-[100vw] bg-white border-t-[1px] border-[#0000001F] z-40 py-4 justify-around sm:text-sm text-xs md:hidden flex ">
            <SingleNavItem title={'خانه'} icon={<IconHome />} href={'/'}/>
            <SingleNavItem title={'شعبه ها'} icon={<IconLocation />} href={'/branches'}/>
            <SingleNavItem title={'رزرو های من'} icon={<IconCalender />} href={'/my-order'}/>
            <SingleNavItem title={'پروفایل'} icon={<IconPerson2 />} href={'/panel'}/>
        </div>
    )
}
export function SingleNavItem({title,icon,href}){
    const pathname = usePathname()
    const isActive = pathname === href
    const activeIcon = React.cloneElement(icon, { active: isActive })
    return(
        <Link href={href} className={`flex flex-col items-center justify-center gap-1 cursor-pointer ${isActive ? 'text-[#3B82F6] font-bold' : ''}`}>
            <span className={`flex size-6 items-center`}>
                {isActive ? activeIcon :icon}
            </span>
            <span className={`${isActive ? ' text-[]' : ''}`}>
                {title}
            </span>
        </Link>
    )
}