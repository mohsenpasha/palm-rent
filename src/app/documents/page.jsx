'use client'

import { useState } from "react"
import CommonQuestionSection from "../components/CommonQuestionSection"
import Image from "next/image"


export default function DocumentsPage(){
    const [rules,setRules] = useState([
        {
            q:'مدارک مورد نیاز جهت اجاره خودرو در دبی',
            a:<>
                <div>
                    <p>در شرکت پالم رنت، تلاش ما ارائه خدماتی حرفه‌ای و راحت به مشتریان عزیز است. به همین دلیل، لطفاً برای تسهیل فرآیند اجاره خودرو و اطمینان از تجربه‌ای بی‌دغدغه در زمان تحویل خودرو، مدارک زیر را آماده داشته باشید.</p>
                    <ul className="pr-4">
                        <li><strong>مدارک مورد نیاز برای مسافران ایرانی:</strong>
                            <ul className="pr-4">
                                <li>پاسپورت ایرانی</li>
                                <li>گواهینامه رانندگی بین‌المللی یا گواهینامه معتبر محلی</li>
                                <li>تصویر بلیط پرواز در صورت تحویل خودرو در فرودگاه</li>
                            </ul>
                        </li>
                        <li><em>نکته ویژه:</em> اگر بدون گواهینامه بین‌المللی به دبی سفر کرده‌اید، «پالم رنت» ظرف کمتر از یک ساعت، گواهینامه بین‌المللی معتبر برای شما صادر می‌کند.</li>
                        <li><strong>مدارک مورد نیاز برای مقیمان امارات:</strong>
                            <ul className="pr-4">
                                <li>پاسپورت امارات یا ویزای اقامت معتبر</li>
                                <li>گواهینامه رانندگی امارات</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </>
        },
        {
            q:'مدارک مورد نیاز جهت اجاره خودرو در ترکیه',
            a:<div class="panel-content-inner">
                <p>در شرکت پالم رنت، هدف ما فراهم کردن فرآیند اجاره خودرو به ساده‌ترین و راحت‌ترین شکل ممکن برای مشتریان عزیز است. برای تکمیل فرآیند رزرو و تحویل خودرو، لازم است مدارک زیر را به همراه داشته باشید. این مدارک به منظور اطمینان از امنیت و خدمات بهتر به مشتریان الزامی است.</p>
                <ul className="pr-4">
                    <li><strong>مدارک مورد نیاز برای مسافران ایرانی:</strong>
                        <ul className="pr-4">
                            <li>پاسپورت (کپی صفحه اول)</li>
                            <li>گواهینامه رانندگی بین‌المللی یا گواهینامه معتبر محلی</li>
                            <li>تصویر بلیط هواپیما در صورت تحویل خودرو در فرودگاه</li>
                        </ul>
                    </li>
                    <li><strong>مدارک مورد نیاز برای افراد مقیم ترکیه:</strong>
                        <ul className="pr-4">
                            <li>پاسپورت ترکیه یا کارت اقامت ترکیه</li>
                            <li>گواهینامه رانندگی معتبر ترکیه</li>
                        </ul>
                    </li>
                    <li><strong>مدارک مورد نیاز برای توریست‌ها و مسافران خارجی دیگر:</strong>
                        <ul className="pr-4">
                            <li>پاسپورت</li>
                            <li>گواهینامه رانندگی بین‌المللی یا گواهینامه معتبر محلی</li>
                            <li>تصویر بلیط پرواز در صورت نیاز به تحویل در فرودگاه</li>
                        </ul>
                    </li>
                </ul>
            </div>
        },
        {
            q:'مدارک مورد نیاز جهت اجاره خودرو در عمان و مسقط',
            a:<div class="panel-content-inner">
                <p>شرکت پالم رنت در تلاش است فرآیند اجاره خودرو را برای مشتریان خود در عمان و مسقط به سادگی و کارآمدی ارائه دهد. لطفاً پیش از اجاره خودرو، مدارک زیر را آماده کنید تا به راحتی و بدون مشکل بتوانید خودرو را تحویل بگیرید.</p>
                <ul className="pr-4">
                    <li><strong>مدارک لازم برای مسافران بین‌المللی:</strong>
                        <ul className="pr-4">
                            <li>نسخه تصویری از گواهینامه رانندگی بین‌المللی</li>
                            <li>کپی ویزای معتبر</li>
                            <li>تصویر پاسپورت راننده</li>
                            <li>پرداخت هزینه اجاره به همراه ودیعه نقدی به عنوان تضمین (Deposit)</li>
                        </ul>
                    </li>
                    <li><strong>مدارک لازم برای ساکنان دائمی عمان:</strong>
                        <ul className="pr-4">
                            <li>ارائه گواهینامه رانندگی صادرشده از عمان</li>
                            <li>ارائه کپی کارت اقامت معتبر در عمان</li>
                            <li>داشتن ویزای معتبر عمانی</li>
                            <li>ارائه پاسپورت معتبر عمانی</li>
                            <li>پرداخت ودیعه به عنوان ضمانت (Deposit)</li>
                        </ul>
                    </li>
                </ul>
            </div>
        },
    ])
    return(
        <>
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1500x]">
                <div className="py-4">
                    <div className="text-center py-4 md:text-2xl sm:text-xl text-lg font-bold text-[#3B82F6]">
                        مدارک مورد نیاز
                    </div>
                    <div>
                        <CommonQuestionSection newVersion rules={rules} setRules={setRules}/>
                        <DocumentImages/>
                    </div>
                </div>
            </div>
        </>

    )
}

