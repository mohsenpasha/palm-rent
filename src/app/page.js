import BranchSection from "./components/BranchSection";
import Header from "./components/Header";
import LandingFirstView from "./components/LandingFirstView";
import WhySection from "./components/WhySection";

export default function Home() {
  return (
    <>
      <Header />
      <LandingFirstView/>
      <BranchSection/>
      <WhySection/>
    </>
  );
}
