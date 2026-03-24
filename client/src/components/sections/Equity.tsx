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

        {/* Stakeholder cards */}
        <div className="flex flex-col gap-4">
          {stakeholders.map((s) => (
            <div
              key={s.label}
              className="flex items-start gap-5 px-7 py-6"
              style={{ background: 'rgba(255,255,255,0.04)', borderLeft: `3px solid ${s.colour}` }}
            >
              <div className="flex-shrink-0 pt-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: s.colour }} />
              </div>
              <div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span
                    className="font-display font-black uppercase text-[1.25rem] text-white"
                    style={{ letterSpacing: '0.03em' }}
                  >
                    {s.label}
                  </span>
                  <span
                    className="font-display font-semibold text-[0.72rem] tracking-[0.18em] uppercase"
                    style={{ color: s.colour }}
                  >
                    {s.role}
                  </span>
                </div>
                <p className="mt-2 text-[0.9rem] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {s.description}
                </p>
              </div>
            </div>
          ))}
          <p className="mt-4 font-display text-[0.72rem] tracking-[0.18em] uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
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
