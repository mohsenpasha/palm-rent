'use client'
import { useState } from "react"
import { IconCarCat1, IconCarCat2, IconCarCat3, IconCarCat4, IconCarCat5, IconCarCat6, IconCarCat7, IconCarCat8 } from "./Icons"

export default function CarCategorySection(){
    const [carList,setCarList] = useState([
        {
            name:'ون',
            icon:<IconCarCat1/>
        },
        {
            name:'ماشین برقی',
            icon:<IconCarCat2/>
        },
        {
            name:'بیزینسی',
            icon:<IconCarCat3/>
        },
        {
            name:'خودرو کروک',
            icon:<IconCarCat4/>
        },
        {
            name:'افرودی',
            icon:<IconCarCat5/>
        },
        {
            name:'اسپورت',
            icon:<IconCarCat6/>
        },
        {
            name:'اقتصادی',
            icon:<IconCarCat7/>
        },
        {
            name:'ماشین لوکس',
            icon:<IconCarCat8/>
        },
    ])
    return(
        <section>
            <div className="w-[85vw] m-auto my-16">
                <div className="text-center">
                    دسته بندی خودرو ها
                </div>
                <div className="flex justify-between gap-7">
                    {carList.map((item,index)=>{
                        return(
                            <div key={index} className="flex flex-col items-center justify-between gap-2 rounded-2xl bg-white w-full py-4">
                                {item.icon}
                                <div>
                                    {item.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}