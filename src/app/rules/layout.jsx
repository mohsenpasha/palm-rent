import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "قوانین اجاره خودرو - پالم رنت",
  description: "قوانین اجاره خودرو",
};

export default function RulesLayout({children}){
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
} 