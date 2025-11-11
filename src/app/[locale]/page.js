// app/page.tsx
import HomeComponent from "./components/HomePage"

async function getHomeData() {
  try {
    const res = await fetch('https://palmrentcar.com/api/home/fa', {
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

export async function generateMetadata() {
  const response = await getHomeData()
  
  // استفاده از متاهای دریافتی از API
  console.log(response.meta)
  if (response.meta) {
    return {
      title: response.meta.titleSeo,
      description: response.meta.descriptionSeo,
      icons: {
        icon: '/favicon.png',
      },
    }
  }

  // فال‌بک در صورت عدم دریافت متا از API
  // return {
  //   title: "سامانه آنلاین اجاره خودرو بدون دپوزیت | پالم رنت",
  //   description: "اجاره خودرو در دبی، استانبول و عمان بدون دپوزیت! رزرو آسان، پرداخت ریالی، بیمه رایگان و تحویل در محل. بهترین قیمت و پشتیبانی ۲۴/۷.",
  //   icons: {
  //     icon: '/favicon.png',
  //   },
  // }
}

export default async function HomePage() {
  const response = await getHomeData()
  const initialData = response.data

  return <HomeComponent data={initialData} />
}