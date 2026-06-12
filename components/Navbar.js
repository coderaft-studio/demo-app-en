"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href:"/",             label:"Home" },
  { href:"/features",     label:"Features" },
  { href:"/speciality",   label:"Speciality" },
  { href:"/gallery",      label:"Gallery" },
  { href:"/testimonials", label:"Testimonials" },
  { href:"/pricing",      label:"Pricing" },
  { href:"/contact",      label:"Contact" },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    const fn = ()=>setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive:true });
    return ()=>window.removeEventListener("scroll", fn);
  },[]);

  return (
    <>
      <div className={`top-bar${scrolled?" scrolled":""}`}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <Link href="/" className="nav-logo"><strong>V</strong>oyaje</Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ gap:"32px" }}>
            {LINKS.map(l=>(
              <Link key={l.href} href={l.href} className={path===l.href?"active":""}>{l.label}</Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button className="md:hidden" onClick={()=>setOpen(true)}
            style={{ background:"none", border:"1px solid rgba(81,255,182,0.3)", color:"#51ffb6", padding:"6px 14px", fontSize:"11px", letterSpacing:"0.1em", cursor:"pointer", borderRadius:"4px" }}>
            ☰
          </button>
        </div>
      </div>

      {/* Overlay menu */}
      <div className={`overlay-menu${open?" open":""}`}>
        <button className="overlay-close" onClick={()=>setOpen(false)}>✕</button>
        <nav>
          <ul>
            {LINKS.map(l=>(
              <li key={l.href}>
                <Link href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
