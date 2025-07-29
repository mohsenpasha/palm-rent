import { useState } from "react"
import { IconArrow, IconGrate, IconInfo, IconSort1, IconTick2 } from "./Icons"
import Image from "next/image"
import { SingleCarOptions } from "./SingleCar"
import Link from "next/link"
import { changeDescriptionPopup, changeRoadMapStep } from "@/redux/slices/globalSlice"
import { useDispatch, useSelector } from "react-redux"
import DescriptionPopup from "./DescriptionPopup"
import { useTranslation } from "react-i18next"

export default function InformationStep(){
    const descriptionPopup = useSelector((state)=>state.global.descriptionPopup)
    const dispatch = useDispatch()
    function nextStep(){
        dispatch(changeRoadMapStep(3))
    }
    return(
        <>
            <div className="flex w-full flex-1 gap-4 lg:flex-nowrap flex-wrap">
                <div className="flex flex-col flex-1 lg:w-auto w-full h-fit">
                    <DeliverySpot/>
                    <ExtraServices/>
                    <FineDeposit/>
                    <PaymentDetail/>
                    <PersonalInfoBox/>
                    <button onClick={nextStep} className="w-10/12 bottom-4 m-auto sticky bg-[#3B82F6] rounded-2xl text-[#FFFFFF] p-4 lg:text-xl sm:text-lg text-sm my-2">
                        خودرو خود را رزرو کنید
                    </button>
                    <div className="text-center text-[#8A8A8A] md:text-sm text-xs pb-4">
                        در ثبت اولیه نیازی به پرداخت نیست
                    </div>
                </div>
                <div className="w-1/3 lg:flex hidden h-fit sticky top-[100px]">
                    <SideCarDetail/>
                </div>
            </div>
            {descriptionPopup.description && 
                <DescriptionPopup/>
            }
        </>
    )
}

export function DeliverySpot(){
    const [otherSpotChecked,setOtherSpotChecked] = useState(false)
    return(
        <div className="border-[1px] border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl my-4 flex-1 bg-white">
            <div className="mb-4">
                <div className="lg:text-lg sm:text-base text-sm font-semibold">دوست دارید خودرو خود را کجا تحویل بگیرید ؟</div>
            </div>
            <div>
                <div className="md:text-base sm:text-sm text-xs bg-[#F4F4F4] rounded-2xl p-4 flex items-center justify-between cursor-pointer">
                    <div>
                        <div>مکان محل تحویل خود را انتخاب کنید </div>
                        <div className="text-[#545454] text-sm">از 9 مکان موجود انتخاب کنید</div>
                    </div>
                    <IconArrow className={'rotate-90'}/>
                </div>
                <label className="flex gap-2 items-center my-2 mt-4 lg:text-base md:text-sm text-xs" htmlFor="anotherSpotDelivery">
                    <div className="bg-[#B5B5B5] transition-all has-[:checked]:bg-[#55FF55] md:w-[61px] md:h-[30px] w-[45px] h-[20px] rounded-[20px] relative shadow-[inset_0_1px_2px_0px_rgba(0,0,0,.25)]">
                        <input id="anotherSpotDelivery" className="peer hidden" type="checkbox" />
                        <span className="absolute md:size-[30px] size-[20px] bg-white transition-all rounded-full translate-0 peer-checked:left-full peer-checked:-translate-x-full left-0 shadow-[-2px_1px_4px_0px_rgba(0,0,0,.15)]"></span>
                    </div>
                    خودرو را در محل دیگری تحویل میدهم
                </label>
            </div>
        </div>
    )
}


