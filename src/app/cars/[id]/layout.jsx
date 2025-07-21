import Header from "@/app/components/Header";

export default function CarsLayout({children}){
    return(
        <>
            <Header/>
            {children}
        </>
    )
}