'use client'
import { IconCalender } from '@/app/[locale]/components/Icons'
import { PageNavBar } from '@/app/[locale]/favorite/page'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect, useState } from "react"
import { Calendar } from "react-multi-date-picker";


export default function PanelPage(){
    const [birthDate, setBirthDate] = useState(null);
    const [calendarToggle,setCalendarToggle] = useState(false)
    useEffect(()=>{
                NProgress.start()
                const timeout = setTimeout(() => {
                NProgress.done()
                }, 300)
                return () => clearTimeout(timeout)
            },[])
    function calanedarToggleHandler(){
        setCalendarToggle(!calendarToggle)
    }
    return(
        <>
            <PageNavBar text={'ویرایش مشخصات فردی'} backUrl={'/panel'}/>
            <div className='flex items-center justify-center'>
                <div className='w-[400px] mt-20 h-fit py-4 flex flex-col gap-2 '>
                    <div className='flex gap-2'>
                        <SingleInputElm title={'نام'}>
                            <input className='p-3 outline-0 w-full' type="text"/>
                        </SingleInputElm>
                        <SingleInputElm title={'نام خانوادگی'}>
                            <input className='p-3 outline-0 w-full' type="text"/>
                        </SingleInputElm>
                    </div>
                    <SingleInputElm title={'شماره موبایل'}>
                        <input className='p-3 outline-0 w-full' type="text"/>
                    </SingleInputElm>
                    <SingleInputElm title={'کد ملی'}>
                        <input className='p-3 outline-0 w-full' type="text"/>
                    </SingleInputElm>
                    <SingleInputElm title={'جنسیت'}>
                        <select className='w-full p-3' name="" id="">
                            <option value="">مرد</option>
                            <option value="">زن</option>
                        </select>
                    </SingleInputElm>
                    <SingleInputElm title={'تاریخ تولد'}>
                        <div onClick={calanedarToggleHandler} className='flex w-full items-center h-12'>
                            <div className='p-3 w-full'>{birthDate ? birthDate.format?.("YYYY/MM/DD") : ''}</div>
                            <span className='ml-2 cursor-pointer'>
                                <IconCalender/>
                            </span>
                        </div>
                    </SingleInputElm>
                    <button className='bg-[#3B82F6] p-4 px-2 text-white text-center rounded-lg'>
                        ذخیره تغییرات
                    </button>
                </div>
            </div>
            {calendarToggle && 
                <div className='fixed w-[100vw] h-[100vh] top-0 right-0 flex items-center justify-center'>
                    <div onClick={calanedarToggleHandler} className='absolute w-full h-full bg-[#00000055]'></div>
                    <div className='flex flex-col gap-2 bg-white p-4 relative rounded-lg justify-center'>
                        <Calendar
                            value={birthDate}
                            onChange={setBirthDate}
                            format="YYYY/MM/DD"
                            maxDate={new Date()}       // تا امروز
                            minDate={new Date(1900, 0, 1)} // از 1900
                            calendarPosition="bottom-center"
                            inputClass="custom-input"
                            style={{
                                width: "100%",
                                boxSizing: "border-box",
                            }}
                            />
                        <button onClick={calanedarToggleHandler} className='bg-[#3B82F6] p-2 px-2 text-white text-center rounded-lg cursor-pointer'>
                            تایید
                        </button>
                    </div>
                </div>
            }
        </>

    )
}

export function SingleInputElm({title,children}){
    return(
        <div className='flex flex-col gap-1'>
            <span className='text-[#32343E] text-sm'>{title}</span>
            <div className='bg-white border-[1px] border-[#0000001f] rounded-lg shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)]'>
                {children}
            </div>
        </div>
    )
}