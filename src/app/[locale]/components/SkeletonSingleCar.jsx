export default function SkeletonSingleCar({singlePrice=false}){
    return(
        <div className="flex w-full flex-col rounded-2xl md:text-sm text-xs justify-between border bg-white border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-[10px] gap-2">
            <div className="flex text-[#0B835C] text-[10px] gap-2 text-nowrap top-2 right-2 w-full overflow-hidden flex-wrap animate-skeleton  h-[250px] rounded-lg">
            </div>
            <div className="w-full h-5 animate-skeleton rounded-sm"></div>
            <div className="flex gap-2">
                <div className="w-full h-5 animate-skeleton rounded-sm"></div>
                <div className="w-full h-5 animate-skeleton rounded-sm"></div>
                <div className="w-full h-5 animate-skeleton rounded-sm"></div>
                <div className="w-full h-5 animate-skeleton rounded-sm"></div>
                
            </div>
            <div className="flex flex-col gap-3">
                {Array(singlePrice ? 1 : 4).fill(null).map((item,index)=>{
                    return(
                        <div key={index} className="flex justify-between">
                            <div className="w-3/12 h-6 animate-skeleton rounded-sm"></div>
                            <div className="w-4/12 h-6 animate-skeleton rounded-sm"></div>
                        </div>
                    )
                })}
            </div>
            <div className="flex gap-2 w-full">
                <div className="w-full h-10 animate-skeleton rounded-sm"></div>
                <div className="w-full h-10 animate-skeleton rounded-sm"></div>
            </div>
        </div>
    )
}