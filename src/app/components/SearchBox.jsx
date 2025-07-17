import { IconCarExtra, IconCoupeCar, IconCrookCar, IconDiamond2, IconHandCoin, IconRocket, IconSearch2, IconSetting, IconSort, IconSort1, IconSort2, IconSort3, IconStandard, IconSuitcase, IconSuv } from "./Icons";

export function SearchBox(){
    return(
        <div className="bg-white rounded-lg shadow-[0_4px_20px_0px_rgba(0,0,0,.06)] p-4 my-6 text-nowrap">
            <div className="bg-[#F4F4F4] rounded-xl flex items-center p-4 py-3 relative">
                <span>
                    <IconSearch2/>
                </span>
                <input className="w-full px-4 outline-0" type="search" placeholder="جستجوی خودرو" />
                <button className="flex items-center text-nowrap left-6 gap-2 text-sm cursor-pointer">
                    <IconSetting/>
                    <span className="">
                        فیلتر ها
                    </span>
                </button>
            </div>
            <div className="flex items-center mt-4 gap-2 lg:text-base md:text-sm text-xs">
                <span className="flex">
                    <IconSort/>
                    مرتب سازی :
                </span>
                <div className="flex md:gap-2 gap-1 overflow-auto">
                    <label className="flex gap-2 select-none">
                        <input className="peer hidden" type="checkbox" />
                        <div className="p-2 py-1 rounded-lg bg-[#E3E3E3] transition-all peer-checked:bg-[#7CABF9] peer-checked:text-white flex gap-2 cursor-pointer items-center">
                            <IconSort1/>
                            بدون دیپوزیت
                        </div>
                    </label>
                    <label className="flex gap-2 select-none">
                        <input className="peer hidden" type="checkbox" />
                        <div className="p-2 py-1 rounded-lg bg-[#E3E3E3] transition-all peer-checked:bg-[#7CABF9] peer-checked:text-white flex gap-2 cursor-pointer items-center">
                            <IconSort2/>
                            خودرو لوکس
                        </div>
                    </label>
                    <label className="flex gap-2 select-none">
                        <input className="peer hidden" type="checkbox" />
                        <div className="p-2 py-1 rounded-lg bg-[#E3E3E3] transition-all peer-checked:bg-[#7CABF9] peer-checked:text-white flex gap-2 cursor-pointer items-center">
                            <IconSort3/>
                            خودرو اقتصادی
                        </div>
                    </label>
                </div>
                
            </div>
        </div>
    )
}