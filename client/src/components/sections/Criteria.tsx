// CoFounder Kollective — Criteria Section
// Cream background, 3-column card grid, Women-Founded highlighted in pink

import { useReveal } from '../../hooks/useReveal';

const criteria = [
  { icon: '◎', title: 'Proven Demand', body: 'You\'ve already sold. People have paid real money for your product. You have reviews, repeat customers, or clear evidence the market wants what you\'re making.', highlight: false },
  { icon: '⬡', title: 'Scalable Product', body: 'Your product can be manufactured, fulfilled, and sold at volume. It\'s not a one-off or bespoke service — it\'s something that can grow.', highlight: false },
  { icon: '▲', title: 'Clear Category', body: 'You operate in a defined ecommerce category — beauty, wellness, food, lifestyle, homewares, fashion accessories, or similar. We need a clear market to build into.', highlight: false },
  { icon: '✦', title: 'Founder Commitment', body: 'You\'re in this. You\'re not looking for someone to take over — you want a partner to build alongside. You\'re ready to move fast and make decisions.', highlight: false },
  { icon: '◈', title: 'Women-Founded', body: 'We actively prioritise applications from women-founded businesses. It\'s not a requirement, but it\'s where our hearts are. We know what it takes to build as a woman in this space.', highlight: true },
  { icon: '◇', title: 'Growth-Ready', body: 'You\'ve hit a ceiling on your own. Whether it\'s capital, expertise, or time — you know you need more than you currently have to reach the next level.', highlight: false },
];

export default function Criteria() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-16 py-28 transition-all duration-700"
      style={{
        background: '#fafaf8',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <div className="section-label">Who We Work With</div>
            <h2
              className="font-display font-black uppercase leading-none text-[#111]"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
            >
              Are You{' '}
              <span style={{ color: '#FF2D78' }}>The Right</span>
              <br />
              Fit?
            </h2>
          </div>
          <p className="text-[1.02rem] leading-[1.8]" style={{ color: '#666' }}>
            We don't work with everyone. We're selective because we go deep — and going deep means we can only take on a small number of partners at a time. Here's what we look for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3px]">
          {criteria.map((c) => (
            <div
              key={c.title}
              className="px-8 py-9 transition-all duration-200"
              style={{
                background: c.highlight ? '#FF2D78' : '#fff',
                border: c.highlight ? 'none' : '1px solid #e8e8e8',
              }}
              onMouseEnter={e => { if (!c.highlight) { e.currentTarget.style.background = '#ffe0ec'; e.currentTarget.style.borderColor = '#FF2D78'; } }}
              onMouseLeave={e => { if (!c.highlight) { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e8e8e8'; } }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center text-sm mb-6"
                style={{
                  background: c.highlight ? 'rgba(255,255,255,0.25)' : '#FF2D78',
                  color: '#fff',
                }}
              >
                {c.icon}
              </div>
              <h3
                className="font-display font-bold text-[1.2rem] uppercase tracking-[0.03em] mb-3"
                style={{ color: c.highlight ? '#fff' : '#111' }}
              >
                {c.title}
              </h3>
              <p
                className="text-[0.87rem] leading-[1.75]"
                style={{ color: c.highlight ? 'rgba(255,255,255,0.85)' : '#666' }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
