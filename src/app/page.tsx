import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Tools from "@/components/Tools";
import Video from "@/components/Visi-Misi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buiten - Home",
  description: "This is Home for Buiten Technology",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Tools />
      {/* <Brands />
      <Testimonials />
      <Blog /> */}
    </>
  );
}
