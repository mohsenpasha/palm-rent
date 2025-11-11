'use client'
import CommonQuestionSection, { QBox } from "../components/CommonQuestionSection";
import { useEffect, useState } from "react";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IconBag, IconQHead1, IconQHead2, IconQHead3, IconQHead4 } from "../components/Icons";


export default function FaqComponent(){
    const t = useTranslations();
    useEffect(()=>{
                NProgress.start()
                const timeout = setTimeout(() => {
                NProgress.done()
                }, 300)
                return () => clearTimeout(timeout)
            },[])
    const [qInfo,setQInfo] = useState([
        {
            title:t('qHead1'),
            icon:<IconQHead1/>,
            status:true,
            qList:[{
                    q:'commonQ1',
                    a:'commonA1'
                },
                {
                    q:'commonQ2',
                    a:'commonA2'
                },
                {
                    q:'commonQ3',
                    a:'commonA3'
                },
                {
                    q:'commonQ4',
                    a:'commonA4'
                }
            ]
        },
        {
            title:t('qHead2'),
            icon:<IconQHead2/>,
            status:false,
            qList:[{
                    q:'commonQ5',
                    a:'commonA5'
                },
                {
                    q:'commonQ6',
                    a:'commonA6'
                },
                {
                    q:'commonQ7',
                    a:'commonA7'
                },
                {
                    q:'commonQ8',
                    a:'commonA8'
                }
            ]
        },
        {
            title:t('qHead3'),
            icon:<IconQHead3/>,
            status:false,
            qList:[{
                    q:'commonQ9',
                    a:'commonA9'
                },
                {
                    q:'commonQ10',
                    a:'commonA10'
                },
                {
                    q:'commonQ11',
                    a:'commonA11'
                },
                {
                    q:'commonQ1',
                    a:'commonA1'
                }
            ]
        },
        {
            title:t('qHead4'),
            icon:<IconQHead4/>,
            status:false,
            qList:[{
                    q:'commonQ1',
                    a:'commonA1'
                },
                {
                    q:'commonQ2',
                    a:'commonA2'
                },
                {
                    q:'commonQ3',
                    a:'commonA3'
                },
                {
                    q:'commonQ4',
                    a:'commonA4'
                }
            ]
        }
    ])
    const [selectedInfo,setSelectedInfo] = useState()
    useEffect(()=>{
        setSelectedInfo(
            qInfo[qInfo.findIndex((item)=>item.status == true)]
        )
    },[qInfo])
    function changeActiveQInfo(targetIndex){
        setQInfo(qInfo.map((item,index)=>{
            if(index == targetIndex){
                item.status = true
            }
            else{
                item.status = false
            }
            return item
        }))
    }
    function setSelectedQList(newQList){
        setSelectedInfo({...selectedInfo,qList:newQList})
    }
    return(
        <>
            <div className="relative w-full md:h-80 sm:h-52 h-48">
                <Image className="object-cover" src={'/images/faq.png'} fill alt=""/>
            </div>
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1100px]">
                <div className="py-4">
                    <div className="flex flex-col items-center">
                        <div className="text-center py-4 md:text-4xl text-2xl font-bold text-[#0A1931]">
                            {t('commonQ')}
                        </div>
                        <div className="text-center w-[400px] text-[#6B6B6B]">
                            {t("faqText1")}
                        </div>
                        <div className="flex mt-8 md:gap-8 gap-4 md:flex-nowrap flex-wrap">
                            {qInfo.map((item,index)=>{
                                return(
                                    <div onClick={()=>changeActiveQInfo(index)} key={index} className={`${item.status ? 'bg-[#3B82F6] text-white' : 'bg-white text-[#DF900A]'} rounded-lg p-4 shadow-[0_10px_20px_0px_rgba(0,0,0,.08)] flex flex-col justify-center items-center gap-4 lg:w-48 md:w-32 w-[calc(50%-8px)] font-bold cursor-pointer transition-all`}>
                                        {item.icon}
                                        <div className={`transition-all ${item.status ? '' : 'text-black'}`}>
                                            {item.title}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex flex-col w-full my-8">
                            <div className="border-b-[1px] border-[#0000001f] text-[#3B82F6] lg:text-3xl md:text-2xl text-xl  pb-4 w-full font-bold">
                                {selectedInfo?.title}
                            </div>
                            <div className="mt-8">
                                <QBox gotTanslation rules={selectedInfo?.qList} setRules={setSelectedQList}/>
                            </div>
                            {/* <CommonQuestionSection newVersion gotTanslation rules={} setRules={setSelectedInfo}/> */}
                        </div>
                    </div>
                </div>
            </div>
            <QContactForm/>
        </>

    )
}


export function QContactForm(){
    const t = useTranslations();
    return(
        <>
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1100px]">
                <div className="flex items-end w-full justify-between sm:mb-8">
                    <div className="lg:text-4xl sm:text-2xl text-lg font-bold lg:w-96 leading-12">
                        {t('faqText2')}
                    </div>
                    <div className="w-96 text-[#545E70] lg:block hidden">
                        {t('faqText3')}
                    </div>
                </div>
                <div className="flex w-full justify-between gap-4">
                    <div className="bg-[#FFFFFF] lg:w-7/12 w-full rounded-xl p-4 flex flex-col">
                        <div className="text-xl font-bold mb-4">{t('faqText4')}</div>
                        <div className="flex flex-col gap-4 flex-1 justify-between">
                            <input className="w-full bg-[#F5F5F5] p-3 rounded-lg border border-[#0000001f] outline-0" type="text" placeholder={t('yourName')}/>
                            <input className="w-full bg-[#F5F5F5] p-3 rounded-lg border border-[#0000001f] outline-0" type="text" placeholder={t('yourEmail')}/>
                            <input className="w-full bg-[#F5F5F5] p-3 rounded-lg border border-[#0000001f] outline-0" type="text" placeholder={t('phoneNumber')}/>
                            <textarea className="w-full resize-none h-32 bg-[#F5F5F5] p-3 rounded-lg border border-[#0000001f] outline-0" placeholder={t('yourMessage')}></textarea>
                            <button className="bg-[#3B82F6] text-white rounded-lg p-3 grow-0 sm:w-fit w-full px-8 cursor-pointer">{t('sendMessage')}</button>
                        </div>
                    </div>
                    <div className="flex-1 lg:block hidden">
                        <Image className="rounded-xl" src={'/images/Qcontact.png'} width={420} height={494} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}