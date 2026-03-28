export default function Projects() {
  const projects = [
    {
      title: "Dashboard UI",
      desc: "A sleek admin dashboard with real-time analytics, modular widgets, and role-based access control built for enterprise workflows.",
      tag: "Admin / SaaS",
      year: "2024",
      icon: "⬡",
    },
    {
      title: "E-commerce UI",
      desc: "End-to-end shopping experience with dynamic product filtering, cart state management, and seamless checkout integration.",
      tag: "Retail / Web",
      year: "2023",
      icon: "◈",
    },
    {
      title: "Landing Page",
      desc: "High-conversion marketing page featuring scroll-driven animations, A/B-tested copy sections, and sub-2s load performance.",
      tag: "Marketing",
      year: "2023",
      icon: "◎",
    },
    {
      title: "Gov Portal",
      desc: "Accessible government service portal meeting WCAG 2.1 AA standards, with multi-step form flows and document upload.",
      tag: "Government",
      year: "2024",
      icon: "⬠",
    },
    {
      title: "SaaS Onboarding",
      desc: "Interactive onboarding wizard with progress persistence, contextual tooltips, and personalised setup paths.",
      tag: "SaaS / UX",
      year: "2024",
      icon: "◇",
    },
    {
      title: "Design System",
      desc: "Component library and token-based design system powering three production apps with shared theming and Storybook docs.",
      tag: "Dev Tooling",
      year: "2023",
      icon: "✦",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600&display=swap');

        .proj-root {
          position: relative;
          background: #080c10;
          padding: 7rem 1.5rem;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* Blobs — mirrored from About */
        .proj-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.12;
          pointer-events: none;
        }
        .proj-blob-1 {
          width: 420px; height: 420px;
          background: #63e6be;
          top: -80px; right: -120px;
        }
        .proj-blob-2 {
          width: 300px; height: 300px;
          background: #4ade80;
          bottom: -60px; left: -60px;
        }

        /* Inner wrapper */
        .proj-inner {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto;
        }

        /* Section header */
        .proj-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .proj-header-left {}

        .proj-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #63e6be;
          margin-bottom: 1.2rem;
        }
        .proj-label-line {
          display: inline-block;
          width: 32px;
          height: 1px;
          background: #63e6be;
          opacity: 0.6;
        }

        .proj-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #f0fdf4;
          margin: 0;
        }
        .proj-heading em {
          font-style: italic;
          color: #63e6be;
        }

        .proj-count {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(3rem, 6vw, 5rem);
          color: rgba(99,230,190,0.07);
          line-height: 1;
          letter-spacing: -0.04em;
          user-select: none;
        }

        /* Grid */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .proj-grid { grid-template-columns: 1fr; }
        }

        /* Card */
        .proj-card {
          position: relative;
          background: rgba(99,230,190,0.03);
          border: 1px solid rgba(99,230,190,0.09);
          border-radius: 14px;
          padding: 1.8rem 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
          cursor: default;
          overflow: hidden;
        }
        .proj-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top left, rgba(99,230,190,0.06) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .proj-card:hover {
          background: rgba(99,230,190,0.07);
          border-color: rgba(99,230,190,0.28);
          transform: translateY(-4px);
        }
        .proj-card:hover::before {
          opacity: 1;
        }

        /* Card top row */
        .proj-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .proj-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(99,230,190,0.09);
          border: 1px solid rgba(99,230,190,0.15);
          color: #63e6be;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .proj-card:hover .proj-icon {
          background: rgba(99,230,190,0.16);
        }

        .proj-year {
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(240,253,244,0.22);
        }

        /* Card body */
        .proj-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: #f0fdf4;
          line-height: 1.2;
          margin: 0;
        }

        .proj-desc {
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(240,253,244,0.42);
          margin: 0;
          flex: 1;
        }

        /* Tag + arrow row */
        .proj-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(240,253,244,0.05);
        }

        .proj-tag {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(99,230,190,0.7);
          background: rgba(99,230,190,0.07);
          border: 1px solid rgba(99,230,190,0.12);
          border-radius: 4px;
          padding: 3px 10px;
        }

        .proj-arrow {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(240,253,244,0.08);
          color: rgba(240,253,244,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .proj-card:hover .proj-arrow {
          border-color: rgba(99,230,190,0.4);
          color: #63e6be;
          transform: rotate(45deg);
        }

        /* Bottom CTA — matches About section */
        .proj-cta {
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
        .proj-cta-text {
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(240,253,244,0.38);
        }
        .proj-cta-text strong {
          color: rgba(240,253,244,0.7);
          font-weight: 500;
        }

        .btn-view-all {
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
          cursor: pointer;
          border: none;
        }
        .btn-view-all::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          transform: translateX(-100%) skewX(-12deg);
          transition: transform 0.4s ease;
        }
        .btn-view-all:hover::before { transform: translateX(140%) skewX(-12deg); }
        .btn-view-all:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 36px rgba(99,230,190,0.45);
        }
      `}</style>

      <section id="projects" className="proj-root">
        <div className="proj-blob proj-blob-1" />
        <div className="proj-blob proj-blob-2" />

        <div className="proj-inner">
          {/* Header */}
          <div className="proj-header">
            <div className="proj-header-left">
              <div className="proj-label">
                <span className="proj-label-line" />
                Selected Work
              </div>
              <h2 className="proj-heading">
                Projects built with <em>purpose</em>
              </h2>
            </div>
            <div className="proj-count">0{projects.length}</div>
          </div>

          {/* Grid */}
          <div className="proj-grid">
            {projects.map((p) => (
              <div className="proj-card" key={p.title}>
                <div className="proj-card-top">
                  <div className="proj-icon">{p.icon}</div>
                  <span className="proj-year">{p.year}</span>
                </div>

                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>

                <div className="proj-footer">
                  <span className="proj-tag">{p.tag}</span>
                  <div className="proj-arrow">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="proj-cta">
          <p className="proj-cta-text">
            Want to see more? Check out my <strong>GitHub</strong> or get in <strong>touch</strong>.
          </p>
          <a href="/projects" className="btn-view-all">
            View All Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}