import Image from "next/image";
import Link from "next/link";
import {IconArrow, IconGlobal, IconPhone, IconLogin} from "./Icons";

export default function Header(){
    return(
        <header className="min-h-[80px] flex items-center">
            <div className="p-4 px-6 flex justify-between fixed z-50 top-0 right-0 bg-white w-full shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)]">
                <div className="flex items-center">
                    <Link href="#">
                        <Image className="filter-[invert(1)]" src={'/images/logo.png'} width={85} height={38} alt="test"></Image>
                    </Link>
                    <ul className="flex p-0">
                        <li className="p-1 px-6 border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center hover:decoration-black">
                            <Link className="h-full w-full" href='#'>
                                خانه
                            </Link>
                        </li>
                        <li className="relative group p-1 px-6 border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center gap-2">
                            شعبه های پالم رنت
                            <IconArrow/>
                            <DropDown>
                                <DropDownItem text={'دبی'} href={'#'}/>
                                <DropDownItem text={'استانبول'} href={'#'}/>
                                <DropDownItem text={'عمان'} href={'#'}/>
                                <DropDownItem text={'کیش'} href={'#'}/>
                                <DropDownItem text={'ازمیر ترکیه'} href={'#'}/>
                                <DropDownItem text={'آنکارا ترکیه'} href={'#'}/>
                                <DropDownItem text={'آنتالیا ترکیه'} href={'#'}/>
                                <DropDownItem text={'سامسون ترکیه'} href={'#'}/>
                                <DropDownItem text={'قیصریه ترکیه'} href={'#'}/>
                                <DropDownItem text={'تفلیس گرجستان'} href={'#'}/>
                            </DropDown>
                        </li>
                        <li className="relative group p-1 px-6 border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center gap-2">
                            لیست خودرو ها
                            <IconArrow/>
                            <DropDown>
                                <DropDownItem text={'دبی'} href={'#'}/>
                                <DropDownItem text={'استانبول'} href={'#'}/>
                                <DropDownItem text={'عمان'} href={'#'}/>
                                <DropDownItem text={'کیش'} href={'#'}/>
                                <DropDownItem text={'ازمیر ترکیه'} href={'#'}/>
                                <DropDownItem text={'آنکارا ترکیه'} href={'#'}/>
                                <DropDownItem text={'آنتالیا ترکیه'} href={'#'}/>
                                <DropDownItem text={'سامسون ترکیه'} href={'#'}/>
                                <DropDownItem text={'قیصریه ترکیه'} href={'#'}/>
                                <DropDownItem text={'تفلیس گرجستان'} href={'#'}/>
                            </DropDown>
                        </li>
                        <li className="p-1 px-6 border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center hover:decoration-black">
                            <Link className="h-full w-full" href='#'>
                                مدارک مورد نیاز
                            </Link>
                        </li>
                        <li className="relative group p-1 px-6 border-l-[1px] border-[#D5D5D5] underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center gap-2">
                            تماس با ما
                            <IconArrow/>
                            <DropDown>
                                <DropDownItem text={'درباره پالم رنت'} href={'#'}/>
                                <DropDownItem text={'تماس با ما'} href={'#'}/>
                            </DropDown>
                        </li>
                        <li className="relative group p-1 px-6 underline decoration-transparent decoration-o cursor-pointer underline-offset-8 flex items-center gap-2">
                            بیشتر
                            <IconArrow/>
                            <DropDown>
                                <DropDownItem text={'مجله پالم رنت'} href={'#'}/>
                                <DropDownItem text={'گالری تصاویر'} href={'#'}/>
                                <DropDownItem text={'سوالات متداول'} href={'#'}/>
                                <DropDownItem text={'قوانین اجاره خودرو'} href={'#'}/>
                            </DropDown>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="tel:+989211284055">
                        <IconPhone/>
                    </Link>
                    <div className="relative group p-1 cursor-pointer underline-offset-8 flex items-center gap-2">
                            <IconGlobal/>
                            فارسی
                            <IconArrow/>
                            <DropDown>
                                {/* <DropDownItem text={'فارسی'} href={'#'}/> */}
                                <DropDownItem text={'English'} href={'#'}/>
                                <DropDownItem text={'العربی'} href={'#'}/>
                                <DropDownItem text={'Türkiye'} href={'#'}/>
                            </DropDown>
                    </div>
                    <div className="p-1 cursor-pointer underline-offset-8">
                        <Link className="h-full w-full flex gap-2" href='#'>
                            <IconLogin/>
                            ورود / ثبت نام
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export function DropDown({ children }){
    return(
        <div className="absolute hidden animate-fade-in translate-y-full group-hover:flex bottom-0 left-1/2 -translate-x-1/2 pt-2">
            <ul className="flex flex-col bg-white min-w-32 rounded-lg border-[1px] border-[#cccccc] p-1 shadow-[0_3px_10px_0_rgba(0,0,0,.12),0_10px_10px_-6px_rgba(0,0,0,.12)]">
                { children }
            </ul>
        </div>
    )
}

export function DropDownItem({text,href}){
    return(
        <Link href={href} className="text-[#4b5259] p-2 px-3 text-nowrap hover:bg-[#f8fafb] rounded-lg">{text}</Link>
    )
}

export function DropDownLanguage({text,href}){
    return(
        <Link href={href} className="text-[#4b5259] p-2 px-3 text-nowrap hover:bg-[#f8fafb] rounded-lg">{text}</Link>
    )
}
