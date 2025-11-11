// app/page.tsx
import HomeComponent from "./components/HomePage"

async function getHomeData(locale) {
  try {
    const res = await fetch(`https://palmrentcar.com/api/home/${locale}`, {
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

export async function generateMetadata({ params } ) {
  const { locale } = await params;
  const response = await getHomeData(locale)
  
  // استفاده از متاهای دریافتی از API
  if (response.meta) {
    return {
      title: response.meta.title || "سامانه آنلاین اجاره خودرو بدون دپوزیت | پالم رنت",
      description: response.meta.description || "اجاره خودرو در دبی، استانبول و عمان بدون دپوزیت! رزرو آسان، پرداخت ریالی، بیمه رایگان و تحویل در محل. بهترین قیمت و پشتیبانی ۲۴/۷.",
      icons: {
        icon: '/favicon.png',
      },
    }
  }

  // فال‌بک در صورت عدم دریافت متا از API
  return {
    title: "سامانه آنلاین اجاره خودرو بدون دپوزیت | پالم رنت",
    description: "اجاره خودرو در دبی، استانبول و عمان بدون دپوزیت! رزرو آسان، پرداخت ریالی، بیمه رایگان و تحویل در محل. بهترین قیمت و پشتیبانی ۲۴/۷.",
    icons: {
      icon: '/favicon.png',
    },
  }
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const response = await getHomeData(locale)
  const initialData = response.data

  return <HomeComponent data={initialData} />
}