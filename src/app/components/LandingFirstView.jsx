import Image from "next/image";
import SearchBar from "./SearchBar";

export default function LandingFirstView(){
    return(
        <div>
            <div className="w-[90vw] block m-auto">
                <div className="relative">
                    <div className="w-[430px] pt-44 mb-8">
                        <div className="text-[#3B82F6] text-[44px] font-bold bg-bl">پالم رنت</div>
                        <div className="text-[32px] font-bold">تضمین بهترین قیمت و آسانترین روش اجاره خودرو</div>
                    </div>
                    <SearchBar />
                    <Image className="absolute -z-10 left-0 top-0" src={'/images/glob-map.png'} width={960} height={484} alt=""></Image>
                </div>
            </div>
        </div>
    )
}