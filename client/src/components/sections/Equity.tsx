// CoFounder Kollective — Equity Section
// Black background, donut chart, pink tones

import { useReveal } from '../../hooks/useReveal';

const legend = [
  { colour: '#FF2D78', label: 'You (Product Maker)', pct: '30%' },
  { colour: '#ff6fa3', label: 'Gina — Marketing & Ecommerce', pct: '~23%' },
  { colour: '#ffb3cc', label: 'Libbie — AI & Operations', pct: '~23%' },
  { colour: '#3a3a3a', label: 'Advertising Partner', pct: '~24%' },
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
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
        {/* Donut + legend */}
        <div className="flex flex-col sm:flex-row items-center gap-12 flex-wrap">
          <svg viewBox="0 0 200 200" className="w-52 h-52 flex-shrink-0">
            {/* 30% You */}
            <circle cx="100" cy="100" r="70" fill="none" stroke="#FF2D78" strokeWidth="30"
              strokeDasharray="131.95 307.88" strokeDashoffset="0" transform="rotate(-90 100 100)" />
            {/* ~23% Gina */}
            <circle cx="100" cy="100" r="70" fill="none" stroke="#ff6fa3" strokeWidth="30"
              strokeDasharray="102.4 337.43" strokeDashoffset="-131.95" transform="rotate(-90 100 100)" />
            {/* ~23% Libby */}
            <circle cx="100" cy="100" r="70" fill="none" stroke="#ffb3cc" strokeWidth="30"
              strokeDasharray="102.4 337.43" strokeDashoffset="-234.35" transform="rotate(-90 100 100)" />
            {/* ~24% Ads */}
            <circle cx="100" cy="100" r="70" fill="none" stroke="#3a3a3a" strokeWidth="30"
              strokeDasharray="103.45 336.38" strokeDashoffset="-336.75" transform="rotate(-90 100 100)" />
            <text x="100" y="95" textAnchor="middle" fontFamily="Barlow Condensed" fontSize="28" fontWeight="900" fill="#FF2D78">30%</text>
            <text x="100" y="114" textAnchor="middle" fontFamily="DM Sans" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="1">YOURS</text>
          </svg>
          <div className="flex flex-col gap-4">
            {legend.map((l) => (
              <div key={l.label} className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 flex-shrink-0" style={{ background: l.colour }} />
                <span className="text-[0.8rem]" style={{ color: 'rgba(255,255,255,0.55)' }}>{l.label}</span>
                <span className="font-display font-bold text-[1.05rem] text-white ml-auto pl-5">{l.pct}</span>
              </div>
            ))}
          </div>
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
