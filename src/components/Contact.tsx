import { useState } from 'react';
import type { FormEvent } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { submitContact } from '../utils/api';
import Toast from './Toast';

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', businessName: '', selectedPlan: '', message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email format';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.businessName.trim()) e.businessName = 'Business name is required';
    if (!form.selectedPlan) e.selectedPlan = 'Please select a plan';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await submitContact(form);
      setToast(true);
      setForm({ name: '', email: '', phone: '', businessName: '', selectedPlan: '', message: '' });
      setErrors({});
    } catch {
      setErrors({ form: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const update = (field: string, value: string) => {
    setForm(p => ({ ...p, [field]: value }));
    if (errors[field]) setErrors(p => { const n = { ...p }; delete n[field]; return n; });
  };

  return (
    <section id="contact" className="section reveal" ref={ref}>
      <h2 className="section-title">Let's Build Something Great</h2>
      <p className="section-subtitle">Drop your details and we'll get back to you within 24 hours.</p>

      <div className="contact-wrapper">
        <div className="contact-image-col">
          <img src="/contact_image.png" alt="Creative agency workspace" />
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input id="name" value={form.name} onChange={e => update('name', e.target.value)} placeholder="John Doe" />
            {errors.name && <div className="error-text">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="john@company.com" />
            {errors.email && <div className="error-text">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+91 98765 43210" />
            {errors.phone && <div className="error-text">{errors.phone}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="businessName">Business Name</label>
            <input id="businessName" value={form.businessName} onChange={e => update('businessName', e.target.value)} placeholder="Your Company" />
            {errors.businessName && <div className="error-text">{errors.businessName}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="selectedPlan">Select Plan</label>
            <select id="selectedPlan" value={form.selectedPlan} onChange={e => update('selectedPlan', e.target.value)}>
              <option value="">— Choose a plan —</option>
              <option value="starter">Starter ₹20k</option>
              <option value="growth">Growth ₹50k</option>
              <option value="custom">Custom</option>
            </select>
            {errors.selectedPlan && <div className="error-text">{errors.selectedPlan}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message / What are you looking for?</label>
            <textarea id="message" value={form.message} onChange={e => update('message', e.target.value)} placeholder="Tell us about your goals..." />
            {errors.message && <div className="error-text">{errors.message}</div>}
          </div>
          {errors.form && <div className="error-text" style={{ marginBottom: 12 }}>{errors.form}</div>}
          <button type="submit" className="btn btn-gold form-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send My Details →'}
          </button>
        </form>
      </div>

      <Toast
        message="We've received your message! Expect a call within 24 hrs 🎉"
        visible={toast}
        onClose={() => setToast(false)}
      />
    </section>
  );
}
