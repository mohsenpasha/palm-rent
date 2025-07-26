import Footer from "../components/Footer";
import Header from "../components/Header";

export default function GalleryLayout({children}){
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}