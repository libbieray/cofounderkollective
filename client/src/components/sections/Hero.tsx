// CoFounder Kollective — Hero Section
// Black background, massive condensed headline, hot pink accent, stat grid

import { useEffect, useRef } from 'react';

const stats = [
  { num: 'YOURS', label: 'Largest Stake. Always. Non-Negotiable.', pink: true },
  { num: '3', label: 'Pillars: Product · AI · Brand', pink: false },
  { num: '$0', label: 'Upfront Cost to You', pink: false },
  { num: '100%', label: 'Aligned. We Win When You Win.', pink: false },
];

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [leftRef.current, rightRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 150 + i * 200);
    });
  }, []);

  return (
    <section
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-20 px-6 md:px-16 pt-36 pb-24 relative overflow-hidden"
      style={{ background: '#111111' }}
    >
      {/* Background ghost text */}
      <div
        className="absolute bottom-0 left-0 font-display font-black uppercase pointer-events-none select-none whitespace-nowrap leading-none"
        style={{
          fontSize: 'clamp(100px, 16vw, 200px)',
          color: 'rgba(255,255,255,0.025)',
          letterSpacing: '-0.02em',
          bottom: '-20px',
        }}
      >
        SCALE
      </div>

      {/* Left: Headline */}
      <div ref={leftRef} className="relative z-10">
        <div
          className="flex items-center gap-3 mb-8"
          style={{ color: '#FF2D78' }}
        >
          <span className="block w-6 h-0.5" style={{ background: '#FF2D78' }} />
          <span className="font-display font-bold text-[0.78rem] tracking-[0.25em] uppercase">
            Women-Led · Brand Growth Partners
          </span>
        </div>

        <h1
          className="font-display font-black uppercase leading-none text-white"
          style={{
            fontSize: 'clamp(3.2rem, 6.5vw, 6.5rem)',
            letterSpacing: '-0.02em',
            lineHeight: '0.95',
          }}
        >
          You Built
          <br />
          <span
            className="font-serif-italic"
            style={{ fontSize: '1em', textTransform: 'none', letterSpacing: 0, color: '#FF2D78' }}
          >
            something
          </span>
          <br />
          <span style={{ color: '#FF2D78' }}>People Love.</span>
          <br />
          Now Let's Build
          <br />
          An Empire.
        </h1>

        <p className="mt-7 text-[1rem] leading-[1.8] max-w-[460px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
          You've proven demand. You have a product people want. What you're missing is the machine around it — the ecommerce strategy, the brand, the AI infrastructure, and the team who've done this before. That's us.
        </p>

        <div className="mt-11 flex items-center gap-5 flex-wrap">
          <a
            href="#apply"
            className="font-display font-bold text-[0.85rem] tracking-[0.15em] uppercase text-white px-9 py-[18px] no-underline transition-all duration-200"
            style={{ background: '#FF2D78' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#d91f60'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FF2D78'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Apply to Partner
          </a>
          <a
            href="#how"
            className="font-display font-semibold text-[0.85rem] tracking-[0.15em] uppercase no-underline pb-0.5 transition-all duration-200"
            style={{ color: 'rgba(255,255,255,0.6)', borderBottom: '2px solid rgba(255,255,255,0.2)' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderBottomColor = '#FF2D78'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.2)'; }}
          >
            See How It Works
          </a>
        </div>
      </div>

      {/* Right: Stats grid */}
      <div ref={rightRef} className="relative z-10">
        <div className="grid grid-cols-2 gap-[3px]">
          {stats.map((s) => (
            <div
              key={s.num}
              className="p-8 transition-colors duration-200"
              style={{
                background: s.pink ? '#FF2D78' : '#1A1A1A',
              }}
              onMouseEnter={e => { if (!s.pink) e.currentTarget.style.background = '#2a2a2a'; }}
              onMouseLeave={e => { if (!s.pink) e.currentTarget.style.background = '#1A1A1A'; }}
            >
              <div
                className="font-display font-black leading-none"
                style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', color: '#fff', letterSpacing: '-0.02em' }}
              >
                {s.num}
              </div>
              <div
                className="text-[0.7rem] tracking-[0.12em] uppercase mt-2 font-normal"
                style={{ color: s.pink ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.45)' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
