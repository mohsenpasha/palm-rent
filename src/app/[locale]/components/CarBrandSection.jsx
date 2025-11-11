import Image from "next/image";
import Link from "next/link";
import { IconArrowHandle } from "./Icons";

export default function CarBrandSection(){
    const brandLists = [
        {
            title:'Porsche',
            src:'/images/brands/Porsche.png'
        },
        {
            title:'Nissan',
            src:'/images/brands/Nissan.png'
        },
        {
            title:'Kia',
            src:'/images/brands/Kia.png'
        },
        {
            title:'Land Rover',
            src:'/images/brands/LandRover.png'
        },
        {
            title:'BMW',
            src:'/images/brands/BMW.png'
        },
        {
            title:'Mercedes Benz',
            src:'/images/brands/MercedesBenz.png'
        },
        {
            title:'Volkswagen',
            src:'/images/brands/Volkswagen.png'
        },
        {
            title:'RollsRoyce',
            src:'/images/brands/RollsRoyce.png'
        },
        {
            title:'Ferrari',
            src:'/images/brands/Ferrari.png'
        },
        {
            title:'Jeep',
            src:'/images/brands/Jeep.png'
        },
        {
            title:'Toyota',
            src:'/images/brands/Toyota.png'
        },
        {
            title:'Lamborghini',
            src:'/images/brands/Lamborghini.png'
        },
    ]
    return(
        <section className="text-center">
            <div className="text-center text-lg font-semibold mb-6">
                برند های ماشین پالم رنت
            </div>
            <div className="border border-[#0000001f] bg-white flex flex-wrap text-[#373737] rounded-lg overflow-hidden md:text-base sm:text-sm text-xs">
                {brandLists.map((item,index)=>{
                    return(
                        <div key={index} className="lg:w-1/6 sm:w-3/12 w-1/3 p-4 flex flex-col items-center justify-center gap-1 border border-[#0000001f]">
                            <Image src={item.src} width={60} height={40} alt=""/>
                            <div>{item.title}</div>
                        </div>
                    )
                })}
                <Link className="border border-[#0000001f] py-3 w-full flex items-center gap-2 justify-center text-[#3B82F6]" href={'#'}>
                    دیدن برند ها دیگر
                    <span className="flex size-4 items-center">
                        <IconArrowHandle className={'-rotate-45'}/>
                    </span>
                </Link>
            </div>
        </section>
    )
}