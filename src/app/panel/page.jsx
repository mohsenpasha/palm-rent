'use client'
import { IconPerson } from "../components/Icons"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from "react"

export default function PanelPage(){
    useEffect(()=>{
                NProgress.start()
                const timeout = setTimeout(() => {
                NProgress.done()
                }, 300)
                return () => clearTimeout(timeout)
            },[])
    return(
        <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1500x]">
            <div className="flex gap-4">
                <div className="w-3/12">
                    <PanelSideBar/>
                </div>
                <div className="w-8/12">
                    <PanelStartElm/>
                </div>
            </div>
        </div>
    )
}

export function PanelSideBar(){
    return(
        <div className="flex flex-col border-[1px] border-[#0000001f] my-4 rounded-lg overflow-hidden">
            <button className="relative flex py-2.5 px-4 transition-all cursor-pointer w-full bg-white hover:bg-blue-50">
                <span>حساب کاربری</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 flex w-[90%] h-[1px] bg-[#EBEBEB]"></span>
            </button>
            <button className="relative flex py-2.5 px-4 transition-all cursor-pointer w-full bg-white hover:bg-blue-50">
                <span>رزرو های من</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 flex w-[90%] h-[1px] bg-[#EBEBEB]"></span>
            </button>
            <button className="relative flex py-2.5 px-4 transition-all cursor-pointer w-full bg-white hover:bg-blue-50">
                <span>درخواست پشتیبانی</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 flex w-[90%] h-[1px] bg-[#EBEBEB]"></span>
            </button>
            <button className="relative flex py-2.5 px-4 transition-all cursor-pointer w-full bg-white hover:bg-blue-50">
                <span>موجودی و تراکنش‌ها</span>
            </button>
        </div>
    )
}

export function PanelStartElm(){
    return(
        <div className="flex items-center justify-between border-[1px] bg-white border-[#0000001f] my-4 rounded-lg overflow-hidden px-8 py-4">
            <div className="flex gap-2">
                <div className="size-12 rounded-full border-[1px] border-[#0000001f] flex items-center justify-center">
                    <span className="size-8">
                        <IconPerson/>
                    </span>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold">علی جرفی</div>
                    <div>09370514658</div>
                </div>
            </div>
            <div className="text-[#B0B0B0] text-sm">
                <div>
                    موجودی حساب
                </div>
                <div className="flex gap-2">
                    <span className="text-black font-bold">0</span>تومان
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
//             <div className="text-[#B0B0B0] text-sm">
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