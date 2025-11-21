'use client'

import { useState } from "react";
import { IconCircledTick, IconRoadMap1, IconRoadMap2, IconRoadMap3 } from "./Icons";
import { useTranslations } from "next-intl";

export default function RoadMap({step}){
    const t = useTranslations();
    const [roadMapList,setRoadMapList] = useState([
        {
            title:'roadMap1',
            icon:<IconCircledTick/>
        },
        {
            title:'roadMap2',
            icon:<IconRoadMap1/>
        },
        {
            title:'roadMap3',
            icon:<IconRoadMap2/>
        },
        {
            title:'roadMap4',
            icon:<IconRoadMap3/>
        },
    ])
    return(
        <div dir="rtl" className="flex w-full my-2 justify-center">
            {roadMapList.map((item,index)=>{
                return(
                    <div key={index} className="flex flex-col items-center justify-center gap-0.5 xl:w-[280px] lg:w-[260px] w-60">
                        <div className="relative">
                            <div className={`p-2 bg-[#F6F6F6] ${index <= step ? 'text-[#28a754]' : 'text-[#BEC6CC]' }`}>
                                {index < step ?
                                    <IconCircledTick/>
                                    :
                                    item.icon
                                }
                            </div>
                            {/* <IconCircledTick/> */}
                            {index < roadMapList.length - 1 &&
                                <span className={`absolute xl:w-[260px] lg:w-[220px] md:w-[170px] sm:w-[300%] max-[380px]:w-[150%] w-[230%] h-px ${index < step ? 'bg-[#10B981]' : 'bg-[#BEC6CC]'} top-1/2 -translate-y-1/2 -left-1 -translate-x-full`}></span>
                            }
                        </div>
                        <span className={`sm:text-xs text-[10px] text-nowrap ${index == step ? 'text-[#10B981] font-bold' : (index > step ? 'text-[#BEC6CC]' : 'text-[#10B981]')}`}>
                            {t(item.title)}
                        </span>
                    </div>
                )

            })}
            
        </div>
        
    )
}