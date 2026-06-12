"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { IMGS } from "@/lib/images";
import { useAnimateOnScroll } from "@/lib/hooks";

const Loader = ()=>(
  <div style={{ minHeight:"600px", display:"flex", alignItems:"center", justifyContent:"center", background:"#f5f7fa" }}>
    <div style={{ width:"40px", height:"2px", background:"linear-gradient(90deg,#51ffb6,#57a0ff)", animation:"gx 1.2s ease-in-out infinite alternate", borderRadius:"2px" }}/>
    <style>{`@keyframes gx{to{width:80px}}`}</style>
  </div>
);

const GalleryContent = dynamic(()=>import("./GalleryContent"), { loading:()=><Loader/> });

export default function GalleryPage() {
  useAnimateOnScroll();
  return (
    <>
      <Navbar/>
      <section className="hero-section" style={{ backgroundImage:`url(${IMGS.heroBg})`, minHeight:"45vh" }}>
        <div className="hero-overlay"/>
        <div className="hero-content" style={{ maxWidth:"800px", margin:"0 auto", padding:"0 24px", width:"100%", textAlign:"center", paddingTop:"80px" }}>
          <h1 className="wow fadeIn">See Voyaje<br/><strong>in Action</strong></h1>
        </div>
      </section>
      <GalleryContent/>
    </>
  );
}
