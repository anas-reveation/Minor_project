import { Link, Outlet } from "react-router-dom";
import HomeBanner from "../Components/HomeBanner";
import HomeExprience from "../Components/HomeExprience";
import LabTest from "../Components/LabTest";
import WhoWeAre from "../Components/WhoWeAre";
import Testimonial from "../Components/Testimonial";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeExprience />
      <LabTest />
      <WhoWeAre />
      <Testimonial />
    </div>
  );
}
