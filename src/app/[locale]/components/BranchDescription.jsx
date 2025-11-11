import { IconMessage, IconPhone, IconWhatsapp } from "./Icons";

export default function BranchDescriotion({data}){
    const text1 = data.text2
    return(
        <div className="shadow-[0_2px_5px_-1px_rgba(0,0,0,.08)] bg-white sm:p-4 p-2 my-4 rounded-lg border border-[#0000001f]">
            <div className="flex gap-4 lg:flex-nowrap flex-wrap">
                <div dangerouslySetInnerHTML={{__html: text1}} className="lg:w-1/2 w-full text-justify xl:text-base sm:text-sm text-xs xl:leading-7 sm:leading-6 leading-5">
                    {/* {data.text1} */}
                    {/* برای خودروهایی که دارای عبارت بدون دپوزیت هستند میتوانید بدون پرداخت هزینه اضافی ارائه چک یا انتخاب بیمه تکمیلی رزرو خود را انجام دهید و در عین حال در هزینههای خود صرفه جویی کنید. تمامی خودروهای ارائه شده در سایت دارای ویژگیهای مدرن و استانداردهای بالایی هستند با کلیک بر روی هر ،خودرو میتوانید جزئیات کامل مشخصات ،تصاویر واقعی سال ،ساخت و قیمتهای به روز آن را مشاهده کنید تمامی قیمتها با تخفیفهای ویژه محاسبه شدهاند تا شرایطی ایده آل برای شما فراهم گردد. شما میتوانید از طریق فرم رزرو در بالای این ،صفحه به صورت کاملاً آنلاین و در کمتر از ۵ دقیقه، رزرو خود راثبت کنید. پالم رنت تنها شرکت اجاره خودروی ایرانی است که بدون نیاز به پرداخت دپوزیت بدون ارائه چک بدون انتخاب بیمه ،اضافی بدون ودیعه خلافی یا پرداخت هزینه ،اضافی خدمات اجاره خودرو در دبی را ارائه میدهد. پالم رنت دارای نشان معتبر اینماد است که تضمین کننده اعتماد و کیفیت خدمات آن میباشد. تیم پشتیبانی پالم رنت به صورت شبانه روزی در دسترس است و شما میتوانید از طریق واتساپ یا چت آنلاین با ما در ارتباط باشید و هرگونه سوال یا نیاز خود را مطرح کنید برای ارتباط با پشتیبانی، میتوانید از یکی از روشهای زیر استفاده کنید. */}
                </div>
                <div className="lg:w-1/2 w-full">
                    <video className="rounded-lg w-full" controls src={data.video || "/videos/branchTestVideo.mp4"}></video>
                    <div className="text-white mt-2 w-full justify-center flex flex-col sm:flex-row gap-4">
                        <button className="p-2 px-4 bg-[#204887] rounded-lg flex justify-center gap-2 items-center shadow-[0_4px_10px_0px_#20488740]">
                            <span className="flex size-6 items-center">
                                <IconMessage/>
                            </span>
                            چت آنلاین
                        </button>
                        <button className="p-2 px-4 bg-[#3B82F6] rounded-lg flex justify-center gap-2 items-center shadow-[0_4px_10px_0px_#3B82F640]">
                            <span className="flex size-6 items-center">
                                <IconPhone/>
                            </span>
                            رزرو تلفنی
                        </button>
                        <button className="p-2 px-4 bg-[#10B981] rounded-lg flex justify-center gap-2 items-center shadow-[0_4px_10px_0px_#10B98140]">
                            <span className="flex size-6 items-center">
                                <IconWhatsapp/>
                            </span>
                            واتس اپ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function BranchDescriotionSkeleton(){
    return(
        <div className="w-full rounded-lg flex gap-2.5 h-[400px] my-4">
            <div className="w-full animate-skeleton rounded-lg"></div>
            <div className="w-full animate-skeleton rounded-lg"></div>
        </div>
    )
}