"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { IMGS } from "@/lib/images";
import { useAnimateOnScroll } from "@/lib/hooks";

const Loader = ()=>(
  <div style={{ minHeight:"600px", display:"flex", alignItems:"center", justifyContent:"center", background:"#1a1a2e" }}>
    <div style={{ width:"40px", height:"2px", background:"linear-gradient(90deg,#51ffb6,#57a0ff)", animation:"gx 1.2s ease-in-out infinite alternate", borderRadius:"2px" }}/>
    <style>{`@keyframes gx{to{width:80px}}`}</style>
  </div>
);

const HomeContent = dynamic(()=>import("./HomeContent"), { loading:()=><Loader/> });

export default function Home() {
  useAnimateOnScroll();
  return (
    <>
      <Navbar/>
      <section className="hero-section" style={{ backgroundImage:`url(${IMGS.heroBg})`, overflow:"hidden" }}>
        <div className="hero-overlay"/>
        <div className="hero-content" style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px", width:"100%", paddingTop:"80px", paddingBottom:"20px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="wow bounceIn"><strong>One App</strong><br/>for Every<br/>Adventure</h1>
              <p className="wow fadeIn delay-2">
                Voyaje has been downloaded and loved by over 2M+ travellers from 120+ countries. Plan smarter trips, discover hidden gems, and travel with confidence — all from one beautiful app.
              </p>
              <div style={{ display:"flex", gap:"16px", flexWrap:"wrap" }} className="wow fadeIn delay-3">
                <a href="#" className="btn-download"><span className="icon">🤖</span><span className="label"><span>Get it on</span><span>Google Play</span></span></a>
                <a href="#" className="btn-download"><span className="icon">🍎</span><span className="label"><span>Download on</span><span>App Store</span></span></a>
              </div>
            </div>
            <div style={{ textAlign:"center", overflow:"hidden" }} className="wow fadeIn delay-2 hidden md:block">
              <img src={IMGS.featureMain} alt="Voyaje App"
                style={{ width:"100%", maxWidth:"420px", height:"auto", borderRadius:"16px", objectFit:"cover" }}/>
            </div>
          </div>
        </div>
      </section>
      <HomeContent/>
    </>
  );
}
