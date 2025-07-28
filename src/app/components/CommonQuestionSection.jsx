'use client'

import { useState } from "react"

export default function CommonQuestionSection({newVersion = false,rules,setRules}){
    return(
        <section className="my-12">
            <div className="w-[85vw] max-w-[1100px] m-auto">
                {!newVersion && 
                    <div className='text-center pb-6 md:text-2xl sm:text-xl text-lg font-bold text-[#3B82F6]'>
                        سوالات متداول
                    </div>
                }
                <QBox newVersion={newVersion} rules={rules} setRules={setRules}/>
            </div>
        </section>
    )
}

export function QBox({newVersion = false,rules,setRules}){
    function toggleQItem(targetIndex){
        setRules(rules.map((item,index)=>{
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
            {rules.map((item,index)=>{
                return(
                    <div key={index} className={`lg:p-8 p-4 border-[1px] border-[#0000001f] bg-white lg:rounded-2xl rounded-lg w-full ${newVersion ? 'w-full' : 'lg:w-[calc(50%-8px)]'} h-fit`}>
                        <div onClick={()=>toggleQItem(index)} className="flex items-center justify-between cursor-pointer">
                            <span className="md:text-xl sm:text-lg text-base font-bold">
                                {item.q}
                            </span>
                            <div className="flex size-11 relative bg-[#F6F6F6] p-3 rounded-lg">
                                <span className="absolute top-1/2 left-1/2 -translate-1/2 inline-block h-1 w-5 bg-[#545454] rounded-sm"></span>
                                <span className="absolute top-1/2 left-1/2 -translate-1/2 inline-block h-1 w-5 bg-[#545454] rounded-sm rotate-90"></span>
                            </div>
                        </div>
                        <div className={`${item.toggle ? 'mt-4 max-h-64' : 'max-h-0 mt-0'} whitespace-pre-line overflow-hidden transition-all text-[#545454] lg:w-10/12 md:text text-sm`}>
                            {item.a}
                        </div>
                    </div>
                )

            })}

        </div>
    )
}