import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "مدارک مورد نیاز برای اجاره خودرو - پالم رنت",
  description: "مدارک مورد نیاز برای اجاره خودرو",
};

export default function DocumentsLayout({children}){
    return(
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
} 