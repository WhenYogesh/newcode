export default function Marquee() {
  const words = ['Brand Identity', 'Web Design', 'Social Media', 'Paid Ads', 'SEO', 'Content Creation'];
  const items = [...words, ...words, ...words, ...words];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {items.map((word, i) => (
          <span key={i} className="marquee-item">
            {word} <span className="marquee-dot">✧</span>
          </span>
        ))}
      </div>
    </div>
  );
}
