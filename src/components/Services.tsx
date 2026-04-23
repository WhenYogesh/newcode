import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5"/><path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"/><path d="M2 17l4.8-4.8a2 2 0 0 1 2.8 0L14 16.6"/><path d="m14 14 1.5-1.5a2 2 0 0 1 2.8 0L22 16"/>
      </svg>
    ),
    name: 'Brand Identity Design',
    desc: 'Logos, palettes, and visual systems that define you.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/>
      </svg>
    ),
    name: 'Social Media Marketing',
    desc: 'Strategy, content, and posting that builds audiences.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    name: 'Website Design & Dev',
    desc: 'Beautiful, fast websites that convert visitors.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    name: 'Meta & Facebook Ads',
    desc: 'Data-driven paid campaigns for real ROI.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
    name: 'SEO & Analytics',
    desc: 'Rank higher, understand your traffic, grow smarter.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    name: 'Video & Content Creation',
    desc: 'Short-form videos, reels, and brand content.',
  },
];

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section id="services" className="section reveal" ref={sectionRef}>
      <h2 className="section-title">Everything Your Brand Needs</h2>
      <p className="section-subtitle">From identity to performance — we handle it all.</p>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className={`glass-card service-card reveal reveal-delay-${i % 3 + 1}`} ref={useScrollReveal()}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
