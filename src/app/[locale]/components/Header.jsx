'use client'
import Image from "next/image";
import Link from "next/link";
import {IconArrow, IconGlobal, IconPhone, IconLogin} from "./Icons";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { changeIsHeaderClose, changeIsTranslatePopupOpen } from "@/redux/slices/globalSlice";
import LanguageCurrencyPopup from "./LanguageCurrencyPopup";
import { useTranslations } from "next-intl";

export default function Header({shadowLess=false}){
    const t = useTranslations();
    const [menuToggle,setMenuToggle] = useState(false)
    const dispatch = useDispatch()
    const isHeaderClose = useSelector((state)=> state.global.isHeaderClose)
    const isTranslateOpen = useSelector((state)=> state.global.isTranslatePopupOpen)
    function setIsHeaderClose(st){
        dispatch(changeIsHeaderClose(st))
    }

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
        const currentScroll = window.scrollY;
        if(currentScroll < 100){
            setIsHeaderClose(false)
        }
        else{
            if (currentScroll > lastScrollTop) {
                setIsHeaderClose(true)
            } else if (currentScroll < lastScrollTop) {
                setIsHeaderClose(false)
            }
        }


        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function openTranslatePopup(){
        dispatch(changeIsTranslatePopupOpen(true))
    }
    return(
        <>
            <header className={`min-h-[64px] flex items-center`}>
                <div className={`p-4 px-3 2xl:px-6 text-xs text-[#4b5952] fixed z-50 transition-all right-0 bg-white w-full ${shadowLess ? '' : 'shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)]'} ${isHeaderClose ? '-top-16' : 'top-0'}`}>
                    <div className="lg:w-[90vw] md:w-[90vw] max-w-[1200px] m-auto flex justify-between">

                    {/* {t("greeting")} */}
                        <div className="flex items-center">
                            <Link className="absolute left-1/2 top-1/2 -translate-1/2 lg:translate-0 lg:static hidden sm:block" href="#">
                                <Image className="filter-[invert(1)]" src={'/images/logo.png'} width={85} height={38} alt="palmrent logo"></Image>
                            </Link>
                            <div onClick={()=>setMenuToggle(!menuToggle)} className="z-50 flex flex-col w-6 relative cursor-pointer lg:hidden">
                                <div className={`h-1 scale-y-50 mt-1 transition-all w-full origin-center bg-black`}></div>
                                <div className={`h-1 scale-y-50 mt-1 transition-all w-full bg-black`}></div>
                                <div className={`h-1 scale-y-50 mt-1 transition-all w-full origin-center bg-black`}></div>
                            </div>
                            <div className="brightness-0 z-50 w-fit sm:hidden">
                                <Image src={'/images/logo.png'} width={120} height={75} alt=""/>
                            </div>
                            <HeaderMenu isActive={menuToggle} closeMenu={()=>setMenuToggle(false)}/>
                        </div>
                        <div className="flex items-center lg:gap-6">
                            <Link href="tel:+989211284055">
                                <IconPhone/>
                            </Link>
                            <div onClick={openTranslatePopup} className="relative group p-1 cursor-pointer underline-offset-8 flex items-center xl:gap-2 gap-1">
                                    <IconGlobal/>
                                    {t('language')}
                            </div>
                            <div className="p-1 cursor-pointer underline-offset-8">
                                <Link href={'/login'} className="h-full w-full flex gap-2">
                                    <IconLogin/>
                                    <span className="xl:block hidden">
                                        {t('loginHeader')}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {isTranslateOpen && 
                <LanguageCurrencyPopup/>
            }
        </>
    )
}

