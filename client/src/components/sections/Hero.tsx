// CoFounder Kollective — Hero Section (Updated)
// New copy: "You bring the product. We build the business."

import { useEffect, useRef } from 'react';

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [leftRef.current, bottomRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 0.85s ease, transform 0.85s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 120 + i * 200);
    });
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-36 pb-20 relative overflow-hidden"
      style={{ background: '#111111' }}
    >
      <div
        className="absolute top-0 left-0 h-[3px] w-full"
        style={{ background: 'linear-gradient(90deg, #FF2D78 0%, transparent 55%)' }}
      />
      <div
        className="absolute bottom-0 right-0 font-display font-black uppercase pointer-events-none select-none leading-none"
        style={{
          fontSize: 'clamp(120px, 18vw, 220px)',
          color: 'rgba(255,255,255,0.022)',
          letterSpacing: '-0.03em',
          bottom: '-30px',
          right: '-20px',
        }}
      >
        SCALE
      </div>

      <div className="max-w-[1200px] mx-auto w-full">
        <div ref={leftRef} className="relative z-10 max-w-[800px]">
          <div className="inline-flex items-center gap-3 mb-10" style={{ color: '#FF2D78' }}>
            <span className="block w-5 h-0.5" style={{ background: '#FF2D78' }} />
            <span className="font-display font-bold text-[0.72rem] tracking-[0.28em] uppercase">
              Co-Founder Partnership Model
            </span>
          </div>

          <h1
            className="font-display font-black uppercase leading-none text-white"
            style={{
              fontSize: 'clamp(3.4rem, 7vw, 7.8rem)',
              letterSpacing: '-0.025em',
              lineHeight: '0.92',
            }}
          >
            You bring the{' '}
            <span style={{ color: '#FF2D78' }}>product.</span>
            <br />
            We build the{' '}
            <span
              className="font-serif-italic"
              style={{ fontSize: '0.9em', textTransform: 'none', letterSpacing: 0, color: '#fff' }}
            >
              business.
            </span>
          </h1>

          <p
            className="mt-8 text-[1.06rem] leading-[1.75] max-w-[580px]"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            We partner with founders who already have proven demand and take over branding, marketing, e-commerce, operations, and the full execution required to scale.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <span className="block w-4 h-px flex-shrink-0" style={{ background: '#FF2D78' }} />
            <p className="text-[0.83rem] tracking-[0.04em]" style={{ color: '#FF2D78', fontStyle: 'italic' }}>
              A true co-founder model designed to turn early traction into real scale.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-5 flex-wrap">
            <a
              href="#apply"
              className="font-display font-bold text-[0.88rem] tracking-[0.16em] uppercase text-white px-10 py-[19px] no-underline transition-all duration-200 inline-flex items-center gap-3"
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
              Apply to work with us
              <span style={{ fontSize: '0.75rem', opacity: 0.75 }}>→</span>
            </a>
            <a
              href="#how"
              className="font-display font-semibold text-[0.88rem] tracking-[0.16em] uppercase no-underline transition-all duration-200 inline-flex items-center gap-2"
              style={{ color: 'rgba(255,255,255,0.65)', borderBottom: '1.5px solid rgba(255,255,255,0.25)', paddingBottom: '2px' }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderBottomColor = '#FF2D78';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
                e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.25)';
              }}
            >
              See how it works
            </a>
          </div>
        </div>

        <div ref={bottomRef} className="relative z-10 mt-20 pt-8 border-t" style={{ borderTopColor: 'rgba(255,255,255,0.1)' }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {[
              { label: 'Upfront cost to you', value: '$0' },
              { label: 'Founder ownership', value: '25–40%' },
              { label: 'We fund & execute', value: '100%' },
              { label: 'Revenue-driven model', value: 'Aligned' },
            ].map(s => (
              <div key={s.label} className="px-7 py-6" style={{ background: '#111' }}>
                <div
                  className="font-display font-black leading-none"
                  style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', color: '#FF2D78', letterSpacing: '-0.02em' }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[0.67rem] tracking-[0.12em] uppercase mt-1.5"
                  style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
