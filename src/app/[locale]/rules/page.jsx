// app/page.tsx
import RulesComponent from "../components/RulsPage"
async function getRulesData(locale) {
  try {
    // changeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    const res = await fetch(`https://palmrentcar.com/api/rules/${locale}`, {
      next: { revalidate: 60 } // ISR - هر ۶۰ ثانیه کش می‌شود
    })
    
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
  const { locale } = await params;
  // changeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
  const response = await getHomeData(locale)
  
  if (!response.meta) {
    return {
      title: "سامانه آنلاین اجاره خودرو بدون دپوزیت | پالم رنت",
      description: "اجاره خودرو در دبی، استانبول و عمان بدون دپوزیت! رزرو آسان، پرداخت ریالی، بیمه رایگان و تحویل در محل. بهترین قیمت و پشتیبانی ۲۴/۷.",
    }
  }

  const { meta } = response;

  return {
    title: meta.titleSeo,
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

export default async function HomePage({ params }) {
  const { locale } = await params;
  const response = await getRulesData(locale)
  const initialData = response.data
  
  return <RulesComponent data={initialData} />
}