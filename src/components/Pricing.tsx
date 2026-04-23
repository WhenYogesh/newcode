import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const starterFeatures = [
  'Brand Identity Design',
  'Social Media Marketing & Posting',
  'Brand Brochure',
  'Basic Website Design',
  'Content Strategy',
  'Basic SEO Setup',
  'Facebook & Meta Ads',
];

const growthFeatures = [
  'Complete Brand Suite',
  'Social Media Management',
  'Full Website Development',
  'Content Creation & Marketing',
  'SEO & Analytics',
  'Paid Ads Management',
  'Video Editing (Short-form)',
  'Bi-weekly Strategy Sessions',
  'Lead Generation Campaigns',
];

export default function Pricing() {
  const [monthly, setMonthly] = useState(true);
  const ref = useScrollReveal();

  return (
    <section id="pricing" className="section section-highlight reveal" ref={ref}>
      <h2 className="section-title">Simple, Transparent Pricing</h2>
      <p className="section-subtitle">Choose the plan that matches where your brand is going.</p>

      <div className="promo-banner reveal">
        <span className="promo-icon">🎉</span>
        <div>
          <strong>First Client Special:</strong> Lock in our highly discounted introductory rates before we scale!
        </div>
      </div>

      <div className="pricing-toggle">
        <span className={monthly ? 'active' : ''}>Monthly</span>
        <div
          className={`toggle-switch${!monthly ? ' toggled' : ''}`}
          onClick={() => setMonthly(!monthly)}
          role="switch"
          aria-checked={!monthly}
          tabIndex={0}
        />
        <span className={!monthly ? 'active' : ''}>One-Time</span>
      </div>

      <div className="pricing-cards">
        <div className="pricing-card pricing-card-light">
          <div className="pricing-badge">Most Popular</div>
          <div className="pricing-card-name">Starter Pack</div>
          <div className="pricing-price">{monthly ? '₹20,000' : '₹2,00,000'}</div>
          <div className="pricing-period">{monthly ? 'per month' : 'one-time payment'}</div>
          <ul className="pricing-features">
            {starterFeatures.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <a href="#contact" className="btn btn-gold">Start with Starter</a>
        </div>

        <div className="pricing-card pricing-card-dark">
          <div className="pricing-badge">Best Value</div>
          <div className="pricing-card-name">Growth Suite</div>
          <div className="pricing-price">{monthly ? '₹50,000' : '₹5,00,000'}</div>
          <div className="pricing-period">{monthly ? 'per month' : 'one-time payment'}</div>
          <ul className="pricing-features">
            {growthFeatures.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <a href="#contact" className="btn btn-gold">Go Full Growth</a>
        </div>
      </div>

      <p className="pricing-note">
        Not sure which plan fits? <a href="#contact">Let's talk — no pressure.</a>
      </p>
    </section>
  );
}
