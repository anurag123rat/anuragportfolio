export default function About() {
  const skills = [
    { name: "React.js", icon: "⚛" },
    { name: "Next.js", icon: "▲" },
    { name: "JavaScript", icon: "JS" },
    { name: "HTML5", icon: "</>" },
    { name: "CSS3", icon: "✦" },
    { name: "Axios", icon: "⇄" },
  ];

  const highlights = [
    { value: "3+", label: "Years Experience" },
    { value: "40+", label: "Projects Shipped" },
    { value: "20+", label: "Happy Clients" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600&display=swap');

        .about-root {
          position: relative;
          background: #080c10;
          padding: 7rem 1.5rem;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* Subtle left-side glow blob */
        .about-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.12;
          pointer-events: none;
        }
        .about-blob-1 {
          width: 420px; height: 420px;
          background: #63e6be;
          bottom: -80px; left: -120px;
        }
        .about-blob-2 {
          width: 300px; height: 300px;
          background: #4ade80;
          top: -60px; right: -60px;
        }

        /* Top label */
        .about-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #63e6be;
          margin-bottom: 1.2rem;
        }
        .about-label-line {
          display: inline-block;
          width: 32px;
          height: 1px;
          background: #63e6be;
          opacity: 0.6;
        }

        /* Layout */
        .about-inner {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        /* Left col */
        .about-left {}

        .about-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #f0fdf4;
          margin-bottom: 1.5rem;
        }
        .about-heading em {
          font-style: italic;
          color: #63e6be;
        }

        .about-body {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(240,253,244,0.48);
          margin-bottom: 2rem;
        }

        /* Highlight bar */
        .about-highlights {
          display: flex;
          gap: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(240,253,244,0.07);
        }
        .highlight-item {}
        .highlight-val {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 2rem;
          color: #63e6be;
          line-height: 1;
        }
        .highlight-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(240,253,244,0.3);
          margin-top: 4px;
        }

        /* Right col — skill cards */
        .about-right {}

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .skill-card {
          background: rgba(99,230,190,0.04);
          border: 1px solid rgba(99,230,190,0.1);
          border-radius: 12px;
          padding: 1.2rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          cursor: default;
        }
        .skill-card:hover {
          background: rgba(99,230,190,0.08);
          border-color: rgba(99,230,190,0.3);
          transform: translateY(-3px);
        }

        .skill-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(99,230,190,0.1);
          color: #63e6be;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          flex-shrink: 0;
          letter-spacing: 0;
        }

        .skill-name {
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(240,253,244,0.8);
        }

        /* Bottom CTA strip */
        .about-cta {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 4rem auto 0;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(240,253,244,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .about-cta-text {
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(240,253,244,0.38);
        }
        .about-cta-text strong {
          color: rgba(240,253,244,0.7);
          font-weight: 500;
        }

        .btn-resume {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #63e6be;
          color: #080c10;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          padding: 11px 26px;
          border-radius: 4px;
          text-decoration: none;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 24px rgba(99,230,190,0.3);
        }
        .btn-resume::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          transform: translateX(-100%) skewX(-12deg);
          transition: transform 0.4s ease;
        }
        .btn-resume:hover::before { transform: translateX(140%) skewX(-12deg); }
        .btn-resume:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 36px rgba(99,230,190,0.45);
        }
      `}</style>

      <section id="about" className="about-root">
        <div className="about-blob about-blob-1" />
        <div className="about-blob about-blob-2" />

        <div className="about-inner">
          {/* Left — text */}
          <div className="about-left">
            <div className="about-label">
              <span className="about-label-line" />
              About Me
            </div>

            <h2 className="about-heading">
              Crafting digital<br />
              experiences with <em>intent</em>
            </h2>

            <p className="about-body">
              Frontend Developer with 3+ years building responsive, user-centric
              web applications. Skilled in React.js, Next.js, and JavaScript (ES6+)
              with a sharp focus on performance and usability. Experienced in API
              integration and scalable state management — delivering enterprise and
              government-grade solutions that users actually enjoy.
            </p>

            <div className="about-highlights">
              {highlights.map((h) => (
                <div className="highlight-item" key={h.label}>
                  <div className="highlight-val">{h.value}</div>
                  <div className="highlight-label">{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — skills */}
          <div className="about-right">
            <div className="skills-grid">
              {skills.map((s) => (
                <div className="skill-card" key={s.name}>
                  <div className="skill-icon">{s.icon}</div>
                  <span className="skill-name">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="about-cta">
          <p className="about-cta-text">
            Currently open to <strong>full-time</strong> and <strong>freelance</strong> opportunities.
          </p>
          <a href="/resume.pdf" download="Anurag_Resume.pdf" className="btn-resume">
            Download Resume
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v8M4 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}