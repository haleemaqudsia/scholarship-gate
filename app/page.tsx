export const metadata = {
  title: "Homepage | Scholarship Gate",
  description: "Scholarship Gate - Unlocking global education opportunities abroad",
};

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#F0F9FF", minHeight: "100vh" }}>
      
      {/* Navigation */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 30px", backgroundColor: "#1E3A8A", color: "white" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Scholarship Gate</h2>
        <ul style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0, padding: 0 }}>
          <li><a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
          <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
          <li><a href="#offer" style={{ color: "white", textDecoration: "none" }}>What We Offer</a></li>
          <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
        </ul>
      </nav>

      {/* Header */}
      <header style={{ textAlign: "center", padding: "60px 20px", background: "linear-gradient(135deg, #1E3A8A, #3B82F6)" }}>
        <h1 style={{ color: "white", fontSize: "2.5rem", fontWeight: "bold", marginBottom: "15px" }}>
          Welcome to Scholarship Gate
        </h1>
        <p style={{ color: "#E0F2FE", fontSize: "1.2rem" }}>
          Your trusted partner in unlocking global education opportunities.
        </p>
      </header>

      {/* About Section */}
      <section id="about" style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ color: "#1E3A8A", fontSize: "1.8rem", marginBottom: "15px" }}>
          About Scholarship Gate
        </h2>
        <p style={{ color: "#334155", lineHeight: "1.6" }}>
          At Scholarship Gate, we connect students with the best <b>scholarship opportunities abroad </b> 
          tailored to their goals. Our mission is to make quality education accessible to everyone, 
          guiding you every step of the way from finding scholarships to securing <b>admission </b> 
          and visa support.
        </p>
      </section>

      {/* What We Offer */}
      <section id="offer" style={{ backgroundColor: "#E0F2FE", padding: "40px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ color: "#1E3A8A", fontSize: "1.8rem", marginBottom: "15px" }}>
            What We Offer:
          </h2>
          <ul style={{ color: "#334155", lineHeight: "1.8", fontSize: "1.1rem", paddingLeft: "40px", listStyleType: "disc" }}>
            <li>Latest international scholarship programs</li>
            <li>Step-by-step guidance for studying abroad</li>
            <li>Expert support throughout the application process</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ textAlign: "center", padding: "20px", backgroundColor: "#1E3A8A", color: "white" }}>
        © {new Date().getFullYear()} Scholarship Gate. Helping students achieve their dreams abroad.
      </footer>
    </div>
  );
}
