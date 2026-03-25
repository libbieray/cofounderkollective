// CoFounder Kollective — How We Invest + The Partnership (Sections 7 & 8)
// Sec7: BLACK — how we invest list
// Sec8: CREAM — partnership model, lighter feel before pink CTA

import { useReveal } from '../../hooks/useReveal';

const investPoints = [
  'We don\'t invest cash into founders',
  'We invest by funding and operating the business',
  'We cover the cost of growth, systems, and execution',
  'Our value is in building and scaling, not advising',
];

const partnershipPoints = [
  { label: 'Your ownership', value: '25–40%', note: 'You retain equity in the business' },
  { label: 'Your role', value: 'Product', note: 'You continue to run the product side' },
  { label: 'Our role', value: 'Execution', note: 'We run operations and growth' },
  { label: 'We fund', value: '100%', note: 'Everything required to scale' },
];

export default function Equity() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      {/* Section 7: How We Invest — BLACK */}
      <div className="px-6 md:px-16 py-24" style={{ background: '#111111' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="section-label">How We Invest</div>
            <h2
              className="font-display font-black uppercase leading-none text-white"
              style={{ fontSize: 'clamp(2.5rem, 4.2vw, 4.2rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
            >
              We invest in{' '}
              <span
                className="font-serif-italic"
                style={{ textTransform: 'none', letterSpacing: 0, color: '#FF2D78' }}
              >
                execution,
              </span>
              <br />not just ideas.
            </h2>
            <p className="mt-7 text-[1rem] leading-[1.85]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              No retainers, no monthly fees, no invoices. We put our resources directly into building the business.
            </p>
          </div>
          <div className="flex flex-col gap-[3px]">
            {investPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 px-7 py-5 transition-colors duration-200"
                style={{ background: '#1A1A1A' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#222'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1A1A1A'; }}
              >
                <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full flex-none" style={{ background: '#FF2D78', minWidth: '8px' }} />
                <span className="text-[0.95rem] leading-[1.65]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 8: The Partnership — CREAM */}
      <div className="px-6 md:px-16 py-24" style={{ background: '#fafaf8', borderTop: '1px solid #e8e8e8' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="section-label">The Partnership</div>
            <h2
              className="font-display font-black uppercase leading-none text-[#111]"
              style={{ fontSize: 'clamp(2.5rem, 4.2vw, 4.2rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
            >
              A real stake in{' '}
              <span
                className="font-serif-italic"
                style={{ textTransform: 'none', letterSpacing: 0, color: '#FF2D78' }}
              >
                each other's success.
              </span>
            </h2>
            <p className="mt-7 text-[1rem] leading-[1.85]" style={{ color: '#555' }}>
              Decisions are aligned and collaborative. We don't make money until your brand does. That's how it should be.
            </p>
            <div
              className="mt-8 px-7 py-6 border-l-[3px]"
              style={{ borderLeftColor: '#FF2D78', background: '#fff' }}
            >
              <p className="text-[0.9rem] leading-[1.7]" style={{ color: '#444' }}>
                We fund and execute everything required to scale — branding, marketing, operations, and infrastructure. You bring the product. We build the rest.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[3px]">
            {partnershipPoints.map((p, i) => (
              <div
                key={i}
                className="p-7 transition-colors duration-200"
                style={{ background: i === 0 ? '#FF2D78' : '#fff', border: i === 0 ? 'none' : '1px solid #e8e8e8' }}
                onMouseEnter={e => { if (i !== 0) e.currentTarget.style.background = '#fff8fb'; }}
                onMouseLeave={e => { if (i !== 0) e.currentTarget.style.background = '#fff'; }}
              >
                <div
                  className="font-display font-black leading-none"
                  style={{
                    fontSize: 'clamp(1.8rem, 2.6vw, 2.4rem)',
                    color: i === 0 ? '#fff' : '#111',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {p.value}
                </div>
                <div
                  className="text-[0.65rem] tracking-[0.14em] uppercase mt-1.5 font-bold"
                  style={{ color: i === 0 ? 'rgba(255,255,255,0.9)' : '#FF2D78' }}
                >
                  {p.label}
                </div>
                <p
                  className="mt-3 text-[0.8rem] leading-[1.6]"
                  style={{ color: i === 0 ? 'rgba(255,255,255,0.85)' : '#666' }}
                >
                  {p.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