export function HeaderMenu({ isActive, closeMenu }){
    const t = useTranslations();
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
            <div className={`${isUnderLg && isActive && 'block!'} hidden animate-fade-in fixed top-0 right-0`}>
                <div onClick={closeMenu} className={`absolute w-[100vw] h-[100vh] bg-black opacity-40 z-40 top-0 right-0 lg:hidden`}>
                </div>
            </div>
            <ul className={`lg:static ${isUnderLg && (isActive ? 'translate-x-0!' : '')} translate-x-full lg:translate-x-0 pt-15 lg:pt-0 fixed transition-all h-[100vh] lg:h-auto bg-white top-0 right-0 lg:flex-row flex-col z-40 flex p-0 overflow-auto lg:overflow-visible rounded-tl-4xl`}>
                <li className="lg:p-1 lg:px-2 2xl:px-3 lg:border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center lg:hover:decoration-black">
                    <Link className="h-full w-full lg:border-0 border-b-[1px] border-[#cccccc] lg:p-0 p-3" href='/'>
                        {t('home')}
                    </Link>
                </li>
                <li className="relative group lg:p-1 lg:px-2 2xl:px-3 lg:border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center lg:gap-2 flex-wrap">
                    <div onClick={()=>toggleMenu(0)} className="flex items-center justify-between w-full lg:gap-2 lg:border-0 border-b-[1px] border-[#cccccc] lg:p-0 p-3">
                        {t('branches')}
                        <IconArrow/>
                    </div>
                    <DropDown isActive={dropMenuToggle[0]}>
                        <DropDownItem text={t('dubai')} href={'/cars-rent/dubai'}/>
                        <DropDownItem text={t('istanbul')} href={'/cars-rent/istanbul'}/>
                        <DropDownItem text={t('oman')} href={'/cars-rent/oman'}/>
                        <DropDownItem text={t('kish')} href={'/cars-rent/kish'}/>
                        <DropDownItem text={t('izmir')} href={'/cars-rent/izmir'}/>
                        <DropDownItem text={t('ankara')} href={'/cars-rent/ankara'}/>
                        <DropDownItem text={t('antalya')} href={'/cars-rent/antalya'}/>
                        <DropDownItem text={t('samsun')} href={'/cars-rent/samsun'}/>
                        <DropDownItem text={t('kayseri')} href={'/cars-rent/kayseri'}/>
                        <DropDownItem text={t('georgia')} href={'/cars-rent/georgia'}/>
                    </DropDown>
                </li>
                <li className="relative group lg:p-1 lg:px-2 2xl:px-3 lg:border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center gap-2 flex-wrap">
                    <div onClick={()=>toggleMenu(1)} className="flex items-center justify-between w-full lg:gap-2 lg:border-0 border-b-[1px] border-[#cccccc] lg:p-0 p-3">
                        {t('carList')}
                        <IconArrow/>
                    </div>
                    <DropDown isActive={dropMenuToggle[1]}>
                        <DropDownItem text={t('dubai')} href={'/cars-list/dubai'}/>
                        <DropDownItem text={t('istanbul')} href={'/cars-list/istanbul'}/>
                        <DropDownItem text={t('oman')} href={'/cars-list/oman'}/>
                        <DropDownItem text={t('kish')} href={'/cars-list/kish'}/>
                        <DropDownItem text={t('izmir')} href={'/cars-list/izmir'}/>
                        <DropDownItem text={t('ankara')} href={'/cars-list/ankara'}/>
                        <DropDownItem text={t('antalya')} href={'/cars-list/antalya'}/>
                        <DropDownItem text={t('samsun')} href={'/cars-list/samsun'}/>
                        <DropDownItem text={t('kayseri')} href={'/cars-list/kayseri'}/>
                        <DropDownItem text={t('georgia')} href={'/cars-list/georgia'}/>
                    </DropDown>
                </li>
                <li className="lg:p-1 lg:px-2 2xl:px-3 lg:border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center lg:hover:decoration-black">
                    <Link className="h-full w-full lg:border-0 border-b-[1px] border-[#cccccc] lg:p-0 p-3" href='/documents'>
                        {t('documents')}
                    </Link>
                </li>
                <li className="relative group lg:p-1 lg:px-2 2xl:px-3 lg:border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center gap-2 flex-wrap">
                    <div onClick={()=>toggleMenu(2)} className="flex items-center justify-between w-full lg:gap-2 lg:border-0 border-b-[1px] border-[#cccccc] lg:p-0 p-3">
                        {t('contactUs')}
                        <IconArrow/>
                    </div>
                    <DropDown isActive={dropMenuToggle[2]}>
                        <DropDownItem text={t('aboutUs')} href={'/about-us'}/>
                        <DropDownItem text={t('contactUs')} href={'/contact-us'}/>
                    </DropDown>
                </li>
                <li className="relative group lg:p-1 lg:px-2 2xl:px-3 underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center gap-2 flex-wrap">
                    <div onClick={()=>toggleMenu(3)} className="flex items-center justify-between w-full lg:gap-2 lg:border-0 border-b-[1px] border-[#cccccc] lg:p-0 p-3">
                        {t('more')}
                        <IconArrow/>
                    </div>
                    <DropDown isActive={dropMenuToggle[3]}>
                        <DropDownItem text={t('blog')} href={'/blogs'}/>
                        <DropDownItem text={t('gallery')} href={'/gallery'}/>
                        <DropDownItem text={t('commonQ')} href={'/faq'}/>
                        <DropDownItem text={t('rules')} href={'/rules'}/>
                    </DropDown>
                </li>
            </ul>
        </>

    )
}

export function DropDown({ children, isActive }){
    const isUnderLg = useMediaQuery("(max-width: 1023.9px)");
    return(
        <div className="lg:absolute lg:hidden min-w-32 lg:w-auto w-full  animate-fade-in lg:translate-y-full lg:group-hover:flex bottom-0 left-1/2 lg:-translate-x-1/2 lg:pt-2">
            <ul className={`flex ${isUnderLg ? (isActive ? 'max-h-[500px]  p-1' : 'max-h-0') : 'p-1' } transition-all overflow-hidden flex-col bg-white min-w-32 rounded-lg lg:border border-[#cccccc] lg:shadow-[0_3px_10px_0_rgba(0,0,0,.12),0_10px_10px_-6px_rgba(0,0,0,.12)]`}>
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
