import Script from "next/script";

export default function SarkariBlogPage() {
  const features = [
    { icon: "📝", title: "Daily MCQs", desc: "Har roz practice questions with answers" },
    { icon: "📰", title: "Current Affairs", desc: "Aaj ki sabse zaroori news in short" },
    { icon: "🔔", title: "Job Alerts", desc: "SSC, UPSC, Railway, Banking — sab" },
    { icon: "📄", title: "Free PDFs", desc: "Notes, Syllabus, Previous Papers" },
    { icon: "🎯", title: "Admit Cards", desc: "Direct links, koi search nahi" },
    { icon: "✅", title: "Results", desc: "Turant update jab bhi aaye" },
  ];

  const whyItems = [
    "Bilkul FREE — Koi subscription nahi, koi hidden charge nahi",
    "Testbook jaisi tension nahi — No paid plans, no FOMO",
    "Sirf Serious Aspirants ke liye — Distraction-free content",
    "Exam-ready PDFs aur Revision Notes har hafte",
    "Govt exam notifications — Ek bhi miss mat karo",
  ];

  const freeTags = ["📚 Study Material", "❓ Daily Questions", "🔔 Exam Notifications", "📋 Revision PDFs", "📅 Current Affairs", "🏆 Result Updates"];

  const TG_LINK = "https://t.me/+BoYNpca6uMU5ZmRl";
  const FB_PIXEL_ID = "1493713422436203";

  const handleTelegramClick = () => {
  if (typeof window !== "undefined" && window.fbq) {
    fbq("track", "Lead");
  }
};

  return (
    <main style={{ fontFamily: "'Hind', sans-serif", background: "#FFF8F0", overflowX: "hidden" }}>

      {/* ✅ FB PIXEL — Next.js way using next/script */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      {/* noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Hind:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }
        @keyframes tgPulse { 0%,100%{transform:scale(1); box-shadow:0 4px 24px rgba(0,136,204,0.45)} 50%{transform:scale(1.04); box-shadow:0 8px 36px rgba(0,136,204,0.7)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }

        .pulse { animation: pulse 2.5s infinite; }
        .tg-pulse { animation: tgPulse 2.2s infinite; }

        .feature-card { transition: transform 0.2s, box-shadow 0.2s; }
        .feature-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(217,43,43,0.15) !important; }

        .tg-btn {
          display: inline-flex; align-items: center; gap: 12px;
          background: #fff; color: #0088CC;
          font-family: 'Baloo 2', cursive; font-size: 1.15rem; font-weight: 800;
          padding: 16px 36px; border-radius: 50px; text-decoration: none;
          border: 3px solid #0088CC; position: relative; overflow: hidden;
          transition: all 0.25s ease; cursor: pointer;
        }
        .tg-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(0,136,204,0.08) 50%, transparent 100%);
          background-size: 200% 100%; animation: shimmer 2.5s linear infinite;
        }
        .tg-btn:hover { background: #0088CC; color: #fff; transform: translateY(-3px); box-shadow: 0 8px 32px rgba(0,136,204,0.5) !important; }

        .hero-cta {
          display: inline-flex; align-items: center; gap: 12px;
          background: #fff; color: #0088CC;
          font-family: 'Baloo 2', cursive; font-size: 1.15rem; font-weight: 800;
          padding: 16px 36px; border-radius: 50px; text-decoration: none;
          border: 3px solid #0088CC; transition: all 0.25s ease;
          position: relative; overflow: hidden;
        }
        .hero-cta::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(0,136,204,0.08) 50%, transparent 100%);
          background-size: 200% 100%; animation: shimmer 2.5s linear infinite;
        }
        .hero-cta:hover { background: #0088CC; color: #fff; transform: translateY(-3px); box-shadow: 0 8px 32px rgba(0,136,204,0.5); }

        .tg-btn-inv {
          display: inline-flex; align-items: center; gap: 12px;
          background: #0088CC; color: #fff;
          font-family: 'Baloo 2', cursive; font-size: 1.15rem; font-weight: 800;
          padding: 16px 36px; border-radius: 50px; text-decoration: none;
          border: 3px solid #0088CC; box-shadow: 0 4px 24px rgba(0,136,204,0.5);
          transition: all 0.25s ease; position: relative; overflow: hidden;
        }
        .tg-btn-inv:hover { background: #006fa8; transform: translateY(-3px); box-shadow: 0 8px 36px rgba(0,136,204,0.7); }

        @media (max-width: 400px) {
          .hero-h1 { font-size: 2rem !important; }
          .features-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* HEADER */}
      <header style={{ background: "#D92B2B", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.25)" }}>
        <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1.6rem", fontWeight: 800, color: "#fff" }}>
          Sarkaari<span style={{ color: "#FFD700" }}>Blog</span>
        </div>
        <div style={{ background: "#FFD700", color: "#1A0A0A", fontSize: "0.7rem", fontWeight: 700, padding: "4px 10px", borderRadius: "20px" }}>
          🇮🇳 India's #1 Job Portal
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg,#D92B2B 0%,#B01E1E 60%,#7a1010 100%)", padding: "48px 20px 52px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="pulse" style={{ display: "inline-block", background: "#FFD700", color: "#1A0A0A", fontSize: "0.78rem", fontWeight: 700, padding: "5px 16px", borderRadius: "20px", marginBottom: "16px" }}>
          🚀 Crack Government Exams with Daily Practice
        </div>
        <h1 className="hero-h1" style={{ fontFamily: "'Baloo 2', cursive", fontSize: "2.6rem", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: "12px" }}>
          Free Study <span style={{ color: "#FFD700" }}>Material</span><br />Govt Job Updates
        </h1>
        <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.05rem", fontWeight: 500, marginBottom: "28px", lineHeight: 1.5 }}>
          Daily MCQs • Current Affairs • Admit Cards<br />Results • Syllabus — Sab Kuch Free!
        </p>
        <div className="tg-pulse" style={{ display: "inline-block", borderRadius: "50px" }}>
          <a href={TG_LINK} target="_blank" rel="noreferrer" className="hero-cta" onClick={handleTelegramClick}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="13" fill="#0088CC"/>
              <path d="M6.5 12.8L18.2 8.3c.5-.2 1 .1.8.9l-2 9.4c-.1.6-.5.8-1 .5l-2.8-2.1-1.3 1.3c-.2.2-.4.3-.7.3l.2-3 5.3-4.8c.2-.2 0-.3-.3-.1L8.7 15l-2.7-.9c-.6-.2-.6-.6.5-1z" fill="white"/>
            </svg>
            📲 Telegram Join Karo — FREE
          </a>
        </div>
        <p style={{ marginTop: "14px", color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>
          ⚡ Already <strong style={{ color: "#FFD700" }}>50,000+</strong> Aspirants Jud Chuke Hain
        </p>
      </section>

      {/* STATS BAR */}
      <div style={{ background: "#FFD700", padding: "14px 20px", display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
        {[["50K+", "Members"], ["Daily", "MCQs"], ["100%", "Free"], ["24/7", "Updates"]].map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <span style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1.3rem", fontWeight: 800, color: "#1A0A0A", display: "block" }}>{num}</span>
            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#B01E1E", textTransform: "uppercase", letterSpacing: "0.4px" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <section style={{ padding: "40px 20px" }}>
        <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1.5rem", fontWeight: 800, color: "#D92B2B", textAlign: "center", marginBottom: "6px" }}>Channel Mein Kya Milega?</div>
        <div style={{ width: "50px", height: "3px", background: "#FFD700", margin: "0 auto 20px", borderRadius: "2px" }} />
        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", maxWidth: "480px", margin: "0 auto" }}>
          {features.map((f) => (
            <div key={f.title} className="feature-card" style={{ background: "#fff", borderRadius: "14px", padding: "18px 14px", textAlign: "center", boxShadow: "0 2px 10px rgba(217,43,43,0.1)", border: "1.5px solid rgba(217,43,43,0.08)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{f.icon}</div>
              <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: "0.92rem", fontWeight: 700, color: "#1A0A0A", marginBottom: "4px" }}>{f.title}</div>
              <div style={{ fontSize: "0.75rem", color: "#5A3A3A", lineHeight: 1.4 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY JOIN */}
      <section style={{ background: "#D92B2B", padding: "40px 20px" }}>
        <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1.5rem", fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: "6px" }}>Kyon Join karein Hamara Channel?</div>
        <div style={{ width: "50px", height: "3px", background: "#FFD700", margin: "0 auto 20px", borderRadius: "2px" }} />
        <ul style={{ listStyle: "none", maxWidth: "480px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          {whyItems.map((item, i) => (
            <li key={i} style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: "12px", padding: "14px 18px", display: "flex", alignItems: "center", gap: "12px", color: "#fff", fontSize: "0.95rem", fontWeight: 500 }}>
              <div style={{ background: "#FFD700", color: "#1A0A0A", width: "24px", height: "24px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 800, flexShrink: 0 }}>✓</div>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* FREE SECTION */}
      <section style={{ background: "#F5ECEC", padding: "36px 20px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#D92B2B", color: "#fff", fontFamily: "'Baloo 2', cursive", fontSize: "1.8rem", fontWeight: 800, padding: "12px 32px", borderRadius: "16px", marginBottom: "14px" }}>
          100% FREE 🎉
        </div>
        <p style={{ fontSize: "0.95rem", color: "#5A3A3A", fontWeight: 500, marginBottom: "22px" }}>Koi charge nahi. Koi upsell nahi. Bas study karo.</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "28px" }}>
          {freeTags.map((tag) => (
            <span key={tag} style={{ background: "#fff", border: "2px solid #FFD700", color: "#1A0A0A", fontSize: "0.82rem", fontWeight: 600, padding: "6px 14px", borderRadius: "20px" }}>{tag}</span>
          ))}
        </div>
        <div className="tg-pulse" style={{ display: "inline-block", borderRadius: "50px" }}>
          <a href={TG_LINK} target="_blank" rel="noreferrer" className="tg-btn-inv" onClick={handleTelegramClick}>
            <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="13" fill="white" fillOpacity="0.25"/>
              <path d="M6.5 12.8L18.2 8.3c.5-.2 1 .1.8.9l-2 9.4c-.1.6-.5.8-1 .5l-2.8-2.1-1.3 1.3c-.2.2-.4.3-.7.3l.2-3 5.3-4.8c.2-.2 0-.3-.3-.1L8.7 15l-2.7-.9c-.6-.2-.6-.6.5-1z" fill="white"/>
            </svg>
            📲 Abhi Join Karo — Free Hai!
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "linear-gradient(135deg,#B01E1E,#D92B2B)", padding: "48px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1.8rem", fontWeight: 800, color: "#fff", marginBottom: "10px", lineHeight: 1.2 }}>
          🎯 Apna Sarkaari Sapna<br />Poora Karo!
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", marginBottom: "28px" }}>
          Hazaron aspirants roz practice kar rahe hain.<br />Tu kab join karega?
        </p>
        <div className="tg-pulse" style={{ display: "inline-block", borderRadius: "50px" }}>
          <a href={TG_LINK} target="_blank" rel="noreferrer" className="tg-btn-inv" onClick={handleTelegramClick}>
            <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="13" fill="white" fillOpacity="0.25"/>
              <path d="M6.5 12.8L18.2 8.3c.5-.2 1 .1.8.9l-2 9.4c-.1.6-.5.8-1 .5l-2.8-2.1-1.3 1.3c-.2.2-.4.3-.7.3l.2-3 5.3-4.8c.2-.2 0-.3-.3-.1L8.7 15l-2.7-.9c-.6-.2-.6-.6.5-1z" fill="white"/>
            </svg>
            📲 Telegram Channel Join Karo
          </a>
        </div>
        <p style={{ marginTop: "16px", color: "rgba(255,255,255,0.65)", fontSize: "0.8rem" }}>
          🔒 Zero Cost • <strong style={{ color: "#FFD700" }}>Zero Tension</strong> • Sirf Results
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1A0A0A", padding: "20px", textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>
        <p>© 2026 <span style={{ color: "#FFD700" }}>SarkaariBlog</span> — India's Trusted Job Portal</p>
        <p style={{ marginTop: "4px" }}>Results | Admit Card | Job Updates | Syllabus | Study Material</p>
        <p style={{ marginTop: "8px" }}>
          <a href="/about" style={{ color: "rgba(255,255,255,0.5)", marginRight: "12px", textDecoration: "none" }}>About Us</a>
          <a href="/privacy-policy" style={{ color: "rgba(255,255,255,0.5)", marginRight: "12px", textDecoration: "none" }}>Privacy Policy</a>
          <a href="/contact-us" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Contact Us</a>
        </p>
      </footer>
    </main>
  );
}