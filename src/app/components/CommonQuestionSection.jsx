'use client'

import { useTranslation } from "react-i18next";

export default function CommonQuestionSection({newVersion = false,rules,setRules}){
    const { t, i18n } = useTranslation();
    return(
        <section className="my-12">
            <div className="w-[85vw] max-w-[1336px] m-auto">
                {!newVersion && 
                    <div className='text-center pb-6 md:text-2xl sm:text-xl text-lg font-bold text-[#3B82F6]'>
                        {t('commonQ')}
                    </div>
                }
                <QBox rules={rules} setRules={setRules}/>
            </div>
        </section>
    )
}

export function QBox({rules,setRules}){
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
        <div className="flex flex-wrap">
            {rules.map((item,index)=>{
                return(
                    <div key={index} className={`p-4 border-[1px] border-[#0000001f] bg-white text-[#4b5259] first:rounded-t-lg last:rounded-b-lg w-full h-fit`}>
                        <div onClick={()=>toggleQItem(index)} className="flex items-center justify-between cursor-pointer">
                            <span className="md:text-base text-sm font-bold">
                                {item.q}
                            </span>
                            <div className="flex size-8 relative bg-[#F6F6F6] p-3 rounded-lg">
                                <span className="absolute top-1/2 left-1/2 -translate-1/2 inline-block h-1 w-4 bg-[#545454] rounded-sm"></span>
                                <span className={`absolute top-1/2 left-1/2 -translate-1/2 inline-block h-1 w-4 bg-[#545454] rounded-sm transition-all ${item.toggle ? '' : 'rotate-90'}`}></span>
                            </div>
                        </div>
                        <div className={`${item.toggle ? 'mt-4 max-h-64 opacity-100 pt-2 pr-6' : 'max-h-0 pt-0 mt-0 opacity-0 pr-0'} whitespace-pre-line overflow-hidden transition-all duration-300 text-[#545454] md:text text-sm`}>
                            {item.a}
                        </div>
                    </div>
                )

            })}

        </div>
    )
}