export function SideCarDetail(){
    return(
        <div className="border-[1px] border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl my-4 flex-1 bg-white">
            <div className="mb-4">
                <div className="lg:text-lg sm:text-base text-sm font-semibold">به صورت آنلاین خودرو خود را رزرو کنید </div>
            </div>
            <DetailGallery/>
            <div className="py-3 border-b-[1px] border-[#0000001f]">
                <div className="flex w-full justify-between my-2">
                    <div className="flex gap-3">
                        <div className="text-[#1D1D1D]">
                            قیمت روزانه برای <span className="text-[#3B82F6]">8 روز</span> رزرو
                        </div>
                        <div className="flex gap-1 items-center">
                            <span className="text-[#A7A7A7] text-sm">140</span>
                            <span className="text-[#10B981]">98</span>
                            <span>درهم</span>
                        </div>
                    </div>
                    Audi r8 2022
                </div>
                <SingleCarOptions data={{gasType:'بنزین',gearbox:'دنده‌ای',suitcase:3,passengers:4}}/>
            </div>
            <ReservedServices/>
            <div className="flex flex-col gap-2 mb-6">
                <div className="">
                    کرایه تویتا پاریس در دبی از پالم رنت
                </div>
                <p className="text-xs text-justify">
                    تویوتا یاریس ۲۰۲۴ یکی از خودروهای کامپکت و محبوب برای اجاره در دبی است این خودرو با طراحی زیبا و امکانات پیشرفته، تجربه ای راحت و مطمئن را برای رانندگان و مسافران فراهم می کند. اگر به دنبال اجاره خودرو در دبی هستید تویوتا یاریس یکی از بهترین گزینه ها برای شماست. این خودرو علاوه بر مصرف سوخت بهینه و امکانات ایمنی ،پیشرفته دارای فضای داخلی مدرن و طراحی جذاب است شرکت پالم رنت با ارائه خدمات بینظیر و پشتیبانی شبانه روزی بهترین تجربه اجاره خودرو را برای مشتریان خود فراهم می کند شما میتوانید با استفاده از خدمات اجاره خودرو در دبی از پالم رنت، سفری راحت و بی دغدغه را تجربه کنید.تویوتا یاریس ۲۰۲۴ یکی از خودروهای کامپکت و محبوب برای اجاره در دبی است این خودرو با طراحی زیبا و امکانات پیشرفته، تجربه ای راحت و مطمئن را برای رانندگان و مسافران فراهم می کند. اگر به دنبال اجاره خودرو در دبی هستید تویوتا یاریس یکی از بهترین گزینه ها برای شماست. این خودرو علاوه بر مصرف سوخت بهینه و امکانات ایمنی ،پیشرفته دارای فضای داخلی مدرن و طراحی جذاب است شرکت پالم رنت با ارائه خدمات بینظیر و پشتیبانی شبانه روزی بهترین تجربه اجاره خودرو را برای مشتریان خود فراهم می کند شما میتوانید با استفاده از خدمات اجاره خودرو در دبی از پالم رنت، سفری راحت و بی دغدغه را تجربه کنید.
                </p>
                <Link className="text-[#3B82F6] text-left text-xs my-2" href={'#'}>بیشتر بخوانید !</Link>
            </div>
        </div>
    )
}

export function DetailGallery(){
    return(
        <div className="flex w-full flex-col gap-2">
            <div className="flex flex-1 rounded-lg cursor-pointer">
                <Image className="rounded-lg" src={'/images/singlecar-1.png'} width={481} height={254} alt=""></Image>
            </div>
            <div className="flex w-full gap-2">
                <div className="flex-1 cursor-pointer">
                    <Image className="rounded-lg" src={'/images/singlecar-1.png'} width={115} height={88} alt=""></Image>
                </div>
                <div className="flex-1 cursor-pointer">
                    <Image className="rounded-lg" src={'/images/singlecar-1.png'} width={115} height={88} alt=""></Image>
                </div>
                <div className="flex-1 cursor-pointer">
                    <Image className="rounded-lg" src={'/images/singlecar-1.png'} width={115} height={88} alt=""></Image>
                </div>
                <div className="flex-1 cursor-pointer">
                    <Image className="rounded-lg" src={'/images/singlecar-1.png'} width={115} height={88} alt=""></Image>
                </div>
            </div>
        </div>
    )
}

export function ReservedServices(){
    return(
        <div className="w-full my-4 border-b-[1px] border-b-[#E2E2E2]">
            <div>خدمات موجود در رزرو شما :</div>
            <div className="flex flex-col justify-between items-center">

                <div className="flex w-full justify-between my-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-1 text-[#10B981]">
                            <div className="flex w-[18px]">
                                <IconTick2/>
                            </div>
                                بدون دیپوزیت (ودیعه خلافی)
                        </div>
                        <div className="px-5 text-xs text-[#545454]">
                            با انتخاب گزینه بدون دپوزیت (ودیعه خلافی)
                        </div>
                    </div>
                    <div className="text-xs text-[#B0B0B0] flex items-center gap-1">
                        <IconInfo/>
                        توضیحات
                    </div>
                </div>
                
                

            </div>

        </div> 
    )
}

