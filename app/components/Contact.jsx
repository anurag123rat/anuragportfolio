export default function Contact() {
  const socials = [
    
    {
      label: "LinkedIn",
      handle: "linkedin.com/in/talktoanuragnow",
      href: "https://www.linkedin.com/in/talktoanuragnow/",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: "GitHub",
      handle: "@anurag123rat",
      href: "https://github.com/anurag123rat",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
   
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600&display=swap');

        .contact-root {
          position: relative;
          background: #080c10;
          padding: 7rem 1.5rem;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* Blobs */
        .contact-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.12;
          pointer-events: none;
        }
        .contact-blob-1 {
          width: 500px; height: 500px;
          background: #63e6be;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .contact-blob-2 {
          width: 260px; height: 260px;
          background: #4ade80;
          bottom: -60px; right: -40px;
        }
        .contact-blob-3 {
          width: 200px; height: 200px;
          background: #63e6be;
          top: -40px; left: -40px;
        }

        /* Inner */
        .contact-inner {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          margin: 0 auto;
        }

        /* Header */
        .contact-label {
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
        .contact-label-line {
          display: inline-block;
          width: 32px; height: 1px;
          background: #63e6be;
          opacity: 0.6;
        }

        /* Two-col layout */
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
          margin-top: 0;
        }
        @media (max-width: 768px) {
          .contact-layout { grid-template-columns: 1fr; gap: 3rem; }
        }

        /* Left */
        .contact-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #f0fdf4;
          margin: 0 0 1.5rem;
        }
        .contact-heading em {
          font-style: italic;
          color: #63e6be;
        }

        .contact-body {
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(240,253,244,0.48);
          margin-bottom: 2rem;
        }

        /* Social links */
        .contact-socials {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          border: 1px solid rgba(99,230,190,0.08);
          background: rgba(99,230,190,0.03);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          width: fit-content;
          min-width: 220px;
        }
        .social-link:hover {
          background: rgba(99,230,190,0.08);
          border-color: rgba(99,230,190,0.28);
          transform: translateX(4px);
        }

        .social-icon {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: rgba(99,230,190,0.09);
          color: #63e6be;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .social-info {}
        .social-label {
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(240,253,244,0.3);
          line-height: 1;
        }
        .social-handle {
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(240,253,244,0.75);
          margin-top: 2px;
        }

        /* Right — form card */
        .contact-form-card {
          background: rgba(99,230,190,0.03);
          border: 1px solid rgba(99,230,190,0.1);
          border-radius: 16px;
          padding: 2.2rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr; }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 1rem;
        }
        .form-group:last-of-type { margin-bottom: 0; }

        .form-label {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(240,253,244,0.35);
        }

        .form-input,
        .form-textarea {
          background: rgba(240,253,244,0.04);
          border: 1px solid rgba(99,230,190,0.1);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.92rem;
          font-weight: 300;
          color: #f0fdf4;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          width: 100%;
          box-sizing: border-box;
        }
        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(240,253,244,0.2);
        }
        .form-input:focus,
        .form-textarea:focus {
          border-color: rgba(99,230,190,0.4);
          background: rgba(99,230,190,0.04);
        }
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit-row {
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .form-note {
          font-size: 0.78rem;
          font-weight: 300;
          color: rgba(240,253,244,0.22);
        }

        .btn-send {
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
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 24px rgba(99,230,190,0.3);
        }
        .btn-send::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          transform: translateX(-100%) skewX(-12deg);
          transition: transform 0.4s ease;
        }
        .btn-send:hover::before { transform: translateX(140%) skewX(-12deg); }
        .btn-send:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 36px rgba(99,230,190,0.45);
        }

        /* Bottom divider — matches other sections */
        .contact-footer {
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
          gap: 1rem;
        }
        .contact-footer-text {
          font-size: 0.88rem;
          font-weight: 300;
          color: rgba(240,253,244,0.25);
        }
        .contact-footer-text strong {
          color: rgba(240,253,244,0.5);
          font-weight: 500;
        }
        .contact-footer-email {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.88rem;
          font-weight: 500;
          color: #63e6be;
          text-decoration: none;
          opacity: 0.75;
          transition: opacity 0.2s;
        }
        .contact-footer-email:hover { opacity: 1; }
      `}</style>

      <section id="contact" className="contact-root">
        <div className="contact-blob contact-blob-1" />
        <div className="contact-blob contact-blob-2" />
        <div className="contact-blob contact-blob-3" />

        <div className="contact-inner">
          <div className="contact-label">
            <span className="contact-label-line" />
            Get In Touch
          </div>

          <div className="contact-layout">
            {/* Left — copy + socials */}
            <div>
              <h2 className="contact-heading">
                Let's build something <em>together</em>
              </h2>
              <p className="contact-body">
                Open to full-time roles, freelance projects, and interesting
                collaborations. Whether you have a brief or just an idea —
                I'd love to hear from you.
              </p>

              <div className="contact-socials">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} className="social-link" target="_blank" rel="noreferrer">
                    <div className="social-icon">{s.icon}</div>
                    <div className="social-info">
                      <div className="social-label">{s.label}</div>
                      <div className="social-handle">{s.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="contact-form-card">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input className="form-input" type="text" placeholder="Jane Smith" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="jane@example.com" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input className="form-input" type="text" placeholder="Project inquiry, freelance, etc." />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell me about your project or idea…" />
              </div>

              <div className="form-submit-row">
                <span className="form-note">I usually reply within 24 hrs.</span>
                <button className="btn-send" type="button">
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="contact-footer">
          <p className="contact-footer-text">
            Designed &amp; built by <strong>Anurag</strong>. All rights reserved.
          </p>
          <a href="mailto:yourmail@gmail.com" className="contact-footer-email">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            ay855128@gmail.com
          </a>
        </div>
      </section>
    </>
  );
}