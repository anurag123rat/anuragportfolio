export default function PrivacyPolicyPage() {
  const TG_LINK = "https://t.me/+BoYNpca6uMU5ZmRl";

  const sections = [
    {
      title: "1. Information We Collect",
      content: `When you visit our page through Facebook Ads or interact with our Telegram channel, we may collect the following basic information:

• Facebook Pixel Data: Basic device information (browser type, IP address) and actions taken on our page (page views, button clicks). This data is anonymized.
• Telegram: When you join our Telegram channel, your Telegram username and profile may be visible to other members — this falls under Telegram's own Privacy Policy.
• Contact Form: If you reach out to us, we collect your name and email address to respond to your query.`
    },
    {
      title: "2. Facebook Pixel Usage",
      content: `We use the Facebook Pixel to measure the effectiveness of our advertising campaigns. It helps us understand what actions people take after seeing our ads.

Facebook Pixel collects:
• Page views and button clicks
• Device and browser information
• Anonymized user behavior data

You can manage your ad preferences at: facebook.com/ads/preferences

Facebook's full Privacy Policy is available at: facebook.com/policy`
    },
    {
      title: "3. How We Use Your Information",
      content: `We use the information collected solely for:
• Improving the targeting and performance of our Facebook ads
• Enhancing the quality and relevance of our content
• Responding to your queries if you contact us

We never sell your personal information to any third party.`
    },
    {
      title: "4. Data Sharing",
      content: `We do not share your data with any third parties, except:
• Facebook / Meta: Anonymized Pixel data for ad performance tracking only
• Telegram: When you join our channel, subject to Telegram's own terms and policies

There is no commercial data sharing or sale of user data.`
    },
    {
      title: "5. Data Security",
      content: `We take reasonable measures to protect your information. We do not collect any sensitive financial or medical data.

Please note: Telegram is a third-party platform. For their security and privacy practices, please visit telegram.org/privacy`
    },
    {
      title: "6. Cookies",
      content: `We use cookies through the Facebook Pixel. You can disable cookies in your browser settings, though this may affect certain website features.

For browser-specific cookie controls, please refer to your browser's help documentation.`
    },
    {
      title: "7. Children's Privacy",
      content: `SarkariBlog's content is intended exclusively for adult aspirants aged 18 and above. We do not knowingly collect personal data from anyone under the age of 18.

If you are under 18, please obtain permission from a parent or guardian before using this site.`
    },
    {
      title: "8. Your Rights",
      content: `You have the following rights regarding your personal data:
• Access: Request information about what data we hold about you
• Correction: Ask us to correct any inaccurate information
• Deletion: Request that we delete your personal data
• Objection: Object to how we process your data

To exercise any of these rights, please contact us at: [your email address]`
    },
    {
      title: "9. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page. For significant updates, we will also make an announcement on our Telegram channel.

Last Updated: 2025`
    },
    {
      title: "10. Contact",
      content: `For any privacy-related questions or concerns, please reach us at:
• Email: [your email address]
• Telegram: Send a message in our channel
• Contact Form: Visit our /contact page`
    },
  ];

  return (
    <main style={{ fontFamily: "'Hind', sans-serif", background: "#FFF8F0", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Hind:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .section-card { transition: box-shadow 0.2s; }
        .section-card:hover { box-shadow: 0 4px 20px rgba(217,43,43,0.12) !important; }
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
        <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🔒</div>
        <h1 style={{ fontFamily: "'Baloo 2', cursive", fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
          Your privacy matters to us. Read how we handle and protect your data.
        </p>
      </section>

      {/* FACEBOOK ADS NOTICE */}
      <div style={{ background: "#FFD700", padding: "14px 20px", textAlign: "center" }}>
        <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A0A0A" }}>
          ℹ️ This page also serves Facebook Advertising compliance requirements. We use the Facebook Pixel to track ad performance only.
        </p>
      </div>

      {/* CONTENT */}
      <section style={{ padding: "32px 20px", maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ background: "#fff", borderRadius: "14px", padding: "18px", marginBottom: "20px", border: "2px solid rgba(0,136,204,0.2)", boxShadow: "0 2px 12px rgba(0,136,204,0.08)" }}>
          <p style={{ fontSize: "0.88rem", color: "#0088CC", fontWeight: 600, lineHeight: 1.6 }}>
            📋 <strong>Summary:</strong> SarkariBlog is a free educational platform. We use the Facebook Pixel solely for ad performance measurement. We do not sell your personal data. Joining our Telegram channel is completely optional.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {sections.map((s, i) => (
            <div key={i} className="section-card" style={{ background: "#fff", borderRadius: "14px", padding: "20px", boxShadow: "0 2px 10px rgba(217,43,43,0.07)", border: "1.5px solid rgba(217,43,43,0.08)" }}>
              <div style={{ fontFamily: "'Baloo 2', cursive", fontSize: "1rem", fontWeight: 700, color: "#D92B2B", marginBottom: "10px" }}>{s.title}</div>
              <div style={{ fontSize: "0.88rem", color: "#3A1A1A", lineHeight: 1.75, whiteSpace: "pre-line" }}>{s.content}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1A0A0A", padding: "20px", textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>
        <p>© 2026 <span style={{ color: "#FFD700" }}>SarkaariBlog</span> — India's Trusted Job Portal</p>
        <p style={{ marginTop: "8px" }}>
          <a href="/" style={{ color: "rgba(255,255,255,0.5)", marginRight: "12px", textDecoration: "none" }}>Home</a>
          <a href="/about" style={{ color: "rgba(255,255,255,0.5)", marginRight: "12px", textDecoration: "none" }}>About Us</a>
          <a href="/contact-us" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Contact Us</a>
        </p>
      </footer>
    </main>
  );
}