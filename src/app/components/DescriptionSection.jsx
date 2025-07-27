import Image from "next/image";
import { IconCoupon, IconDiamond, IconFewCars, IconGlobCar, IconHandBreak, IconLuxCar, IconStars } from "./Icons";

export default function DescriptionSection(){
    return(
        <section className="my-12">
            <div className="w-[85vw] max-w-[1100px] m-auto">
                <div className="md:flex hidden md:justify-between justify-center items-center">
                    <div className="text-[#3B82F6] lg:text-4xl md:text-3xl font-bold lg:max-w-[400px] md:max-w-[300px] lg:leading-18 md:text-right text-center">
                        پالم رنت شرکتی پیشرو در اجاره خودرو
                    </div>
                    <div className="md:block hidden">
                        <Image src={'/images/company-car.png'} width={360} height={190} alt=""></Image>
                    </div>
                </div>
                <div className="flex gap-4 lg:flex-nowrap flex-wrap lg:justify-between justify-center">
                    <DescriptionItem 
                        title={'لوکس یا اقتصادی'}
                        text={'دلایل زیادی برای اجاره خودرو در دبی وجود دارد. متخصصان کسب و کار اغلب خودرویی مانند یک موتور شیک را اجاره می‌کنند تا مشتریان را تحت تأثیر قرار دهند و حس ثروت و موفقیت را القا کنند. بسیاری از گردشگران برای تجربه سبک زندگی لوکس دبی، خودرو اجاره می‌کنند. اما لیست ما فقط شامل سوپراسپرت‌های سطح بالا مانند فراری و لامبورگینی نمی‌شود. ما همچنین طیف متنوعی از SUVها و خودروهای اقتصادی را ارائه می‌دهیم که برای گشت و گذار در تمام آنچه دبی ارائه می‌دهد، عالی هستند. بهترین شرکت اجاره خودرو '}
                        icon={<IconDiamond/>}
                    />
                    <DescriptionItem 
                        title={'انتخاب فوق‌العاده'}
                        text={'خدمات یکپارچه رنتی، حق انتخاب فوق‌العاده و بهترین ارزش در صنعت را به مشتریان ارائه می‌دهد. تمام خودروهای فهرست‌شده در رنتی کاملاً بررسی و با کیفیت بالا هستند. ما رویه‌های کنترل کیفیت سختگیرانه‌ای را اجرا می‌کنیم. و ما فقط با نمایندگی‌هایی کار می‌کنیم که خدمات عالی و ارزش عالی را تضمین می‌کنند. راننده می‌تواند هنگام اجاره خودرو در رنتی از بالاترین استانداردها اطمینان حاصل کند. پلتفرم ما یک فرآیند اجاره خودرو ساده و واضح را در اختیار شما قرار می‌دهد. اگر می‌خواهید یک ماشین لوکس اجاره کنید، '}
                        icon={<IconLuxCar/>}
                        />
                    <DescriptionItem 
                        title={'پلتفرم اجاره خودرو'}
                        text={'پالم رنت یک سرویس اجاره خودرو آنلاین پیشرو است که در زمینه خودروهای لوکس، خودروهای اقتصادی، خودروهای تجاری و ون تخصص دارد. ما هم به گردشگران عادی و هم به متخصصان تجاری که به دنبال اجاره خودرو لوکس و کاملاً آزمایش شده در دبی و امارات متحده عربی هستند، خدمات ارائه می‌دهیم. پلتفرم ما مجموعه‌ای جامع از خودروهای برتر از تمام ارائه دهندگان خدمات اصلی در دبی، ابوظبی، شارجه و راس الخیمه را ارائه می‌دهد.'}
                        icon={<IconGlobCar/>}
                        />
                </div>
                <div className="flex my-16 gap-4 lg:flex-nowrap flex-wrap">
                    <OptionItem icon={<IconCoupon/>} title={'بهترین قیمت‌های اجاره خودرو'}/>
                    <OptionItem icon={<IconHandBreak/>} title={'راحت‌ترین راه برای اجاره ماشین '}/>
                    <OptionItem icon={<IconFewCars/>} title={'طیف گسترده‌ای از خودروهای اجاره‌ای'}/>
                    <OptionItem icon={<IconStars/>} title={'بهترین شرکت اجاره خودرو '}/>
                </div>
            </div>
            
        </section>
    )
}
export function DescriptionItem({icon,title,text}){
    return(
        <div className="bg-white p-[30px] lg:w-[calc(33%-16px)] md:w-[calc(50%-16px)] md:text-right text-center w-full border-[1px] border-[#F4F4F4] rounded-2xl flex flex-col gap-2 shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)]">
            <div className="h-12 flex justify-center md:justify-start">
                {icon}
            </div>
            <div className="lg:text-lg md:text-base text-sm">{title}</div>
            <p className="text-[#5D5D5D] lg:text-lg md:text-base text-sm leading-8">{text}</p>
        </div>
    )
}

export function OptionItem({icon,title}){
    return(
        <div className="rounded-2xl lg:w-full md:w-[calc(50%-16px)] w-full md:text-base text-sm bg-white p-4 gap-4 flex items-center">
            {icon}
            {title}
        </div>
    )
}