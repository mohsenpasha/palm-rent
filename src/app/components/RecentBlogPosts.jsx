import Link from "next/link";
import { IconArrow } from "./Icons";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function RecentBlogPosts(){
    const { t, i18n } = useTranslation();
    return(
        <section className='my-8 bg-[#F6F6F6] py-8 pb-24'>
            <div className='xl:w-[85vw] w-[95vw]  max-w-[1336px] m-auto'>
                <div className='flex w-full mb-4 justify-between md:pb-6'>
                    <div className="md:text-right text-center md:text-xl sm:text-lg text-base font-bold text-[#3B82F6]">
                        {t('latestBlogs')}
                    </div>
                    <Link href={'/blogs'} className="flex gap-2 items-center font-medium cursor-pointer">
                        {t('viewAll')}
                        <IconArrow className={'rtl:rotate-90 ltr:-rotate-90'}/>
                    </Link>
                </div>
                <div className="flex gap-8 lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse">
                    <div className="flex flex-col justify-between gap-4 lg:w-7/12 w-full">
                        <SingleBlogPost/>
                        <SingleBlogPost/>
                        <SingleBlogPost/>

                    </div>
                    <div className="flex lg:w-5/12 w-full">
                        <SingleBlogPost bigPost={true}/>
                    </div>
                </div>
                {/* <CommentSlider/> */}
            </div>
        </section>
    )
}

export function SingleBlogPost({bigPost=false,smallFont=false}){
    return(
        <Link href={'#'} className="flex w-full cursor-pointer">
            <div className={`flex ${bigPost ? 'flex-col' : ''} gap-4 w-full`}>
                <div className="w-full relative">
                    <Image className="w-full h-full object-cover rounded-lg" src={'/images/singlecar-1.png'} width={530} height={280} alt=""></Image>
                    <span className={`absolute left-3 bottom-3 text-white bg-[#DF900A] py-0.5 px-2.5 rounded-4xl text-nowrap ${smallFont ? 'lg:text-sm md:text-xs text-xs' :'lg:text-sm md:text-xs text-xs'}`}>راننده شخصی</span>
                </div>
                <div className="flex flex-col text-justify gap-4">
                    <div className={`${smallFont ? 'lg:text-sm md:text-sm text-xs' : 'lg:text-lg md:text-base sm:text-sm text-xs'} font-bold`}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    </div>
                    <div className={`${bigPost ? 'lg:text-sm text-xs ' : 'lg:text-base md:text-sm sm:text-xs text-xs'} text-[#5B5B5B] ${bigPost ? 'line-clamp-5' :'line-clamp-3'}`}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، 
                    </div>
                </div>
                {bigPost &&
                    <div className="text-[#F59E0B]">
                        خواندن ادامه
                    </div>
                }
            </div>
        </Link>
    )
}