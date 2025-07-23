'use client'

import { useState } from "react"

export default function CommonQuestionSection(){
    return(
        <section className="my-12">
            <div className="w-[85vw] max-w-[1500px] m-auto">
                <div className='text-center pb-12 lg:text-[32px] md:text-2xl text-lg font-bold text-[#3B82F6]'>
                    سوالات متداول
                </div>
                <QBox/>
            </div>
        </section>
    )
}

export function QBox(){
    const [qList,setQList] = useState([
        {
            q:'پارک خودرو در دبی چگونه است ؟',
            a:'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
            toggle:false
        },
        {
            q:'پارک خودرو در دبی چگونه است ؟',
            a:'test',
            toggle:false
        },
        {
            q:'پارک خودرو در دبی چگونه است ؟',
            a:'test',
            toggle:false
        },
        {
            q:'پارک خودرو در دبی چگونه است ؟',
            a:'test',
            toggle:false
        },
    ])
    function toggleQItem(targetIndex){
        setQList(qList.map((item,index)=>{
            if(index == targetIndex){
                return {...item,toggle:!item.toggle}
            }
            else{
                return {...item,toggle:false}
            }
        }))
    }
    return(
        <div className="flex flex-wrap gap-2">
            {qList.map((item,index)=>{
                return(
                    <div key={index} className="lg:p-8 p-4 border-[1px] border-[#E6E6E6] bg-white lg:rounded-2xl rounded-lg w-full lg:w-[calc(50%-8px)] h-fit">
                        <div onClick={()=>toggleQItem(index)} className="flex items-center justify-between cursor-pointer">
                            <span className="md:text-xl sm:text-lg text-base font-bold">
                                {item.q}
                            </span>
                            <div className="flex size-11 relative bg-[#F6F6F6] p-3 rounded-lg">
                                <span className="absolute top-1/2 left-1/2 -translate-1/2 inline-block h-1 w-5 bg-[#545454] rounded-sm"></span>
                                <span className="absolute top-1/2 left-1/2 -translate-1/2 inline-block h-1 w-5 bg-[#545454] rounded-sm rotate-90"></span>
                            </div>
                        </div>
                        <div className={`${item.toggle ? 'mt-4 max-h-32' : 'max-h-0 mt-0'} overflow-hidden transition-all text-[#545454] lg:w-10/12 md:text text-sm`}>
                            {item.a}
                        </div>
                    </div>
                )

            })}

        </div>
    )
}