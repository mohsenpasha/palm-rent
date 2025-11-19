import SingleCarPage from "../../components/SingleCarPage"
import { notFound } from 'next/navigation';
async function getSingleCarData(locale,carId) {
  try {
    const res = await fetch(`https://palmrentcar.com/api/car/show/${carId}/${locale}`)
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching home data:', error)
    return { data: null, meta: null }
  }
}

export async function generateMetadata({ params }) {
  const { locale,id } = await params;
  const response = await getSingleCarData(locale,id)
  console.log(response)
  if (!response.meta) {
    return {
      title: "سامانه آنلاین اجاره خودرو بدون دپوزیت | پالم رنت",
      description: "اجاره خودرو در دبی، استانبول و عمان بدون دپوزیت! رزرو آسان، پرداخت ریالی، بیمه رایگان و تحویل در محل. بهترین قیمت و پشتیبانی ۲۴/۷.",
    }
  }
  const { meta } = response;
  return {
    title: meta.titleSeo || 'test',
    description: meta.descriptionSeo,
    robots: meta.robots,
    icons: {
      icon: meta.favIcon || '/favicon.png',
    },
    openGraph: {
      title: meta.titleSeo,
      description: meta.descriptionSeo,
      images: [meta.imgSeo],
      url: meta.urlPage,
      siteName: meta.siteName,
    },
    alternates: {
      canonical: meta.canonical,
    },
    ...(meta.schemaSeo && {
      other: {
        'script:ld+json': meta.schemaSeo,
      }
    }),
  }
}

export default async function CarsPage({ params }) {
  const { locale,id } = await params;
  console.log(id)
  const response = await getSingleCarData(locale,id)
  const initialData = response.data
  console.log(response)
  if(!initialData){
    notFound()
  }
  console.log(initialData)
  // changeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
  return <SingleCarPage data={initialData} />
}