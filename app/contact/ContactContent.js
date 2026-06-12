"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import { useAnimateOnScroll } from "@/lib/hooks";

const GOLD = "#51ffb6";
const INPUT_STYLE = { display:"block", width:"100%", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(81,255,182,0.15)", borderRadius:"8px", padding:"12px 16px", fontSize:"14px", color:"#fff", outline:"none", fontFamily:"'Raleway',sans-serif", boxSizing:"border-box", transition:"border-color .25s, background .25s" };

export default function ContactContent() {
  useAnimateOnScroll(150);
  const [form, setForm] = useState({ name:"", email:"", website:"", message:"" });
  const [sent, setSent] = useState(false);
  const f = k=>e=>setForm(p=>({...p,[k]:e.target.value}));

  return (
    <>
      <section className="wrapper-dark">
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px" }}>
          <h2 className="section-title light wow bounceIn">Contact Us</h2>
          <div className="virticle-line"/><div className="virticle-dot"/>

          <div className="grid md:grid-cols-4 gap-4" style={{ marginBottom:"64px" }}>
            {[
              { icon:"📍", title:"Office",       text:"500 Market Street\nSan Francisco, CA 94105",   delay:"fadeInLeft" },
              { icon:"📞", title:"Phone",        text:"+1 (415) 555-0192\n+1 (800) VOYAJE-1",         delay:"fadeInLeft" },
              { icon:"✉",  title:"Email",        text:"hello@voyaje.app\nsupport@voyaje.app",          delay:"fadeInRight" },
              { icon:"🕐", title:"Support Hours", text:"Mon–Fri: 8am – 8pm PST\nWeekends: 9am – 5pm", delay:"fadeInRight" },
            ].map(c=>(
              <div key={c.title} className={`contact-item wow ${c.delay}`}>
                <div className="icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p style={{ whiteSpace:"pre-line" }}>{c.text}</p>
              </div>
            ))}
          </div>

          <div style={{ maxWidth:"960px", margin:"0 auto" }} className="wow fadeIn">
            <div style={{ background:"linear-gradient(135deg,rgba(81,255,182,0.05),rgba(87,160,255,0.05))", border:"1px solid rgba(81,255,182,0.15)", borderRadius:"20px", padding:"clamp(32px,5vw,56px)", backdropFilter:"blur(12px)" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"40px" }}>
                <div style={{ width:"40px", height:"2px", background:"linear-gradient(90deg,#51ffb6,#57a0ff)", borderRadius:"2px" }}/>
                <h3 style={{ fontSize:"clamp(20px,2.5vw,28px)", fontWeight:300, color:"#fff", letterSpacing:"0.08em", margin:0 }}>Leave a Message</h3>
                <div style={{ flex:1, height:"1px", background:"rgba(81,255,182,0.1)" }}/>
              </div>

              {sent ? (
                <div style={{ textAlign:"center", padding:"48px 0" }}>
                  <div style={{ width:"72px", height:"72px", borderRadius:"50%", background:"linear-gradient(135deg,#51ffb6,#57a0ff)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 24px", fontSize:"28px", color:"#1a1a2e" }}>✓</div>
                  <h3 style={{ fontSize:"28px", fontWeight:300, color:"#fff", marginBottom:"10px" }}>Message sent!</h3>
                  <p style={{ color:"rgba(255,255,255,0.5)", marginBottom:"28px" }}>We'll get back to you within 24 hours.</p>
                  <button onClick={()=>setSent(false)} className="btn-grad" style={{ fontSize:"10px" }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={e=>{e.preventDefault();setSent(true);}}>
                  <div className="grid md:grid-cols-3 gap-x-10">
                    {[
                      { k:"name",    l:"Your Name",    ph:"Full name",      type:"text",  req:true,  icon:"👤" },
                      { k:"email",   l:"Email Address", ph:"your@email.com", type:"email", req:true,  icon:"✉" },
                      { k:"website", l:"Website",       ph:"yoursite.com",   type:"text",  req:false, icon:"🌐" },
                    ].map(fi=>(
                      <div key={fi.k} style={{ marginBottom:"32px" }}>
                        <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"10px" }}>
                          <span style={{ fontSize:"12px" }}>{fi.icon}</span>
                          <span style={{ fontSize:"9px", fontWeight:700, letterSpacing:".25em", textTransform:"uppercase", color:GOLD }}>{fi.l}</span>
                        </div>
                        <input required={fi.req} type={fi.type} placeholder={fi.ph} value={form[fi.k]} onChange={f(fi.k)}
                          style={INPUT_STYLE}
                          onFocus={e=>{ e.target.style.borderColor=GOLD; e.target.style.background="rgba(81,255,182,0.06)"; }}
                          onBlur={e=>{ e.target.style.borderColor="rgba(81,255,182,0.15)"; e.target.style.background="rgba(255,255,255,0.04)"; }}/>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom:"36px" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"10px" }}>
                      <span style={{ fontSize:"12px" }}>💬</span>
                      <span style={{ fontSize:"9px", fontWeight:700, letterSpacing:".25em", textTransform:"uppercase", color:GOLD }}>Your Message</span>
                    </div>
                    <textarea required rows={5} value={form.message} onChange={f("message")}
                      placeholder="Tell us about your travel dreams, questions, or just say hello..."
                      style={{ ...INPUT_STYLE, resize:"none", lineHeight:1.7 }}
                      onFocus={e=>{ e.target.style.borderColor=GOLD; e.target.style.background="rgba(81,255,182,0.06)"; }}
                      onBlur={e=>{ e.target.style.borderColor="rgba(81,255,182,0.15)"; e.target.style.background="rgba(255,255,255,0.04)"; }}/>
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"16px" }}>
                    <p style={{ color:"rgba(255,255,255,0.3)", fontSize:"12px", margin:0 }}>✓ We respond within 24 hours</p>
                    <button type="submit" className="btn-grad" style={{ padding:"14px 48px", fontSize:"11px", letterSpacing:"0.2em" }}>Send Message →</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer/>
      <a href="#" className="back-to-top show" aria-label="Back to top">↑</a>
    </>
  );
}
