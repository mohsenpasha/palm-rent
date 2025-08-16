import Footer from "@/app/[locale]/components/Footer";
import Header from "@/app/[locale]/components/Header";

export default function CarsLayout({children}){
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}