export function DocumentImages(){
    return(
        <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1500x]">
            <div className="flex flex-col w-full items-center justify-center gap-2">
                <div className="relative p-4 border-[1px] border-[#EBEBEB] bg-white rounded-lg w-fit flex flex-col item-center justify-center font-bold lg:text-lg md:text-base sm:text-md text-sm text-center gap-2">
                    <div>تصویر نمونه برای شناسایی خودروهای بدون نیاز به دپوزیت</div>
                    <Image src={'/images/check_editor_1726312961_deposit.webp'} width={1000} height={1000} alt=""/>
                </div>
                <div className="relative p-4 border-[1px] border-[#EBEBEB] bg-white rounded-lg w-fit flex flex-col item-center justify-center font-bold lg:text-lg md:text-base sm:text-md text-sm text-center gap-2">
                    <div>نمونه عکس از گواهینامه بین‌المللی </div>
                    <Image src={'/images/check_editor_1726313214_نمونه عکس از گواهینامه بین_المللی.webp'} width={500} height={1000} alt=""/>
                </div>
                <div className="relative p-4 border-[1px] border-[#EBEBEB] bg-white rounded-lg w-fit flex flex-col item-center justify-center font-bold lg:text-lg md:text-base sm:text-md text-sm text-center gap-2">
                    <div>نمونه عکس از پاسپورت ایرانی</div>
                    <Image src={'/images/check_editor_1726314604_11 (2).webp'} width={500} height={1000} alt=""/>
                </div>
                <div className="relative p-4 border-[1px] border-[#EBEBEB] bg-white rounded-lg w-fit flex flex-col item-center justify-center font-bold lg:text-lg md:text-base sm:text-md text-sm text-center gap-2">
                    <div>نمونه عکس از ویزا توریستی امارات </div>
                    <Image src={'/images/check_editor_1726313736_نمونه عکس از ویزا توریستی.webp'} width={500} height={1000} alt=""/>
                </div>
                <div className="relative p-4 border-[1px] border-[#EBEBEB] bg-white rounded-lg w-fit flex flex-col item-center justify-center font-bold lg:text-lg md:text-base sm:text-md text-sm text-center gap-2">
                    <div>نمونه عکس از کارت اقامت امارات (آی دی کارت)</div>
                    <Image src={'/images/check_editor_1726313986_نمونه عکس از کارت اقامت امارات (آی دی کارت).webp'} width={500} height={1000} alt=""/>
                </div>
                <div className="relative p-4 border-[1px] border-[#EBEBEB] bg-white rounded-lg w-fit flex flex-col item-center justify-center font-bold lg:text-lg md:text-base sm:text-md text-sm text-center gap-2">
                    <div>نمونه عکس از گواهینامه رانندگی امارات</div>
                    <Image src={'/images/check_editor_1726314441_نمونه عکس از گواهینامه رانندگی امارات.webp'} width={500} height={1000} alt=""/>
                </div>
            </div>
        </div>
    )
}