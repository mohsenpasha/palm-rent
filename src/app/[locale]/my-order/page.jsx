import Image from "next/image"
import { SingleCarGallery } from "../components/SingleCar"

export default function MyOrderPage(){
    return(
        <div className='w-[85vw] max-w-[1336px] m-auto'>
            {/* <LoginRequired/> */}
            {/* <EmptyList/> */}
            <div className="flex my-8 gap-2 flex-wrap">
                <SingleResCar/>
                <SingleResCar/>
                {/* <SingleResCar/>
                <SingleResCar/>
                <SingleResCar/>
                <SingleResCar/>
                <SingleResCar/> */}
            </div>
        </div>
    )
}


export function SingleResCar(){
    return(
        <div className="xl:w-[calc(25%-8px)] lg:w-[calc(33%-8px)] md:w-[calc(50%-8px)] w-full bg-white p-2 rounded-xl flex flex-col max-md:flex-row gap-2 max-sm:h-[100px] overflow-hidden">
            <div className="w-full max-sm:w-[100px] max-sm:aspect-square">
                <Image className="w-full h-full rounded-lg object-cover" src={'/images/singlecar-1.png'} width={150} height={150} alt=""/>
            </div>
            {/* <SingleCarGallery noBtn/> */}
            <div className="flex flex-col flex-1 justify-around">
                <div className="overflow-hidden w-full">
                    <div className="text-[#1C1C28] font-bold sm:text-base text-sm w-11/12 truncate overflow-hidden">اجاره روزانه تویوتا یاریس 2024 دبی</div>
                </div>
                <div className="text-[#2C3131] sm:text-xs text-[10px]">Audi r8 2022</div>
                <div className="text-[#8A8A8A] sm:text-base text-xs">تاریخ و ساعت تحویل : 30 تیر ساعت 12:50</div>
                <div className="text-[#3B82F6] font-bold text-xs">کد وچر : rwug3278nfui43</div>
            </div>
        </div>
    )
}

