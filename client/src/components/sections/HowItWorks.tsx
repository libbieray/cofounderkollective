// CoFounder Kollective — How It Works Section
// White background, 4-column step grid with pink top-border hover

import { useReveal } from '../../hooks/useReveal';

const steps = [
  { num: '01', icon: '✦', title: 'You Apply', body: 'Tell us about your product, your proof of demand, and your vision. We read every application personally.' },
  { num: '02', icon: '◎', title: 'We Review', body: 'We assess fit across product, market size, scale potential, and founding team. If we see it, we reach out within two weeks.' },
  { num: '03', icon: '⬡', title: 'We Partner', body: 'We formalise the equity arrangement and build your tailored go-to-market roadmap. You bring the product. We build the brand.' },
  { num: '04', icon: '▲', title: 'We Scale', body: 'Strategy, ecommerce, advertising, AI systems, operations — we run full-stack alongside you until your brand reaches its ceiling. Then we push through it.' },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="how"
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 md:px-16 py-28 bg-white transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <div className="section-label">The Process</div>
            <h2
              className="font-display font-black uppercase leading-none text-[#111]"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
            >
              How It{' '}
              <span style={{ color: '#FF2D78' }}>Works</span>
            </h2>
          </div>
          <p className="text-[1.02rem] leading-[1.8]" style={{ color: '#666' }}>
            We run a selective intake process. We review applications, get on a call, and when we see the right fit we move fast. From application to active partnership in weeks, not months.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3px]">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative px-8 py-11 border-t-[3px] transition-all duration-200 group"
              style={{ background: '#fafaf8', borderTopColor: '#e8e8e8' }}
              onMouseEnter={e => { e.currentTarget.style.borderTopColor = '#FF2D78'; e.currentTarget.style.background = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderTopColor = '#e8e8e8'; e.currentTarget.style.background = '#fafaf8'; }}
            >
              {/* Ghost number */}
              <div
                className="absolute top-3 right-5 font-display font-black leading-none pointer-events-none select-none transition-opacity duration-200 group-hover:opacity-[0.15]"
                style={{ fontSize: '5rem', color: '#FF2D78', opacity: 0.07, letterSpacing: '-0.04em' }}
              >
                {s.num}
              </div>
              {/* Icon */}
              <div
                className="w-9 h-9 flex items-center justify-center text-white text-sm mb-6"
                style={{ background: '#FF2D78' }}
              >
                {s.icon}
              </div>
              <h3 className="font-display font-bold text-[1.4rem] uppercase tracking-[0.02em] text-[#111] mb-3">
                {s.title}
              </h3>
              <p className="text-[0.87rem] leading-[1.75]" style={{ color: '#666' }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
