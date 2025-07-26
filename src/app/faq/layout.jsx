import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "سوالات متداول - پالم رنت",
  description: "سوالات متداول",
};

export default function FaqLayout({children}){
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
} 