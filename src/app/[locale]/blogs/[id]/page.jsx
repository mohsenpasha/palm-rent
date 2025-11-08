// src/app/[locale]/blogs/[id]/page.jsx
import { getData } from "@/app/lib/getData";
import Image from "next/image";
import Link from "next/link";
import { IconDate, IconPerson, IconPerson2, IconPerson3 } from "../../components/Icons";

// تابع اصلاح شده - باید return داشته باشد و پارامتر slug را بگیرد
async function getPostBySlug(slug) {
  try {
    const data = await getData(`https://palmrentcar.com/api/blog/${slug}/fa`);
    console.log(data)
    return data;
  } catch (error) {
    console.error('خطا در دریافت پست:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.id);
  
  // اگر پست پیدا نشد
  if (!post) {
    return {
      title: 'پست یافت نشد',
      description: 'پست مورد نظر وجود ندارد',
    };
  }

  return {
    title: post.title || 'بدون عنوان',
    description: post.excerpt || 'توضیحاتی موجود نیست',
    openGraph: {
      title: post.title || 'بدون عنوان',
      description: post.excerpt || 'توضیحاتی موجود نیست',
      images: [post.image || '/default-image.jpg'],
    },
  };
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.id);
  const data = post.data
  console.log(data.item)
  // اگر پست پیدا نشد
  if (!post) {
    return (
      <article className="container mx-auto px-4 py-8">
        <h1>پست یافت نشد</h1>
      </article>
    );
  }

  return (
    <div className="xl:w-[85vw] w-[95vw] m-auto max-w-[1336px]">
        <div className="flex w-full lg:flex-row flex-col">
            <article className="lg:w-8/12 w-full container mx-auto px-4 py-8 flex flex-col gap-8">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="w-full animate-skeleton rounded-lg">
                        <Image className="w-full h-full object-cover rounded-lg" src={data.item.photo} width={856} height={481} alt=""/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold">{data.item.title}</h1>
                    <div className="w-full flex items-center text-[#727272] gap-2">
                        <div className="flex items-center gap-2">
                            <span className="flex size-8 gap-2 border border-[#727272] p-1.5 rounded-full justify-center items-center">
                                <IconPerson2/>
                            </span>
                            {data.item.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex size-8 gap-2 border border-[#727272] p-1.5 rounded-full justify-center items-center">
                                <IconDate/>
                            </span>
                            {data.item.date}
                        </div>
                    </div>
                </div>
            <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: data.item.text }} 
                />
            </article>
            <div className="lg:w-4/12 w-full">
                <div className="sticky top-8 border border-[#00000022] mt-8 rounded-lg p-4 flex flex-col gap-4">
                    <div className="font-bold text-lg">
                        مطالب مرتبط
                    </div>
                    {data.last_blogs.map((item,index)=>{
                        return(
                            <Link href={''} key={index} className="p-2 border border-[#00000022] rounded-lg flex gap-2">
                                <div className="shrink-0 w-[125px] h-[70px] rounded-lg animate-skeleton">
                                    <Image className="rounded-lg w-full h-full object-cover" src={item.photo} width={125} height={70} alt=""/>
                                </div>
                                <div className="flex flex-col gap-2 flex-1 h-full relative pb-6">
                                    <div>
                                        {item.title}
                                    </div>
                                    <div className="text-xs font-bold flex justify-end absolute bottom-0 left-0">
                                        {item.date}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  );
}