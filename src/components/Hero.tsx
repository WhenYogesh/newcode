export default function Hero() {
  return (
    <section className="hero">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Animated floating icons */}
      <div className="floating-shape shape-1">
        {/* Instagram  d*/}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      </div>
      <div className="floating-shape shape-2">
        {/* Meta / Facebook */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </div>
      <div className="floating-shape shape-3">
        {/* Code */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      </div>

      <div className="hero-content">
        <h1 className="hero-headline">
          <span className="line">We Build <span className="text-gradient">Brands</span> That</span>
          <span className="line">The World <span className="text-highlight">Remembers.</span></span>
        </h1>
        <p className="hero-sub">
          Social media, web design, paid ads, and content — all under one roof,
          crafted for brands ready to grow.
        </p>
        <div className="hero-ctas">
          <a href="#pricing" className="btn btn-gold">View Our Plans</a>
          <a href="#contact" className="btn btn-glass">Talk to Us</a>
        </div>
      </div>
    </section>
  );
}
