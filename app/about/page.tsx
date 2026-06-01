export default function AboutPage() {
  const TG_LINK = "https://t.me/+BoYNpca6uMU5ZmRl";

  const team = [
    { emoji: "👨‍💻", name: "Team SarkariBlog", role: "Content & Research", desc: "A dedicated team of UPSC & State PCS experts who prepare high-quality study material every single day." },
    { emoji: "📚", name: "Current Affairs Desk", role: "Daily News & GK", desc: "We curate the most important daily news in an exam-ready format so you never miss what matters." },
    { emoji: "🎯", name: "Exam Strategy Team", role: "MCQ & PDF", desc: "Proven strategies and quality practice questions tailored for UPSC, UPPCS, SSC, and Banking exams." },
  ];

  return (
    <main style={{ fontFamily: "'Hind', sans-serif", background: "#FFF8F0", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Hind:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @keyframes tgPulse { 0%,100%{box-shadow:0 4px 24px rgba(0,136,204,0.45)} 50%{box-shadow:0 8px 36px rgba(0,136,204,0.7)} }
        .tg-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: #0088CC; color: #fff;
          font-family: 'Baloo 2', cursive; font-size: 1.05rem; font-weight: 800;
          padding: 14px 32px; border-radius: 50px; text-decoration: none;
          box-shadow: 0 4px 24px rgba(0,136,204,0.45);
          animation: tgPulse 2.2s infinite;
          transition: all 0.25s;
        }
        .tg-btn:hover { background: #006fa8; transform: translateY(-2px); }
        .card { transition: transform 0.2s; }
        .card:hover { transform: translateY(-3px); }
      `}</style>

      {/* HEADER */}
      <header style={{ background: "#D92B2B", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.25)" }}>
        <a href="/" style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1.6rem", fontWeight: 800, color: "#fff", textDecoration: "none" }}>
          Sarkari<span style={{ color: "#FFD700" }}>Blog</span>
        </a>
        <a href={TG_LINK} target="_blank" rel="noreferrer" style={{ background: "#0088CC", color: "#fff", fontSize: "0.75rem", fontWeight: 700, padding: "6px 14px", borderRadius: "20px", textDecoration: "none" }}>
          📲 Join Telegram
        </a>
      </header>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#D92B2B,#B01E1E)", padding: "48px 20px 40px", textAlign: "center" }}>
        <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🇮🇳</div>
        <h1 style={{ fontFamily: "'Baloo 2', cursive", fontSize: "2.2rem", fontWeight: 800, color: "#fff", marginBottom: "10px" }}>
          About Us
        </h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", maxWidth: "480px", margin: "0 auto", lineHeight: 1.6 }}>
          SarkariBlog is a free platform providing daily study material, current affairs, and job alerts for UPSC, UPPCS, SSC, Railway, and Banking aspirants across India.
        </p>
      </section>

      {/* MISSION */}
      <section style={{ padding: "40px 20px", maxWidth: "520px", margin: "0 auto" }}>
        <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1.4rem", fontWeight: 800, color: "#D92B2B", textAlign: "center", marginBottom: "6px" }}>Our Mission</div>
        <div style={{ width: "50px", height: "3px", background: "#FFD700", margin: "0 auto 20px", borderRadius: "2px" }} />
        <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 20px rgba(217,43,43,0.1)", border: "2px solid rgba(217,43,43,0.1)", fontSize: "0.95rem", color: "#3A1A1A", lineHeight: 1.8 }}>
          <p style={{ marginBottom: "14px" }}>
            We believe that <strong>quality education should be free</strong> for everyone. Millions of aspirants in India cannot afford expensive coaching — they deserve an equal opportunity to succeed.
          </p>
          <p style={{ marginBottom: "14px" }}>
            That is why SarkariBlog offers <strong>Daily MCQs, Current Affairs, Free PDFs, Syllabus, Admit Cards, and Results</strong> — all completely free of charge.
          </p>
          <p>
            Our Telegram channel has become one of India's most trusted government exam preparation communities, with over <strong>50,000+ active aspirants</strong> preparing together every day.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background: "#F5ECEC", padding: "36px 20px" }}>
        <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1.4rem", fontWeight: 800, color: "#D92B2B", textAlign: "center", marginBottom: "6px" }}>Our Team</div>
        <div style={{ width: "50px", height: "3px", background: "#FFD700", margin: "0 auto 20px", borderRadius: "2px" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "480px", margin: "0 auto" }}>
          {team.map((t) => (
            <div key={t.name} className="card" style={{ background: "#fff", borderRadius: "14px", padding: "18px", display: "flex", alignItems: "flex-start", gap: "14px", boxShadow: "0 2px 12px rgba(217,43,43,0.08)", border: "1.5px solid rgba(217,43,43,0.08)" }}>
              <div style={{ fontSize: "2rem", flexShrink: 0 }}>{t.emoji}</div>
              <div>
                <div style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 700, color: "#1A0A0A", fontSize: "0.98rem" }}>{t.name}</div>
                <div style={{ fontSize: "0.75rem", color: "#D92B2B", fontWeight: 600, marginBottom: "4px" }}>{t.role}</div>
                <div style={{ fontSize: "0.82rem", color: "#5A3A3A", lineHeight: 1.5 }}>{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section style={{ padding: "36px 20px", maxWidth: "520px", margin: "0 auto" }}>
        <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1.4rem", fontWeight: 800, color: "#D92B2B", textAlign: "center", marginBottom: "6px" }}>What We Cover</div>
        <div style={{ width: "50px", height: "3px", background: "#FFD700", margin: "0 auto 20px", borderRadius: "2px" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {[
            ["🏛️", "UPSC CSE"],
            ["📋", "UPPCS / State PCS"],
            ["📊", "SSC CGL / CHSL"],
            ["🚂", "Railway RRB / NTPC"],
            ["🏦", "IBPS / SBI Banking"],
            ["📚", "Current Affairs GK/GS"],
            ["📄", "Free Notes & PDFs"],
            ["🔔", "Govt Job Alerts"],
          ].map(([icon, label]) => (
            <div key={label} style={{ background: "#fff", borderRadius: "10px", padding: "12px 14px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 2px 8px rgba(217,43,43,0.08)", border: "1.5px solid rgba(217,43,43,0.06)", fontSize: "0.88rem", fontWeight: 600, color: "#1A0A0A" }}>
              <span style={{ fontSize: "1.2rem" }}>{icon}</span>{label}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#D92B2B,#B01E1E)", padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginBottom: "10px" }}>
          Join Our Community — It's Free!
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", marginBottom: "24px" }}>Trusted by 50,000+ aspirants across India</p>
        <a href={TG_LINK} target="_blank" rel="noreferrer" className="tg-btn">
          <svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="13" fill="white" fillOpacity="0.25"/>
            <path d="M6.5 12.8L18.2 8.3c.5-.2 1 .1.8.9l-2 9.4c-.1.6-.5.8-1 .5l-2.8-2.1-1.3 1.3c-.2.2-.4.3-.7.3l.2-3 5.3-4.8c.2-.2 0-.3-.3-.1L8.7 15l-2.7-.9c-.6-.2-.6-.6.5-1z" fill="white"/>
          </svg>
          📲 Join Telegram — Free
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1A0A0A", padding: "20px", textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>
        <p>© 2026 <span style={{ color: "#FFD700" }}>SarkaariBlog</span> — India's Trusted Job Portal</p>
        <p style={{ marginTop: "8px" }}>
          <a href="/" style={{ color: "rgba(255,255,255,0.5)", marginRight: "12px", textDecoration: "none" }}>Home</a>
          <a href="/privacy-policy" style={{ color: "rgba(255,255,255,0.5)", marginRight: "12px", textDecoration: "none" }}>Privacy Policy</a>
          <a href="/contact-us" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Contact Us</a>
        </p>
      </footer>
    </main>
  );
}