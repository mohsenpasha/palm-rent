'use client'
import Image from "next/image"
import { IconArrow, IconCalling, IconCards, IconClock2, IconClose, IconEdit2, IconLike, IconLogout, IconMenu, IconNote, IconPerson, IconPersonNew, IconShare } from "../components/Icons"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect, useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function PanelPage(){
    useEffect(()=>{
                NProgress.start()
                const timeout = setTimeout(() => {
                NProgress.done()
                }, 300)
                return () => clearTimeout(timeout)
            },[])
    return(
        <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1336px]">
            <div className="flex gap-4 justify-center">
                <div className="sm:w-[400px] w-full">
                    <PanelSideBar/>
                </div>
                {/* <div className="w-8/12"> */}
                    {/* <PanelStartElm/> */}
                    {/* <PanelAccountInfo/> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export function PanelSideBar(){
    const [popupStatus,setPopupStatus] = useState(false)
    const t = useTranslations();
    return(
        <>
        <div className="flex flex-col border-[1px] border-[#0000001f] my-4 rounded-lg overflow-hidden">
            <div className="flex bg-white p-4 items-center shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] justify-between">
                <div className="flex gap-2">
                    <div className="size-12 rounded-full border-[1px] border-[#0000001f] flex items-center justify-center">
                        <Image className="w-fit h-full" src={'/images/profile-pic.png'} width={100} height={100} alt=""/>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold">علی جرفی</div>
                        <div>09370514658</div>
                    </div>
                </div>
                <div onClick={()=>setPopupStatus(true)} className="size-[40px] flex justify-center items-center rounded-full cursor-pointer border-[1px] border-[#0000001f]">
                    <IconLogout/>
                </div>
            </div>
            <div>
                <Link href={'/panel/edit/account/'} className="relative flex py-2.5 px-4 transition-all cursor-pointer w-full justify-between items-center gap-2 bg-white hover:bg-blue-50">
                    <div className="flex items-center gap-2">
                        <span className="flex size-8 bg-[#FBFBFB] items-center justify-center rounded-full">
                            <IconPersonNew/>
                        </span>
                        <span>{t('account')}</span>
                    </div>
                    <div>
                        <IconArrow className={'rotate-90'}/>
                    </div>
                </Link>
                <Link href={'/panel/edit/personal'} className="relative flex py-2.5 px-4 transition-all cursor-pointer w-full justify-between items-center gap-2 bg-white hover:bg-blue-50">
                    <div className="flex items-center gap-2">
                        <span className="flex size-8 bg-[#FBFBFB] items-center justify-center rounded-full">
                            <IconMenu/>
                        </span>
                        <span>{t('personalInfo')}</span>
                    </div>
                    <div>
                        <IconArrow className={'rotate-90'}/>
                    </div>
                </Link>
                <Link href={'/panel/edit/bank'} className="relative flex py-2.5 px-4 transition-all cursor-pointer w-full justify-between items-center gap-2 bg-white hover:bg-blue-50">
                    <div className="flex items-center gap-2">
                        <span className="flex size-8 bg-[#FBFBFB] items-center justify-center rounded-full">
                            <IconNote/>
                        </span>
                        <span>{t('bankInfo')}</span>
                    </div>
                    <div>
                        <IconArrow className={'rotate-90'}/>
                    </div>
                </Link>
                <Link href={'/favorite'} className="relative flex py-2.5 px-4 transition-all cursor-pointer w-full justify-between items-center gap-2 bg-white hover:bg-blue-50">
                    <div className="flex items-center gap-2">
                        <span className="flex size-8 bg-[#FBFBFB] items-center justify-center rounded-full">
                            <IconClock2/>
                        </span>
                        <span>{t('myFav')}</span>
                    </div>
                    <div>
                        <IconArrow className={'rotate-90'}/>
                    </div>
                </Link>
                <button className="relative flex py-2.5 px-4 transition-all cursor-pointer w-full justify-between items-center gap-2 bg-white hover:bg-blue-50">
                    <div className="flex items-center gap-2">
                        <span className="flex size-8 bg-[#FBFBFB] items-center justify-center rounded-full">
                            <IconCards/>
                        </span>
                        <span>{t('balanceTransaction')}</span>
                    </div>
                    <div>
                        <IconArrow className={'rotate-90'}/>
                    </div>
                </button>
            </div>
        </div>
        <div className="flex flex-col border-[1px] border-[#0000001f] my-4 rounded-lg overflow-hidden bg-white">
            <button className="relative flex py-2.5 px-4 transition-all cursor-pointer w-full justify-between items-center gap-2 bg-white hover:bg-blue-50">
                <div className="flex items-center gap-2">
                    <span className="flex size-8 bg-[#FBFBFB] items-center justify-center rounded-full">
                        <IconLike/>
                    </span>
                    <span>{t('customerComments')}</span>
                </div>
                <div>
                    <IconArrow className={'rotate-90'}/>
                </div>
            </button>
            <button className="relative flex py-2.5 px-4 transition-all cursor-pointer w-full justify-between items-center gap-2 bg-white hover:bg-blue-50">
                <div className="flex items-center gap-2">
                    <span className="flex size-8 bg-[#FBFBFB] items-center justify-center rounded-full">
                        <IconShare/>
                    </span>
                    <span>{t('inviteFriends')}</span>
                </div>
                <div>
                    <IconArrow className={'rotate-90'}/>
                </div>
            </button>
            <button className="relative flex py-2.5 px-4 transition-all cursor-pointer w-full justify-between items-center gap-2 bg-white hover:bg-blue-50">
                <div className="flex items-center gap-2">
                    <span className="flex size-8 bg-[#FBFBFB] items-center justify-center rounded-full">
                        <IconCalling/>
                    </span>
                    <span>{t('requestBackup')}</span>
                </div>
                <div>
                    <IconArrow className={'rotate-90'}/>
                </div>
            </button>
        </div>
        {popupStatus &&
            <LogoutPopup closePopup={()=>setPopupStatus(false)}/>
        }
        </>

    )
}


export function LogoutPopup({closePopup}){
    const t = useTranslations();
    return(
        <div className="fixed w-[100vw] h-[100vh] top-0 right-0 z-50">
            <div className="animate-opacity">
                <div onClick={closePopup} className="absolute w-full h-full top-0 right-0 bg-black opacity-40"></div>
            </div>
            <div className="bg-white sm:w-xl w-[90%] pb-6 absolute sm:top-1/2 left-1/2 sm:-translate-1/2 -translate-x-1/2 sm:bottom-auto bottom-0 sm:rounded-2xl rounded-t-2xl sm:animate-fade-in2 animate-fromBottom">
                <div className="w-full sm:border-b-[1px] border-[#0000001F] flex gap-2 p-6 justify-between">
                    <span className="font-bold text-xl">
                        {t('logout')}             
                    </span>
                    <span onClick={closePopup} className="size-4 hidden items-center cursor-pointer sm:flex">
                        <IconClose/>
                    </span>
                </div>
                <div className="text-[#353535] sm:p-6 px-6 p-2 sm:text-base text-sm">{t('logoutDescription')}</div>
                <div className="p-2 px-4">
                    <div className="flex gap-2 font-bold">
                        <button onClick={closePopup} className="w-full flex justify-center py-2 border border-black rounded-lg cursor-pointer">
                            {t('back')}
                        </button>
                        <button className="w-full flex justify-center py-2 rounded-lg text-white bg-[#DD2C2C] gap-2 cursor-pointer">
                            {t('close')}
                            <IconLogout color="#FFFFFF" className={'text-white'}/>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export function PanelStartElm(){
    const t = useTranslations();
    return(
        <div className="flex items-center justify-between border-[1px] bg-white border-[#0000001f] my-4 rounded-lg overflow-hidden px-8 py-4">
            <div className="flex gap-2">
                <div className="size-12 rounded-full border-[1px] border-[#0000001f] flex items-center justify-center">
                    <Image className="w-fit h-full" src={'/images/profile-pic.png'} width={100} height={100} alt=""/>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold">علی جرفی</div>
                    <div>09370514658</div>
                </div>
            </div>
            <div className="text-[#B0B0B0] text-xs flex flex-col gap-1">
                <div>
                    {t('moneyBalance')}
                </div>
                <div className="flex gap-2">
                    <span className="text-black font-bold">0</span>تومان
                </div>
                <div className="flex items-center gap-1 text-[#3B82F6] cursor-pointer">
                    {t('increaseBalance')}
                    <IconArrow className={'rotate-90'}/>
                </div>
            </div>
        </div>
    )
}


export function PanelAccountInfo(){
    return(
        <div className="flex flex-col items-center justify-between border-[1px] bg-white border-[#0000001f] my-4 rounded-lg overflow-hidden px-8 py-4">
            <div className="flex gap-2 w-full items-center font-bold lg:text-base text-sm">
                <span className="size-6">
                    <IconPerson />
                </span>
                اطلاعات حساب کاربری
            </div>
            <div className="flex flex-col w-full mt-8">
                <div className="flex-1 flex gap-8">
                    <div>
                        شماره موبایل
                    </div>
                    <div>
                        09370514658
                    </div>
                    <div className="text-[#3b82f6] flex gap-1 items-center font-bold cursor-pointer">
                        <span className="size-4 flex text-white bg-[#3b82f6] rounded-full">
                            <IconEdit2/>
                        </span>
                        ویرایش
                    </div>
                </div>
                <div className="w-1/4">
                    ایمیل
                </div>
            </div>
        </div>
    )
}


// export function PanelStartElm(){
//     return(
//         <div className="flex items-center justify-between border-[1px] bg-white border-[#0000001f] my-4 rounded-lg overflow-hidden px-8 py-4">
//             <div className="flex gap-2">
//                 <div className="size-12 rounded-full border-[1px] border-[#0000001f] flex items-center justify-center">
//                     <span className="size-8">
//                         <IconPerson/>
//                     </span>
//                 </div>
//                 <div className="flex flex-col">
//                     <div className="font-bold">علی جرفی</div>
//                     <div>09370514658</div>
//                 </div>
//             </div>
//             <div className="text-[#B0B0B0] text-xs">
//                 <div>
//                     موجودی حساب
//                 </div>
//                 <div className="flex gap-2">
//                     <span className="text-black font-bold">0</span>تومان
//                 </div>
//             </div>
//         </div>
//     )
// }