import Image from "next/image";
import SearchBar from "./SearchBar";

export default function LandingFirstView(){
    return(
        <div>
            <div className="w-[85vw] max-w-[1500px] block m-auto">
                <div className="relative">
                    <div className="md:w-[430px] mx-auto lg:mx-0 lg:mb-8 mb-12 w-full lg:pt-44 pt-10  lg:text-right text-center">
                        <div className="text-[#3B82F6] lg:text-[44px] text-[32px] font-bold bg-bl">پالم رنت</div>
                        <div className="lg:text-[32px] text-[24px] font-bold">تضمین بهترین قیمت و آسانترین روش اجاره خودرو</div>
                    </div>
                    <SearchBar />
                    <Image className="absolute -z-10 left-0 top-0" src={'/images/glob-map.png'} width={960} height={484} alt=""></Image>
                </div>
            </div>
        </div>
    )
}