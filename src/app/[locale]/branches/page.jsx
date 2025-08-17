'use client'
import { useTranslations } from "next-intl";
import { SingleBranchCity } from "../components/BranchSection";
import { useSelector } from "react-redux";

export default function BranchesPage(){
    const branches = useSelector((state)=>state.global.branches)
    console.log(branches)
    const t = useTranslations();
    return(
        
        <div className="flex flex-wrap gap-2 w-[85vw] max-w-[1336px] m-auto my-8">
            {branches && branches.map((item,index)=>{
                    return(
                        <div className="lg:w-[calc(25%-6px)] md:w-[calc(33%-3.5px)] sm:w-[calc(50%-8px)] w-full">
                            <SingleBranchCity link={'/cars-rent/dubai'} image={item.photo} title={item.title}/>
                        </div>
                    )
                })}
        </div>
    )
}