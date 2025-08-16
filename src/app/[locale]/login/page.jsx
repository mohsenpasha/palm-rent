import LoginComponent from "../components/LoginComponent";

export const metadata = {
  title: "",
  description: "اجاره خودرو در دبی، استانبول و عمان بدون دپوزیت!  رزرو آسان، پرداخت ریالی، بیمه رایگان و تحویل در محل. بهترین قیمت و پشتیبانی ۲۴/۷.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function loginPage(){
    return(
        <LoginComponent/>
    )
}