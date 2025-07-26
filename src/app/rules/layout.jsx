import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "گالری تصاویر - پالم رنت",
  description: "گالری تصاویر",
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