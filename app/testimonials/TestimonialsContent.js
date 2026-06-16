"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import { IMGS } from "@/lib/images";
import { useAnimateOnScroll } from "@/lib/hooks";

const TESTIMONIALS = [
  { name:"Sarah Chen",     role:"Solo Traveller · 47 Countries",  quote:"Voyaje completely changed how I plan trips. I used to spend weeks researching — now my itinerary is ready in minutes and it's always better than anything I'd plan myself. Absolute game changer." },
  { name:"Marco Delgado",  role:"Adventure Photographer",         quote:"As someone who travels to remote locations, the offline maps feature is invaluable. I've relied on Voyaje in places with zero signal and it's never let me down. Best travel investment I've made." },
  { name:"Yuki Tanaka",    role:"Digital Nomad · 3 Years Remote", quote:"I manage my entire travel life through Voyaje. The budget tracker alone has saved me hundreds. The group planning feature is brilliant — my friends and I used it for our Southeast Asia trip and it was flawless." },
  { name:"Amara Osei",     role:"Travel Writer",                  quote:"I've tested dozens of travel apps for my blog and nothing comes close to Voyaje. The AI recommendations are genuinely good — it once suggested a restaurant that turned into a highlight of my entire trip." },
  { name:"Tom Richards",   role:"Family Traveller",               quote:"Travelling with three kids requires serious logistics. Voyaje handles everything — family-friendly activities, budget alerts, hotel comparisons. My wife and I actually enjoy planning now." },
  { name:"Priya Sharma",   role:"Backpacker & Blogger",           quote:"The hidden gems feature is what sets Voyaje apart. Every city I visit, I find at least one place I'd have completely missed without it. It genuinely feels like having a local friend everywhere you go." },
];

const TEAM = [
  { img:IMGS.team1, name:"Alex Morgan",   role:"Co-Founder & CEO",  desc:"Former travel journalist who built Voyaje after getting lost in Tokyo with a useless guidebook." },
  { img:IMGS.team2, name:"Léa Beaumont",  role:"Head of Product",   desc:"UX designer passionate about making complex travel planning feel effortless and joyful." },
  { img:IMGS.team3, name:"Raj Patel",     role:"Lead Engineer",     desc:"AI specialist who built the recommendation engine that powers Voyaje's smart planning features." },
];

export default function TestimonialsContent() {
  useAnimateOnScroll(150);
  return (
    <>
      <section className="wrapper-grad">
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px" }}>
          <h2 className="section-title light wow bounceIn">Testimonials</h2>
          <div className="virticle-line"/><div className="virticle-dot"/>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t,i)=>(
              <div key={t.name} className={`testimonial-card wow bounceInUp delay-${(i%3)+1}`}>
                <p className="quote">&ldquo;{t.quote}&rdquo;</p>
                <p className="author">{t.name}</p>
                <p className="role">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper-dark">
        <div style={{ maxWidth:"1000px", margin:"0 auto", padding:"0 24px" }}>
          <h2 className="section-title light wow bounceIn">Development Team</h2>
          <div className="virticle-line"/><div className="virticle-dot"/>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((m,i)=>(
              <div key={m.name} className={`team-card wow ${i===0?"fadeInLeft":i===1?"bounceIn":"fadeInRight"}`}>
                {/* Image wrapper — overlay hanya menutupi gambar */}
                <div style={{ position:"relative", overflow:"hidden", borderRadius:"12px 12px 0 0" }}>
                  <Image src={m.img} alt={m.name} width={300} height={300}
                    style={{ width:"100%", height:"260px", objectFit:"cover", display:"block" }}/>
                  <div className="social-overlay">
                    {["𝕏","f","in"].map(s=><a key={s} href="#" onClick={e=>e.preventDefault()}>{s}</a>)}
                  </div>
                </div>
                {/* Text section — tidak tersentuh overlay */}
                <div style={{ padding:"16px", background:"rgba(255,255,255,0.03)", borderRadius:"0 0 12px 12px", border:"1px solid rgba(255,255,255,0.06)", borderTop:"none" }}>
                  <h3>{m.name}</h3>
                  <p style={{ fontSize:"10px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#51ffb6", marginBottom:"8px" }}>{m.role}</p>
                  <p style={{ fontSize:"12px", color:"rgba(255,255,255,0.45)", lineHeight:1.6 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
      <a href="#" className="back-to-top show" aria-label="Back to top">↑</a>
    </>
  );
}
