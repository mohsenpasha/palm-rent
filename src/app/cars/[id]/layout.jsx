import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function CarsLayout({children}){
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}