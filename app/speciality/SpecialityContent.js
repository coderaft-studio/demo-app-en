"use client";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useAnimateOnScroll } from "@/lib/hooks";

const ITEMS = [
  { icon:"🆓", title:"Free to Download",    delay:"fadeInLeft",  desc:"Voyaje is completely free to download and use. Our core features — discovery, basic trip planning, and offline maps — are available at no cost, forever. No credit card required, no time limits." },
  { icon:"✨", title:"AI-Powered Planning",  delay:"bounceIn",    desc:"Our machine learning engine analyses millions of travel data points to build trips perfectly tailored to your style. The more you travel with Voyaje, the smarter it gets — learning your preferences over time." },
  { icon:"⚡", title:"Offline First",        delay:"fadeInRight", desc:"We built Voyaje for the real world — where WiFi is unreliable and data roaming is expensive. Download your entire trip before you leave. Maps, guides, bookings, and notes all work without internet." },
  { icon:"🔒", title:"Secure & Private",    delay:"fadeInLeft",  desc:"Your travel plans and personal data stay yours. We use end-to-end encryption for all data, never sell your information, and give you full control over what's stored and shared." },
  { icon:"🌍", title:"150+ Countries",       delay:"bounceIn",    desc:"Voyaje covers destinations in 150+ countries with curated local content, vetted accommodation, and verified reviews. Whether you're heading to Tokyo or Timbuktu, we've got you covered." },
  { icon:"👥", title:"Group Travel Ready",   delay:"fadeInRight", desc:"Planning with friends or family? Voyaje's group mode lets up to 10 travellers collaborate on a single itinerary in real-time. Vote on activities, split costs, and stay in sync — no more group chat chaos." },
];

export default function SpecialityContent() {
  useAnimateOnScroll(150);
  return (
    <>
      <section className="wrapper-dark">
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px" }}>
          <h2 className="section-title light wow bounceIn">Speciality</h2>
          <div className="virticle-line"/><div className="virticle-dot"/>
          <p style={{ textAlign:"center", color:"rgba(255,255,255,0.55)", maxWidth:"560px", margin:"0 auto 60px", lineHeight:1.8 }} className="wow fadeIn">
            Voyaje was built with a clear mission: make travel planning effortless so you can spend more time actually exploring.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {ITEMS.map((item,i)=>(
              <div key={item.title} className={`wow ${item.delay} delay-${(i%3)+1}`} style={{ textAlign:"center" }}>
                <div className="special-icon">{item.icon}</div>
                <h3 style={{ fontSize:"18px", fontWeight:600, color:"#fff", marginBottom:"12px" }}>{item.title}</h3>
                <p style={{ color:"rgba(255,255,255,0.55)", fontSize:"14px", lineHeight:1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper" style={{ background:"#f5f7fa", textAlign:"center" }}>
        <div style={{ maxWidth:"600px", margin:"0 auto", padding:"0 24px" }}>
          <h2 style={{ fontSize:"clamp(28px,4vw,40px)", fontWeight:100, marginBottom:"16px" }} className="wow bounceIn">Ready to travel smarter?</h2>
          <p style={{ color:"#666", marginBottom:"32px", lineHeight:1.7 }} className="wow fadeIn">
            Join over 2 million travellers who've already discovered a better way to explore the world.
          </p>
          <div style={{ display:"flex", gap:"16px", justifyContent:"center", flexWrap:"wrap" }} className="wow bounceIn">
            <a href="#" className="btn-grad">Get it Free</a>
            <Link href="/pricing" style={{ display:"inline-block", padding:"12px 36px", border:"2px solid #57a0ff", color:"#57a0ff", borderRadius:"50px", fontSize:"11px", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", textDecoration:"none", transition:"all .3s" }}>
              View Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer/>
      <a href="#" className="back-to-top show" aria-label="Back to top">↑</a>
    </>
  );
}
