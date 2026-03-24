// CoFounder Kollective — Opportunity Section
// Cream background, two-column layout, numbered pitch points

import { useReveal } from '../../hooks/useReveal';

const points = [
  {
    num: '01',
    title: 'We Invest Alongside You',
    body: 'No upfront cost. We put in our time, expertise, and capital. We only win when you win — and that\'s exactly how we want it.',
  },
  {
    num: '02',
    title: 'We Build the Brand Machine',
    body: 'From ecommerce infrastructure to AI-powered operations to brand identity — we construct the full system that scales your product.',
  },
  {
    num: '03',
    title: 'You Stay at the Centre',
    body: 'You keep ownership of your business. You stay the expert on your product. We build and run everything around it.',
  },
];

export default function Opportunity() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className="px-6 md:px-16 py-28 border-t border-b border-[#e8e8e8] transition-all duration-700"
      style={{
        background: '#fafaf8',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
        {/* Left */}
        <div>
          <div className="section-label">The Opportunity</div>
          <h2
            className="font-display font-black uppercase leading-none text-[#111]"
            style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
          >
            This Isn't Funding.
            <br />
            <span className="font-serif-italic" style={{ color: '#FF2D78', fontSize: '0.85em', textTransform: 'none', letterSpacing: 0 }}>
              It's a full partnership.
            </span>
          </h2>
          <p className="mt-7 text-[1.02rem] leading-[1.85]" style={{ color: '#666' }}>
            Most great products die not because people don't want them — but because their makers run out of runway before they figure out how to sell at scale. The gap between a great product and a thriving brand is brutal, expensive, and complex.
          </p>
          <p className="mt-5 text-[1.02rem] leading-[1.85]" style={{ color: '#666' }}>
            We've already crossed that gap. We know what it takes. And we're looking for the right products to take the journey with.
          </p>
        </div>

        {/* Right: Points */}
        <div className="flex flex-col gap-[3px]">
          {points.map((p) => (
            <div
              key={p.num}
              className="flex gap-5 items-start px-7 py-6 bg-white border-l-[3px] transition-all duration-200 group"
              style={{ borderLeftColor: 'transparent' }}
              onMouseEnter={e => { e.currentTarget.style.borderLeftColor = '#FF2D78'; e.currentTarget.style.background = '#ffe0ec'; }}
              onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'transparent'; e.currentTarget.style.background = '#fff'; }}
            >
              <div
                className="font-display font-black leading-none flex-shrink-0 transition-opacity duration-200"
                style={{ fontSize: '2.4rem', color: '#FF2D78', opacity: 0.2, letterSpacing: '-0.02em' }}
                ref={el => {
                  if (!el) return;
                  const parent = el.closest('[data-pitch]') as HTMLElement | null;
                  if (parent) {
                    parent.addEventListener('mouseenter', () => { el.style.opacity = '1'; });
                    parent.addEventListener('mouseleave', () => { el.style.opacity = '0.2'; });
                  }
                }}
              >
                {p.num}
              </div>
              <div>
                <h4 className="font-display font-bold text-[1rem] tracking-[0.08em] uppercase text-[#111] mb-1.5">
                  {p.title}
                </h4>
                <p className="text-[0.87rem] leading-[1.75]" style={{ color: '#666' }}>
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
