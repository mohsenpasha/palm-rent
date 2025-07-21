import Link from "next/link";
import { IconArrow, IconArrowDoubled, IconFacebook, IconLinkedIn, IconPhone, IconTwitter, IconYoutube } from "./Icons";
import Image from "next/image";

export default function Footer(){
    return(
        <footer className="bg-white pt-12">
            <div className="w-[90vw] m-auto">
                <div className="flex lg:flex-nowrap flex-wrap sm:gap-0 gap-4">
                    <div className="xl:w-3/12 lg:w-4/12 sm:w-1/2 w-full lg:px-6 md:px-4 px-2">
                        <div className="xl:text-lg lg:text-base mb-2">
                            درباره ی ما
                        </div>
                        <p className="sm:text-xs text-[10px] text-justify font-semibold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        <div className="flex flex-col gap-2 mt-2">
                            <span className="text-sm text-[#313131]">برای دریافت اخرین اخبار عضو شوید</span>
                            <div className="border-[1px] border-[#D4D4D4] rounded-sm flex justify-between">
                                <input placeholder="ایمیل ..." className="flex-1 px-2.5 outline-0" type="email" />
                                <button className="text-[#152D7C] bg-[#B9C4E6] h-9 px-3">عضویت</button>
                            </div>
                        </div>
                    </div>
                    <span className="lg:flex hidden w-[1px] h-[50px] bg-[#C0C0C0]"></span>
                    <div className="lg:w-5/12 sm:w-1/2 w-full lg:px-6 md:px-4 px-2">
                        <div className="xl:text-lg lg:text-base mb-2">
                            صفحات
                        </div>
                        <div className="flex flex-wrap gap-2 text-[#303030] lg:text-base md:text-sm text-xs">
                            <Link className="flex items-center w-[calc(50%-4px)]" href='#'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                خانه
                            </Link>
                            <Link className="flex items-center w-[calc(50%-4px)]" href='#'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                شعبه های پالم رنت
                            </Link>
                            <Link className="flex items-center w-[calc(50%-4px)]" href='#'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                انواع خودرو ها
                            </Link>
                            <Link className="flex items-center w-[calc(50%-4px)]" href='#'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                مدارک مورد نیاز
                            </Link>
                            <Link className="flex items-center w-[calc(50%-4px)]" href='#'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                تماس با ما
                            </Link>
                            <Link className="flex items-center w-[calc(50%-4px)]" href='#'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                مجله پام رنت
                            </Link>
                            <Link className="flex items-center w-[calc(50%-4px)]" href='#'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                گالری تصاویر
                            </Link>
                            <Link className="flex items-center w-[calc(50%-4px)]" href='#'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                درباره پالم رنت
                            </Link>
                            <Link className="flex items-center w-[calc(50%-4px)]" href='#'>
                                <span className="size-4">
                                    <IconArrowDoubled/>
                                </span>
                                قوانین اجاره خودرو
                            </Link>
                        </div>
                    </div>
                    <span className="lg:flex hidden w-[1px] h-[50px] bg-[#C0C0C0]"></span>
                    <div className="lg:w-3/12 lg:my-0 my-4 w-full lg:px-8">
                        <div className="xl:text-lg lg:text-base mb-2 flex lg:justify-start justify-center">
                            مجوز های ما
                        </div>
                        <div className="flex lg:justify-start justify-center lg:gap-2 sm:gap-8 gap-2">
                            <Link className="size-[79px] shrink-0 border-[1px] border-[#0000001F] rounded-2xl flex justify-center items-center" href={'#'}>
                                <Image src={'/images/cer-1.png'} width={69} height={69} alt=""></Image>
                            </Link>
                            <Link className="size-[79px] shrink-0 border-[1px] border-[#0000001F] rounded-2xl flex justify-center items-center" href={'#'}>
                                <Image src={'/images/logo-samandehi.png'} width={69} height={69} alt=""></Image>
                            </Link>
                            <Link className="size-[79px] shrink-0 border-[1px] border-[#0000001F] rounded-2xl flex justify-center items-center" href={'#'}>
                                <Image src={'/images/enamad.png'} width={69} height={69} alt=""></Image>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center rounded-2xl bg-[#F4F4F4] md:justify-between justify-center my-4 py-4 px-6 md:gap-0 gap-4 md:flex-nowrap flex-wrap">
                    <Link className="text-[#1E40AF] items-center text-2xl font-bold lg:flex hidden" href={'#'}>
                        <Image className="filter-[invert(1)]" src={'/images/logo.png'} width={150} height={80} alt="palmrent logo"></Image>
                        <div>پالم رنت</div>
                    </Link>
                    <Link href={'tel:+989196784367'} className="bg-white md:w-auto w-full md:justify-start justify-center rounded-2xl flex text-[#1E40AF] px-10 py-3 items-center">
                        <span className="size-12">
                            <IconPhone/>
                        </span>
                        <div className="flex flex-col text-sm justify-center">
                            <span>
                                شماره تماس
                            </span>
                            <span className="text-lg">
                                09196784367
                            </span>
                        </div>
                    </Link>
                    <div className="flex items-center text-[#1E40AF] text-lg gap-2 font-semibold">
                        <div className="md:inline hidden">
                            مارو دنبال کنید :
                        </div>
                        <div className="flex gap-2">
                            <Link href={'#'} className="size-8 rounded-full flex items-center justify-center bg-white">
                                <IconYoutube/>
                            </Link>
                            <Link href={'#'} className="size-8 rounded-full flex items-center justify-center bg-white">
                                <IconLinkedIn/>
                            </Link>
                            <Link href={'#'} className="size-8 rounded-full flex items-center justify-center bg-white">
                                <IconTwitter/>
                            </Link>
                            <Link href={'#'} className="size-8 rounded-full flex items-center justify-center bg-white">
                                <IconFacebook/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center border-t-[1px] border-[#E4E4E4] flex items-center justify-center py-4 md:text-xs sm:text-[10px] text-[8px]">
                کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت پالم رنت می‌باشد. (نسخه 1.100)
            </div>
        </footer>
    )
}