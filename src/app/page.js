import BranchSection from "./components/BranchSection";
import CarCategorySection from "./components/CarCategorySection";
import CommentSection from "./components/CommentSection";
import CommonQuestionSection from "./components/CommonQuestionSection";
import DescriptionSection from "./components/DescriptionSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingFirstView from "./components/LandingFirstView";
import { RecentBlogPosts } from "./components/RecentBlogPosts";
import { Why2Section } from "./components/Why2Section";
import WhySection from "./components/WhySection";

export default function Home() {
  return (
    <>
      <Header />
      <LandingFirstView/>
      <CarCategorySection/>
      <BranchSection/>
      <WhySection/>
      <CommonQuestionSection/>
      <CommentSection/>
      <Why2Section/>
      <DescriptionSection/>
      <RecentBlogPosts/>
      <Footer/>
      
    </>
  );
}
