"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600&display=swap');

        .nav-root {
          position: sticky;
          top: 0;
          z-index: 50;
          font-family: 'Outfit', sans-serif;
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
        }

        .nav-root.scrolled {
          background: rgba(8, 12, 16, 0.85);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(99,230,190,0.08);
          box-shadow: 0 4px 40px rgba(0,0,0,0.4);
        }

        .nav-root.top {
          background: transparent;
          border-bottom: 1px solid transparent;
        }

        .nav-inner {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 1.45rem;
          color: #f0fdf4;
          text-decoration: none;
          letter-spacing: -0.02em;
          line-height: 1;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nav-logo em {
          font-style: italic;
          color: #63e6be;
        }
        .nav-logo-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #63e6be;
          display: inline-block;
          margin-bottom: 10px;
          box-shadow: 0 0 8px rgba(99,230,190,0.7);
        }

        /* Desktop links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
        }

        .nav-link {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #63E6BE;
          text-decoration: none;
          position: relative;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #63e6be;
          transition: width 0.25s ease;
        }
        .nav-link:hover {
          color: #63e6be;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        /* CTA hire button */
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: transparent;
          color: #63e6be;
          border: 1px solid rgba(99,230,190,0.35);
          font-family: 'Outfit', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 4px;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .nav-cta:hover {
          background: rgba(99,230,190,0.08);
          border-color: rgba(99,230,190,0.7);
          box-shadow: 0 0 20px rgba(99,230,190,0.15);
          transform: translateY(-1px);
        }

        /* Hamburger */
        .nav-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        @media (max-width: 768px) {
          .nav-burger { display: flex; }
        }

        .burger-line {
          display: block;
          height: 1.5px;
          background: rgba(240,253,244,0.7);
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s, width 0.3s;
          transform-origin: center;
        }
        .burger-line-1 { width: 22px; }
        .burger-line-2 { width: 16px; }
        .burger-line-3 { width: 22px; }

        .nav-burger.open .burger-line-1 {
          transform: translateY(6.5px) rotate(45deg);
          width: 22px;
        }
        .nav-burger.open .burger-line-2 {
          opacity: 0;
          transform: scaleX(0);
        }
        .nav-burger.open .burger-line-3 {
          transform: translateY(-6.5px) rotate(-45deg);
          width: 22px;
        }

        /* Mobile drawer */
        .nav-mobile {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
          background: rgba(8,12,16,0.97);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(99,230,190,0.07);
        }
        .nav-mobile.closed {
          max-height: 0;
          opacity: 0;
        }
        .nav-mobile.opened {
          max-height: 320px;
          opacity: 1;
        }

        .nav-mobile-inner {
          max-width: 1080px;
          margin: 0 auto;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .nav-mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(240,253,244,0.05);
          text-decoration: none;
          color: rgba(240,253,244,0.5);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-mobile-link:last-of-type {
          border-bottom: none;
        }
        .nav-mobile-link:hover {
          color: #63e6be;
        }
        .nav-mobile-link svg {
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .nav-mobile-link:hover svg {
          opacity: 1;
          transform: translateX(0);
        }

        .nav-mobile-cta {
          margin-top: 1.25rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #63e6be;
          color: #080c10;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.06em;
          padding: 11px 0;
          border-radius: 4px;
          text-decoration: none;
          box-shadow: 0 0 24px rgba(99,230,190,0.25);
        }
      `}</style>

      <nav className={`nav-root ${scrolled ? "scrolled" : "top"}`}>
        <div className="nav-inner">

          {/* Logo */}
          <a href="#" className="nav-logo">
            <em>Anurag</em>
            <span className="nav-logo-dot" />
          </a>

          {/* Desktop links */}
          <div className="nav-links">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="nav-cta">
              Hire Me
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`nav-burger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="burger-line burger-line-1" />
            <span className="burger-line burger-line-2" />
            <span className="burger-line burger-line-3" />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`nav-mobile ${open ? "opened" : "closed"}`}>
          <div className="nav-mobile-inner">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-mobile-link"
                onClick={() => setOpen(false)}
              >
                {l.label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="#63e6be" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
            <a href="#contact" className="nav-mobile-cta" onClick={() => setOpen(false)}>
              Hire Me
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}