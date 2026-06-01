"use client"

import { useState } from "react";

export default function ContactPage() {
  const TG_LINK = "https://t.me/+BoYNpca6uMU5ZmRl";
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    "📚 Study Material Request",
    "🔔 Job Alert / Notification",
    "❓ Website Related Query",
    "🤝 Collaboration / Partnership",
    "⚠️ Content Complaint",
    "💬 Other",
  ];

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in your Name, Email, and Message.");
      return;
    }
    // Connect to Formspree / EmailJS here
    setSubmitted(true);
  };

  return (
    <main style={{ fontFamily: "'Hind', sans-serif", background: "#FFF8F0", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Hind:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @keyframes tgPulse { 0%,100%{box-shadow:0 4px 24px rgba(0,136,204,0.45)} 50%{box-shadow:0 8px 36px rgba(0,136,204,0.7)} }

        input, textarea, select {
          width: 100%; padding: 12px 14px; border-radius: 10px;
          border: 2px solid rgba(217,43,43,0.15); background: #fff;
          font-family: 'Hind', sans-serif; font-size: 0.95rem; color: #1A0A0A;
          outline: none; transition: border 0.2s;
        }
        input:focus, textarea:focus, select:focus { border-color: #D92B2B; }

        .submit-btn {
          width: 100%; padding: 14px; border-radius: 50px;
          background: #D92B2B; color: #fff; border: none;
          font-family: 'Baloo 2', cursive; font-size: 1.1rem; font-weight: 800;
          cursor: pointer; transition: all 0.2s;
        }
        .submit-btn:hover { background: #B01E1E; transform: translateY(-2px); }

        .tg-card {
          display: flex; align-items: center; gap: 14px;
          background: #0088CC; border-radius: 14px; padding: 18px 20px;
          text-decoration: none; transition: all 0.2s;
          animation: tgPulse 2.2s infinite;
        }
        .tg-card:hover { background: #006fa8; transform: translateY(-2px); }
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
      <section style={{ background: "linear-gradient(135deg,#D92B2B,#B01E1E)", padding: "40px 20px 36px", textAlign: "center" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>📬</div>
        <h1 style={{ fontFamily: "'Baloo 2', cursive", fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
          Contact Us
        </h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
          Have a question or suggestion? We'd love to hear from you!
        </p>
      </section>

      <section style={{ padding: "32px 20px", maxWidth: "520px", margin: "0 auto" }}>

        {/* FASTEST WAY — TELEGRAM */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1.1rem", fontWeight: 800, color: "#D92B2B", textAlign: "center", marginBottom: "12px" }}>
            ⚡ Fastest Way to Reach Us
          </div>
          <a href={TG_LINK} target="_blank" rel="noreferrer" className="tg-card">
            <svg width="40" height="40" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <circle cx="13" cy="13" r="13" fill="white" fillOpacity="0.25"/>
              <path d="M6.5 12.8L18.2 8.3c.5-.2 1 .1.8.9l-2 9.4c-.1.6-.5.8-1 .5l-2.8-2.1-1.3 1.3c-.2.2-.4.3-.7.3l.2-3 5.3-4.8c.2-.2 0-.3-.3-.1L8.7 15l-2.7-.9c-.6-.2-.6-.6.5-1z" fill="white"/>
            </svg>
            <div>
              <div style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, color: "#fff", fontSize: "1rem" }}>Join Our Telegram Channel</div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.8rem" }}>Message us directly — we reply to every query!</div>
            </div>
          </a>
        </div>

        {/* DIVIDER */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(217,43,43,0.2)" }} />
          <span style={{ fontSize: "0.82rem", color: "#B01E1E", fontWeight: 600 }}>Or Send Us an Email</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(217,43,43,0.2)" }} />
        </div>

        {/* CONTACT FORM */}
        {submitted ? (
          <div style={{ background: "#fff", borderRadius: "16px", padding: "36px 24px", textAlign: "center", boxShadow: "0 4px 20px rgba(217,43,43,0.1)", border: "2px solid rgba(217,43,43,0.1)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "12px" }}>✅</div>
            <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1.3rem", fontWeight: 800, color: "#D92B2B", marginBottom: "8px" }}>Message Received!</div>
            <p style={{ fontSize: "0.9rem", color: "#5A3A3A", lineHeight: 1.6 }}>
              Thank you for reaching out! We will reply within 24–48 hours.<br />
              For a faster response, join us on Telegram 👇
            </p>
            <a href={TG_LINK} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "20px", background: "#0088CC", color: "#fff", fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: "0.95rem", padding: "12px 28px", borderRadius: "50px", textDecoration: "none" }}>
              📲 Join Telegram
            </a>
          </div>
        ) : (
          <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 20px rgba(217,43,43,0.08)", border: "1.5px solid rgba(217,43,43,0.08)", display: "flex", flexDirection: "column", gap: "16px" }}>

            <div>
              <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5A3A3A", display: "block", marginBottom: "6px" }}>Your Name *</label>
              <input
                type="text"
                placeholder="e.g. Rahul Kumar"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5A3A3A", display: "block", marginBottom: "6px" }}>Email Address *</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5A3A3A", display: "block", marginBottom: "6px" }}>Subject</label>
              <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} style={{ appearance: "none" }}>
                <option value="">Select a subject...</option>
                {subjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5A3A3A", display: "block", marginBottom: "6px" }}>Message *</label>
              <textarea
                rows={5}
                placeholder="Write your question or suggestion here..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{ resize: "vertical" }}
              />
            </div>

            <button className="submit-btn" onClick={handleSubmit}>
              📤 Send Message
            </button>

            <p style={{ fontSize: "0.75rem", color: "#999", textAlign: "center" }}>
              🔒 Your information is safe with us. We do not send spam.
            </p>
          </div>
        )}

        {/* QUICK INFO */}
        <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            ["⏰", "Response Time", "24–48 hours (Email) | Instant (Telegram)"],
            ["📧", "Email", "sarkariblog@gmail.com"],
            ["📍", "Location", "India 🇮🇳"],
          ].map(([icon, label, val]) => (
            <div key={label} style={{ background: "#fff", borderRadius: "10px", padding: "12px 16px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 2px 8px rgba(217,43,43,0.06)", border: "1.5px solid rgba(217,43,43,0.06)" }}>
              <span style={{ fontSize: "1.2rem" }}>{icon}</span>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#D92B2B" }}>{label}</div>
                <div style={{ fontSize: "0.85rem", color: "#3A1A1A" }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1A0A0A", padding: "20px", textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", marginTop: "20px" }}>
        <p>© 2026 <span style={{ color: "#FFD700" }}>SarkaariBlog</span> — India's Trusted Job Portal</p>
        <p style={{ marginTop: "8px" }}>
          <a href="/" style={{ color: "rgba(255,255,255,0.5)", marginRight: "12px", textDecoration: "none" }}>Home</a>
          <a href="/about" style={{ color: "rgba(255,255,255,0.5)", marginRight: "12px", textDecoration: "none" }}>About Us</a>
          <a href="/privacy-policy" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Privacy Policy</a>
        </p>
      </footer>
    </main>
  );
}