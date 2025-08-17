import Link from "next/link";
import { IconCalender, IconHome, IconLocation, IconPerson, IconPerson2 } from "./Icons";

export function ResNavigationBar(){
    return(
        <div className="fixed bottom-0 right-0 w-[100vw] bg-white border-t-[1px] border-[#0000001F] z-40 py-4 flex justify-around sm:text-sm text-xs">
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                <span className="flex size-6 items-center">
                    <IconHome />
                </span>
                <span>
                    خانه
                </span>
            </div>
            <Link href={'/branches'} className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                <span className="flex size-6 items-center">
                    <IconLocation />
                </span>
                <span>
                    شعبه ها
                </span>
            </Link>
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                <span className="flex size-6 items-center">
                    <IconCalender />
                </span>
                <span>
                    رزرو های من
                </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 cursor-pointer">
                <span className="flex size-6 items-center">
                    <IconPerson2 />
                </span>
                <span>
                    پروفایل
                </span>
            </div>
        </div>
    )
}