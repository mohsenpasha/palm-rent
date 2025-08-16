import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "مجله پالم رنت",
  description: "مجله",
};

export default function AboutUsLayout({children}){
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
} 