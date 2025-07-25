'use client'
import Image from "next/image";
import Link from "next/link";
import {IconArrow, IconGlobal, IconPhone, IconLogin} from "./Icons";
import { useEffect, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { changeIsHeaderClose } from "@/redux/slices/globalSlice";
import { useTranslation } from "react-i18next";

export default function Header(){
    const { t, i18n } = useTranslation();
    const [menuToggle,setMenuToggle] = useState(false)
    const dispatch = useDispatch()
    const isHeaderClose = useSelector((state)=> state.global.isHeaderClose)
    function setIsHeaderClose(st){
        dispatch(changeIsHeaderClose(st))
    }
    useEffect(()=>{
        window.addEventListener('wheel',(event)=>scrollHandler(event))
        return () => {
            window.removeEventListener('wheel',(event)=>scrollHandler(event))
        }
    },[])
    function scrollHandler(event){
        if(event.wheelDelta < 0 && event.pageY > 350){
            setIsHeaderClose(true)
        }
        else{
            setIsHeaderClose(false)
        }
    }
    return(
        <header className={`min-h-[64px] flex items-center`}>
            <div className={`p-4 px-3 2xl:px-6 flex justify-between fixed z-50 transition-all right-0 bg-white w-full shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] ${isHeaderClose ? '-top-16' : 'top-0'}`}>
            {/* {t("greeting")} */}
                <div className="flex items-center">
                    <Link className="absolute left-1/2 top-1/2 -translate-1/2 lg:translate-0 lg:static hidden sm:block" href="#">
                        <Image className="filter-[invert(1)]" src={'/images/logo.png'} width={85} height={38} alt="palmrent logo"></Image>
                    </Link>
                    <div onClick={()=>setMenuToggle(!menuToggle)} className="z-50 flex flex-col w-6 relative cursor-pointer lg:hidden">
                        <div className={`h-1 scale-y-50 mt-1 transition-all w-full origin-center bg-black ${menuToggle && 'absolute -rotate-45'}`}></div>
                        <div className={`h-1 scale-y-50 mt-1 transition-all w-full bg-black ${menuToggle && 'opacity-0'}`}></div>
                        <div className={`h-1 scale-y-50 mt-1 transition-all w-full origin-center bg-black ${menuToggle && 'absolute rotate-45'}`}></div>
                    </div>
                    <HeaderMenu isActive={menuToggle} closeMenu={()=>setMenuToggle(false)}/>
                </div>
                <div className="flex items-center lg:gap-6">
                    <Link href="tel:+989211284055">
                        <IconPhone/>
                    </Link>
                    <div className="relative group p-1 cursor-pointer underline-offset-8 flex items-center xl:gap-2 gap-1">
                            <IconGlobal/>
                            فارسی
                            <IconArrow/>
                            <LangDropDown>
                                {/* <DropDownItem text={'فارسی'} href={'#'}/> */}
                                <DropDownItem text={'English'} href={'#'}/>
                                <DropDownItem text={'العربی'} href={'#'}/>
                                <DropDownItem text={'Türkiye'} href={'#'}/>
                            </LangDropDown>
                    </div>
                    <div className="p-1 cursor-pointer underline-offset-8">
                        <Link className="h-full w-full flex gap-2" href='#'>
                            <IconLogin/>
                            <span className="xl:block hidden">
                                ورود / ثبت نام
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export function HeaderMenu({ isActive, closeMenu }){
    const [dropMenuToggle,setDropMenuToggle] = useState([false,false,false,false])
    function toggleMenu(targetIndex){
        setDropMenuToggle(dropMenuToggle.map((item,index)=>{
            if(index != targetIndex){
                return false
            }
            else{
                return !item
            }
        }))
    }
    const isUnderLg = useMediaQuery("(max-width: 1023.9px)");
    return(
        <>  
            <div className={`${isUnderLg && !isActive && 'hidden'} animate-fade-in fixed top-0 right-0`}>
                <div onClick={closeMenu} className={`absolute w-[100vw] h-[100vh] bg-black opacity-40 z-40 top-0 right-0 lg:hidden`}>
                </div>
            </div>
            <ul className={`lg:static ${isUnderLg && (isActive ? 'translate-x-0' : 'translate-x-full')} pt-15 lg:pt-0 fixed transition-all h-[100vh] lg:h-auto bg-white top-0 right-0 lg:flex-row flex-col z-40 flex p-0 overflow-auto lg:overflow-visible`}>
                <li className="lg:p-1 lg:px-3 2xl:px-6 lg:border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center lg:hover:decoration-black">
                    <Link className="h-full w-full lg:border-0 border-b-[1px] border-[#cccccc] lg:p-0 p-3" href='#'>
                        خانه
                    </Link>
                </li>
                <li className="relative group lg:p-1 lg:px-3 2xl:px-6 lg:border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center lg:gap-2 flex-wrap">
                    <div onClick={()=>toggleMenu(0)} className="flex items-center justify-between w-full lg:gap-2 lg:border-0 border-b-[1px] border-[#cccccc] lg:p-0 p-3">
                        شعبه های پالم رنت
                        <IconArrow/>
                    </div>
                    <DropDown isActive={dropMenuToggle[0]}>
                        <DropDownItem text={'دبی'} href={'#'}/>
                        <DropDownItem text={'استانبول'} href={'#'}/>
                        <DropDownItem text={'عمان'} href={'#'}/>
                        <DropDownItem text={'کیش'} href={'#'}/>
                        <DropDownItem text={'ازمیر ترکیه'} href={'#'}/>
                        <DropDownItem text={'آنکارا ترکیه'} href={'#'}/>
                        <DropDownItem text={'آنتالیا ترکیه'} href={'#'}/>
                        <DropDownItem text={'سامسون ترکیه'} href={'#'}/>
                        <DropDownItem text={'قیصریه ترکیه'} href={'#'}/>
                        <DropDownItem text={'تفلیس گرجستان'} href={'#'}/>
                    </DropDown>
                </li>
                <li className="relative group lg:p-1 lg:px-3 2xl:px-6 lg:border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center gap-2 flex-wrap">
                    <div onClick={()=>toggleMenu(1)} className="flex items-center justify-between w-full lg:gap-2 lg:border-0 border-b-[1px] border-[#cccccc] lg:p-0 p-3">
                        لیست خودرو ها
                        <IconArrow/>
                    </div>
                    <DropDown isActive={dropMenuToggle[1]}>
                        <DropDownItem text={'دبی'} href={'#'}/>
                        <DropDownItem text={'استانبول'} href={'#'}/>
                        <DropDownItem text={'عمان'} href={'#'}/>
                        <DropDownItem text={'کیش'} href={'#'}/>
                        <DropDownItem text={'ازمیر ترکیه'} href={'#'}/>
                        <DropDownItem text={'آنکارا ترکیه'} href={'#'}/>
                        <DropDownItem text={'آنتالیا ترکیه'} href={'#'}/>
                        <DropDownItem text={'سامسون ترکیه'} href={'#'}/>
                        <DropDownItem text={'قیصریه ترکیه'} href={'#'}/>
                        <DropDownItem text={'تفلیس گرجستان'} href={'#'}/>
                    </DropDown>
                </li>
                <li className="lg:p-1 lg:px-3 2xl:px-6 lg:border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center lg:hover:decoration-black">
                    <Link className="h-full w-full lg:border-0 border-b-[1px] border-[#cccccc] lg:p-0 p-3" href='#'>
                        مدارک مورد نیاز
                    </Link>
                </li>
                <li className="relative group lg:p-1 lg:px-3 2xl:px-6 lg:border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center gap-2 flex-wrap">
                    <div onClick={()=>toggleMenu(2)} className="flex items-center justify-between w-full lg:gap-2 lg:border-0 border-b-[1px] border-[#cccccc] lg:p-0 p-3">
                        تماس با ما
                        <IconArrow/>
                    </div>
                    <DropDown isActive={dropMenuToggle[2]}>
                        <DropDownItem text={'درباره پالم رنت'} href={'#'}/>
                        <DropDownItem text={'تماس با ما'} href={'#'}/>
                    </DropDown>
                </li>
                <li className="relative group lg:p-1 lg:px-3 2xl:px-6 underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center gap-2 flex-wrap">
                    <div onClick={()=>toggleMenu(3)} className="flex items-center justify-between w-full lg:gap-2 lg:border-0 border-b-[1px] border-[#cccccc] lg:p-0 p-3">
                        بیشتر
                        <IconArrow/>
                    </div>
                    <DropDown isActive={dropMenuToggle[3]}>
                        <DropDownItem text={'مجله پالم رنت'} href={'#'}/>
                        <DropDownItem text={'گالری تصاویر'} href={'#'}/>
                        <DropDownItem text={'سوالات متداول'} href={'#'}/>
                        <DropDownItem text={'قوانین اجاره خودرو'} href={'#'}/>
                    </DropDown>
                </li>
            </ul>
        </>

    )
}

export function DropDown({ children, isActive }){
    const isUnderLg = useMediaQuery("(max-width: 1023.9px)");
    return(
        <div className="lg:absolute lg:hidden w-full animate-fade-in lg:translate-y-full lg:group-hover:flex bottom-0 left-1/2 lg:-translate-x-1/2 lg:pt-2">
            <ul className={`flex ${isUnderLg ? (isActive ? 'max-h-[500px]  p-1' : 'max-h-0') : 'p-1' } transition-all overflow-hidden flex-col bg-white min-w-32 rounded-lg lg:border-[1px] border-[#cccccc] lg:shadow-[0_3px_10px_0_rgba(0,0,0,.12),0_10px_10px_-6px_rgba(0,0,0,.12)]`}>
                { children }
            </ul>
        </div>
    )
}

export function LangDropDown({ children }){
    return(
        <div className="absolute hidden animate-fade-in translate-y-full group-hover:flex bottom-0 left-1/2 -translate-x-1/2 pt-2">
            <ul className="flex flex-col bg-white min-w-32 rounded-lg border-[1px] border-[#cccccc] p-1 shadow-[0_3px_10px_0_rgba(0,0,0,.12),0_10px_10px_-6px_rgba(0,0,0,.12)]">
                { children }
            </ul>
        </div>
    )
}

export function DropDownItem({text,href}){
    return(
        <Link href={href} className="text-[#4b5259] p-2 px-3 text-nowrap border-b-[1px] lg:border-b-0 hover:bg-[#f8fafb] lg:rounded-lg">{text}</Link>
    )
}

export function DropDownLanguage({text,href}){
    return(
        <Link href={href} className="text-[#4b5259] p-2 px-3 text-nowrap hover:bg-[#f8fafb] rounded-lg">{text}</Link>
    )
}
