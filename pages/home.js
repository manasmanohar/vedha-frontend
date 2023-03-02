import FeaturedSection from "@/components/FeaturedSection";
import SubjectSection from "@/components/SubjectSection";

export default function Home() {
  return (
    <div id="wrapper" className="bg-secondarywhite w-full h-full  ">
      <FeaturedSection />
      <SubjectSection />
    </div>
  );
}
