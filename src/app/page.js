import BranchSection from "./components/BranchSection";
import CommonQuestionSection from "./components/CommonQuestionSection";
import Header from "./components/Header";
import LandingFirstView from "./components/LandingFirstView";
import { Why2Section } from "./components/Why2Section";
import WhySection from "./components/WhySection";

export default function Home() {
  return (
    <>
      <Header />
      <LandingFirstView/>
      <BranchSection/>
      <WhySection/>
      <CommonQuestionSection/>
      <Why2Section/>
    </>
  );
}
