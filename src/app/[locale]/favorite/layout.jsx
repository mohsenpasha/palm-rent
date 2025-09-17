import Footer from "../components/Footer";

export const metadata = {
  title: "مورد علاقه های من - پالم رنت",
  description: "مورد علاقه های من",
};

export default function FavLayout({children}){
    return(
        <>
            {children}
            <Footer/>
        </>
    )
} 