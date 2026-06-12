import Link from "next/link";

export default function Footer() {
  return (
    <section className="footer-section">
      <div style={{ maxWidth:"800px", margin:"0 auto", padding:"0 24px" }}>
        <div className="footer-logo wow bounceIn">voyaje</div>
        <ul className="social-icons">
          {[
            { icon:"𝕏", label:"Twitter" },
            { icon:"f", label:"Facebook" },
            { icon:"in", label:"LinkedIn" },
            { icon:"▶", label:"YouTube" },
            { icon:"📷", label:"Instagram" },
          ].map(s=>(
            <li key={s.label}><a href="#" aria-label={s.label}>{s.icon}</a></li>
          ))}
        </ul>
        <div className="copyright">
          <p>Made with ♥ for adventurers everywhere</p>
          <p style={{ marginTop:"8px" }}>© {new Date().getFullYear()} Voyaje. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
}