export function ExtraServices(){
    const [services,setServices] = useState([
        {
            title:'صندلی کودک',
            price:{amount:29,currency:'AED'},
            description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
        }
    ])
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    function openDescriptionPopup(targetIndex){
        dispatch(changeDescriptionPopup({title:services[targetIndex].title,description:services[targetIndex].description}))
    }
    return(
        <div className="border-[1px] border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl my-4 flex-1 bg-white">
            <div className="mb-4">
                <div className="lg:text-lg sm:text-base text-sm font-semibold">خدمات مازاد خود را انتخاب کنید :</div>
            </div>
            <div className="flex flex-col gap-4">
                {services.map((item,index)=>{
                    return(
                        <div className="md:text-base sm:text-sm text-xs bg-[#F4F4F4] rounded-2xl p-4 flex items-center justify-between">
                            <div className="flex gap-2 items-center">
                                <label className="flex gap-2 items-center cursor-pointer">
                                    <input type="checkbox" className="peer hidden" />
                                    <div className="md:size-[40px] sm:size-[36px] size-[30px] text-[#3B82F6] rounded-lg overflow-hidden relative hidden peer-checked:flex">
                                        <div className="absolute z-1 w-full h-full md:border-[10px] sm:border-[8px] border-[6px] border-[#3B82F6] top-0 right-0"></div>
                                        <IconTick2 className={'absolute z-10'}/>
                                    </div>
                                    <div className="md:size-[40px] sm:size-[36px] size-[30px] border-2 border-[#3B82F6] rounded-lg overflow-hidden relative peer-checked:hidden"
                                    >
                                    </div>
                                    <div>صندلی کودک</div>
                                </label>
                                <div onClick={()=>openDescriptionPopup(index)} className="cursor-pointer">
                                    <IconInfo/>
                                </div>
                            </div>
                            <div className="text-[#545454]">
                                قیمت روزانه {item.price.amount} {t(item.price.currency)}
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export function FineDeposit({borderLess}){
    return(
        <div className={`${!borderLess == 'border-[1px] border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl'} my-4 flex-1 bg-white`}>
            <div className="flex flex-col gap-4">

                <div className="md:text-base sm:text-sm text-xs bg-[#F4F4F4] rounded-2xl p-4 flex items-center justify-between cursor-pointer">
                    <div className="flex gap-2 items-center">
                        <span className="flex size-9 p-1 text-[#7C7C7C]">
                            <IconSort1/>
                        </span>
                        <div>ودیعه خلافی</div>
                        <IconInfo/>
                    </div>
                    <div className="text-[#545454]">
                        490 درهم
                    </div>
                </div>    
            </div>
            
        </div>
    )
}



export function PaymentDetail({borderLess=false}){
    return(
        <div className={`${!borderLess && 'border-[1px] border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl' } my-4 flex-1 bg-white`}>
            <div className="mb-4 flex justify-between">
                <div className="lg:text-lg sm:text-base text-sm font-semibold">جزئیات پرداخت خود را مرور کنید </div>
                <div className="text-[#3B82F6] cursor-pointer">کد تخفیف دارم !</div>
            </div>
            <div className="flex relative bg-[#EFFBF6] my-12 py-2">
                <div className="absolute top-0 -translate-y-8 right-0 w-full">
                    <IconGrate/>
                </div>
                <div className="flex flex-col justify-center items-center w-full md:text-base text-sm">
                    <SinglePaymentDet
                        title={'قیمت اجاره 3 روزه'}
                        subtitle={
                            <div className="text-[#545454] text-sm flex gap-2">
                                <span className="line-through">110</span>
                                <span className="text-[#0FA875]"> 99 درهم روزانه</span>
                            </div>
                        }
                        price={'رایگان'}
                    />
                    <SinglePaymentDet
                        title={'هزینه تحویل'}
                        subtitle={'فرودگاه دبی ترمینال 1'}
                        price={'رایگان'}
                    />
                    <SinglePaymentDet
                        title={'هزینه عودت'}
                        subtitle={'در هتل هیلتونی '}
                        price={'+70 درهم'}
                    />
                    <SinglePaymentDet
                        title={'هزینه 2 صندلی کودک'}
                        subtitle={'در هتل هیلتونی '}
                        price={'+95 درهم'}
                    />
                    <SinglePaymentDet
                        title={'بدون دیپوزیت'}
                        subtitle={'قیمت روزانه 29 درهم'}
                        price={'+36 درهم'}
                    />
                    <SinglePaymentDet
                        title={<div className="font-bold">هزینه نهایی برای 3 روز</div>}
                        subtitle={<div className="text-[#3B82F6]">تخفیف لحاظ شده برای این رزرو 150 درهم معادل 15.200.000 ریال است.</div>}
                        price={<div className="font-bold">+970 درهم</div>}
                    />
                    <div className="p-4 w-full">
                        <div className="rounded-2xl bg-white w-full">
                            <div className="py-4 md:px-5 px-2 flex w-full items-center justify-between">
                                <div className="flex flex-col gap-2">
                                    <div className="lg:text-xl md:text-lg text-sm font-semibold">
                                        پیش پرداخت
                                    </div>
                                    <div className="flex gap-2">
                                        <Image src={'/images/shaparak.png'} width={47} height={27} alt=""></Image>
                                        <Image src={'/images/zarinpal.png'} width={60} height={29} alt=""></Image>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1 md:text-base text-sm">
                                    <div className="font-bold">
                                        170 درهم
                                    </div>
                                    <div className="text-[#10B981]">
                                        5.400.000 تومان
                                    </div>
                                </div>
                            </div>


                            <div className="py-4 md:px-5 px-2 flex w-full items-center justify-between border-t-[1px] border-[#0000001f]">
                                <div className="flex flex-col gap-2">
                                    <div className="lg:text-lg md sm:text-sm text-xs font-semibold">
                                        مانده ، پرداخت هنگام تحویل خودرو
                                    </div>
                                    <div className="text-[#545454] lg:text-xl md:text-lg sm:text-sm text-xs">
                                        پرداخت : نقدی دلار ، درهم ، کارت بانک بین المللی
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1 md:text-base text-sm">
                                    800 درهم
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 rotate-180 translate-y-8 right-0 w-full">
                    <IconGrate/>
                </div>
            </div>
        </div>
    )
}

export function SinglePaymentDet({title,subtitle,price}){
    return(
        <div className="border-b-[1px] border-[#B5E9D880] flex justify-between items-center w-full p-2 px-4">
            <div>
                <div>
                    {title}
                </div>
                <div className="text-[#545454] text-sm">
                    {subtitle}
                </div>
            </div>
            <div className="text-[#333333]">
                {price}
            </div>
        </div>
    )
}

export function PersonalInfoBox(){
    return(
        <div className="lg:text-base md:text-sm text-xs pb-12 border-[1px] border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 py-6 rounded-4xl my-4 flex-1 bg-white">
            <div className="mb-4">
                <div className="lg:text-lg sm:text-base text-sm font-semibold">اطلاعات شخصی خود را وارد کنید</div>
            </div>
            <div className="flex flex-col gap-4">
                <input className="border-[1px] border-[#B0B0B0B2] rounded-xl p-3 outline-0" type="text" placeholder="نام و نام خانوادگی ..." />
                <div className="border-[1px] flex flex-row-reverse items-center border-[#B0B0B0] rounded-xl">
                    <select dir="ltr" className="p-2 text-center outline-0" name="" id="">
                        <option value="98">+98</option>
                        <option value="98">+98</option>
                        <option value="98">+98</option>
                        <option value="98">+98</option>
                    </select>
                    <span className="inline-block h-8 w-[1px] bg-[#919191]"></span>
                    <input className="text-left w-full outline-0 p-3" placeholder="091*********" type="text" />
                </div>
                <input className="border-[1px] border-[#B0B0B0B2] rounded-xl p-3 outline-0" type="text" placeholder="ایمیل ..." />
            </div>
            <div className="flex justify-center py-2 gap-1 sm:text-xs text-[10px]">
                رزرو این خودرو به منزله پذیرفتن کلیه <Link className="text-[#3B82F6]" href={'#'}>قوانین و مقررات</Link> پالم رانت میباشد
            </div>
            <div className="pr-8 relative">
                <span className="absolute right-0">
                    <IconInfo/>
                </span>
                <div>در پالم رنت ، رزرو خودرو رایگان است  و تا 15 دقیقه بررسی شده ، سپس پیامک تاییدیه با لینک پیش پرداخت ارسال میشود.</div>
            </div>
            
        </div>
    )
}



// export function ExtraServices(){
//     return(
//         <div className="border-[1px] border-[#0000001f] shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] p-4 rounded-4xl my-4 flex-1 bg-white">
//             <div className="mb-4">
//                 <div className="lg:text-lg sm:text-base text-sm font-semibold">خدمات مازاد خود را انتخاب کنید :</div>
//             </div>
//         </div>
//     )
// }
