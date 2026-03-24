// CoFounder Kollective — Application Form Section
// Dark black section, pink focus states, pink submit button

import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface FormData {
  name: string;
  email: string;
  product: string;
  url: string;
  bio: string;
  revenue: string;
}

export default function ApplyForm() {
  const { ref, visible } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    product: '',
    url: '',
    bio: '',
    revenue: '',
  });

  const inputStyle = (name: string) => ({
    background: 'rgba(255,255,255,0.06)',
    border: `1px solid ${focused === name ? '#FF2D78' : 'rgba(255,255,255,0.12)'}`,
    color: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
    padding: '14px 16px',
    fontSize: '0.92rem',
    fontFamily: 'DM Sans, sans-serif',
    borderRadius: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit application');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        product: '',
        url: '',
        bio: '',
        revenue: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="apply"
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-16 py-28 transition-all duration-700"
      style={{
        background: '#0d0d0d',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      <div className="max-w-[900px] mx-auto">
        <div className="mb-14">
          <div className="section-label">Apply to Partner</div>
          <h2
            className="font-display font-black uppercase leading-none text-white"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
          >
            Ready to{' '}
            <span style={{ color: '#FF2D78' }}>Scale?</span>
          </h2>
          <p className="mt-6 text-[1rem] leading-[1.8] max-w-[560px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Tell us about your product and your story. We review every application personally and respond to every founder — whether it's a yes, a not yet, or a referral.
          </p>
        </div>

        {submitted ? (
          <div
            className="px-10 py-12 border-l-[3px] text-center"
            style={{ borderLeftColor: '#FF2D78', background: 'rgba(255,45,120,0.08)' }}
          >
            <div className="font-display font-black text-[3rem] text-white mb-3">✦</div>
            <h3 className="font-display font-black text-[1.8rem] uppercase tracking-[0.03em] text-white mb-3">
              Application Received
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.55)' }} className="text-[0.95rem] leading-[1.75]">
              Thank you for reaching out. We'll review your application and be in touch within two weeks. Check your email for confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && (
              <div
                className="px-4 py-3 border-l-[3px] text-sm"
                style={{ borderLeftColor: '#FF2D78', background: 'rgba(255,45,120,0.08)', color: '#FF2D78' }}
              >
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-display font-bold text-[0.65rem] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle('name')}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div>
                <label className="font-display font-bold text-[0.65rem] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle('email')}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            <div>
              <label className="font-display font-bold text-[0.65rem] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Product / Brand Name *
              </label>
              <input
                type="text"
                name="product"
                required
                placeholder="What is your product called?"
                value={formData.product}
                onChange={handleChange}
                style={inputStyle('product')}
                onFocus={() => setFocused('product')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div>
              <label className="font-display font-bold text-[0.65rem] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Website or Social Link
              </label>
              <input
                type="url"
                name="url"
                placeholder="https://"
                value={formData.url}
                onChange={handleChange}
                style={inputStyle('url')}
                onFocus={() => setFocused('url')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div>
              <label className="font-display font-bold text-[0.65rem] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Tell Us About Your Product *
              </label>
              <textarea
                name="bio"
                required
                rows={5}
                placeholder="What is it, who buys it, and what's your proof of demand?"
                value={formData.bio}
                onChange={handleChange}
                style={{ ...inputStyle('bio'), resize: 'vertical' }}
                onFocus={() => setFocused('bio')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div>
              <label className="font-display font-bold text-[0.65rem] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Current Monthly Revenue (approx.)
              </label>
              <select
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                style={{ ...inputStyle('revenue'), cursor: 'pointer' }}
                onFocus={() => setFocused('revenue')}
                onBlur={() => setFocused(null)}
              >
                <option value="" style={{ background: '#1a1a1a' }}>Select a range</option>
                <option value="pre" style={{ background: '#1a1a1a' }}>Pre-revenue (but have sold)</option>
                <option value="0-2k" style={{ background: '#1a1a1a' }}>Under $2,000/month</option>
                <option value="2-10k" style={{ background: '#1a1a1a' }}>$2,000 – $10,000/month</option>
                <option value="10-50k" style={{ background: '#1a1a1a' }}>$10,000 – $50,000/month</option>
                <option value="50k+" style={{ background: '#1a1a1a' }}>$50,000+/month</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="font-display font-bold text-[0.88rem] tracking-[0.15em] uppercase text-white px-12 py-[18px] transition-all duration-200 disabled:opacity-50"
                style={{ background: '#FF2D78' }}
                onMouseEnter={e => {
                  if (!loading) {
                    e.currentTarget.style.background = '#d91f60';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#FF2D78';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
