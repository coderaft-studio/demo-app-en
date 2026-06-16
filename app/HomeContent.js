"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { IMGS } from "@/lib/images";
import { useAnimateOnScroll } from "@/lib/hooks";

export default function HomeContent() {
  useAnimateOnScroll(150);
  const [showTop, setShowTop] = useState(false);
  useEffect(()=>{
    const fn=()=>setShowTop(window.scrollY>700);
    window.addEventListener("scroll",fn,{passive:true});
    return()=>window.removeEventListener("scroll",fn);
  },[]);

  return (
    <>
      {/* Features Preview */}
      <section className="wrapper" style={{ background:"#f5f7fa" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px" }}>
          <h2 className="section-title wow bounceIn">Features</h2>
          <div className="virticle-line"/><div className="virticle-dot"/>
          <div style={{ textAlign:"center", maxWidth:"600px", margin:"0 auto 48px" }}>
            <Image src={IMGS.featureMain} alt="Voyaje Features" width={600} height={400}
              style={{ width:"100%", height:"auto", borderRadius:"16px", objectFit:"cover", boxShadow:"0 20px 60px rgba(0,0,0,0.12)" }}
              className="wow bounceInDown"/>
          </div>
          <p style={{ textAlign:"center", color:"#666", maxWidth:"560px", margin:"0 auto 40px", lineHeight:1.8 }} className="wow fadeIn">
            From smart itinerary planning to real-time local recommendations — Voyaje gives you everything you need to explore the world with ease and confidence.
          </p>
          <div style={{ textAlign:"center" }}>
            <Link href="/features" className="btn-grad wow bounceIn">Explore Features</Link>
          </div>
        </div>
      </section>

      {/* Speciality Preview */}
      <section className="wrapper-dark">
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px" }}>
          <h2 className="section-title light wow bounceIn">Why Voyaje</h2>
          <div className="virticle-line"/><div className="virticle-dot"/>
          <div className="grid md:grid-cols-3 gap-8" style={{ marginTop:"48px" }}>
            {[
              { icon:"🆓", title:"Free to Download",   desc:"Get started for free and discover an entire world of travel features without spending a cent.", fx:"fadeInLeft" },
              { icon:"✨", title:"AI-Powered Planning", desc:"Our intelligent engine learns your travel style and builds personalised itineraries in seconds.", fx:"bounceIn" },
              { icon:"⚡", title:"Works Offline",       desc:"Download your trip data and maps before you go. Voyaje works perfectly even without internet.", fx:"fadeInRight" },
            ].map(s=>(
              <div key={s.title} className={`wow ${s.fx}`} style={{ textAlign:"center" }}>
                <div className="special-icon">{s.icon}</div>
                <h3 style={{ fontSize:"18px", fontWeight:600, color:"#fff", marginBottom:"12px" }}>{s.title}</h3>
                <p style={{ color:"rgba(255,255,255,0.55)", fontSize:"14px", lineHeight:1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="wrapper-light">
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px" }}>
          <h2 className="section-title wow bounceIn">Screenshots</h2>
          <div className="virticle-line"/><div className="virticle-dot"/>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[IMGS.screen1, IMGS.screen2, IMGS.screen3, IMGS.screen4].map((src,i)=>(
              <div key={i} className={`screenshot-card wow fadeIn delay-${i+1}`}>
                <Image src={src} alt={`Screenshot ${i+1}`} width={600} height={360}
                  style={{ width:"100%", height:"260px", objectFit:"cover" }}/>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:"40px" }}>
            <Link href="/gallery" className="btn-grad wow bounceIn">View All</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="wrapper-grad">
        <div style={{ maxWidth:"900px", margin:"0 auto", padding:"0 24px" }}>
          <h2 className="section-title light wow bounceIn">Testimonials</h2>
          <div className="virticle-line"/><div className="virticle-dot"/>
          <div className="testimonial-card wow bounceInUp">
            <p className="quote">&ldquo;Voyaje completely changed how I travel. I used to spend hours planning — now my entire itinerary is ready in minutes and it's always spot on. I've recommended it to every travel-obsessed friend I have.&rdquo;</p>
            <p className="author">Sarah Chen</p>
            <p className="role">Solo Traveller · 47 Countries</p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="wrapper-dark">
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px", textAlign:"center" }}>
          <h2 className="section-title light wow bounceIn">Pricing</h2>
          <div className="virticle-line"/><div className="virticle-dot"/>
          <p style={{ color:"rgba(255,255,255,0.55)", maxWidth:"480px", margin:"0 auto 40px", lineHeight:1.8 }} className="wow fadeIn">
            Start for free and upgrade whenever you're ready. No hidden fees, no surprises.
          </p>
          <Link href="/pricing" className="btn-grad wow bounceIn">See Plans</Link>
        </div>
      </section>

      <Footer/>
      <a href="#" className={`back-to-top${showTop?" show":""}`} aria-label="Back to top">↑</a>
    </>
  );
}
