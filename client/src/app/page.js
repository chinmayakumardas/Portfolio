import Footer from "@/components/footer";
import HomePage from "@/components/homepage";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Blog from "@/components/blogs";
import Service from "@/components/services";
import Image from "next/image";
import Industries from "@/components/industry";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Service/>
      <Industries/>
      <Blog/>
       <Footer/>
    
    </div>
  );
}
