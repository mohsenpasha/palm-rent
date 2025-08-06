'use client'
import CommonQuestionSection from "../components/CommonQuestionSection";
import { useEffect, useState } from "react";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useTranslation } from "react-i18next";


export default function FaqPage(){
    const { t, i18n } = useTranslation();
    useEffect(()=>{
                NProgress.start()
                const timeout = setTimeout(() => {
                NProgress.done()
                }, 300)
                return () => clearTimeout(timeout)
            },[])
    const [rules,setRules] = useState([
        {
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
        },
        {
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
        },
        {
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
            q:'commonQ12',
            a:'commonA12'
        }
    ])
    return(
        <>
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1336px]">
                <div className="py-4">
                    <div className="text-center py-4 md:text-2xl sm:text-xl text-lg font-bold text-[#3B82F6]">
                        {t('commonQ')}
                    </div>
                    <CommonQuestionSection newVersion gotTanslation rules={rules} setRules={setRules}/>
                </div>
            </div>
        </>

    )
}