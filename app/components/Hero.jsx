
'use client'

import { useEffect, useRef, useState } from "react";

const roles = ["Frontend Developer", "React Specialist", "UI Craftsman", "Web Architect"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const canvasRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((i) => i + 1);
      }, 80);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((i) => i - 1);
      }, 40);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,230,190,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;
      }
      // Draw faint connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,230,190,${0.06 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }

    draw();

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600&display=swap');

        .hero-root {
          position: relative;
          min-height: 100vh;
          background: #080c10;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        .hero-canvas {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        /* Radial glow blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.18;
          pointer-events: none;
          z-index: 0;
        }
        .blob-1 {
          width: 500px; height: 500px;
          background: #63e6be;
          top: -120px; left: -100px;
          animation: blobFloat 8s ease-in-out infinite alternate;
        }
        .blob-2 {
          width: 380px; height: 380px;
          background: #4ade80;
          bottom: -80px; right: -80px;
          animation: blobFloat 11s ease-in-out infinite alternate-reverse;
        }

        @keyframes blobFloat {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(40px, 30px) scale(1.08); }
        }

        /* Content */
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 2rem 1.5rem;
          max-width: 780px;
          width: 100%;
          animation: fadeUp 0.9s cubic-bezier(.16,1,.3,1) both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99,230,190,0.07);
          border: 1px solid rgba(99,230,190,0.2);
          border-radius: 100px;
          padding: 6px 18px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          color: #63e6be;
          letter-spacing: 0.08em;
          margin-bottom: 2rem;
          animation: fadeUp 0.9s 0.1s cubic-bezier(.16,1,.3,1) both;
        }

        .dot-pulse {
          width: 7px; height: 7px;
          background: #63e6be;
          border-radius: 50%;
          animation: pulse 1.8s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,230,190,0.6); }
          50%       { box-shadow: 0 0 0 6px rgba(99,230,190,0); }
        }

        .hero-name {
          font-size: clamp(3.2rem, 9vw, 6.5rem);
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: #f0fdf4;
          animation: fadeUp 0.9s 0.2s cubic-bezier(.16,1,.3,1) both;
          margin-bottom: 0.5rem;
        }

        .name-accent {
          position: relative;
          display: inline-block;
          color: transparent;
          -webkit-text-stroke: 2px #63e6be;
          text-stroke: 2px #63e6be;
        }
        .name-accent::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          color: #63e6be;
          clip-path: inset(0 100% 0 0);
          animation: revealText 1.2s 0.6s cubic-bezier(.16,1,.3,1) forwards;
        }
        @keyframes revealText {
          to { clip-path: inset(0 0% 0 0); }
        }

        .hero-role-line {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 300;
          color: rgba(240,253,244,0.55);
          margin-bottom: 1.5rem;
          animation: fadeUp 0.9s 0.35s cubic-bezier(.16,1,.3,1) both;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .role-text { color: #a7f3d0; }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: #63e6be;
          border-radius: 2px;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .hero-desc {
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          font-weight: 400;
          color: rgba(240,253,244,0.42);
          max-width: 480px;
          margin: 0 auto 2.5rem;
          line-height: 1.75;
          animation: fadeUp 0.9s 0.45s cubic-bezier(.16,1,.3,1) both;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeUp 0.9s 0.55s cubic-bezier(.16,1,.3,1) both;
        }

        .btn-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #63e6be;
          color: #080c10;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
          padding: 13px 30px;
          border-radius: 4px;
          text-decoration: none;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 28px rgba(99,230,190,0.35);
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          transform: translateX(-100%) skewX(-12deg);
          transition: transform 0.4s ease;
        }
        .btn-primary:hover::before { transform: translateX(140%) skewX(-12deg); }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 40px rgba(99,230,190,0.5);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #f0fdf4;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
          padding: 13px 30px;
          border: 1px solid rgba(240,253,244,0.18);
          border-radius: 4px;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .btn-outline:hover {
          border-color: #63e6be;
          background: rgba(99,230,190,0.06);
          transform: translateY(-2px);
        }

        /* Stat strip */
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 4rem;
          animation: fadeUp 0.9s 0.65s cubic-bezier(.16,1,.3,1) both;
        }
        .stat {
          text-align: center;
        }
        .stat-num {
          display: block;
          font-size: 1.8rem;
          font-weight: 800;
          color: #63e6be;
          line-height: 1;
        }
        .stat-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          color: rgba(240,253,244,0.35);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 4px;
        }
        .stat-divider {
          width: 1px;
          background: rgba(240,253,244,0.1);
          align-self: stretch;
        }

        /* Scroll hint */
        .scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          z-index: 2;
          animation: fadeUp 1s 1s cubic-bezier(.16,1,.3,1) both;
        }
        .scroll-text {
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(240,253,244,0.25);
          text-transform: uppercase;
        }
        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(99,230,190,0.4), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.5; }
          50%       { transform: scaleY(1.3); opacity: 1; }
        }

        @media (max-width: 600px) {
          .hero-stats { gap: 1.5rem; }
          .stat-num { font-size: 1.4rem; }
        }
      `}</style>

      <section className="hero-root">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot-pulse" />
            Available for work
          </div>

          <h1 className="hero-name">
            Hi, I'm{" "}
            <span className="name-accent" data-text="Anurag">Anurag</span>
          </h1>

          <div className="hero-role-line">
            <span className="role-text">{displayed}</span>
            <span className="cursor" />
          </div>

          <p className="hero-desc">
            Crafting fast, accessible, and beautiful web experiences with 3+ years of hands‑on expertise.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Hire Me
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4.5A1.5 1.5 0 013.5 3h9A1.5 1.5 0 0114 4.5v7a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 11.5v-7z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 5l6 4.5L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">40+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">20+</span>
              <span className="stat-label">Clients</span>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>
    </>
  );
}