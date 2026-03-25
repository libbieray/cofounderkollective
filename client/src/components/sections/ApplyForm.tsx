// CoFounder Kollective — Application Form (Section 10)
// Updated fields per brief

import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';

export default function ApplyForm() {
  const { ref, visible } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const inputStyle = (name: string) => ({
    background: 'rgba(255,255,255,0.06)',
    border: `1px solid ${focused === name ? '#FF2D78' : 'rgba(255,255,255,0.12)'}`,
    color: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
    padding: '14px 16px',
    fontSize: '0.93rem',
    fontFamily: 'DM Sans, sans-serif',
    borderRadius: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
      <div className="max-w-[860px] mx-auto">
        <div className="mb-14">
          <div className="section-label">Apply to Partner</div>
          <h2
            className="font-display font-black uppercase leading-none text-white"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
          >
            Ready to{' '}
            <span style={{ color: '#FF2D78' }}>scale?</span>
          </h2>
          <p className="mt-6 text-[1rem] leading-[1.8] max-w-[520px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Tell us about your product and your traction. We review every application personally and respond to every founder.
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
              Thank you for reaching out. We'll review your application and be in touch within two weeks.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-display font-bold text-[0.65rem] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  style={inputStyle('name')}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div>
                <label className="font-display font-bold text-[0.65rem] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  style={inputStyle('email')}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            <div>
              <label className="font-display font-bold text-[0.65rem] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Product Name *
              </label>
              <input
                type="text"
                required
                placeholder="What is your product called?"
                style={inputStyle('productName')}
                onFocus={() => setFocused('productName')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div>
              <label className="font-display font-bold text-[0.65rem] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                What is your product? *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Describe what you make and who buys it."
                style={{ ...inputStyle('productDesc'), resize: 'vertical' }}
                onFocus={() => setFocused('productDesc')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div>
              <label className="font-display font-bold text-[0.65rem] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                What traction or sales have you achieved? *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your proof of demand — sales, revenue, repeat customers, reviews, etc."
                style={{ ...inputStyle('traction'), resize: 'vertical' }}
                onFocus={() => setFocused('traction')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div>
              <label className="font-display font-bold text-[0.65rem] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Website / Link (optional)
              </label>
              <input
                type="text"
                placeholder="https:// or social link"
                style={inputStyle('url')}
                onFocus={() => setFocused('url')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <p
              className="text-[0.75rem] tracking-[0.04em]"
              style={{ color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}
            >
              All information submitted is private and confidential.
            </p>

            <div className="pt-2">
              <button
                type="submit"
                className="font-display font-bold text-[0.88rem] tracking-[0.15em] uppercase text-white px-12 py-[18px] transition-all duration-200 inline-flex items-center gap-3"
                style={{ background: '#FF2D78' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#d91f60';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,45,120,0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#FF2D78';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Apply to partner with us
                <span style={{ fontSize: '0.75rem', opacity: 0.75 }}>→</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
