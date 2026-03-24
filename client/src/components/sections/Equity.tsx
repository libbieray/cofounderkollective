// CoFounder Kollective — Equity Section
// Black background, stakeholder cards, pink tones

import { useReveal } from '../../hooks/useReveal';

const stakeholders = [
  {
    colour: '#FF2D78',
    label: 'You',
    role: 'Product Maker',
    description: 'Your product, your vision, your largest stake.',
  },
  {
    colour: '#ff6fa3',
    label: 'Gina',
    role: 'Marketing & Ecommerce',
    description: 'Brand identity, store build-out, and customer acquisition.',
  },
  {
    colour: '#ffb3cc',
    label: 'Libbie',
    role: 'AI & Operations',
    description: 'Automation, infrastructure, and operational systems.',
  },
  {
    colour: '#5a5a5a',
    label: 'Partner',
    role: 'Performance Advertising',
    description: 'Paid media strategy and ongoing ad management.',
  },
];

export default function Equity() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-16 py-28 transition-all duration-700"
      style={{
        background: '#111111',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start">

        {/* Stakeholder grid — matches Hero stats pattern */}
        <div>
          <div className="grid grid-cols-2 gap-[3px]">
            {stakeholders.map((s, i) => (
              <div
                key={s.label}
                className="p-7 transition-colors duration-200"
                style={{
                  background: i === 0 ? '#FF2D78' : '#1A1A1A',
                }}
                onMouseEnter={e => { if (i !== 0) e.currentTarget.style.background = '#2a2a2a'; }}
                onMouseLeave={e => { if (i !== 0) e.currentTarget.style.background = '#1A1A1A'; }}
              >
                <div
                  className="font-display font-black uppercase leading-none"
                  style={{
                    fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                    color: '#fff',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.label}
                </div>
                <div
                  className="text-[0.68rem] tracking-[0.14em] uppercase mt-2 font-semibold"
                  style={{ color: i === 0 ? 'rgba(255,255,255,0.9)' : s.colour }}
                >
                  {s.role}
                </div>
                <p
                  className="mt-4 text-[0.82rem] leading-[1.65]"
                  style={{ color: i === 0 ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.5)' }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[0.72rem] tracking-[0.12em] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Equity splits are negotiated individually with each founder.
          </p>
        </div>

        {/* Text */}
        <div>
          <div className="section-label">Equity Split</div>
          <h2
            className="font-display font-black uppercase leading-none text-white"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
          >
            A Real Stake In
            <br />
            <span className="font-serif-italic" style={{ color: '#FF2D78', fontSize: '0.85em', textTransform: 'none', letterSpacing: 0 }}>
              Each Other's Success.
            </span>
          </h2>
          <p className="mt-7 text-[1rem] leading-[1.85]" style={{ color: 'rgba(255,255,255,0.55)' }}>
            This isn't a service arrangement. No retainers, no monthly fees, no invoices. We take a meaningful equity stake in your business — which means our incentives are completely aligned with yours. We don't make money until your brand does.
          </p>
          <p className="mt-5 text-[1rem] leading-[1.85]" style={{ color: 'rgba(255,255,255,0.55)' }}>
            The structure brings the best specialists to the table: brand, ecommerce, AI operations, and performance advertising. Everyone motivated by the same outcome — a brand worth owning.
          </p>
          <div
            className="mt-9 px-8 py-7 border-l-[3px]"
            style={{ borderLeftColor: '#FF2D78', background: 'rgba(255,45,120,0.08)' }}
          >
            <h4 className="font-display font-bold text-[0.75rem] tracking-[0.2em] uppercase mb-3" style={{ color: '#FF2D78' }}>
              What We Contribute
            </h4>
            <p className="text-[0.88rem] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Time, strategy, ecommerce build-out, brand development, AI infrastructure, paid advertising management, and ongoing operational expertise. We work this business with you — not for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
