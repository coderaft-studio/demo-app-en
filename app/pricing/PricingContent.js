"use client";
import Footer from "@/components/Footer";
import { useAnimateOnScroll } from "@/lib/hooks";

const GOLD = "#51ffb6";

const PLANS = [
  {
    name:"Explorer", price:"Free", sub:"forever", featured:false,
    features:["Destination discovery","Basic itinerary builder","Offline map access","Currency converter","Weather forecasts","Flight search"],
    missing:["AI personalisation","Budget alerts","Group planning","Priority support"],
  },
  {
    name:"Adventurer", price:"$4", sub:".99 / month", featured:true, stamp:"Best Choice",
    features:["Everything in Explorer","AI trip personalisation","Unlimited itineraries","Budget tracker with alerts","Real-time flight alerts","Group trip planning","Exclusive local guides","Priority support"],
    missing:[],
  },
  {
    name:"Nomad", price:"$9", sub:".99 / month", featured:false,
    features:["Everything in Adventurer","Travel insurance integration","Concierge support 24/7","VIP lounge access info","Custom branded itineraries","Expense reports & export","Team & corporate travel"],
    missing:[],
  },
];

export default function PricingContent() {
  useAnimateOnScroll(150);
  return (
    <>
      <section className="wrapper-grad">
        <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"0 24px" }}>
          <h2 className="section-title light wow bounceIn">Choose Your Plan</h2>
          <div className="virticle-line"/><div className="virticle-dot"/>
          <p style={{ textAlign:"center", color:"rgba(255,255,255,0.55)", maxWidth:"480px", margin:"0 auto 64px", lineHeight:1.8 }} className="wow fadeIn">
            Start free, upgrade anytime. No contracts, no hidden fees. Cancel whenever you want.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ alignItems:"stretch" }}>
            {PLANS.map((plan, i)=>{
              const isFeatured = plan.featured;
              return (
                <div key={plan.name} className={`wow fadeIn delay-${i+1}`}
                  style={{
                    position:"relative",
                    background: isFeatured ? "linear-gradient(160deg,rgba(81,255,182,0.1),rgba(87,160,255,0.08))" : "rgba(255,255,255,0.03)",
                    border: isFeatured ? "1px solid rgba(81,255,182,0.45)" : "1px solid rgba(255,255,255,0.08)",
                    borderRadius:"20px",
                    padding: isFeatured ? "48px 28px 36px" : "32px 28px",
                    display:"flex", flexDirection:"column",
                    boxShadow: isFeatured ? "0 0 48px rgba(81,255,182,0.1), inset 0 1px 0 rgba(81,255,182,0.15)" : "none",
                  }}>
                  {isFeatured && (
                    <div style={{ position:"absolute", top:"-14px", left:"50%", transform:"translateX(-50%)", background:"linear-gradient(90deg,#51ffb6,#57a0ff)", color:"#1a1a2e", fontSize:"9px", fontWeight:800, letterSpacing:"0.2em", textTransform:"uppercase", padding:"5px 18px", borderRadius:"20px", whiteSpace:"nowrap", boxShadow:"0 4px 16px rgba(81,255,182,0.35)" }}>
                      ⭐ Best Choice
                    </div>
                  )}
                  {/* Header */}
                  <div style={{ marginBottom:"20px", paddingBottom:"20px", borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
                    <p style={{ fontSize:"9px", fontWeight:800, letterSpacing:"0.3em", textTransform:"uppercase", marginBottom:"14px", color: isFeatured ? GOLD : "rgba(255,255,255,0.35)" }}>{plan.name}</p>
                    {plan.price === "Free" ? (
                      <div style={{ display:"flex", alignItems:"baseline", gap:"8px" }}>
                        <span style={{ fontSize:"48px", fontWeight:100, color:"#fff", lineHeight:1 }}>Free</span>
                        <span style={{ fontSize:"12px", color:"rgba(255,255,255,0.35)" }}>forever</span>
                      </div>
                    ) : (
                      <div style={{ display:"flex", alignItems:"flex-start", gap:"2px" }}>
                        <span style={{ fontSize:"18px", fontWeight:400, color:"rgba(255,255,255,0.5)", marginTop:"8px" }}>$</span>
                        <span style={{ fontSize:"52px", fontWeight:100, color:"#fff", lineHeight:1 }}>{plan.price.replace("$","")}</span>
                        <span style={{ fontSize:"12px", color:"rgba(255,255,255,0.35)", marginTop:"10px", marginLeft:"4px", lineHeight:1.4 }}>.99<br/>/ mo</span>
                      </div>
                    )}
                  </div>
                  {/* Features */}
                  <ul style={{ listStyle:"none", padding:0, margin:"0 0 28px", flex:1, display:"flex", flexDirection:"column" }}>
                    {plan.features.map(feat=>(
                      <li key={feat} style={{ fontSize:"13px", color: isFeatured ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.6)", padding:"9px 0", borderBottom:"1px solid rgba(255,255,255,0.04)", display:"flex", alignItems:"center", gap:"10px" }}>
                        <span style={{ width:"16px", height:"16px", borderRadius:"50%", flexShrink:0, background: isFeatured ? "linear-gradient(135deg,#51ffb6,#57a0ff)" : "rgba(81,255,182,0.12)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"8px", color: isFeatured ? "#1a1a2e" : GOLD, fontWeight:900 }}>✓</span>
                        {feat}
                      </li>
                    ))}
                    {plan.missing.map(feat=>(
                      <li key={feat} style={{ fontSize:"13px", color:"rgba(255,255,255,0.18)", padding:"9px 0", borderBottom:"1px solid rgba(255,255,255,0.03)", display:"flex", alignItems:"center", gap:"10px", textDecoration:"line-through" }}>
                        <span style={{ width:"16px", height:"16px", borderRadius:"50%", flexShrink:0, background:"rgba(255,255,255,0.04)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"8px", color:"rgba(255,255,255,0.18)" }}>✕</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  {/* CTA */}
                  <a href="#" style={{ display:"block", textAlign:"center", textDecoration:"none", padding:"14px 24px", borderRadius:"50px", fontSize:"10px", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", transition:"all .3s", background: isFeatured ? "linear-gradient(90deg,#51ffb6,#57a0ff)" : "transparent", color: isFeatured ? "#1a1a2e" : "rgba(255,255,255,0.6)", border: isFeatured ? "none" : "1px solid rgba(255,255,255,0.15)", boxShadow: isFeatured ? "0 6px 24px rgba(81,255,182,0.25)" : "none" }}>
                    {plan.price==="Free" ? "Download Free" : "Get Started"}
                  </a>
                </div>
              );
            })}
          </div>
          <p style={{ textAlign:"center", color:"rgba(255,255,255,0.25)", fontSize:"12px", marginTop:"48px", letterSpacing:"0.05em" }} className="wow fadeIn">
            All plans include a 14-day free trial &nbsp;·&nbsp; No credit card required for Explorer
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="wrapper-dark">
        <div style={{ maxWidth:"800px", margin:"0 auto", padding:"0 24px" }}>
          <h2 className="section-title light wow bounceIn">FAQ</h2>
          <div className="virticle-line"/><div className="virticle-dot"/>
          <div style={{ display:"flex", flexDirection:"column", gap:"20px" }}>
            {[
              { q:"Can I switch plans anytime?",           a:"Absolutely. Upgrade, downgrade, or cancel your subscription at any time from your account settings. Changes take effect immediately." },
              { q:"Is there a free trial for paid plans?", a:"Yes — all paid plans come with a 14-day free trial. No credit card required to start exploring premium features." },
              { q:"What payment methods do you accept?",   a:"We accept all major credit and debit cards, PayPal, Apple Pay, and Google Pay." },
              { q:"Do you offer team or corporate pricing?",a:"Yes — the Nomad plan supports corporate travel with expense reports, team itineraries, and bulk billing. Contact us for enterprise pricing." },
            ].map((item,i)=>(
              <div key={i} className={`wow fadeInLeft delay-${i+1}`}
                style={{ padding:"24px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(81,255,182,0.1)", borderRadius:"8px" }}>
                <h3 style={{ fontSize:"15px", fontWeight:600, color:"#fff", marginBottom:"8px" }}>{item.q}</h3>
                <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.55)", lineHeight:1.7, margin:0 }}>{item.a}</p>
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
