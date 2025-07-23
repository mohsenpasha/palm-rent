import { useSelector } from "react-redux";
import { IconCalender, IconEdit, IconVideoTime } from "./Icons";

export function DateBox({isSticky=false}){
    const isHeaderClose = useSelector((state)=> state.global.isHeaderClose)

    return(
        <div className={`${isSticky ? 'sticky mb-10' : 'my-4'} ${isHeaderClose ? 'top-8' : 'top-18'} transition-all z-30 w-full p-4 py-4 rounded-2xl bg-[#EBEBEB] flex md:flex-row flex-col lg:text-base text-sm items-center justify-center gap-2 md:gap-0`}>
            <div className="flex items-center w-full gap-2 lg:justify-start justify-center">
                <span className="flex items-center gap-2">
                    <IconCalender className={'sm:flex hidden'}/>
                    تاریخ  و ساعت تحویل:
                </span>
                <span>
                    3 مرداد ساعت 15:30
                </span>
            </div>
            <div className="flex items-center w-full gap-2 lg:justify-start justify-center">
                <span className="flex items-center gap-2">
                    <IconCalender className={'sm:flex hidden'}/>
                    تاریخ  و ساعت عودت:
                </span>
                <span>
                    3 مرداد ساعت 15:30
                </span>
            </div>
            <div className="items-center w-full gap-2 xl:flex hidden">
                <span className="flex items-center gap-2">
                    <IconVideoTime/>
                    مدت زمان اجاره :
                </span>
                <span>
                    4 روز فراموش نشدنی در دبی 
                </span>
            </div>
            <button className="text-[#3B82F6] flex items-center text-nowrap gap-2 cursor-pointer">
                <IconEdit/>
                <span className="flex lg:flex md:hidden">
                    تغییر جستجو
                </span>
            </button>
        </div>
    )
}