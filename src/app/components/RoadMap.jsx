'use client'

import { useState } from "react";
import { IconCircledTick, IconRoadMap1, IconRoadMap2, IconRoadMap3 } from "./Icons";

export default function RoadMap(){
    const [roadMapList,setRoadMapList] = useState([
        {
            title:'انتخاب تاریخ و ساعت',
            icon:<IconCircledTick/>
        },
        {
            title:'انتخاب خودرو',
            icon:<IconRoadMap1/>
        },
        {
            title:'ثبت اطلاعات',
            icon:<IconRoadMap2/>
        },
        {
            title:'صدور واچر',
            icon:<IconRoadMap3/>
        },
    ])
    return(
        <div className="sm:flex hidden w-full my-12 justify-center">
            {roadMapList.map((item,index)=>{
                return(
                    <div key={index} className="flex flex-col items-center justify-center gap-2 w-[200px]">
                        <div className="relative">
                            <div className="p-2 bg-white">
                                {item.icon}
                            </div>
                            {/* <IconCircledTick/> */}
                            {index < roadMapList.length - 1 &&
                                <span className="absolute md:w-[180px] sm:w-[140px] w-[250%] h-[2px] bg-[#BEC6CC] top-1/2 -translate-y-1/2 -left-1 -translate-x-full"></span>
                            }
                        </div>
                        <span className="lg:text-base md:text-sm text-xs">
                            {item.title}
                        </span>
                    </div>
                )

            })}
            
        </div>
        
    )
}