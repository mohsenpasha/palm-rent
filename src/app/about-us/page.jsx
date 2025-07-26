'use client'

import Link from "next/link"


export default function AboutUsPage(){
    return(
        <>
            <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1500x]">
                <div className="py-4">
                    <div className="text-center py-4 lg:text-[32px] md:text-2xl text-lg font-bold text-[#3B82F6]">
                        درباره ما
                    </div>
                    <FirstAboutSection/>
                </div>
            </div>
        </>

    )
}

export function FirstAboutSection(){
    return(
        <section>
            <div className="xl:w-[60vw] w-[95vw] m-auto max-w-[1500x]">
                <div className="shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] bg-white rounded-lg p-4">
                    <div className="text-center lg:text-2xl md:text-lg text-md font-bold my-4">
                        درباره شرکت اجاره خودرو پالم رنت
                    </div>
                    <div className="border-[2px] border-dashed border-[#00cec9] rounded-lg p-4 bg-[linear-gradient(135deg,#f1f2f6,#ffffff)] flex flex-col gap-4 text-[#212529] lg:text-base sm:text-md text-sm">
                        <div>
                            <h3 className="lg:text-2xl md:text-lg text-md text-[#00b894]">خدمات ما در دبی</h3>
                            <p>دفتر پالم رنت در دبی یکی از فعال‌ترین مراکز اجاره خودرو در امارات است که با ارائه خدماتی چون <strong>بدون دپوزیت</strong>، <strong>بدون محدودیت کیلومتر</strong>، <strong>بیمه رایگان</strong> و <strong>پشتیبانی ۲۴ ساعته</strong>، تجربه‌ای کاملاً بی‌دغدغه را برای مسافران و ساکنان فراهم می‌کند.</p>
                        </div>
                        <div>
                            <h3 className="lg:text-2xl md:text-lg text-md text-[#e17055]">خدمات ما در ترکیه</h3>
                            <p>ما در استانبول ترکیه نیز خدمات خود را به‌صورت گسترده ارائه می‌دهیم. بدون نیاز به دپوزیت یا هرگونه ودیعه، و بدون هیچ‌گونه محدودیت در کیلومتر، تنها کافی‌ست <strong>هزینه اجاره را پرداخت کنید</strong>. خودروها شامل اقتصادی، خانوادگی و SUV هستند و با پشتیبانی فارسی‌زبان عرضه می‌شوند.</p>
                        </div>
                        <div>
                            <h3 className="lg:text-2xl md:text-lg text-md text-[#0984e3]">خدمات ما در عمان</h3>
                            <p>در مسقط عمان نیز پالم رنت آماده ارائه خودروهای روز دنیا است. با امکان تحویل در فرودگاه، رزرو سریع آنلاین، بیمه پایه رایگان و پشتیبانی تلفنی، سفر شما در عمان آسان و لذت‌بخش خواهد بود.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 my-4">
                        <div className="p-4 rounded-lg flex flex-col gap-2 bg-[#ecf0f1] text-[#212529]">
                            <h3 className="lg:text-2xl md:text-lg text-md font-bold">شعبه تهران</h3>
                            <p className="lg:text-base md:text-md sm:text-sm text-xs">بزرگراه صیاد شیرازی، میدان حسین‌آباد، جنب بانک ملل. دفتر تولید محتوا پالم رنت</p>
                            <Link className="text-[#0d6efd]" target="_blank" href={'https://wa.me/989211284055'}>+989211284055</Link>
                        </div>
                        <div className="p-4 rounded-lg flex flex-col gap-2 bg-[#fff3e0] text-[#212529]">
                            <h3 className="lg:text-2xl md:text-lg text-md font-bold">شعبه اهواز</h3>
                            <p className="lg:text-base md:text-md sm:text-sm text-xs">خیابان انقلاب، جنب بانک سپه، فروشگاه جامبو، طبقه ۴، واحد ۳</p>
                            <Link className="text-[#0d6efd]" target="_blank" href={'https://wa.me/989211384055'}>+989211384055</Link>
                        </div>
                        <div className="p-4 rounded-lg flex flex-col gap-2 bg-[#e0f7fa] text-[#212529]">
                            <h3 className="lg:text-2xl md:text-lg text-md font-bold">شعبه دبی</h3>
                            <p className="lg:text-base md:text-md sm:text-sm text-xs">خیابان Airport Road، ساختمان Palm Rent، طبقه اول، نزدیک فرودگاه بین‌المللی دبی</p>
                            <Link className="text-[#0d6efd]" target="_blank" href={'https://wa.me/971556061134'}>+971556061134</Link>
                        </div>
                        <div className="p-4 rounded-lg flex flex-col gap-2 bg-[#fbe9f0] text-[#212529] text-center">
                            <h3 className="lg:text-2xl md:text-lg text-md font-bold">صفحه اینستاگرام پالم رنت</h3>
                            <p className="lg:text-base md:text-md sm:text-sm text-xs">ما را در اینستاگرام دنبال کنید. بیش از <strong>200000 دنبال‌کننده</strong> به ما اعتماد کرده‌اند.</p>
                            <Link className="text-[#0d6efd]" target="_blank" href={'https://instagram.com/palm.rent'}>@palm.rent</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}