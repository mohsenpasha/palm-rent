'use client'
import { useTranslations } from "next-intl";
import { SingleBranchCity } from "../components/BranchSection";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function BranchesPage(){
    const branches = useSelector((state)=>state.global.branches)
    const [data,setData] = useState()
    useEffect(()=>{
        if(branches != null){
            setData(branches)
            return
        }
        fetch("https://palmrentcar.com/api/home/" + 'fa')
        .then((res) => res.json())
        .then((json) => setData(json.data.branches))
        .catch((err) => console.error(err));
        },[branches])
    const t = useTranslations();
    return(
        
        <div className="flex flex-wrap sm:gap-2 gap-1 w-[85vw] max-w-[1336px] m-auto my-8">
            {data && data.map((item,index)=>{
                    return(
                        <div key={index} className="lg:w-[calc(25%-6px)] sm:w-[calc(33%-3.5px)] w-[calc(50%-3.5px)]">
                            <SingleBranchCity link={'/cars-rent/dubai'} image={item.photo} title={item.title}/>
                        </div>
                    )
                })}
        </div>
    )
}