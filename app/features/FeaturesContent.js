"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import { IMGS } from "@/lib/images";
import { useAnimateOnScroll } from "@/lib/hooks";

const LEFT_FEATURES = [
  { icon:"🗺️", title:"Smart Itinerary Builder", desc:"AI generates day-by-day travel plans based on your interests, pace, and budget. Adjust with a tap." },
  { icon:"🔍", title:"Discover Hidden Gems",    desc:"Go beyond tourist traps. Voyaje surfaces local favourites, neighbourhood cafés, and off-the-beaten-path attractions." },
  { icon:"📅", title:"Real-Time Availability",  desc:"Check flight schedules, hotel rooms, and tour bookings in real-time — all without leaving the app." },
];
const RIGHT_FEATURES = [
  { icon:"🌐", title:"Offline Maps",           desc:"Download maps and travel data before departure. Navigate confidently even without a data connection." },
  { icon:"💱", title:"Currency & Budget Tracker", desc:"Set a daily budget, track your spending in local currency, and get smart alerts before you overspend." },
  { icon:"🔔", title:"Smart Notifications",    desc:"Flight delays, gate changes, check-in reminders — Voyaje keeps you informed at every stage of your journey." },
];

export default function FeaturesContent() {
  useAnimateOnScroll(150);
  return (
    <>
      {/* Features intro */}
      <section className="wrapper-dark">
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px" }}>
          <h2 className="section-title light wow bounceIn">Features</h2>
          <div className="virticle-line"/><div className="virticle-dot"/>
          <div style={{ textAlign:"center", maxWidth:"680px", margin:"0 auto 48px" }}>
            <Image src={IMGS.featureMain} alt="Voyaje Features" width={680} height={440}
              style={{ width:"100%", height:"auto", borderRadius:"16px", objectFit:"cover", boxShadow:"0 20px 60px rgba(81,255,182,0.1)" }}
              className="wow bounceInDown"/>
          </div>
          <p style={{ textAlign:"center", color:"rgba(255,255,255,0.55)", maxWidth:"560px", margin:"0 auto", lineHeight:1.8 }} className="wow fadeIn">
            Built for real travellers by a team of passionate explorers. Every feature in Voyaje was designed to solve a real problem we've experienced on the road.
          </p>
        </div>
      </section>

      {/* Big Features grid */}
      <section className="wrapper" style={{ background:"#0d0d1a" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px" }}>
          <div className="grid md:grid-cols-3 gap-0 items-center">
            <ul className="item-list-big item-list-right">
              {LEFT_FEATURES.map((f,i)=>(
                <li key={f.title} className={`wow fadeInLeft delay-${i+1}`}>
                  <div className="feat-icon">{f.icon}</div>
                  <div><h3>{f.title}</h3><p>{f.desc}</p></div>
                </li>
              ))}
            </ul>
            <div style={{ textAlign:"center", padding:"0 32px" }} className="wow bounceIn">
              <Image src={IMGS.featureLeft} alt="App" width={300} height={540}
                style={{ width:"100%", maxWidth:"280px", borderRadius:"24px", objectFit:"cover", boxShadow:"0 0 60px rgba(81,255,182,0.15)" }}/>
            </div>
            <ul className="item-list-big">
              {RIGHT_FEATURES.map((f,i)=>(
                <li key={f.title} className={`wow fadeInRight delay-${i+1}`}>
                  <div className="feat-icon">{f.icon}</div>
                  <div><h3>{f.title}</h3><p>{f.desc}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Free vs Premium */}
      <section className="wrapper-light">
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px" }}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="wow fadeInLeft">
              <Image src={IMGS.featureRight} alt="Free Features" width={500} height={380}
                style={{ width:"100%", borderRadius:"16px", objectFit:"cover", boxShadow:"0 16px 48px rgba(0,0,0,0.1)" }}/>
            </div>
            <div className="wow fadeInRight">
              <div className="features-list">
                <h3>Free Features</h3>
                <p>Everything you need to plan your first adventure. Voyaje Free is packed with powerful tools at no cost.</p>
                <ul className="right">
                  {["Destination discovery","Basic itinerary builder","Offline map access","Currency converter","Weather forecasts","Flight search","Hotel browsing","Community reviews"].map(f=><li key={f}>{f}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center" style={{ marginTop:"64px" }}>
            <div className="wow fadeInLeft">
              <div className="features-list-left">
                <h3>Premium Features</h3>
                <p>Unlock the full power of Voyaje and travel like a pro. Premium gives you everything, everywhere.</p>
                <ul className="left">
                  {["AI trip personalisation","Unlimited itineraries","Real-time flight alerts","Budget tracker with alerts","Priority customer support","Exclusive local guides","Group trip planning","Zero ads, ever"].map(f=><li key={f}>{f}</li>)}
                </ul>
              </div>
            </div>
            <div className="wow fadeInRight">
              <Image src={IMGS.featureLeft} alt="Premium Features" width={500} height={380}
                style={{ width:"100%", borderRadius:"16px", objectFit:"cover", boxShadow:"0 16px 48px rgba(0,0,0,0.1)" }}/>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
      <a href="#" className="back-to-top show" aria-label="Back to top">↑</a>
    </>
  );
}
