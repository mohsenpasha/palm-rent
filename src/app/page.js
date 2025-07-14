import BranchSection from "./components/BranchSection";
import CommonQuestionSection from "./components/CommonQuestionSection";
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
      <CommonQuestionSection/>
    </>
  );
}
