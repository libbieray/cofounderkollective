// CoFounder Kollective — CTA Section (Section 9) replaces old Criteria

import { useReveal } from '../../hooks/useReveal';

export default function Criteria() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-16 py-24 transition-all duration-700 relative overflow-hidden"
      style={{
        background: '#FF2D78',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      {/* Ghost text bg */}
      <div
        className="absolute bottom-0 right-0 font-display font-black uppercase pointer-events-none select-none leading-none"
        style={{
          fontSize: 'clamp(80px, 14vw, 160px)',
          color: 'rgba(255,255,255,0.08)',
          letterSpacing: '-0.03em',
          bottom: '-20px',
          right: '-10px',
        }}
      >
        APPLY
      </div>

      <div className="max-w-[900px] mx-auto relative z-10">
        <div
          className="inline-flex items-center gap-3 mb-8"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          <span className="block w-5 h-0.5" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <span className="font-display font-bold text-[0.72rem] tracking-[0.28em] uppercase">
            Ready to Scale?
          </span>
        </div>

        <h2
          className="font-display font-black uppercase leading-none text-white"
          style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', letterSpacing: '-0.025em', lineHeight: '0.92' }}
        >
          Have a product that's{' '}
          <span
            className="font-serif-italic"
            style={{ fontSize: '0.9em', textTransform: 'none', letterSpacing: 0 }}
          >
            already working?
          </span>
        </h2>

        <p className="mt-7 text-[1.08rem] leading-[1.75] max-w-[520px]" style={{ color: 'rgba(255,255,255,0.85)' }}>
          If you've validated demand and are ready to scale, apply to partner with us.
        </p>

        <div className="mt-10">
          <a
            href="#apply"
            className="inline-flex items-center gap-3 font-display font-bold text-[0.9rem] tracking-[0.16em] uppercase no-underline px-10 py-[19px] transition-all duration-200"
            style={{ background: '#111', color: '#fff' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#000';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#111';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Apply to partner with us
            <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
