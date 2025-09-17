'use client'
import { PageNavBar } from '@/app/[locale]/favorite/page'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from "react"
import { SingleInputElm } from '../personal/page'

export default function BankPage(){
    useEffect(()=>{
                NProgress.start()
                const timeout = setTimeout(() => {
                NProgress.done()
                }, 300)
                return () => clearTimeout(timeout)
            },[])
    return(
        <>
            <PageNavBar text={'ویرایش اطلاعات اکانت'} backUrl={'/panel'}/>
            <div className='flex items-center justify-center'>
                <div className='w-[400px] mt-20 h-fit py-4 flex flex-col gap-2 '>
                    <SingleInputElm title={'شماره موبایل'}>
                        <input className='p-3 outline-0 w-full' type="text"/>
                    </SingleInputElm>
                    <SingleInputElm title={'ایمیل'}>
                        <input className='p-3 outline-0 w-full' type="text"/>
                    </SingleInputElm>
                    <button className='bg-[#3B82F6] p-4 px-2 text-white text-center rounded-lg'>
                        ذخیره تغییرات
                    </button>
                </div>
            </div>
        </>
    )
}