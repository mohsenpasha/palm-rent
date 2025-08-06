'use client'
import CommonQuestionSection from "../components/CommonQuestionSection";
import { useEffect, useState } from "react";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useTranslation } from "react-i18next";

export default function RulesPage(){
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
            q:'ruleQ1',
            a:'ruleA1'
        },
        {
            q:'ruleQ2',
            a:'ruleA2'
        },
        {
            q:'ruleQ3',
            a:'ruleA3'
        },
        {
            q:'ruleQ4',
            a:'ruleA4'
        },
        {
            q:'ruleQ5',
            a:'ruleA5'
        },
        {
            q:'ruleQ6',
            a:'ruleA6'
        },
        {
            q:'ruleQ7',
            a:'ruleA7'
        },
    ])
    return(
        <>
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1336px]">
                <div className="py-4">
                    <div className="text-center py-4 md:text-2xl sm:text-xl text-lg font-bold text-[#3B82F6]">
                        {t('rules')}
                    </div>
                    <CommonQuestionSection gotTanslation newVersion rules={rules} setRules={setRules}/>
                </div>
            </div>
        </>

    )
}