"use client";
import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { IMGS } from "@/lib/images";
import { useAnimateOnScroll } from "@/lib/hooks";

const SCREENS = [
  { src:IMGS.screen1, label:"Discover Destinations",  desc:"Browse curated destinations with rich photos and insider tips." },
  { src:IMGS.screen2, label:"Plan Your Itinerary",    desc:"AI builds your perfect day-by-day trip in seconds." },
  { src:IMGS.screen3, label:"Offline Maps",           desc:"Navigate confidently anywhere, even without internet." },
  { src:IMGS.screen4, label:"Track Your Budget",      desc:"Stay on budget with real-time spending alerts and currency tools." },
  { src:IMGS.screen5, label:"Find Places to Stay",    desc:"Compare hotels, hostels, and unique stays all in one place." },
  { src:IMGS.screen6, label:"Group Planning",         desc:"Collaborate with travel companions on a shared itinerary." },
  { src:IMGS.screen7, label:"Flight Tracker",         desc:"Monitor your flight status and receive instant delay alerts." },
  { src:IMGS.screen8, label:"Local Experiences",      desc:"Discover authentic local activities recommended by real travellers." },
];

export default function GalleryContent() {
  useAnimateOnScroll(150);
  const [active, setActive] = useState(null);
  return (
    <>
      <section className="wrapper-light">
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px" }}>
          <h2 className="section-title wow bounceIn">Screenshots</h2>
          <div className="virticle-line"/><div className="virticle-dot"/>
          <p style={{ textAlign:"center", color:"#666", maxWidth:"520px", margin:"0 auto 48px", lineHeight:1.8 }} className="wow fadeIn">
            A glimpse into the Voyaje experience — intuitive, beautiful, and designed for real travellers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {SCREENS.map((s,i)=>(
              <div key={i} className={`screenshot-card wow fadeInLeft delay-${(i%4)+1}`}
                onClick={()=>setActive(active===i?null:i)}
                style={{ cursor:"pointer", borderRadius:"12px", overflow:"hidden", border:active===i?"2px solid #51ffb6":"2px solid transparent", transition:"all .3s" }}>
                <Image src={s.src} alt={s.label} width={800} height={400}
                  style={{ width:"100%", height:"260px", objectFit:"cover", display:"block" }}/>
                <div style={{ padding:"16px 20px", background:active===i?"#1a1a2e":"#fff", transition:"background .3s" }}>
                  <h3 style={{ fontSize:"15px", fontWeight:700, marginBottom:"8px", color:active===i?"#51ffb6":"#333", letterSpacing:"0.05em" }}>{s.label}</h3>
                  <p style={{ fontSize:"13px", color:active===i?"rgba(255,255,255,0.55)":"#666", lineHeight:1.6, margin:0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper-grad" style={{ textAlign:"center" }}>
        <div style={{ maxWidth:"600px", margin:"0 auto", padding:"0 24px" }}>
          <h2 style={{ fontSize:"clamp(28px,4vw,42px)", fontWeight:100, color:"#fff", marginBottom:"16px" }} className="wow bounceIn">Like what you see?</h2>
          <p style={{ color:"rgba(255,255,255,0.55)", marginBottom:"32px", lineHeight:1.7 }} className="wow fadeIn">
            Download Voyaje today and start planning your next adventure in minutes.
          </p>
          <div style={{ display:"flex", gap:"16px", justifyContent:"center", flexWrap:"wrap" }} className="wow bounceIn">
            <a href="#" className="btn-download"><span className="icon">🤖</span><span className="label"><span>Get it on</span><span>Google Play</span></span></a>
            <a href="#" className="btn-download"><span className="icon">🍎</span><span className="label"><span>Download on</span><span>App Store</span></span></a>
          </div>
        </div>
      </section>

      <Footer/>
      <a href="#" className="back-to-top show" aria-label="Back to top">↑</a>
    </>
  );
}
